import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  AlertTriangle,
  Lock,
  Zap,
} from './Icons';
import { InteractiveActivityData } from '../../../types/course.types';
import { CodePlayground } from './CodePlayground';
import { ByteMascot, MascotSpeech } from './ByteMascot';

interface InteractiveActivityProps {
  activity: InteractiveActivityData;
  language: 'en' | 'my';
  onCompleted?: () => void;
}

export const InteractiveActivity: React.FC<InteractiveActivityProps> = ({
  activity,
  language,
  onCompleted,
}) => {
  const [completed, setCompleted] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);

  // 1. Sequence Sorter state
  const getSequenceList = () => {
    if (!activity.initialData || !Array.isArray(activity.initialData)) return [];
    return [...activity.initialData];
  };

  const [sequenceItems, setSequenceItems] = useState<any[]>(getSequenceList);

  // 2. Classification Sorter state
  const getCategories = () => {
    if (!activity.initialData || !Array.isArray(activity.initialData)) return [];
    const cats: string[] = [];
    activity.initialData.forEach((i: any) => {
      if (i.category && !cats.includes(i.category)) {
        cats.push(i.category);
      }
    });
    return cats;
  };

  const [categories, setCategories] = useState<string[]>(getCategories);
  const [assignedMap, setAssignedMap] = useState<{ [cat: string]: any[] }>({});
  const [unassignedItems, setUnassignedItems] = useState<any[]>(() => {
    if (activity.type === 'classification-sorter' && Array.isArray(activity.initialData)) {
      return [...activity.initialData];
    }
    return [];
  });

  // 3. Password checker state
  const [passwordInput, setPasswordInput] = useState('');

  // 4. Condition tester state
  const [conditionToggle, setConditionToggle] = useState(false);

  // Reset when activity changes
  useEffect(() => {
    setCompleted(false);
    setErrorFeedback(null);
    setSequenceItems(getSequenceList());
    const cats = getCategories();
    setCategories(cats);
    const map: { [c: string]: any[] } = {};
    cats.forEach((c) => (map[c] = []));
    setAssignedMap(map);
    if (activity.type === 'classification-sorter' && Array.isArray(activity.initialData)) {
      setUnassignedItems([...activity.initialData]);
    }
    setPasswordInput('');
    setConditionToggle(false);
  }, [activity]);

  const handleReset = () => {
    setCompleted(false);
    setErrorFeedback(null);
    setSequenceItems(getSequenceList());
    const map: { [c: string]: any[] } = {};
    categories.forEach((c) => (map[c] = []));
    setAssignedMap(map);
    if (activity.type === 'classification-sorter' && Array.isArray(activity.initialData)) {
      setUnassignedItems([...activity.initialData]);
    }
    setPasswordInput('');
    setConditionToggle(false);
  };

  // Move Sequence Item
  const moveSequenceItem = (index: number, direction: 'up' | 'down') => {
    if (completed) return;
    const newItems = [...sequenceItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setSequenceItems(newItems);
  };

  // Check Sequence Order
  const checkSequence = () => {
    if (!activity.solution || !Array.isArray(activity.solution)) {
      setCompleted(true);
      onCompleted?.();
      return;
    }

    const isMatch = sequenceItems.every((item, idx) => {
      const itemId = item.id || item;
      return itemId === activity.solution[idx];
    });

    if (isMatch) {
      setCompleted(true);
      setErrorFeedback(null);
      onCompleted?.();
    } else {
      setErrorFeedback(
        language === 'my'
          ? 'အစီအစဉ် မမှန်သေးပါ။ အဆင့်များကို သေချာပြန်စီစဉ်ကြည့်ပါဦး!'
          : 'Order is not quite right yet. Re-read the steps and try again!'
      );
    }
  };

  // Classification Assign
  const assignCategory = (item: any, category: string) => {
    if (completed) return;
    setUnassignedItems((prev) => prev.filter((i) => i !== item));
    setAssignedMap((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), item],
    }));
  };

  const unassignCategory = (item: any, category: string) => {
    if (completed) return;
    setAssignedMap((prev) => ({
      ...prev,
      [category]: prev[category].filter((i) => i !== item),
    }));
    setUnassignedItems((prev) => [...prev, item]);
  };

  // Check Classification
  const checkClassification = () => {
    if (unassignedItems.length > 0) {
      setErrorFeedback(
        language === 'my'
          ? 'ကျေးဇူးပြု၍ ပစ္စည်းအားလုံးကို အကွက်ထဲသို့ အရင်ထည့်ပါ!'
          : 'Please sort all items into a category first!'
      );
      return;
    }

    let allCorrect = true;
    categories.forEach((cat) => {
      const itemsInCat = assignedMap[cat] || [];
      itemsInCat.forEach((item) => {
        if (item.category !== cat) {
          allCorrect = false;
        }
      });
    });

    if (allCorrect) {
      setCompleted(true);
      setErrorFeedback(null);
      onCompleted?.();
    } else {
      setErrorFeedback(
        language === 'my'
          ? 'အချို့ပစ္စည်းများ မှားယွင်းနေပါသည်။ ပြန်လည်စစ်ဆေးကြည့်ပါ!'
          : 'Some items are in the wrong category. Review and try again!'
      );
    }
  };

  // Password Strength
  const calculatePasswordScore = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score += 25;
    if (pass.length >= 12) score += 15;
    if (/[A-Z]/.test(pass)) score += 20;
    if (/[a-z]/.test(pass)) score += 10;
    if (/[0-9]/.test(pass)) score += 15;
    if (/[^A-Za-z0-9]/.test(pass)) score += 15;
    return Math.min(score, 100);
  };

  const passScore = calculatePasswordScore(passwordInput);

  const title = language === 'my' ? activity.titleMy : activity.titleEn;
  const instructions = language === 'my' ? activity.instructionsMy : activity.instructionsEn;

  const getItemLabel = (item: any) => {
    if (typeof item === 'string') return item;
    if (language === 'my' && item.textMy) return item.textMy;
    if (item.textEn) return item.textEn;
    return item.item || item.task || item.measure || item.name || JSON.stringify(item);
  };

  return (
    <div className="kid-activity-wrapper">
      {/* Top Header with Badge and Reset Button */}
      <div className="kid-activity-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="kid-pill-badge">
            <Zap className="w-4 h-4" />
            {language === 'my' ? 'လက်တွေ့ကစားနည်း မစ်ရှင်' : 'Interactive Mission'}
          </span>
          {completed && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#dcfce7',
                color: '#15803d',
                fontSize: '12px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '9999px',
                border: '1.5px solid #86efac',
              }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {language === 'my' ? 'ပြီးမြောက်သည် 🎉' : 'Mission Completed! 🎉'}
            </span>
          )}
        </div>

        <button
          onClick={handleReset}
          className="kid-btn kid-btn-secondary"
          title="Reset Activity"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{language === 'my' ? 'ပြန်လည်စတင်မည်' : 'Start Over'}</span>
        </button>
      </div>

      {/* Mascot Speech Bubble with friendly instructions */}
      <MascotSpeech
        mood={completed ? 'success' : errorFeedback ? 'thinking' : 'happy'}
        badge={language === 'my' ? 'စက်ရုပ် Byte ၏ မစ်ရှင်' : "Byte's Robot Mission"}
        title={title}
        message={instructions}
        size={84}
      />

      {/* Error / Alert notification */}
      {errorFeedback && (
        <div
          style={{
            background: '#fef2f2',
            border: '2px solid #fca5a5',
            borderRadius: '16px',
            padding: '12px 16px',
            color: '#b91c1c',
            fontSize: '13.5px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '18px',
          }}
        >
          <AlertTriangle className="w-5 h-5" style={{ color: '#ef4444', flexShrink: 0 }} />
          <span>{errorFeedback}</span>
        </div>
      )}

      {/* =========================================================================
          TYPE 1: SEQUENCE SORTER (Step-by-step ordering)
          ========================================================================= */}
      {activity.type === 'sequence-sorter' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sequenceItems.map((item, idx) => (
              <div
                key={idx}
                className={`sequence-step-card ${completed ? 'completed' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                  <span className={`step-num-badge ${completed ? 'completed' : ''}`}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#1e2448', lineHeight: 1.4 }}>
                    {getItemLabel(item)}
                  </span>
                </div>

                {!completed && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    <button
                      onClick={() => moveSequenceItem(idx, 'up')}
                      disabled={idx === 0}
                      className="step-arrow-btn up"
                      title={language === 'my' ? 'အပေါ်သို့ ရွှေ့မည်' : 'Move Up'}
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => moveSequenceItem(idx, 'down')}
                      disabled={idx === sequenceItems.length - 1}
                      className="step-arrow-btn down"
                      title={language === 'my' ? 'အောက်သို့ ရွှေ့မည်' : 'Move Down'}
                    >
                      ▼
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!completed && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
              <button
                onClick={checkSequence}
                className="kid-btn kid-btn-primary"
                style={{ width: '100%', maxWidth: '340px' }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>{language === 'my' ? '✨ အဖြေစစ်ဆေးမည်' : '✨ Check Order'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TYPE 2: CLASSIFICATION SORTER
          ========================================================================= */}
      {activity.type === 'classification-sorter' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Unassigned items pool */}
          {unassignedItems.length > 0 && (
            <div
              style={{
                background: '#f8fafc',
                border: '2px solid #e2e8f0',
                borderRadius: '20px',
                padding: '16px',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#475569',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                {language === 'my' ? 'ခွဲခြားရမည့် အချက်များ (နှိပ်၍ အကွက်ရွေးပါ):' : 'Items to Classify (Click to assign):'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {unassignedItems.map((item, idx) => (
                  <div key={idx} className="kid-chip-item">
                    <span>{getItemLabel(item)}</span>
                    <div style={{ display: 'flex', gap: '4px', marginLeft: '6px', paddingLeft: '6px', borderLeft: '1.5px solid #cbd5e1' }}>
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => assignCategory(item, cat)}
                          style={{
                            background: '#e0e7ff',
                            border: 'none',
                            color: '#4338ca',
                            fontSize: '11px',
                            fontWeight: 800,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                          }}
                          title={`Sort to ${cat}`}
                        >
                          → {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {categories.map((cat) => (
              <div key={cat} className="kid-category-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', marginBottom: '10px', borderBottom: '1.5px solid #f1f5f9' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#4f46e5', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    📦 {cat}
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, background: '#e0e7ff', color: '#4338ca', padding: '2px 8px', borderRadius: '9999px' }}>
                    {(assignedMap[cat] || []).length} items
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1, alignItems: 'flex-start' }}>
                  {(assignedMap[cat] || []).length === 0 ? (
                    <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', padding: '6px 0' }}>
                      {language === 'my' ? 'ဤနေရာသို့ ထည့်ပါ' : 'Drop items here'}
                    </span>
                  ) : (
                    assignedMap[cat].map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        onClick={() => unassignCategory(item, cat)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '10px',
                          fontSize: '12.5px',
                          fontWeight: 700,
                          background: '#eef2ff',
                          border: '1.5px solid #c7d2fe',
                          color: '#3730a3',
                          cursor: 'pointer',
                        }}
                        title="Click to remove"
                      >
                        {getItemLabel(item)} <XCircle className="w-3.5 h-3.5" style={{ color: '#94a3b8' }} />
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          {!completed && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}>
              <button
                onClick={checkClassification}
                className="kid-btn kid-btn-primary"
                style={{ width: '100%', maxWidth: '340px' }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>{language === 'my' ? '✨ အဖြေစစ်ဆေးမည်' : '✨ Check Classification'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TYPE 3: CODE SANDBOX (HTML/CSS/JS Playground)
          ========================================================================= */}
      {activity.type === 'code-sandbox' && (
        <CodePlayground
          initialHtml={activity.initialData?.html}
          initialCss={activity.initialData?.css}
          initialJs={activity.initialData?.js}
          title={title}
          language={language}
        />
      )}

      {/* =========================================================================
          TYPE 4: PASSWORD CHECKER (Interactive Robot Cyber Shield)
          ========================================================================= */}
      {activity.type === 'password-checker' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                if (calculatePasswordScore(e.target.value) >= 80 && !completed) {
                  setCompleted(true);
                  onCompleted?.();
                }
              }}
              placeholder={
                language === 'my'
                  ? 'စမ်းသပ်စကားဝှက် ရိုက်ထည့်ကြည့်ပါ (ဥပမာ- BlueElephant#2026)'
                  : 'Type a practice passphrase (e.g., PurpleTurtle#Jump2026!)'
              }
              style={{
                width: '100%',
                padding: '14px 18px',
                background: '#ffffff',
                border: '2px solid #818cf8',
                borderRadius: '16px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#1e2448',
                outline: 'none',
                fontFamily: 'monospace',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.1)',
              }}
            />
            <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} />
              <span>
                {language === 'my'
                  ? '⚠️ လုံခြုံရေးအတွက် သင်၏ တကယ့်အစစ်အမှန် စကားဝှက်ကို မထည့်ပါနှင့်။'
                  : '⚠️ Never enter your real private passwords in any practice tool.'}
              </span>
            </div>
          </div>

          {/* Interactive Shield Energy Meter */}
          <div style={{ background: '#ffffff', border: '2px solid #e0e7ff', borderRadius: '18px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>
                {language === 'my' ? '🛡️ Byte ၏ ဒိုင်းကာစွမ်းအင်:' : "🛡️ Byte's Shield Energy:"}
              </span>
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: 800,
                  color: passScore < 40 ? '#ef4444' : passScore < 80 ? '#f59e0b' : '#10b981',
                }}
              >
                {passScore}% -{' '}
                {passScore < 40
                  ? (language === 'my' ? '😴 အားနည်းလွန်းသည်' : '😴 Weak')
                  : passScore < 80
                  ? (language === 'my' ? '⚡ အသင့်အတင့်' : '⚡ Getting Stronger')
                  : (language === 'my' ? '🛡️ စူပါဒိုင်းကာ အပြည့်! 🎉' : '🛡️ Super Strong! 🎉')}
              </span>
            </div>

            <div style={{ width: '100%', height: '14px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${passScore}%`,
                  height: '100%',
                  background:
                    passScore < 40
                      ? 'linear-gradient(90deg, #f87171, #ef4444)'
                      : passScore < 80
                      ? 'linear-gradient(90deg, #fde047, #f59e0b)'
                      : 'linear-gradient(90deg, #34d399, #10b981)',
                  borderRadius: '9999px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TYPE 5: CONDITION TESTER (IF/ELSE Visual Toggle)
          ========================================================================= */}
      {activity.type === 'condition-tester' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              background: '#0f172a',
              borderRadius: '20px',
              padding: '20px',
              border: '2px solid #334155',
              fontFamily: 'monospace',
              fontSize: '13.5px',
              color: '#e2e8f0',
              lineHeight: 1.8,
            }}
          >
            <div style={{ color: '#38bdf8', fontWeight: 800, marginBottom: '8px' }}>
              // {language === 'my' ? 'အခြေအနေစမ်းသပ်မှု' : 'Condition Simulator'}
            </div>
            <div>
              let isRaining ={' '}
              <button
                onClick={() => {
                  const next = !conditionToggle;
                  setConditionToggle(next);
                  setCompleted(true);
                  onCompleted?.();
                }}
                className={`kid-btn ${conditionToggle ? 'kid-btn-primary' : 'kid-btn-secondary'}`}
                style={{ padding: '4px 14px', fontSize: '13px', borderRadius: '10px' }}
              >
                {conditionToggle ? '🌧️ true' : '☀️ false'} (Click to toggle)
              </button>
              ;
            </div>
            <div>if (isRaining) &#123;</div>
            <div
              style={{
                paddingLeft: '24px',
                color: conditionToggle ? '#67e8f9' : '#64748b',
                fontWeight: conditionToggle ? 800 : 500,
                background: conditionToggle ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                borderRadius: '8px',
                paddingTop: '2px',
                paddingBottom: '2px',
              }}
            >
              takeUmbrella(); // ☔️ Raincoat & umbrella on!
            </div>
            <div>&#125; else &#123;</div>
            <div
              style={{
                paddingLeft: '24px',
                color: !conditionToggle ? '#fde047' : '#64748b',
                fontWeight: !conditionToggle ? 800 : 500,
                background: !conditionToggle ? 'rgba(234, 179, 8, 0.15)' : 'transparent',
                borderRadius: '8px',
                paddingTop: '2px',
                paddingBottom: '2px',
              }}
            >
              wearSunglasses(); // 🕶️ Sunny hat & sunglasses on!
            </div>
            <div>&#125;</div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SUCCESS CELEBRATION BOX
          ========================================================================= */}
      {completed && (
        <div className="celebration-box">
          <ByteMascot mood="success" size={72} />
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#065f46', margin: '0 0 4px 0' }}>
              {language === 'my' ? '🎉 သာဓုပါ! မစ်ရှင် အောင်မြင်သွားပါပြီ!' : '🎉 Awesome Job! Mission Completed!'}
            </h4>
            <p style={{ fontSize: '13px', color: '#047857', margin: 0, fontWeight: 600 }}>
              {language === 'my'
                ? 'စက်ရုပ် Byte က သင့်ကို ဂုဏ်ယူနေပါတယ်! အောက်ပါ မေးခွန်းများကို ဆက်လက်ဖြေဆိုကြည့်ရအောင်။'
                : 'Byte is super proud of you! Keep going to test your skills in the quiz below.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
