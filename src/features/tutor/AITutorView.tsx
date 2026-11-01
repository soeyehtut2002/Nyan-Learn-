import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { useProgress } from '../../context/ProgressContext';
import { audioService } from '../../services/audio/AudioService';
import {
  OpenRouterService,
  ChatMessage,
  OPENROUTER_MODELS
} from '../../services/ai/openRouterService';
import {
  PROMPT_STARTERS,
  PromptStarter,
  getOfflineFallbackAnswer
} from '../../services/ai/aiTutorKnowledge';
import { ChatMessageItem } from './components/ChatMessageItem';
import { ChatSettingsModal } from './components/ChatSettingsModal';

const STORAGE_CHAT_KEY = 'nyan_learn_chat_history';

export const AITutorView: React.FC = () => {
  const { lang } = useTranslation();
  const { award } = useProgress();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hasApiKey, setHasApiKey] = useState(false);
  const [activeModelName, setActiveModelName] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Initialize and check key & load chat history
  useEffect(() => {
    checkKeyAndModel();

    try {
      const saved = localStorage.getItem(STORAGE_CHAT_KEY);
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

    // Default welcoming message
    const initialGreeting: ChatMessage = {
      id: 'welcome-msg',
      role: 'assistant',
      content: lang === 'my'
        ? `မင်္ဂလာပါ! 🐱 ငါကတော့ Nyan Learn ရဲ့ AI သင်ယူမှုအဖော်မွန် **Nyan Bot (ဉာဏ်ဘော့)** ဖြစ်ပါတယ်။\n\nCoding၊ Algorithm၊ Loop၊ AI နည်းပညာ၊ ဆိုက်ဘာလုံခြုံရေး သို့မဟုတ် Robot Maze စွန့်စားခန်းတွေနဲ့ ပတ်သက်ပြီး ကြိုက်ရာ မေးမြန်းနိုင်ပါတယ်!\n\n💡 *အကြံပြုချက်: OpenRouter API ချိတ်ဆက်ထားရင် ပိုမိုစွမ်းဆောင်ရည်မြင့်မားတဲ့ AI အဖြေတွေကို ချက်ချင်း ရရှိနိုင်ပါတယ်!*`
        : `Hello there! 🐱 I'm **Nyan Bot**, your friendly AI coding companion and tutor in Nyan Learn!\n\nYou can ask me anything about algorithms, loops, Python/JavaScript, AI literacy, online safety, or getting hints for the Robot Maze!\n\n💡 *Tip: Connect your free OpenRouter API Key in ⚙️ Settings to experience full real-time streaming intelligence!*`,
      timestamp: Date.now()
    };
    setMessages([initialGreeting]);
  }, [lang]);

  // Persist messages to LocalStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_CHAT_KEY, JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  const checkKeyAndModel = () => {
    const hasKey = OpenRouterService.hasApiKey();
    setHasApiKey(hasKey);

    const modelId = OpenRouterService.getModel();
    const found = OPENROUTER_MODELS.find(m => m.id === modelId);
    setActiveModelName(found ? found.name : modelId.split('/')[1] || modelId);
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

    // Award XP on user questions
    try {
      award(5, null);
    } catch {
      // ignore
    }

    // Check if OpenRouter API Key is available
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
          content: streamedAccumulator || (lang === 'my' ? 'အဖြေ ပေးပို့မှု ပြီးဆုံးပါပြီ။' : 'Response complete.'),
          timestamp: Date.now()
        };
        setMessages([...newMessages, botMessage]);
      } catch (err: unknown) {
        if ((err as Error).name === 'AbortError') {
          // User cancelled
          if (streamedAccumulator) {
            const botMessage: ChatMessage = {
              id: `bot-${Date.now()}`,
              role: 'assistant',
              content: streamedAccumulator + '\n\n*(Generation stopped by user)*',
              timestamp: Date.now()
            };
            setMessages([...newMessages, botMessage]);
          }
        } else {
          audioService.play('wrong');
          const errorMsg = (err as Error).message || 'Failed to connect to OpenRouter API';
          const errorNotice: ChatMessage = {
            id: `err-${Date.now()}`,
            role: 'assistant',
            content: `⚠️ **OpenRouter API Error:**\n\n${errorMsg}\n\n💡 *Tap ⚙️ Settings at the top to check your API key, or switch to a free model like Gemini 2.0 Flash Lite:free.*`,
            timestamp: Date.now()
          };
          setMessages([...newMessages, errorNotice]);
        }
      } finally {
        setIsLoading(false);
        setStreamingContent('');
        abortControllerRef.current = null;
      }
    } else {
      // Local Smart Fallback Mode (No API key required!)
      setTimeout(() => {
        const fallbackText = getOfflineFallbackAnswer(prompt, lang as 'en' | 'my');
        audioService.play('star');
        const botMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: fallbackText,
          timestamp: Date.now()
        };
        setMessages([...newMessages, botMessage]);
        setIsLoading(false);
      }, 500);
    }
  };

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      audioService.play('click');
    }
  };

  const handleClearChat = () => {
    if (window.confirm(lang === 'my' ? 'စကားပြောမှတ်တမ်းအားလုံးကို ရှင်းလင်းမည်လား?' : 'Clear all chat messages?')) {
      audioService.play('click');
      const resetGreeting: ChatMessage = {
        id: `greeting-${Date.now()}`,
        role: 'assistant',
        content: lang === 'my'
          ? 'မှတ်တမ်းများ ရှင်းလင်းပြီးပါပြီ! 🐱 Coding သို့မဟုတ် AI အကြောင်း ဘာတွေ မေးမြန်းချင်ပါသလဲ?'
          : 'Chat history cleared! 🐱 What would you like to explore today?',
        timestamp: Date.now()
      };
      setMessages([resetGreeting]);
      localStorage.removeItem(STORAGE_CHAT_KEY);
    }
  };

  const handlePromptStarterClick = (starter: PromptStarter) => {
    const text = lang === 'my' ? starter.promptMy : starter.promptEn;
    handleSendMessage(text);
  };

  const filteredStarters = activeCategory === 'all'
    ? PROMPT_STARTERS
    : PROMPT_STARTERS.filter(s => s.category === activeCategory);

  return (
    <div className="section-container ai-tutor-container">
      <div className="card chat-card-wrapper" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Chat Header */}
        <header className="chat-main-header">
          <div className="chat-header-identity">
            <div className="chat-bot-avatar-badge">
              <span className="bot-emoji">🐱</span>
              <span className={`status-dot ${hasApiKey ? 'online' : 'demo'}`} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>
                  Nyan Bot (ဉာဏ်ဘော့)
                </h2>
                <span className={`chat-model-tag ${hasApiKey ? 'tag-live' : 'tag-demo'}`}>
                  {hasApiKey ? `⚡ ${activeModelName}` : '🛡️ Smart Demo Mode'}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
                {hasApiKey
                  ? (lang === 'my' ? 'OpenRouter API ဖြင့် ချိတ်ဆက်ထားသည်' : 'Connected via OpenRouter API')
                  : (lang === 'my' ? 'အခမဲ့ Demo စနစ် (OpenRouter Key ထည့်သွင်းနိုင်သည်)' : 'Demo Mode (Add your OpenRouter key for live AI)')}
              </p>
            </div>
          </div>

          <div className="chat-header-actions">
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={handleClearChat}
              title="Clear chat history"
              style={{ padding: '6px 12px', fontSize: '13px' }}
            >
              🧹 {lang === 'my' ? 'ရှင်းမည်' : 'Clear'}
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                audioService.play('step');
                setIsSettingsOpen(true);
              }}
              title="OpenRouter Settings"
              style={{ padding: '6px 14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>⚙️</span>
              <span>{hasApiKey ? (lang === 'my' ? 'ဆက်တင်' : 'Settings') : (lang === 'my' ? 'Key ထည့်မည်' : 'Add API Key')}</span>
            </button>
          </div>
        </header>

        {/* Info Banner when no API Key is set */}
        {!hasApiKey && (
          <div className="chat-banner-notice">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>✨</span>
              <div style={{ fontSize: '13px' }}>
                <strong>
                  {lang === 'my' ? 'OpenRouter API ချိတ်ဆက်ပြီး Live AI အသုံးပြုပါ!' : 'Connect OpenRouter API for Unlimited Live AI!'}
                </strong>
                <span style={{ marginLeft: '6px', opacity: 0.9 }}>
                  {lang === 'my'
                    ? 'Gemini 2.0, Llama 3.3, DeepSeek စသည့် Free Model များ အသုံးပြုရန် ညာဘက်ရှိ "Key ထည့်မည်" ကို နှိပ်ပါ။'
                    : 'Get real-time streaming answers from Gemini 2.0, Llama 3.3 & DeepSeek. Free keys available!'}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setIsSettingsOpen(true)}
              style={{ fontSize: '12px', padding: '4px 10px', whiteSpace: 'nowrap' }}
            >
              🔑 {lang === 'my' ? 'Key ထည့်သွင်းရန်' : 'Enter Key'}
            </button>
          </div>
        )}

        {/* Prompt Starter Chips Bar */}
        <div className="chat-starters-section">
          <div className="starters-category-tabs">
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--ink-secondary)', marginRight: '6px' }}>
              💡 {lang === 'my' ? 'အမြန်မေးခွန်းများ:' : 'Suggested Ideas:'}
            </span>
            {[
              { id: 'all', label: lang === 'my' ? 'အားလုံး' : 'All' },
              { id: 'basics', label: 'Algorithms 📋' },
              { id: 'loops', label: 'Loops 🔁' },
              { id: 'ai', label: 'AI & ML 🤖' },
              { id: 'safety', label: 'Safety 🛡️' },
              { id: 'fun', label: 'Fun 😄' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`starter-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  audioService.play('step');
                  setActiveCategory(cat.id);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="starters-scroll-row">
            {filteredStarters.map(starter => (
              <button
                key={starter.id}
                type="button"
                className="starter-chip"
                onClick={() => handlePromptStarterClick(starter)}
                disabled={isLoading}
              >
                <span className="starter-chip-icon">{starter.icon}</span>
                <span className="starter-chip-text">
                  {lang === 'my' ? starter.labelMy : starter.labelEn}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages List */}
        <div className="chat-messages-container" role="log" aria-live="polite">
          {messages.map(msg => (
            <ChatMessageItem key={msg.id} message={msg} />
          ))}

          {/* Active Streaming Message Preview */}
          {isLoading && (
            <ChatMessageItem
              message={{
                id: 'streaming-preview',
                role: 'assistant',
                content: streamingContent || (lang === 'my' ? 'စဉ်းစားနေပါသည်... 🐱💭' : 'Thinking... 🐱💭'),
                timestamp: Date.now()
              }}
              isStreaming={true}
            />
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <footer className="chat-input-bar">
          {isLoading && (
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
              <button
                type="button"
                className="btn btn-outline btn-sm stop-btn"
                onClick={handleStopGeneration}
                style={{ borderRadius: '999px', padding: '4px 14px', fontSize: '12px' }}
              >
                ⏹️ {lang === 'my' ? 'အဖြေရပ်မည်' : 'Stop generating'}
              </button>
            </div>
          )}

          <div className="chat-input-row">
            <textarea
              className="chat-textarea"
              rows={1}
              placeholder={
                lang === 'my'
                  ? 'Coding၊ AI၊ Maze အကြောင်း မေးမြန်းပါ... (Enter နှိပ်၍ ပို့ပါ)'
                  : 'Ask Nyan Bot anything about coding, algorithms or AI... (Enter to send)'
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
            />

            <button
              type="button"
              className="chat-send-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim() || isLoading}
              aria-label="Send message"
              title="Send message"
            >
              {isLoading ? '⏳' : '🚀'}
            </button>
          </div>

          <div className="chat-input-footer-note">
            <span>🛡️ 100% Kid-Safe & Privacy Protected</span>
            <span>•</span>
            <span>Powered by OpenRouter API</span>
          </div>
        </footer>
      </div>

      {/* Settings Modal */}
      <ChatSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={lang as 'en' | 'my'}
        onSettingsSaved={checkKeyAndModel}
      />
    </div>
  );
};
