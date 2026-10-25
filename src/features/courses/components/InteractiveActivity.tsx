import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Lock,
  Zap,
} from './Icons';
import { InteractiveActivityData } from '../../../types/course.types';
import { CodePlayground } from './CodePlayground';

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
          ? 'အစီအစဉ် မမှန်သေးပါ။ အဆင့်များကို သေချာပြန်စီစဉ်ကြည့်ပါ!'
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
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 md:p-6 shadow-xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-500/20 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
            <Zap className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                {language === 'my' ? 'လက်တွေ့လေ့ကျင့်ခန်း' : 'Interactive Practice Task'}
              </span>
              {completed && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {language === 'my' ? 'ပြီးမြောက်သည်' : 'Completed!'}
                </span>
              )}
            </div>
            <h4 className="text-base md:text-lg font-bold text-white">
              {title}
            </h4>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium border border-slate-700 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {language === 'my' ? 'ပြန်စမည်' : 'Reset'}
        </button>
      </div>

      {/* Instructions */}
      <div className="mb-5 bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-3.5 text-sm text-indigo-200/90 flex items-start gap-2.5">
        <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-300">
            {language === 'my' ? 'လုပ်ဆောင်ရမည့်အချက်:' : 'Instructions:'}
          </strong>{' '}
          {instructions}
        </div>
      </div>

      {/* Error / Alert */}
      {errorFeedback && (
        <div className="mb-4 bg-rose-950/60 border border-rose-500/40 rounded-xl p-3 text-sm text-rose-200 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{errorFeedback}</span>
        </div>
      )}

      {/* TYPE 1: SEQUENCE SORTER */}
      {activity.type === 'sequence-sorter' && (
        <div className="space-y-4">
          <div className="space-y-2">
            {sequenceItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  completed
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                    : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-bold font-mono">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium">{getItemLabel(item)}</span>
                </div>
                {!completed && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveSequenceItem(idx, 'up')}
                      disabled={idx === 0}
                      className="px-2.5 py-1 text-xs bg-slate-700 hover:bg-indigo-600 disabled:opacity-30 text-white rounded transition-colors"
                      title="Move up"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => moveSequenceItem(idx, 'down')}
                      disabled={idx === sequenceItems.length - 1}
                      className="px-2.5 py-1 text-xs bg-slate-700 hover:bg-indigo-600 disabled:opacity-30 text-white rounded transition-colors"
                      title="Move down"
                    >
                      ▼
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!completed && (
            <button
              onClick={checkSequence}
              className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {language === 'my' ? 'အဖြေစစ်ဆေးမည်' : 'Check Order'}
            </button>
          )}
        </div>
      )}

      {/* TYPE 2: CLASSIFICATION SORTER */}
      {activity.type === 'classification-sorter' && (
        <div className="space-y-4">
          {/* Unassigned items pool */}
          {unassignedItems.length > 0 && (
            <div className="p-3.5 bg-slate-800/80 border border-slate-700 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {language === 'my' ? 'ခွဲခြားရမည့် အချက်များ (နှိပ်၍ အကွက်ရွေးပါ):' : 'Items to Classify (Click to assign):'}
              </span>
              <div className="flex flex-wrap gap-2">
                {unassignedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 bg-slate-700/80 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  >
                    <span>{getItemLabel(item)}</span>
                    <div className="flex gap-1 ml-1 pl-1 border-l border-slate-600">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => assignCategory(item, cat)}
                          className="px-1.5 py-0.5 text-[10px] bg-slate-900/60 hover:bg-indigo-500 rounded text-slate-200 transition-colors uppercase font-mono"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <div
                key={cat}
                className="bg-slate-850 border border-slate-700/80 rounded-xl p-3.5 min-h-[130px] flex flex-col"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/60">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    📂 {cat}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {(assignedMap[cat] || []).length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 flex-1 items-start">
                  {(assignedMap[cat] || []).length === 0 ? (
                    <span className="text-xs text-slate-500 italic p-1">
                      {language === 'my' ? 'ဒီနေရာသို့ ထည့်ပါ' : 'Assign items here'}
                    </span>
                  ) : (
                    assignedMap[cat].map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        onClick={() => unassignCategory(item, cat)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-950/70 border border-indigo-500/40 text-indigo-200 cursor-pointer hover:border-rose-400 hover:text-rose-300 transition-colors"
                        title="Click to remove"
                      >
                        {getItemLabel(item)} <XCircle className="w-3 h-3 text-slate-400" />
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          {!completed && (
            <button
              onClick={checkClassification}
              className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {language === 'my' ? 'အဖြေစစ်ဆေးမည်' : 'Check Classification'}
            </button>
          )}
        </div>
      )}

      {/* TYPE 3: CODE SANDBOX */}
      {activity.type === 'code-sandbox' && (
        <CodePlayground
          initialHtml={activity.initialData?.html}
          initialCss={activity.initialData?.css}
          initialJs={activity.initialData?.js}
          title={title}
          language={language}
        />
      )}

      {/* TYPE 4: PASSWORD CHECKER */}
      {activity.type === 'password-checker' && (
        <div className="space-y-4">
          <div className="relative">
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
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm outline-none focus:border-indigo-500 font-mono"
            />
            <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>
                {language === 'my'
                  ? '⚠️ လုံခြုံရေးအတွက် သင်၏ တကယ့်အစစ်အမှန် စကားဝှက်ကို မထည့်ပါနှင့်။'
                  : '⚠️ Never enter your real private passwords in any practice tool.'}
              </span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">
                {language === 'my' ? 'စကားဝှက် ခိုင်မာမှု:' : 'Password Strength:'}
              </span>
              <span
                className={`font-bold ${
                  passScore < 40
                    ? 'text-rose-400'
                    : passScore < 80
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                }`}
              >
                {passScore}% -{' '}
                {passScore < 40
                  ? language === 'my'
                    ? 'အားနည်းလွန်းသည်'
                    : 'Weak'
                  : passScore < 80
                  ? language === 'my'
                    ? 'အသင့်အတင့်'
                    : 'Medium'
                  : language === 'my'
                  ? 'အလွန်ခိုင်မာသည်!'
                  : 'Strong & Safe!'}
              </span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  passScore < 40
                    ? 'bg-rose-500'
                    : passScore < 80
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'
                }`}
                style={{ width: `${passScore}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* TYPE 5: CONDITION TESTER */}
      {activity.type === 'condition-tester' && (
        <div className="space-y-4">
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="text-indigo-400 font-bold">
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
                className={`px-3 py-1 rounded font-bold transition-all ${
                  conditionToggle
                    ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                    : 'bg-slate-750 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {conditionToggle ? 'true' : 'false'} (Click to toggle)
              </button>
              ;
            </div>
            <div>if (isRaining) &#123;</div>
            <div
              className={`pl-4 py-1 rounded transition-colors ${
                conditionToggle ? 'bg-cyan-950/60 text-cyan-300 font-bold' : 'text-slate-500'
              }`}
            >
              takeUmbrella(); // ☔️ Raincoat and umbrella
            </div>
            <div>&#125; else &#123;</div>
            <div
              className={`pl-4 py-1 rounded transition-colors ${
                !conditionToggle ? 'bg-amber-950/60 text-amber-300 font-bold' : 'text-slate-500'
              }`}
            >
              wearSunglasses(); // 🕶️ Sunny hat and sunglasses
            </div>
            <div>&#125;</div>
          </div>
        </div>
      )}

      {/* Success Banner */}
      {completed && (
        <div className="mt-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl p-3.5 text-xs md:text-sm text-emerald-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              {language === 'my'
                ? '🎉 သာဓုပါ! သင်သည် ဤလက်တွေ့လေ့ကျင့်ခန်းကို အောင်မြင်စွာ လုပ်ဆောင်ပြီးပါပြီ!'
                : '🎉 Excellent work! You successfully completed this interactive practice!'}
            </span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">
            Active
          </span>
        </div>
      )}
    </div>
  );
};
