import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check, Eye, Code, Sparkles } from './Icons';

interface CodePlaygroundProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  solutionHtml?: string;
  solutionCss?: string;
  solutionJs?: string;
  title?: string;
  instructions?: { en: string; my: string };
  language?: 'en' | 'my';
  height?: string;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialHtml = '<h1>Hello Nyan Learn!</h1>\n<p>Start editing this HTML and see what happens.</p>\n<button id="magicBtn">Click Me!</button>',
  initialCss = 'body {\n  font-family: sans-serif;\n  background: #f0f9ff;\n  padding: 20px;\n  text-align: center;\n}\nh1 {\n  color: #0284c7;\n}\nbutton {\n  background: #0ea5e9;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n}\nbutton:hover {\n  background: #0369a1;\n}',
  initialJs = 'const btn = document.getElementById("magicBtn");\nbtn.addEventListener("click", () => {\n  alert("🎉 Awesome! You wrote real code!");\n});',
  title = 'Interactive Web Code Playground',
  instructions,
  language = 'en',
  height = '480px',
}) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [jsCode, setJsCode] = useState(initialJs);
  const [previewSrcDoc, setPreviewSrcDoc] = useState('');
  const [copied, setCopied] = useState(false);
  const [autoRun, setAutoRun] = useState(true);

  // Bundle into sandboxed srcdoc
  const buildSrcDoc = (html: string, css: string, js: string) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Reset & user styles */
    * { box-sizing: border-box; }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    try {
      ${js}
    } catch (err) {
      console.error(err);
      const errDiv = document.createElement('div');
      errDiv.style.cssText = 'color: #dc2626; background: #fee2e2; border: 1px solid #f87171; padding: 8px 12px; margin-top: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;';
      errDiv.textContent = 'JavaScript Error: ' + err.message;
      document.body.appendChild(errDiv);
    }
  <\/script>
</body>
</html>`;
  };

  const handleRun = () => {
    setPreviewSrcDoc(buildSrcDoc(htmlCode, cssCode, jsCode));
  };

  const handleReset = () => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setJsCode(initialJs);
    setPreviewSrcDoc(buildSrcDoc(initialHtml, initialCss, initialJs));
  };

  const handleCopy = () => {
    const fullCode = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    setPreviewSrcDoc(buildSrcDoc(htmlCode, cssCode, jsCode));
  }, []);

  useEffect(() => {
    if (autoRun) {
      const timer = setTimeout(() => {
        setPreviewSrcDoc(buildSrcDoc(htmlCode, cssCode, jsCode));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [htmlCode, cssCode, jsCode, autoRun]);

  return (
    <div
      style={{
        background: '#0f172a',
        border: '1.5px solid #334155',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0',
      }}
    >
      {/* Top Header */}
      <div
        style={{
          background: '#1e293b',
          padding: '12px 18px',
          borderBottom: '1.5px solid #334155',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc', marginLeft: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Code className="w-4 h-4" style={{ color: '#38bdf8' }} />
            {title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleRun}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
            }}
            title="Run Code"
          >
            <Play className="w-3.5 h-3.5" style={{ fill: 'currentColor' }} />
            <span>{language === 'my' ? 'ကုဒ် Run မည်' : 'Run'}</span>
          </button>
          <button
            onClick={handleReset}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: '#334155',
              color: '#f1f5f9',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              border: '1px solid #475569',
              cursor: 'pointer',
            }}
            title="Reset Code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'my' ? 'မူလအတိုင်းပြန်ထား' : 'Reset'}</span>
          </button>
          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              background: '#334155',
              color: '#cbd5e1',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              border: '1px solid #475569',
              cursor: 'pointer',
            }}
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5" style={{ color: '#4ade80' }} /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Instructions if provided */}
      {instructions && (
        <div
          style={{
            background: 'rgba(14, 165, 233, 0.1)',
            borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
            padding: '10px 18px',
            fontSize: '12.5px',
            color: '#bae6fd',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
          <span>{language === 'my' ? instructions.my : instructions.en}</span>
        </div>
      )}

      {/* Editor & Preview Split Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: height,
        }}
      >
        {/* Left Side: Editors */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#0b1120', borderRight: '1px solid #334155' }}>
          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#0f172a',
              borderBottom: '1px solid #1e293b',
              padding: '6px 10px 0',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setActiveTab('html')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'html' ? '#0b1120' : 'transparent',
                color: activeTab === 'html' ? '#fb923c' : '#94a3b8',
                borderTop: activeTab === 'html' ? '2px solid #f97316' : '2px solid transparent',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f97316', display: 'inline-block' }} />
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'css' ? '#0b1120' : 'transparent',
                color: activeTab === 'css' ? '#38bdf8' : '#94a3b8',
                borderTop: activeTab === 'css' ? '2px solid #0ea5e9' : '2px solid transparent',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0ea5e9', display: 'inline-block' }} />
              style.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'js' ? '#0b1120' : 'transparent',
                color: activeTab === 'js' ? '#facc15' : '#94a3b8',
                borderTop: activeTab === 'js' ? '2px solid #eab308' : '2px solid transparent',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
              script.js
            </button>

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '6px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', userSelect: 'none', fontSize: '11px', color: '#94a3b8' }}>
                <input
                  type="checkbox"
                  checked={autoRun}
                  onChange={(e) => setAutoRun(e.target.checked)}
                  style={{ accentColor: '#0ea5e9', cursor: 'pointer' }}
                />
                <span>Live</span>
              </label>
            </div>
          </div>

          {/* Active Code Area */}
          <div style={{ position: 'relative', flex: 1, padding: '12px', minHeight: '300px' }}>
            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  background: 'transparent',
                  color: '#fed7aa',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  lineHeight: 1.6,
                }}
                spellCheck={false}
                placeholder="Write HTML here..."
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  background: 'transparent',
                  color: '#bae6fd',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  lineHeight: 1.6,
                }}
                spellCheck={false}
                placeholder="Write CSS here..."
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  background: 'transparent',
                  color: '#fef08a',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  lineHeight: 1.6,
                }}
                spellCheck={false}
                placeholder="Write JavaScript here..."
              />
            )}
          </div>
        </div>

        {/* Right Side: Sandboxed Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', minHeight: '320px' }}>
          <div
            style={{
              background: '#f1f5f9',
              borderBottom: '1px solid #e2e8f0',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#475569',
              fontWeight: 600,
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye className="w-3.5 h-3.5" style={{ color: '#64748b' }} />
              {language === 'my' ? 'တိုက်ရိုက်အဖြေပြကွက် (Live Preview)' : 'Live Preview'}
            </span>
            <span style={{ fontSize: '10.5px', background: '#e2e8f0', color: '#475569', padding: '2px 8px', borderRadius: '9999px', fontFamily: 'monospace' }}>
              Sandboxed
            </span>
          </div>
          <div style={{ flex: 1, width: '100%', height: '100%', minHeight: '280px', position: 'relative', background: '#ffffff' }}>
            <iframe
              title="Code Preview"
              srcDoc={previewSrcDoc}
              sandbox="allow-scripts"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#ffffff',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
