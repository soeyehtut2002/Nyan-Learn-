import React, { useState, useEffect } from 'react';
import {
  OpenRouterService,
  OPENROUTER_MODELS,
  KeyValidationResult
} from '../../../services/ai/openRouterService';
import { audioService } from '../../../services/audio/AudioService';

interface ChatSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'my';
  onSettingsSaved?: () => void;
}

export const ChatSettingsModal: React.FC<ChatSettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onSettingsSaved
}) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');
  const [customModelInput, setCustomModelInput] = useState('');
  const [temperature, setTemperature] = useState(0.7);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<KeyValidationResult | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(OpenRouterService.getApiKey());
      const currentModel = OpenRouterService.getModel();
      const isKnown = OPENROUTER_MODELS.some(m => m.id === currentModel);
      if (isKnown) {
        setSelectedModel(currentModel);
        setCustomModelInput('');
      } else {
        setSelectedModel('custom');
        setCustomModelInput(currentModel);
      }
      setTemperature(OpenRouterService.getTemperature());
      setTestResult(null);
      setSaveSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    if (!apiKey.trim()) {
      setTestResult({
        valid: false,
        message: language === 'my'
          ? 'ကျေးဇူးပြု၍ စစ်ဆေးရန် API Key အရင် ရိုက်ထည့်ပါ!'
          : 'Please enter an API Key to test!'
      });
      return;
    }

    setTesting(true);
    setTestResult(null);
    audioService.play('step');

    const res = await OpenRouterService.validateApiKey(apiKey.trim());
    setTesting(false);
    setTestResult(res);

    if (res.valid) {
      audioService.play('correct');
    } else {
      audioService.play('wrong');
    }
  };

  const handleSave = () => {
    OpenRouterService.setApiKey(apiKey.trim());

    if (selectedModel === 'custom') {
      if (customModelInput.trim()) {
        OpenRouterService.setModel(customModelInput.trim());
      }
    } else {
      OpenRouterService.setModel(selectedModel);
    }

    OpenRouterService.setTemperature(temperature);

    audioService.play('star');
    setSaveSuccess(true);
    if (onSettingsSaved) {
      onSettingsSaved();
    }

    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleClearKey = () => {
    setApiKey('');
    OpenRouterService.clearApiKey();
    setTestResult(null);
    audioService.play('click');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card chat-settings-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '26px' }}>⚙️</span>
            <div>
              <h2 id="settings-title" style={{ margin: 0, fontSize: '20px', fontWeight: 800 }}>
                {language === 'my' ? 'OpenRouter AI ဆက်တင်များ' : 'OpenRouter AI Settings'}
              </h2>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
                {language === 'my'
                  ? 'ဉာဏ်ဘော့ Chatbot ကို OpenRouter API ဖြင့် ချိတ်ဆက်ပါ'
                  : 'Configure models, API keys & temperature for Nyan Bot'}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close settings"
          >
            ✕
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '72vh', overflowY: 'auto', padding: '16px 20px' }}>
          {/* Free Key Guide Banner */}
          <div className="settings-tip-box">
            <span style={{ fontSize: '24px' }}>🎁</span>
            <div>
              <strong>
                {language === 'my' ? 'အခမဲ့ OpenRouter Key ရယူနည်း' : 'Get a FREE OpenRouter API Key'}
              </strong>
              <p style={{ margin: '4px 0 6px', fontSize: '13px' }}>
                {language === 'my'
                  ? 'OpenRouter တွင် Google Gemini 2.0 Flash Lite, Llama 3.3 စသည့် ထိပ်တန်း Model များကို အခမဲ့ အသုံးပြုနိုင်ပါသည်။'
                  : 'OpenRouter provides 100% free access to state-of-the-art models like Gemini 2.0 Flash Lite and Llama 3.3!'}
              </p>
              <a
                href="https://openrouter.ai/keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link-btn"
                style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--purple-main)' }}
              >
                🔗 {language === 'my' ? 'openrouter.ai/keys သို့သွားပြီး Key အခမဲ့ ရယူရန်' : 'Go to openrouter.ai/keys to create your free key ↗'}
              </a>
            </div>
          </div>

          {/* API Key Input */}
          <div className="settings-form-group">
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
              🔑 {language === 'my' ? 'OpenRouter API Key:' : 'OpenRouter API Key:'}
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type={showKey ? 'text' : 'password'}
                  className="input-field"
                  placeholder="sk-or-v1-xxxxxxxxxxxxxxxx..."
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setTestResult(null);
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 42px 10px 14px',
                    borderRadius: '12px',
                    border: '2px solid var(--border-line)',
                    fontFamily: 'monospace',
                    fontSize: '13.5px'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                  title={showKey ? 'Hide key' : 'Show key'}
                >
                  {showKey ? '🙈' : '👁️'}
                </button>
              </div>

              <button
                type="button"
                className="btn btn-outline"
                onClick={handleTestConnection}
                disabled={testing}
                style={{ whiteSpace: 'nowrap', padding: '10px 16px' }}
              >
                {testing ? '⏳ Checking...' : (language === 'my' ? '⚡ စစ်ဆေးမည်' : '⚡ Test Key')}
              </button>
            </div>

            {apiKey && (
              <div style={{ marginTop: '6px', textAlign: 'right' }}>
                <button
                  type="button"
                  onClick={handleClearKey}
                  style={{
                    fontSize: '12px',
                    color: 'var(--coral, #ff6b6b)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  {language === 'my' ? 'Key ကို ပြန်ဖျက်မည်' : 'Clear stored key'}
                </button>
              </div>
            )}

            {/* Test Connection Result Box */}
            {testResult && (
              <div
                className={`test-result-box ${testResult.valid ? 'test-success' : 'test-error'}`}
                style={{
                  marginTop: '10px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  background: testResult.valid ? 'var(--green-light, #e9fbf0)' : 'var(--coral-light, #fff0f0)',
                  border: `1.5px solid ${testResult.valid ? 'var(--green, #2ecc71)' : 'var(--coral, #ff6b6b)'}`,
                  color: testResult.valid ? '#137333' : '#c5221f'
                }}
              >
                <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{testResult.valid ? '✓' : '⚠️'}</span>
                  <span>{testResult.message}</span>
                </div>
                {testResult.valid && testResult.label && (
                  <div style={{ marginTop: '4px', fontSize: '12px', opacity: 0.9 }}>
                    <span>Key Label: <strong>{testResult.label}</strong></span>
                    {testResult.isFreeTier && <span style={{ marginLeft: '10px' }}>• Free Tier Account</span>}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Model Selector */}
          <div className="settings-form-group" style={{ marginTop: '18px' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
              🤖 {language === 'my' ? 'AI Model ရွေးချယ်ပါ:' : 'Select AI Model:'}
            </label>
            <div className="model-selector-grid" style={{ display: 'grid', gap: '8px' }}>
              {OPENROUTER_MODELS.map((model) => (
                <label
                  key={model.id}
                  className={`model-option-card ${selectedModel === model.id ? 'selected' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: `2px solid ${selectedModel === model.id ? 'var(--purple-main)' : 'var(--border-line)'}`,
                    background: selectedModel === model.id ? 'var(--purple-light)' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="radio"
                      name="modelChoice"
                      value={model.id}
                      checked={selectedModel === model.id}
                      onChange={() => setSelectedModel(model.id)}
                    />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{model.name}</span>
                        <span
                          className={`model-badge badge-${model.badge.toLowerCase()}`}
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: '999px',
                            background: model.badge === 'Free' ? '#e6f4ea' : '#ede9fe',
                            color: model.badge === 'Free' ? '#137333' : '#6c47ff'
                          }}
                        >
                          {model.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--ink-secondary)' }}>
                        {model.description}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11.5px', color: 'var(--ink-muted)', fontWeight: 600 }}>
                    {model.provider}
                  </span>
                </label>
              ))}

              {/* Custom Model Choice */}
              <label
                className={`model-option-card ${selectedModel === 'custom' ? 'selected' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: `2px solid ${selectedModel === 'custom' ? 'var(--purple-main)' : 'var(--border-line)'}`,
                  background: selectedModel === 'custom' ? 'var(--purple-light)' : '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="radio"
                  name="modelChoice"
                  value="custom"
                  checked={selectedModel === 'custom'}
                  onChange={() => setSelectedModel('custom')}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '14px' }}>
                    {language === 'my' ? 'Custom Model အမည် ထည့်သွင်းမည်' : 'Custom Model ID'}
                  </div>
                  {selectedModel === 'custom' && (
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g. meta-llama/llama-3.2-3b-instruct:free"
                      value={customModelInput}
                      onChange={(e) => setCustomModelInput(e.target.value)}
                      style={{
                        marginTop: '6px',
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border-line)',
                        fontSize: '13px'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Temperature Slider */}
          <div className="settings-form-group" style={{ marginTop: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontWeight: 700, fontSize: '14px' }}>
                🎛️ {language === 'my' ? 'တီထွင်ဖန်တီးမှု အဆင့် (Temperature):' : 'Creativity Level (Temperature):'}
              </label>
              <strong style={{ color: 'var(--purple-main)' }}>{temperature.toFixed(2)}</strong>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              style={{ width: '100%', marginTop: '8px', accentColor: 'var(--purple-main)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: 'var(--ink-muted)' }}>
              <span>🎯 {language === 'my' ? 'တိကျသေချာသော အဖြေ' : 'Precise & Direct'}</span>
              <span>🎨 {language === 'my' ? 'ဖန်တီးမှုအပြည့်' : 'Creative & Storyteller'}</span>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ padding: '16px 20px', borderTop: '1px solid var(--border-line)', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
            style={{ padding: '10px 18px' }}
          >
            {language === 'my' ? 'ပိတ်မည်' : 'Cancel'}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
            style={{ padding: '10px 24px', fontWeight: 800 }}
          >
            {saveSuccess
              ? (language === 'my' ? '✓ သိမ်းဆည်းပြီးပါပြီ!' : '✓ Saved!')
              : (language === 'my' ? '💾 သိမ်းဆည်းမည်' : '💾 Save & Apply')}
          </button>
        </div>
      </div>
    </div>
  );
};
