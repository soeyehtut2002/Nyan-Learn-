import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../../i18n/LanguageContext';
import { useProgress } from '../../../context/ProgressContext';
import { audioService } from '../../../services/audio/AudioService';
import {
  OpenRouterService,
  ChatMessage
} from '../../../services/ai/openRouterService';
import { getOfflineFallbackAnswer } from '../../../services/ai/aiTutorKnowledge';
import { ChatMessageItem } from './ChatMessageItem';
import { ChatSettingsModal } from './ChatSettingsModal';

interface FloatingAIChatProps {
  onOpenFullTutor?: () => void;
  currentPage?: string;
}

const STORAGE_FLOATING_HISTORY = 'nyan_learn_floating_chat_history';

export const FloatingAIChat: React.FC<FloatingAIChatProps> = ({
  onOpenFullTutor,
  currentPage
}) => {
  const { lang } = useTranslation();
  const { award } = useProgress();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Hide floating widget if user is already on the dedicated tutor page
  const isAlreadyOnTutorPage = currentPage === 'tutor';

  useEffect(() => {
    setHasApiKey(OpenRouterService.hasApiKey());

    try {
      const saved = localStorage.getItem(STORAGE_FLOATING_HISTORY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      }
    } catch {
      // ignore
    }

    const greeting: ChatMessage = {
      id: 'floating-init',
      role: 'assistant',
      content: lang === 'my'
        ? 'ဟိုင်း! 🐱 အကူအညီလိုရင် အချိန်မရွေး မေးလို့ရပါတယ်နော်!'
        : "Hi! 🐱 I'm your quick coding buddy. Stuck on a maze level or coding question? Ask away!",
      timestamp: Date.now()
    };
    setMessages([greeting]);
  }, [lang]);

  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_FLOATING_HISTORY, JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setUnreadCount(0);
    }
  }, [isOpen, messages, streamingContent]);

  const toggleOpen = () => {
    audioService.play('step');
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasApiKey(OpenRouterService.hasApiKey());
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const prompt = (textToSend || inputText).trim();
    if (!prompt || isLoading) return;

    audioService.play('step');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: Date.now()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);
    setStreamingContent('');

    try {
      award(5, null);
    } catch {
      // ignore
    }

    if (OpenRouterService.hasApiKey()) {
      abortControllerRef.current = new AbortController();
      let streamedAccumulator = '';

      try {
        await OpenRouterService.streamChat({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          onChunk: (chunk) => {
            streamedAccumulator += chunk;
            setStreamingContent(streamedAccumulator);
          },
          signal: abortControllerRef.current.signal,
          language: lang as 'en' | 'my'
        });

        audioService.play('correct');

        const botMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: streamedAccumulator || 'Done!',
          timestamp: Date.now()
        };
        setMessages([...newMessages, botMessage]);
      } catch (err: unknown) {
        if ((err as Error).name !== 'AbortError') {
          audioService.play('wrong');
          const botMessage: ChatMessage = {
            id: `err-${Date.now()}`,
            role: 'assistant',
            content: `⚠️ ${(err as Error).message}`,
            timestamp: Date.now()
          };
          setMessages([...newMessages, botMessage]);
        }
      } finally {
        setIsLoading(false);
        setStreamingContent('');
        abortControllerRef.current = null;
      }
    } else {
      setTimeout(() => {
        const reply = getOfflineFallbackAnswer(prompt, lang as 'en' | 'my');
        audioService.play('star');
        const botMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: reply,
          timestamp: Date.now()
        };
        setMessages([...newMessages, botMessage]);
        setIsLoading(false);
      }, 400);
    }
  };

  if (isAlreadyOnTutorPage) {
    return null;
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="floating-chat-anchor">
        {!isOpen && (
          <button
            type="button"
            className="floating-chat-trigger"
            onClick={toggleOpen}
            aria-label="Open AI Assistant"
            title="Chat with Nyan Bot AI Tutor"
          >
            <span className="floating-trigger-avatar">🐱</span>
            <span className="floating-trigger-text">
              {lang === 'my' ? 'AI အကူအညီ' : 'Ask AI'}
            </span>
            <span className={`floating-status-dot ${hasApiKey ? 'online' : 'demo'}`} />
            {unreadCount > 0 && (
              <span className="floating-unread-badge">{unreadCount}</span>
            )}
          </button>
        )}

        {/* Floating Chat Drawer Window */}
        {isOpen && (
          <div className="floating-chat-window" role="dialog" aria-label="Nyan Bot Chat">
            <div className="floating-chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>🐱</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Nyan Bot</span>
                    <span className={`status-dot ${hasApiKey ? 'online' : 'demo'}`} />
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--ink-secondary)' }}>
                    {hasApiKey ? 'OpenRouter Live' : 'Demo Mode'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {onOpenFullTutor && (
                  <button
                    type="button"
                    className="floating-header-btn"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenFullTutor();
                    }}
                    title="Open full page AI Tutor"
                  >
                    ⛶
                  </button>
                )}
                <button
                  type="button"
                  className="floating-header-btn"
                  onClick={() => setIsSettingsOpen(true)}
                  title="Settings"
                >
                  ⚙️
                </button>
                <button
                  type="button"
                  className="floating-header-btn"
                  onClick={toggleOpen}
                  title="Minimize"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="floating-messages-area">
              {messages.map(msg => (
                <ChatMessageItem key={msg.id} message={msg} />
              ))}
              {isLoading && (
                <ChatMessageItem
                  message={{
                    id: 'float-stream',
                    role: 'assistant',
                    content: streamingContent || (lang === 'my' ? 'စဉ်းစားနေပါသည်... 🐱💭' : 'Thinking... 🐱💭'),
                    timestamp: Date.now()
                  }}
                  isStreaming={true}
                />
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Helper Chips for active screen */}
            <div className="floating-quick-chips">
              <button
                type="button"
                className="floating-chip"
                onClick={() => handleSendMessage(lang === 'my' ? 'ဒီ Level အတွက် အကြံပေးပါ' : 'Give me a hint for this level!')}
              >
                💡 {lang === 'my' ? 'အကြံပေးပါ' : 'Give hint'}
              </button>
              <button
                type="button"
                className="floating-chip"
                onClick={() => handleSendMessage(lang === 'my' ? 'Loop ဆိုတာ ဘာလဲ?' : 'What is a loop?')}
              >
                🔁 Loops
              </button>
              <button
                type="button"
                className="floating-chip"
                onClick={() => handleSendMessage(lang === 'my' ? 'Coding ဟာသ ပြောပြပါ' : 'Tell me a joke')}
              >
                😄 {lang === 'my' ? 'ဟာသ' : 'Joke'}
              </button>
            </div>

            <div className="floating-input-bar">
              <input
                type="text"
                className="floating-input"
                placeholder={lang === 'my' ? 'မေးခွန်းရိုက်ပါ...' : 'Ask Nyan Bot...'}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <button
                type="button"
                className="floating-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isLoading}
              >
                🚀
              </button>
            </div>
          </div>
        )}
      </div>

      <ChatSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={lang as 'en' | 'my'}
        onSettingsSaved={() => setHasApiKey(OpenRouterService.hasApiKey())}
      />
    </>
  );
};
