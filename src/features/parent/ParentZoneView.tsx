import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useTranslation } from '../../i18n/LanguageContext';

export const ParentZoneView: React.FC = () => {
  const { state, currentLevel, resetAllProgress } = useProgress();
  const { lang, t } = useTranslation();

  const handleReset = () => {
    const confirmMsg = lang === 'my'
      ? 'ဒီစက်ပေါ်ရှိ သင်ယူမှုမှတ်တမ်း (XP၊ အဆင့်၊ ဖွင့်ထားသော Level များနှင့် ဆုတံဆိပ်များ) အားလုံးကို ပြန်လည်စတင်လိုပါသလား?'
      : 'Reset all your local progress, unlocked levels, XP, and badges on this browser?';
    if (window.confirm(confirmMsg)) {
      resetAllProgress();
    }
  };

  const doneLabel = lang === 'my' ? 'ပြီးပါပြီ ✓' : 'Completed ✓';
  const notDoneLabel = lang === 'my' ? 'မစရသေး' : 'Not started';

  return (
    <div className="section-container">
      <div className="card">
        <div className="card-header">
          <span className="card-icon">👨‍👩‍👧</span>
          <div>
            <h2>{t('parentZoneTitle')}</h2>
            <p className="card-subtitle">{t('parentZoneSubtitle')}</p>
          </div>
        </div>

        <h3 style={{ margin: '16px 0 12px' }}>
          {lang === 'my' ? 'ကလေး၏ လက်ရှိ သင်ယူမှု အခြေအနေ' : "Learner's Current Progress"}
        </h3>

        <div className="stats-grid" style={{ marginBottom: '24px' }}>
          <div className="stat-card">
            <span className="stat-value">{state.xp} XP</span>
            <span className="stat-label">Total Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">Level {currentLevel}</span>
            <span className="stat-label">Mastery Rank</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{state.completedMazeLevels.length}/15</span>
            <span className="stat-label">Maze Levels Cleared</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{state.quizDone ? doneLabel : notDoneLabel}</span>
            <span className="stat-label">Brain Quiz</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{state.aiDone ? doneLabel : notDoneLabel}</span>
            <span className="stat-label">AI Detective</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{state.badges.length}/5</span>
            <span className="stat-label">Badges Earned</span>
          </div>
        </div>

        <div className="card" style={{ background: '#f8fafc', marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 10px', color: 'var(--purple-main)' }}>
            {lang === 'my' ? 'ကလေးများ သင်ယူရရှိမည့် စွမ်းရည်များ' : 'Key Digital Competencies'}
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-sub)' }}>
            <li>
              <strong>{lang === 'my' ? 'အယ်လဂိုရီသမ် စဉ်းစားတွေးခေါ်မှု:' : 'Algorithmic Thinking:'}</strong>{' '}
              {lang === 'my'
                ? 'ရှုပ်ထွေးသော ပြဿနာများကို အဆင့်လိုက် ရှင်းလင်းစွာ ဖြေရှင်းနည်း'
                : 'Decomposing challenges into clear, sequential action steps.'}
            </li>
            <li>
              <strong>{lang === 'my' ? 'AI နှင့် Data သိမြင်မှု:' : 'AI & Data Literacy:'}</strong>{' '}
              {lang === 'my'
                ? 'ကွန်ပျူတာ မော်ဒယ်များသည် Data ဥပမာများမှတစ်ဆင့် သင်ယူကြောင်း နားလည်ခြင်း'
                : 'Understanding that machine learning models learn through dataset patterns.'}
            </li>
            <li>
              <strong>{lang === 'my' ? 'အင်တာနက် လုံခြုံရေး အလေ့အကျင့်:' : 'Cyber Safety Mindset:'}</strong>{' '}
              {lang === 'my'
                ? 'ကိုယ်ရေးအချက်အလက်ကို ထိန်းသိမ်းခြင်းနှင့် မသင်္ကာစရာများကို မိဘနှင့် တိုင်ပင်ခြင်း'
                : 'Protecting personal privacy and consulting trusted guardians.'}
            </li>
          </ul>
        </div>

        <div className="card" style={{ background: '#ecfdf5', borderColor: '#a7f3d0', marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#065f46' }}>
            🛡️ {lang === 'my' ? 'ကလေးများ လုံခြုံရေးနှင့် သီးသန့်လွတ်လပ်ခွင့် (COPPA Compliant)' : 'Child Privacy & Safety Guarantee'}
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#047857', lineHeight: 1.6 }}>
            {lang === 'my'
              ? 'CodeQuest သည် မည်သည့် ကိုယ်ရေးအချက်အလက်၊ အီးမေးလ် သို့မဟုတ် တည်နေရာကိုမျှ မတောင်းခံပါ။ အချက်အလက် အားလုံးကို အသုံးပြုသူ၏ ကွန်ပျူတာ (Browser localStorage) တွင်သာ လုံခြုံစွာ သိမ်းဆည်းထားပြီး ကြော်ငြာများ လုံးဝ မပါဝင်ပါ။'
              : 'CodeQuest does not collect personal identifiers, emails, or location data. All gameplay progress is stored locally in the browser. Zero ads, zero trackers.'}
          </p>
        </div>

        <div style={{ borderTop: '2px dashed #e2e8f0', paddingTop: '16px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#ef4444' }}>
            ⚠️ {lang === 'my' ? 'မှတ်တမ်းများ ပြန်လည်သတ်မှတ်ခြင်း' : 'Danger Zone / Progress Reset'}
          </h4>
          <p style={{ margin: '0 0 12px', fontSize: '13px', color: 'var(--text-sub)' }}>
            {lang === 'my'
              ? 'ဒီစက်ပေါ်ရှိ XP၊ Level၊ ဖွင့်ထားသော Maze အဆင့်များနှင့် Badges အားလုံးကို စတင်အခြေအနေသို့ ပြန်ထားပါမည်။'
              : 'Reset all progress, XP, unlocked maze stages, and badges back to initial defaults on this device.'}
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleReset}
            style={{ color: '#ef4444', borderColor: '#ef4444' }}
          >
            {lang === 'my' ? 'မှတ်တမ်းအားလုံး ပြန်စတင်မည်' : 'Reset All Progress'}
          </button>
        </div>
      </div>
    </div>
  );
};
