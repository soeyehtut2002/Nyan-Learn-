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
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-6">
      {/* Top Header */}
      <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-sm font-semibold text-slate-200 ml-2 flex items-center gap-1.5">
            <Code className="w-4 h-4 text-cyan-400" />
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-lg text-xs font-semibold shadow-md active:scale-95 transition-all"
            title="Run Code"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {language === 'my' ? 'ကုဒ် Run မည်' : 'Run'}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-medium active:scale-95 transition-all"
            title="Reset Code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {language === 'my' ? 'မူလအတိုင်းပြန်ထား' : 'Reset'}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-medium transition-all"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Instructions if provided */}
      {instructions && (
        <div className="bg-sky-950/40 border-b border-sky-800/40 px-4 py-2.5 text-xs text-sky-200 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <span>{language === 'my' ? instructions.my : instructions.en}</span>
        </div>
      )}

      {/* Editor & Preview Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-700/80" style={{ minHeight: height }}>
        {/* Left Side: Editors */}
        <div className="flex flex-col bg-slate-900">
          {/* Tabs */}
          <div className="flex items-center bg-slate-950/70 border-b border-slate-800 px-2 pt-2 gap-1">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'html'
                  ? 'bg-slate-900 text-orange-400 border-t-2 border-orange-500 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'css'
                  ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              style.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'js'
                  ? 'bg-slate-900 text-amber-400 border-t-2 border-amber-500 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              script.js
            </button>

            <div className="ml-auto flex items-center gap-2 pr-2 text-xs text-slate-400">
              <label className="flex items-center gap-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={autoRun}
                  onChange={(e) => setAutoRun(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0 w-3.5 h-3.5 bg-slate-800 border-slate-700"
                />
                <span className="text-[11px] text-slate-400">Live</span>
              </label>
            </div>
          </div>

          {/* Active Code Area */}
          <div className="relative flex-1 p-3 font-mono text-sm">
            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent text-orange-200 outline-none resize-none font-mono text-xs leading-relaxed selection:bg-orange-900/60"
                spellCheck={false}
                placeholder="Write HTML here..."
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent text-cyan-200 outline-none resize-none font-mono text-xs leading-relaxed selection:bg-cyan-900/60"
                spellCheck={false}
                placeholder="Write CSS here..."
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent text-amber-200 outline-none resize-none font-mono text-xs leading-relaxed selection:bg-amber-900/60"
                spellCheck={false}
                placeholder="Write JavaScript here..."
              />
            )}
          </div>
        </div>

        {/* Right Side: Sandboxed Preview */}
        <div className="flex flex-col bg-white">
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              {language === 'my' ? 'တိုက်ရိုက်အဖြေပြကွက် (Live Preview)' : 'Live Preview'}
            </span>
            <span className="text-[11px] bg-slate-200/80 text-slate-600 px-2 py-0.5 rounded-full font-mono">
              Sandboxed
            </span>
          </div>
          <div className="flex-1 w-full h-full min-h-[320px] bg-white relative">
            <iframe
              title="Code Preview"
              srcDoc={previewSrcDoc}
              sandbox="allow-scripts"
              className="w-full h-full border-0 absolute inset-0 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
