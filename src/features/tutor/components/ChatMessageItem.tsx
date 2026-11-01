import React, { useState } from 'react';
import { ChatMessage } from '../../../services/ai/openRouterService';
import { audioService } from '../../../services/audio/AudioService';

interface ChatMessageItemProps {
  message: ChatMessage;
  isStreaming?: boolean;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message, isStreaming }) => {
  const [copiedEntire, setCopiedEntire] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  const isBot = message.role === 'assistant';

  const handleCopyEntire = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      audioService.play('click');
      setCopiedEntire(true);
      setTimeout(() => setCopiedEntire(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleCopyCode = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      audioService.play('click');
      setCopiedCodeIdx(idx);
      setTimeout(() => setCopiedCodeIdx(null), 2000);
    } catch {
      // ignore
    }
  };

  // Safe lightweight parser for Markdown-like syntax
  const renderFormattedContent = (text: string) => {
    // Split by code blocks: ```lang ... ```
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let codeIndex = 0;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(renderTextSegment(text.substring(lastIndex, match.index), `txt-${lastIndex}`));
      }

      const lang = match[1] || 'code';
      const code = match[2].trim();
      const currentIdx = codeIndex++;

      parts.push(
        <div key={`code-${match.index}`} className="chat-code-block">
          <div className="chat-code-header">
            <span className="chat-code-lang">{lang.toUpperCase()}</span>
            <button
              type="button"
              className="chat-code-copy-btn"
              onClick={() => handleCopyCode(code, currentIdx)}
              title="Copy code"
            >
              {copiedCodeIdx === currentIdx ? '✓ Copied' : '📋 Copy'}
            </button>
          </div>
          <pre className="chat-code-pre">
            <code>{code}</code>
          </pre>
        </div>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(renderTextSegment(text.substring(lastIndex), `txt-${lastIndex}`));
    }

    return parts;
  };

  const renderTextSegment = (rawText: string, keyPrefix: string) => {
    const lines = rawText.split('\n');
    return (
      <div key={keyPrefix} className="chat-text-segment">
        {lines.map((line, lIdx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={`empty-${lIdx}`} className="chat-spacer" />;
          }

          // Bullet list items
          if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            return (
              <div key={`bullet-${lIdx}`} className="chat-list-item bullet">
                <span className="chat-bullet-dot">•</span>
                <span className="chat-list-text">{renderInlineStyles(trimmed.slice(2))}</span>
              </div>
            );
          }

          // Numbered list items
          const numMatch = trimmed.match(/^(\d+)[.)]\s+(.+)/);
          if (numMatch) {
            return (
              <div key={`num-${lIdx}`} className="chat-list-item numbered">
                <span className="chat-num-badge">{numMatch[1]}.</span>
                <span className="chat-list-text">{renderInlineStyles(numMatch[2])}</span>
              </div>
            );
          }

          return (
            <p key={`p-${lIdx}`} className="chat-paragraph">
              {renderInlineStyles(line)}
            </p>
          );
        })}
      </div>
    );
  };

  const renderInlineStyles = (line: string): React.ReactNode => {
    // Process markdown link: [text](url)
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    // Process inline code: `code`
    // Process bold: **bold**
    // Process italic: *italic*

    const tokens: React.ReactNode[] = [];
    let cur = line;
    let key = 0;

    // First replace links
    const linkParts = cur.split(linkRegex);
    if (linkParts.length > 1) {
      for (let i = 0; i < linkParts.length; i += 3) {
        if (linkParts[i]) {
          tokens.push(...formatInlineFormatting(linkParts[i], `l-${key++}`));
        }
        if (i + 2 < linkParts.length) {
          const text = linkParts[i + 1];
          const url = linkParts[i + 2];
          tokens.push(
            <a
              key={`a-${key++}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-link"
            >
              {text} ↗
            </a>
          );
        }
      }
      return tokens;
    }

    return formatInlineFormatting(line, `inline-${key}`);
  };

  const formatInlineFormatting = (text: string, prefix: string): React.ReactNode[] => {
    // Splits by inline code `...`
    const codeSplit = text.split(/`([^`]+)`/g);
    const result: React.ReactNode[] = [];

    codeSplit.forEach((sub, sIdx) => {
      if (sIdx % 2 === 1) {
        result.push(
          <code key={`${prefix}-code-${sIdx}`} className="chat-inline-code">
            {sub}
          </code>
        );
      } else {
        // Handle bold **text**
        const boldSplit = sub.split(/\*\*([^*]+)\*\*/g);
        boldSplit.forEach((bSub, bIdx) => {
          if (bIdx % 2 === 1) {
            result.push(
              <strong key={`${prefix}-b-${sIdx}-${bIdx}`} className="chat-strong">
                {bSub}
              </strong>
            );
          } else {
            // Handle italic *text*
            const italicSplit = bSub.split(/\*([^*]+)\*/g);
            italicSplit.forEach((iSub, iIdx) => {
              if (iIdx % 2 === 1) {
                result.push(
                  <em key={`${prefix}-i-${sIdx}-${bIdx}-${iIdx}`}>
                    {iSub}
                  </em>
                );
              } else if (iSub) {
                result.push(iSub);
              }
            });
          }
        });
      }
    });

    return result;
  };

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`chat-message-row ${isBot ? 'bot-row' : 'user-row'}`}>
      <div className="chat-avatar" aria-label={isBot ? 'Nyan Bot' : 'Student'}>
        {isBot ? '🐱' : '🧑‍🚀'}
      </div>

      <div className="chat-bubble-container">
        <div className="chat-bubble-header">
          <span className="chat-sender-name">
            {isBot ? 'Nyan Bot (ဉာဏ်ဘော့)' : 'You'}
          </span>
          <span className="chat-timestamp">{formatTime(message.timestamp)}</span>
        </div>

        <div className={`chat-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
          {renderFormattedContent(message.content)}
          {isStreaming && (
            <span className="chat-streaming-cursor" aria-label="Typing...">
              ▍
            </span>
          )}
        </div>

        {isBot && !isStreaming && message.content && (
          <div className="chat-bubble-actions">
            <button
              type="button"
              className="chat-action-btn"
              onClick={handleCopyEntire}
              title="Copy message"
            >
              {copiedEntire ? '✓ Copied' : '📄 Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
