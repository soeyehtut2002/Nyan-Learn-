import React, { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { audioService } from '../../services/audio/AudioService';

interface TopicKnowledge {
  titleMy: string;
  titleEn: string;
  bodyMy: string;
  bodyEn: string;
}

const TUTOR_KNOWLEDGE_BASE: Record<string, TopicKnowledge> = {
  algorithm: {
    titleMy: 'Algorithm ဆိုတာ ဘာလဲ?',
    titleEn: 'What is an algorithm?',
    bodyMy: 'Algorithm (အယ်လဂိုရီသမ်) ဆိုတာ အလုပ်တစ်ခုကို အောင်မြင်အောင် လုပ်ဆောင်ဖို့ ရေးဆွဲထားတဲ့ အဆင့်လိုက် ညွှန်ကြားချက်တွေ ဖြစ်ပါတယ်။ ဥပမာ — မနက်ခင်း သွားတိုက်ဖို့ သွားတိုက်တံယူမယ်၊ သွားတိုက်ဆေးတင်မယ်၊ သွားတိုက်မယ်၊ ပါးလုတ်ကျင်းမယ် ဆိုတဲ့ အဆင့်တွေကို စနစ်တကျ လိုက်နာရသလိုပါပဲ!',
    bodyEn: 'An algorithm is an ordered set of step-by-step instructions to solve a problem. Think of a recipe for baking cookies or the exact steps you take to tie your shoelaces!'
  },
  loop: {
    titleMy: 'Loop ဆိုတာ ဘာလဲ?',
    titleEn: 'What is a loop?',
    bodyMy: 'Loop ဆိုတာ တူညီတဲ့ လုပ်ဆောင်ချက်တစ်ခု သို့မဟုတ် အများအပြားကို ထပ်ခါထပ်ခါ လုပ်စေဖို့ အသုံးပြုတာပါ။ ဥပမာ — သီချင်းတစ်ပုဒ်ကို ထပ်ခါတလဲလဲ ဖွင့်တာ ဒါမှမဟုတ် ကြယ် ၁၀ ပွင့်ကို တစ်ခုပြီးတစ်ခု ဆွဲဖို့ ကွန်ပျူတာကို Loop ပတ်ခိုင်းနိုင်ပါတယ်။',
    bodyEn: 'A loop tells a computer to repeat a set of actions without having to write them over and over. For example, telling a game character to walk 10 steps using one repeat command instead of 10 separate ones!'
  },
  ai: {
    titleMy: 'AI က ဘယ်လို သင်ယူသလဲ?',
    titleEn: 'How does AI learn?',
    bodyMy: 'AI (ဉာဏ်ရည်တု) စနစ်တွေဟာ လူသားတွေလိုပဲ ဥပမာတွေ၊ ဓာတ်ပုံတွေနဲ့ စာသား အမြောက်အမြားကို လေ့လာပြီး Pattern (ပုံစံတူများ) ကို ရှာဖွေသင်ယူပါတယ်။ အကယ်၍ သင်ပေးတဲ့ ဥပမာတွေမှာ အမှားပါနေရင် AI ကလည်း အမှားလုပ်တတ်တဲ့အတွက် လူသားတွေက အမြဲ ပြန်လည်စစ်ဆေးပေးဖို့ လိုအပ်ပါတယ်။',
    bodyEn: 'AI models learn patterns by reviewing huge collections of examples (like thousands of pictures of cats and dogs). Because AI only knows what it has been taught, humans must always double-check its answers for safety and accuracy!'
  },
  bug: {
    titleMy: 'Coding မှာ Bug ဆိုတာ ဘာလဲ?',
    titleEn: 'What is a bug in code?',
    bodyMy: 'Bug ဆိုတာ Program ထဲမှာ ဖြစ်ပေါ်နေတဲ့ အမှားအယွင်း သို့မဟုတ် ချို့ယွင်းချက်ကို ခေါ်တာပါ။ Bug ကို ရှာဖွေပြင်ဆင်တာကိုတော့ Debugging လို့ ခေါ်ပြီး Programmer တိုင်း နေ့စဉ် ရင်ဆိုင်ဖြေရှင်းရတဲ့ ပျော်စရာ ပဟေဠိတစ်ခု ဖြစ်ပါတယ်။',
    bodyEn: 'A bug is an error or mistake in computer code that prevents a program from running correctly. Finding and fixing these mistakes is called "debugging" — it makes you a true coding detective!'
  },
  safety: {
    titleMy: 'အွန်လိုင်းမှာ ဘယ်လို လုံခြုံမလဲ?',
    titleEn: 'How do I stay safe online?',
    bodyMy: 'အွန်လိုင်းမှာ လုံခြုံစေဖို့ ကိုယ့်ရဲ့ အမည်အပြည့်အစုံ၊ အိမ်လိပ်စာ၊ ကျောင်းအမည်၊ ဖုန်းနံပါတ်၊ Password တွေနဲ့ ဓာတ်ပုံတွေကို မသိသူတွေဆီ လုံးဝ မပေးပါနဲ့။ စိတ်မသက်မသာဖြစ်စရာ ဒါမှမဟုတ် မသင်္ကာစရာ တစ်ခုခု ကြုံတွေ့ရပါက ယုံကြည်ရတဲ့ မိဘ သို့မဟုတ် လူကြီးတစ်ယောက်ကို အမြဲ အသိပေးပါ။',
    bodyEn: 'To stay safe online: never share private info like passwords, addresses, full names, or phone numbers with anyone you meet on the internet. If anything ever makes you feel uncomfortable, immediately tell a trusted adult or teacher!'
  }
};

export const AITutorView: React.FC = () => {
  const { lang, t } = useTranslation();
  const [activeTopic, setActiveTopic] = useState<string>('algorithm');
  const [customInput, setCustomInput] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState<{ title: string; body: string }>({
    title: lang === 'my' ? TUTOR_KNOWLEDGE_BASE.algorithm.titleMy : TUTOR_KNOWLEDGE_BASE.algorithm.titleEn,
    body: lang === 'my' ? TUTOR_KNOWLEDGE_BASE.algorithm.bodyMy : TUTOR_KNOWLEDGE_BASE.algorithm.bodyEn
  });

  const selectTopic = (topicKey: string) => {
    setActiveTopic(topicKey);
    const knowledge = TUTOR_KNOWLEDGE_BASE[topicKey];
    if (knowledge) {
      setCurrentAnswer({
        title: lang === 'my' ? knowledge.titleMy : knowledge.titleEn,
        body: lang === 'my' ? knowledge.bodyMy : knowledge.bodyEn
      });
      audioService.play('step');
    }
  };

  const handleCustomQuestion = () => {
    const query = customInput.trim().toLowerCase();
    if (!query) {
      selectTopic('algorithm');
      return;
    }

    audioService.play('step');

    if (query.includes('loop') || query.includes('repeat') || query.includes('ထပ်')) {
      selectTopic('loop');
    } else if (query.includes('bug') || query.includes('error') || query.includes('အမှား')) {
      selectTopic('bug');
    } else if (query.includes('ai') || query.includes('learn') || query.includes('ဉာဏ်')) {
      selectTopic('ai');
    } else if (query.includes('safe') || query.includes('password') || query.includes('လုံခြုံ')) {
      selectTopic('safety');
    } else {
      setActiveTopic('');
      setCurrentAnswer({
        title: lang === 'my'
          ? `"${customInput}" အကြောင်း မေးခွန်းအတွက် ကျေးဇူးတင်ပါတယ်!`
          : `Great question about "${customInput}"!`,
        body: lang === 'my'
          ? 'ဒီ Demo စနစ်တွင် ကလေးများ လုံခြုံရေးအတွက် ကြိုတင်စိစစ်ထားသော ပညာပေးအဖြေများကိုသာ အသုံးပြုထားပါတယ်။ Algorithm၊ Loop၊ AI၊ Bug နှင့် Online Safety စသည့် အဓိက ခေါင်းစဉ်များကို အပေါ်ရှိ ခလုတ်များမှတစ်ဆင့် အလွယ်တကူ လေ့လာနိုင်ပါတယ်!'
          : 'In this child-safe prototype, all answers are locally simulated and curated to protect your privacy. You can tap the popular topic buttons above (Algorithm, Loop, AI, Bug, Online Safety) to explore fundamental coding concepts safely!'
      });
    }

    setCustomInput('');
  };

  return (
    <div className="section-container">
      <div className="card">
        <div className="card-header">
          <span className="card-icon">🤖</span>
          <div>
            <h2>{t('aiTutorTitle')}</h2>
            <p className="card-subtitle">{t('aiTutorSubtitle')}</p>
          </div>
        </div>

        <div className="simulation-notice-banner">
          <span>🛡️</span>
          <div>
            <strong>
              {lang === 'my'
                ? 'ကလေးများအတွက် လုံခြုံစိတ်ချရသော Simulation စနစ်'
                : 'Child-Safe Simulation Notice'}
            </strong>
            <p style={{ margin: 0, fontSize: '13px' }}>
              {lang === 'my'
                ? 'ဒီ AI Tutor သည် ပြင်ပဆာဗာသို့ အချက်အလက် မပို့ဘဲ ကြိုတင်စိစစ်ထားသော ပညာပေး အချက်အလက်များကိုသာ ဖော်ပြပေးပါသည်။'
                : 'All responses are generated locally from a curated, kid-friendly educational knowledge base without external network calls.'}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 800, marginBottom: '8px' }}>
            {lang === 'my' ? 'လေ့လာလိုသော ခေါင်းစဉ်ကို ရွေးချယ်ပါ:' : 'Choose a topic to explore:'}
          </p>

          <div className="tutor-topic-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {[
              { id: 'algorithm', label: 'Algorithm 📋' },
              { id: 'loop', label: 'Loop 🔁' },
              { id: 'ai', label: 'AI Learning 🤖' },
              { id: 'bug', label: 'Bug & Debugging 🐛' },
              { id: 'safety', label: 'Online Safety 🛡️' }
            ].map(topic => (
              <button
                key={topic.id}
                type="button"
                className={`btn ${activeTopic === topic.id ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '8px 14px', fontSize: '14px' }}
                onClick={() => selectTopic(topic.id)}
              >
                {topic.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <input
              type="text"
              className="input-field"
              placeholder={lang === 'my' ? 'မေးခွန်းတစ်ခုခု ရိုက်ထည့်ပါ (ဥပမာ - loop ဆိုတာ ဘာလဲ?)...' : 'Ask a question (e.g., what is a loop?)...'}
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCustomQuestion()}
              style={{ flex: 1, padding: '10px 14px', borderRadius: '12px', border: '2px solid #e2e8f0', fontSize: '14px' }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCustomQuestion}
            >
              {lang === 'my' ? 'မေးမယ်' : 'Ask'}
            </button>
          </div>

          <div className="tutor-answer-card" style={{ background: '#f8fafc', padding: '18px', borderRadius: '16px', border: '2px solid #e2e8f0' }}>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ background: '#ede9fe', color: '#7c3aed', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 800 }}>
                🤖 AI Tutor (Simulation)
              </span>
            </div>
            <strong style={{ fontSize: '16px', display: 'block', marginBottom: '6px' }}>
              {currentAnswer.title}
            </strong>
            <p style={{ margin: 0, color: 'var(--text-sub)', lineHeight: 1.6 }}>
              {currentAnswer.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
