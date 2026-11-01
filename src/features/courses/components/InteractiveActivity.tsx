import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  AlertTriangle,
  Lock,
  Zap,
  Play,
  Sparkles,
  Shield,
} from './Icons';
import { InteractiveActivityData } from '../../../types/course.types';
import { CodePlayground } from './CodePlayground';
import { ByteMascot, MascotSpeech } from './ByteMascot';

interface InteractiveActivityProps {
  activity: InteractiveActivityData;
  language: 'en' | 'my';
  onCompleted?: () => void;
}

// Clean any leading numbering prefixes like "1. ", "3. ", "၁။ ", "၂။ "
export const cleanItemLabel = (text: string): string => {
  if (!text) return '';
  return text.replace(/^(\d+|[၁-၉]+)[\.\၊\။\s\-]+/, '').trim();
};

export const InteractiveActivity: React.FC<InteractiveActivityProps> = ({
  activity,
  language,
  onCompleted,
}) => {
  const [completed, setCompleted] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStepIdx, setSimStepIdx] = useState<number | null>(null);

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

  // 3. Privacy Sorter state (Safe vs Secret)
  const [privacySafeList, setPrivacySafeList] = useState<any[]>([]);
  const [privacySecretList, setPrivacySecretList] = useState<any[]>([]);
  const [privacyRemaining, setPrivacyRemaining] = useState<any[]>(() => {
    if (activity.type === 'privacy-sorter' && Array.isArray(activity.initialData)) {
      return [...activity.initialData];
    }
    return [];
  });

  // 4. Phishing Detector state
  const [selectedPhishingIdx, setSelectedPhishingIdx] = useState<number | null>(null);
  const [phishingAnswered, setPhishingAnswered] = useState(false);

  // 5. Password checker state
  const [passwordInput, setPasswordInput] = useState('');

  // 6. Condition tester state
  const [conditionToggle, setConditionToggle] = useState(false);

  // 7. Loop counter state
  const [loopCount, setLoopCount] = useState(0);

  // Reset when activity changes
  useEffect(() => {
    handleReset();
  }, [activity]);

  const handleReset = () => {
    setCompleted(false);
    setErrorFeedback(null);
    setIsSimulating(false);
    setSimStepIdx(null);
    setSequenceItems(getSequenceList());

    const cats = getCategories();
    setCategories(cats);
    const map: { [c: string]: any[] } = {};
    cats.forEach((c) => (map[c] = []));
    setAssignedMap(map);

    if (activity.type === 'classification-sorter' && Array.isArray(activity.initialData)) {
      setUnassignedItems([...activity.initialData]);
    }
    if (activity.type === 'privacy-sorter' && Array.isArray(activity.initialData)) {
      setPrivacyRemaining([...activity.initialData]);
      setPrivacySafeList([]);
      setPrivacySecretList([]);
    }
    setSelectedPhishingIdx(null);
    setPhishingAnswered(false);
    setPasswordInput('');
    setConditionToggle(false);
    setLoopCount(0);
  };

  // Move Sequence Item
  const moveSequenceItem = (index: number, direction: 'up' | 'down') => {
    if (completed || isSimulating) return;
    const newItems = [...sequenceItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setSequenceItems(newItems);
    setErrorFeedback(null);
  };

  // Check Sequence Order with visual stepping
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
      // Step simulation animation
      setIsSimulating(true);
      setErrorFeedback(null);
      let step = 0;
      const interval = setInterval(() => {
        if (step < sequenceItems.length) {
          setSimStepIdx(step);
          step++;
        } else {
          clearInterval(interval);
          setIsSimulating(false);
          setCompleted(true);
          onCompleted?.();
        }
      }, 350);
    } else {
      setErrorFeedback(
        language === 'my'
          ? 'အစီအစဉ် မမှန်သေးပါ! ဥပမာ- စက်မဖွင့်ဘဲ အပြင်မထွက်နိုင်သလို အဆင့်များကို သေချာစဉ်းစားပြီး ထပ်မံရွှေ့ပေးပါဦး။'
          : 'Steps are not in the right order yet! Review the logic and try moving the steps again.'
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
          ? 'ကျေးဇူးပြု၍ ပစ္စည်းအားလုံးကို အကွက်ထဲသို့ အရင်ထည့်သွင်းပေးပါ!'
          : 'Please sort all items into a box before checking!'
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
          ? 'အချို့အချက်များ နေရာမှားနေပါသည်။ ပြန်လည်စစ်ဆေးပြီး ပြင်ဆင်ကြည့်ပါ!'
          : 'Some items are in the wrong box. Review and try again!'
      );
    }
  };

  // Privacy Sorter Assign
  const handlePrivacySort = (item: any, destination: 'safe' | 'secret') => {
    if (completed) return;
    setPrivacyRemaining((prev) => prev.filter((i) => i !== item));
    if (destination === 'safe') {
      setPrivacySafeList((prev) => [...prev, item]);
    } else {
      setPrivacySecretList((prev) => [...prev, item]);
    }
  };

  const checkPrivacy = () => {
    if (privacyRemaining.length > 0) {
      setErrorFeedback(
        language === 'my'
          ? 'အချက်အလက် အားလုံးကို ဘေးကင်းသည် သို့မဟုတ် လျှို့ဝှက်သေတ္တာထဲသို့ ခွဲခြားပေးပါ!'
          : 'Please categorize all items into Safe or Secret first!'
      );
      return;
    }

    const safeCorrect = privacySafeList.every((i) => i.isSafe === true);
    const secretCorrect = privacySecretList.every((i) => i.isSafe === false);

    if (safeCorrect && secretCorrect) {
      setCompleted(true);
      setErrorFeedback(null);
      onCompleted?.();
    } else {
      setErrorFeedback(
        language === 'my'
          ? 'အချို့ ကိုယ်ရေးအချက်အလက်များ (နေရပ်၊ ဖုန်းနံပါတ် စသည်) ကို လျှို့ဝှက်သေတ္တာထဲသို့သာ ထည့်ရပါမည်!'
          : 'Remember: Private data like your home address or phone number belongs in the Secret Vault!'
      );
    }
  };

  // Phishing Detector Choice
  const handlePhishingSelect = (idx: number, item: any) => {
    if (phishingAnswered) return;
    setSelectedPhishingIdx(idx);
    setPhishingAnswered(true);

    const isTrap = item.isPhishing === true || item.isSafe === false;
    const wantsTrap = activity.instructionsEn?.toLowerCase().includes('trap') ||
      activity.instructionsEn?.toLowerCase().includes('phishing');

    const isUserCorrect = wantsTrap ? isTrap : !isTrap;

    if (isUserCorrect) {
      setCompleted(true);
      setErrorFeedback(null);
      onCompleted?.();
    } else {
      setErrorFeedback(
        language === 'my'
          ? 'သတိထားပါ! မက်ဆေ့ခ်ျ သို့မဟုတ် Link ၏ အရေးပေါ်တောင်းဆိုမှုများနှင့် သံသယဖြစ်ဖွယ် အချက်များကို သေချာပြန်ဖတ်ပါဦး!'
          : 'Not quite! Look for urgency tricks, fake prizes, or suspicious website links.'
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
    if (typeof item === 'string') return cleanItemLabel(item);
    if (language === 'my' && item.textMy) return cleanItemLabel(item.textMy);
    if (item.textEn) return cleanItemLabel(item.textEn);
    const raw = item.item || item.task || item.measure || item.name || item.text || JSON.stringify(item);
    return cleanItemLabel(raw);
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
              {language === 'my' ? 'မစ်ရှင် အောင်မြင်သည်! 🎉' : 'Mission Completed! 🎉'}
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
            padding: '12px 18px',
            color: '#b91c1c',
            fontSize: '14px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.1)',
          }}
        >
          <AlertTriangle className="w-5 h-5" style={{ color: '#ef4444', flexShrink: 0 }} />
          <span>{errorFeedback}</span>
        </div>
      )}

      {/* =========================================================================
          TYPE 1: SEQUENCE SORTER (Step-by-step Ordering with Scratch-style Blocks)
          ========================================================================= */}
      {activity.type === 'sequence-sorter' && (
        <div className="sequence-sorter-container">
          {/* Start Point Indicator */}
          <div className="sequence-lane-indicator start">
            <span className="lane-dot green" />
            <span className="lane-label">
              🟢 {language === 'my' ? 'စတင်သည့်အဆင့် (START - ပထမဆုံး အဆင့်)' : 'START HERE (Step 1 - First)'}
            </span>
          </div>

          {/* Draggable / Orderable Step Blocks */}
          <div className="sequence-blocks-list">
            {sequenceItems.map((item, idx) => {
              const isSimActive = isSimulating && simStepIdx === idx;
              return (
                <div
                  key={item.id || idx}
                  className={`sequence-block-card ${completed ? 'completed' : ''} ${isSimActive ? 'simulating' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                    <div className={`step-badge-circle ${completed ? 'completed' : ''} ${isSimActive ? 'simulating' : ''}`}>
                      {completed ? '✓' : idx + 1}
                    </div>
                    <div className="step-text-content">
                      <span className="step-main-text">{getItemLabel(item)}</span>
                    </div>
                  </div>

                  {!completed && (
                    <div className="step-action-buttons">
                      <button
                        onClick={() => moveSequenceItem(idx, 'up')}
                        disabled={idx === 0 || isSimulating}
                        className="arrow-move-btn up"
                        title={language === 'my' ? 'အပေါ်သို့ ရွှေ့မည်' : 'Move Up'}
                      >
                        ▲ {language === 'my' ? 'အပေါ်' : 'Up'}
                      </button>
                      <button
                        onClick={() => moveSequenceItem(idx, 'down')}
                        disabled={idx === sequenceItems.length - 1 || isSimulating}
                        className="arrow-move-btn down"
                        title={language === 'my' ? 'အောက်သို့ ရွှေ့မည်' : 'Move Down'}
                      >
                        ▼ {language === 'my' ? 'အောက်' : 'Down'}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Finish Point Indicator */}
          <div className="sequence-lane-indicator finish">
            <span className="lane-dot flag" />
            <span className="lane-label">
              🏁 {language === 'my' ? 'ပန်းတိုင်ရောက်သည့်အဆင့် (FINISH - နောက်ဆုံး အဆင့်)' : 'FINISH GOAL (Last Step)'}
            </span>
          </div>

          {/* Check Button */}
          {!completed && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button
                onClick={checkSequence}
                disabled={isSimulating}
                className="kid-btn kid-btn-primary test-run-btn"
              >
                <Play className="w-5 h-5" />
                <span>
                  {isSimulating
                    ? (language === 'my' ? 'စက်ရုပ် လိုက်နာစမ်းသပ်နေသည်...' : 'Simulating Byte...')
                    : (language === 'my' ? '🚀 စက်ရုပ်ကို မောင်းနှင်စစ်ဆေးမည် (Test Run)' : '🚀 Test Run Order!')}
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TYPE 2: CLASSIFICATION SORTER (Toy Baskets)
          ========================================================================= */}
      {activity.type === 'classification-sorter' && (
        <div className="classification-container">
          {/* Unassigned items pool */}
          {unassignedItems.length > 0 && (
            <div className="unassigned-pool-box">
              <span className="pool-header-title">
                📦 {language === 'my' ? 'ခွဲခြားရမည့် အချက်များ (အကွက်ရွေးချယ်ပါ):' : 'Items to Sort (Click button to assign):'}
              </span>
              <div className="pool-items-flex">
                {unassignedItems.map((item, idx) => (
                  <div key={idx} className="pool-card-chip">
                    <span className="chip-text">{getItemLabel(item)}</span>
                    <div className="chip-assign-actions">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => assignCategory(item, cat)}
                          className="assign-cat-btn"
                        >
                          → {cat.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories Grid (Toy Baskets) */}
          <div className="categories-basket-grid">
            {categories.map((cat) => (
              <div key={cat} className="toy-basket-box">
                <div className="basket-header">
                  <span className="basket-title">
                    📥 {cat.toUpperCase()}
                  </span>
                  <span className="basket-count">
                    {(assignedMap[cat] || []).length} items
                  </span>
                </div>
                <div className="basket-contents">
                  {(assignedMap[cat] || []).length === 0 ? (
                    <span className="basket-empty-hint">
                      {language === 'my' ? 'ဤနေရာသို့ ထည့်ပါ' : 'Drop items here'}
                    </span>
                  ) : (
                    assignedMap[cat].map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        onClick={() => unassignCategory(item, cat)}
                        className="basket-item-pill"
                        title="Click to remove"
                      >
                        {getItemLabel(item)} <XCircle className="w-3.5 h-3.5" />
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          {!completed && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
              <button
                onClick={checkClassification}
                className="kid-btn kid-btn-primary"
                style={{ width: '100%', maxWidth: '340px' }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>{language === 'my' ? '✨ အဖြေစစ်ဆေးမည်' : '✨ Check Answers'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TYPE 3: PRIVACY SORTER (Safe to Share vs Secret Vault)
          ========================================================================= */}
      {activity.type === 'privacy-sorter' && (
        <div className="privacy-sorter-container">
          {/* Remaining Items */}
          {privacyRemaining.length > 0 && (
            <div className="unassigned-pool-box">
              <span className="pool-header-title">
                🛡️ {language === 'my' ? 'ခွဲခြားရမည့် အချက်အလက်များ:' : 'Information Items to Classify:'}
              </span>
              <div className="pool-items-flex">
                {privacyRemaining.map((item, idx) => (
                  <div key={idx} className="pool-card-chip">
                    <span className="chip-text">{item.item || getItemLabel(item)}</span>
                    <div className="chip-assign-actions">
                      <button
                        onClick={() => handlePrivacySort(item, 'safe')}
                        className="assign-cat-btn safe-btn"
                      >
                        🟢 {language === 'my' ? 'မျှဝေနိုင်သည်' : 'Safe to Share'}
                      </button>
                      <button
                        onClick={() => handlePrivacySort(item, 'secret')}
                        className="assign-cat-btn secret-btn"
                      >
                        🔒 {language === 'my' ? 'လျှို့ဝှက်သေတ္တာ' : 'Secret Vault'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2 Big Vault Boxes */}
          <div className="privacy-vaults-grid">
            {/* Safe Box */}
            <div className="privacy-vault-box safe">
              <div className="vault-header">
                <span className="vault-title green">
                  🟢 {language === 'my' ? 'မျှဝေရန် ဘေးကင်းသည် (Safe)' : 'Safe to Share with Friends'}
                </span>
                <span className="basket-count">{privacySafeList.length} items</span>
              </div>
              <div className="vault-items">
                {privacySafeList.length === 0 ? (
                  <span className="basket-empty-hint">
                    {language === 'my' ? 'နှစ်သက်သောအရောင်၊ အစားအစာ စသည်များ...' : 'Favorite foods, colors, sports...'}
                  </span>
                ) : (
                  privacySafeList.map((item, idx) => (
                    <span key={idx} className="basket-item-pill safe">
                      {item.item || getItemLabel(item)}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Secret Box */}
            <div className="privacy-vault-box secret">
              <div className="vault-header">
                <span className="vault-title red">
                  🔒 {language === 'my' ? 'လျှို့ဝှက်သေတ္တာ (Keep Secret)' : 'Secret Vault (Never Share!)'}
                </span>
                <span className="basket-count">{privacySecretList.length} items</span>
              </div>
              <div className="vault-items">
                {privacySecretList.length === 0 ? (
                  <span className="basket-empty-hint">
                    {language === 'my' ? 'နေရပ်လိပ်စာ၊ စကားဝှက်၊ ဖုန်းနံပါတ်...' : 'Home address, passwords, phone numbers...'}
                  </span>
                ) : (
                  privacySecretList.map((item, idx) => (
                    <span key={idx} className="basket-item-pill secret">
                      {item.item || getItemLabel(item)}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          {!completed && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
              <button
                onClick={checkPrivacy}
                className="kid-btn kid-btn-primary"
                style={{ width: '100%', maxWidth: '340px' }}
              >
                <Shield className="w-5 h-5" />
                <span>{language === 'my' ? '🛡️ လုံခြုံမှုစစ်ဆေးမည်' : '🛡️ Check Privacy Safety'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TYPE 4: PHISHING DETECTIVE SIMULATOR
          ========================================================================= */}
      {activity.type === 'phishing-detector' && (
        <div className="phishing-container">
          <div className="phishing-cards-list">
            {(activity.initialData || []).map((msg: any, idx: number) => {
              const isSelected = selectedPhishingIdx === idx;
              const isTrap = msg.isPhishing === true || msg.isSafe === false;

              let cardClass = 'phishing-msg-card';
              if (phishingAnswered) {
                if (isTrap) cardClass += ' trap-detected';
                else if (isSelected && !isTrap) cardClass += ' wrong-selection';
              } else if (isSelected) {
                cardClass += ' selected';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handlePhishingSelect(idx, msg)}
                  className={cardClass}
                >
                  <div className="msg-card-top">
                    <span className="msg-index-pill">#{idx + 1}</span>
                    <span className="msg-hint-tag">
                      {phishingAnswered ? (
                        isTrap ? '🚨 PHISHING TRAP!' : '✅ SAFE MESSAGE'
                      ) : (
                        language === 'my' ? '👆 စစ်ဆေးရန်နှိပ်ပါ' : 'Click to inspect'
                      )}
                    </span>
                  </div>

                  <p className="msg-body-text">{msg.text || getItemLabel(msg)}</p>

                  {phishingAnswered && isTrap && (
                    <div className="trap-explanation-banner">
                      ⚠️ {language === 'my'
                        ? 'ဖမ်းမိပါပြီ! အရေးပေါ်တိုက်တွန်းခြင်း၊ အလကားလက်ဆောင်ဖြင့် မျှားခေါ်ခြင်းသည် Phishing ထောင်ချောက် ဖြစ်သည်။'
                        : 'Busted! Urgency pressure and free prize claims are classic Phishing traps!'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TYPE 5: LOOP COUNTER (Visual Repeat Stars)
          ========================================================================= */}
      {activity.type === 'loop-counter' && (
        <div className="loop-counter-container">
          <div className="loop-visual-card">
            <div className="loop-code-pill">
              <code>for (let i = 1; i &lt;= 5; i++) &#123; collectStar(); &#125;</code>
            </div>

            <div className="loop-stars-track">
              {[1, 2, 3, 4, 5].map((starNum) => (
                <div
                  key={starNum}
                  className={`loop-star-circle ${loopCount >= starNum ? 'collected' : ''}`}
                >
                  {loopCount >= starNum ? '⭐' : '⚪'}
                  <span className="star-num-label">#{starNum}</span>
                </div>
              ))}
            </div>

            <div className="loop-controls">
              <button
                onClick={() => {
                  const next = Math.min(loopCount + 1, 5);
                  setLoopCount(next);
                  if (next >= 5) {
                    setCompleted(true);
                    onCompleted?.();
                  }
                }}
                disabled={loopCount >= 5}
                className="kid-btn kid-btn-primary"
              >
                <Sparkles className="w-5 h-5" />
                <span>
                  {loopCount < 5
                    ? (language === 'my' ? `🔄 အကြိမ်ရေ +၁ ထပ်ခါလုပ်မည် (Loop Step ${loopCount + 1})` : `🔄 Repeat Loop Step ${loopCount + 1}`)
                    : (language === 'my' ? '🎉 ကြယ် ၅ လုံး စုဆောင်းပြီးပါပြီ!' : '🎉 5 Stars Collected!')}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TYPE 6: CONDITION TESTER (IF/ELSE Visual Toggle)
          ========================================================================= */}
      {activity.type === 'condition-tester' && (
        <div className="condition-tester-container">
          <div className="condition-visual-box">
            <div className="condition-toggle-bar">
              <span className="var-label">let isRaining =</span>
              <button
                onClick={() => {
                  const next = !conditionToggle;
                  setConditionToggle(next);
                  setCompleted(true);
                  onCompleted?.();
                }}
                className={`weather-toggle-btn ${conditionToggle ? 'rain' : 'sun'}`}
              >
                {conditionToggle ? '🌧️ true (Rainy)' : '☀️ false (Sunny)'}
              </button>
            </div>

            <div className="code-branches-block">
              <div className="code-branch-line">if (isRaining) &#123;</div>
              <div className={`code-branch-indent ${conditionToggle ? 'active-branch' : ''}`}>
                <span>☔ takeUmbrella(); // Raincoat & umbrella on!</span>
              </div>
              <div className="code-branch-line">&#125; else &#123;</div>
              <div className={`code-branch-indent ${!conditionToggle ? 'active-branch' : ''}`}>
                <span>🕶️ wearSunglasses(); // Cool sunglasses on!</span>
              </div>
              <div className="code-branch-line">&#125;</div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TYPE 7: PASSWORD CHECKER (Robot Cyber Shield)
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
              className="pass-input-field"
            />
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} />
              <span>
                {language === 'my'
                  ? '⚠️ လုံခြုံရေးအတွက် သင်၏ တကယ့်အစစ်အမှန် စကားဝှက်ကို မထည့်ပါနှင့်။'
                  : '⚠️ Never enter your real private passwords in any practice tool.'}
              </span>
            </div>
          </div>

          {/* Interactive Shield Energy Meter */}
          <div className="shield-meter-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#334155' }}>
                {language === 'my' ? '🛡️ Byte ၏ ဒိုင်းကာစွမ်းအင်:' : "🛡️ Byte's Shield Power:"}
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
          TYPE 8: CODE SANDBOX (HTML/CSS/JS Playground)
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
          SUCCESS CELEBRATION BOX
          ========================================================================= */}
      {completed && (
        <div className="celebration-box">
          <ByteMascot mood="success" size={76} />
          <div>
            <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#065f46', margin: '0 0 4px 0' }}>
              {language === 'my' ? '🎉 သာဓုပါ! မစ်ရှင် အောင်မြင်သွားပါပြီ!' : '🎉 Awesome Job! Mission Completed!'}
            </h4>
            <p style={{ fontSize: '13.5px', color: '#047857', margin: 0, fontWeight: 600 }}>
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
