import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { useProgress } from '../../context/ProgressContext';

interface LearningPathViewProps {
  onNavigate: (page: string) => void;
}

export const LearningPathView: React.FC<LearningPathViewProps> = ({ onNavigate }) => {
  const { lang, t } = useTranslation();
  const { state } = useProgress();

  const steps = [
    {
      num: 1,
      id: 'coding',
      title: lang === 'my' ? 'အဆင့် ၁: Robot Maze' : 'Step 1: Robot Maze',
      desc: lang === 'my'
        ? 'စနစ်တကျ အစီအစဉ်ရေးဆွဲခြင်း (Sequencing) နှင့် အယ်လဂိုရီသမ် သဘောတရားများကို 🤖 Robot လမ်းပြရင်း စတင်လေ့လာပါ။'
        : 'Learn sequencing, step-by-step algorithms, and spatial logic by guiding the robot through 10 challenging maze levels.',
      completed: state.mazeDone,
      btnLabel: lang === 'my' ? 'Robot Maze ကစားမယ် →' : 'Play Robot Maze →'
    },
    {
      num: 2,
      id: 'quiz',
      title: lang === 'my' ? 'အဆင့် ၂: Brain Quiz' : 'Step 2: Brain Quiz',
      desc: lang === 'my'
        ? 'ကွန်ပျူတာ အခြေခံသဘောတရားများ၊ AI နိဒါန်းနှင့် အင်တာနက်ပေါ်တွင် လုံခြုံစွာ နေထိုင်နည်းဆိုင်ရာ မေးခွန်းများကို ဖြေဆိုပါ။'
        : 'Test your understanding of algorithms, AI basics, debugging, and online safety principles with interactive quizzes.',
      completed: state.quizDone,
      btnLabel: lang === 'my' ? 'Brain Quiz စတင်မယ် →' : 'Start Brain Quiz →'
    },
    {
      num: 3,
      id: 'ai',
      title: lang === 'my' ? 'အဆင့် ၃: AI Detective Lab' : 'Step 3: AI Detective Lab',
      desc: lang === 'my'
        ? 'Pattern Recognition နှင့် အချက်အလက် ခွဲခြားသတ်မှတ်ခြင်း (Classification) ဖြင့် AI မော်ဒယ်များကို သင်ကြားပေးပါ။'
        : 'Explore pattern recognition, machine learning datasets, and why quality training data matters.',
      completed: state.aiDone,
      btnLabel: lang === 'my' ? 'AI Lab စမ်းသပ်မယ် →' : 'Enter AI Lab →'
    },
    {
      num: 4,
      id: 'builder',
      title: lang === 'my' ? 'အဆင့် ၄: Code Builder Sandbox' : 'Step 4: Code Builder Sandbox',
      desc: lang === 'my'
        ? 'Google Blockly နှင့် Visual Block များဖြင့် ကိုယ်ပိုင် Program များကို စိတ်ကြိုက် ဖန်တီးတည်ဆောက်ကာ Run ကြည့်ပါ။'
        : 'Assemble visual code blocks, run live animations, and explore code generation using Google Blockly.',
      completed: state.builderDone,
      btnLabel: lang === 'my' ? 'Code Builder သွားမယ် →' : 'Open Code Builder →'
    }
  ];

  return (
    <div className="section-container">
      <div className="card">
        <div className="card-header">
          <span className="card-icon">🗺️</span>
          <div>
            <h2>{t('learningPathTitle')}</h2>
            <p className="card-subtitle">{t('learningPathSubtitle')}</p>
          </div>
        </div>

        <div className="learning-path-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {steps.map(step => (
            <div
              key={step.num}
              className="card"
              style={{
                borderLeft: `5px solid ${step.completed ? 'var(--green-main)' : 'var(--purple-main)'}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <h3 style={{ margin: 0 }}>{step.title}</h3>
                  {step.completed && (
                    <span style={{
                      background: '#dcfce7',
                      color: '#15803d',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 800
                    }}>
                      {lang === 'my' ? '✓ ပြီးပါပြီ' : '✓ Completed'}
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, color: 'var(--text-sub)', fontSize: '14px', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => onNavigate(step.id)}
                >
                  {step.btnLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
