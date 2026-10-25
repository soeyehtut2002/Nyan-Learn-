import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useTranslation } from '../../i18n/LanguageContext';
import { AudioService } from '../../services/audio/AudioService';

interface Question {
  my: string;
  en: string;
  opts: [string, string][];
  correct: number;
  whyMy: string;
  whyEn: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    my: 'Algorithm ဆိုတာ ဘာလဲ?',
    en: 'What is an algorithm in computing?',
    opts: [
      ['အဆင့်လိုက် လုပ်ဆောင်ရမည့် ညွှန်ကြားချက်များ', 'A step-by-step set of ordered instructions'],
      ['ကွန်ပျူတာမျက်နှာပြင်', 'A computer monitor screen'],
      ['အင်တာနက်ကြိုး', 'An internet networking cable'],
      ['ဂိမ်းထဲက ရမှတ်', 'A video game high score']
    ],
    correct: 0,
    whyMy: 'Algorithm ဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့ သို့မဟုတ် အလုပ်တစ်ခုပြီးမြောက်ဖို့ အစီအစဉ်တကျ ရေးဆွဲထားတဲ့ အဆင့်တွေဖြစ်ပါတယ်။',
    whyEn: 'An algorithm is a precise, ordered sequence of instructions followed to solve a problem or accomplish a goal.'
  },
  {
    my: 'Coding မှာ Loop ကို ဘာအတွက် အဓိက သုံးသလဲ?',
    en: 'What is a Loop used for in programming?',
    opts: [
      ['အလုပ်တစ်ခုကို ထပ်ခါထပ်ခါ လုပ်ဆောင်ရန်', 'To repeat an action multiple times'],
      ['ကွန်ပျူတာကို ချက်ချင်းပိတ်ရန်', 'To shut down the computer immediately'],
      ['ပုံဆွဲရန်သာ သုံးခြင်း', 'Only used for drawing shapes'],
      ['Password ဖျက်ပစ်ရန်', 'To delete a user password']
    ],
    correct: 0,
    whyMy: 'Loop က တူညီတဲ့ လုပ်ဆောင်ချက်ကို အကြိမ်ကြိမ် ပြန်မရေးရဘဲ အလိုအလျောက် ထပ်ခါထပ်ခါ လုပ်ဆောင်စေနိုင်ပါတယ်။',
    whyEn: 'Loops let programs repeat actions efficiently without needing to duplicate lines of code.'
  },
  {
    my: 'AI စနစ်တစ်ခုကို သင်ယူတတ်မြောက်အောင် ဘာက အဓိက ကူညီသလဲ?',
    en: 'What is essential to train an AI model?',
    opts: [
      ['အရည်အသွေးမြင့် ဥပမာများနှင့် Data', 'Quality examples and training data'],
      ['ကျပန်းခန့်မှန်းခြင်းသက်သက်', 'Pure random guessing'],
      ['ကွန်ပျူတာမျက်နှာပြင် အရောင်', 'The color of the computer screen'],
      ['Mouse ရဲ့ အရွယ်အစား', 'The physical size of the computer mouse']
    ],
    correct: 0,
    whyMy: 'AI model များသည် ပေးထားသော ဥပမာများနှင့် Data များထဲမှ Pattern များကို ရှာဖွေသင်ယူကြပါတယ်။',
    whyEn: 'Machine learning models identify patterns and rules from quality dataset examples.'
  },
  {
    my: 'အွန်လိုင်းပေါ်မှာ ကိုယ်ရေးအချက်အလက်ကို ဘယ်လို ကိုင်တွယ်သင့်သလဲ?',
    en: 'How should you handle personal information online?',
    opts: [
      ['မိဘ သို့မဟုတ် ယုံကြည်ရသူကို အမြဲတိုင်ပင်ပြီး လုံခြုံစွာထားမယ်', 'Keep it private & ask a trusted adult first'],
      ['တွေ့သမျှလူတိုင်းကို အားမနာဘဲ ပေးမယ်', 'Share it freely with anyone who asks'],
      ['Password ကို လူမှုကွန်ရက်ပေါ် တင်မယ်', 'Post your secret passwords on social media'],
      ['မသိတဲ့ Link အားလုံးကို လိုက်ဖွင့်မယ်', 'Click on every random link from strangers']
    ],
    correct: 0,
    whyMy: 'လုံခြုံရေးအတွက် ကိုယ်ရေးအချက်အလက်များကို မသိသူများနှင့် မမျှဝေဘဲ ယုံကြည်ရသော မိဘ/လူကြီးများကို အမြဲ တိုင်ပင်ပါ။',
    whyEn: 'Protecting your identity and passwords is vital. Always consult a parent or guardian before sharing data.'
  }
];

export const QuizView: React.FC = () => {
  const { lang, t } = useTranslation();
  const { progress, award } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(idx);

    const isCorrect = idx === currentQ.correct;
    if (isCorrect) {
      setScore(s => s + 1);
      AudioService.play('correct');
    } else {
      AudioService.play('wrong');
    }
  };

  const handleNext = () => {
    AudioService.play('step');
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      if (!progress.quizDone) {
        award(10, 'quiz');
      }
    }
  };

  const handleRestart = () => {
    AudioService.play('step');
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setIsFinished(false);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h2 className="panel-title">{t('quiz.title')}</h2>
        <p className="panel-desc">{t('quiz.desc')}</p>
      </div>

      {!isFinished ? (
        <>
          <div className="quiz-header">
            <span>
              {lang === 'my'
                ? `မေးခွန်း ${currentIndex + 1} / ${QUIZ_QUESTIONS.length}`
                : `Question ${currentIndex + 1} of ${QUIZ_QUESTIONS.length}`}
            </span>
            <span>
              {lang === 'my' ? `ရမှတ်: ${score}` : `Score: ${score}`}
            </span>
          </div>

          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${(currentIndex / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          <h3 className="quiz-question">{currentQ[lang]}</h3>

          <div className="quiz-options">
            {currentQ.opts.map((optionTuple, index) => {
              const text = lang === 'my' ? optionTuple[0] : optionTuple[1];
              const letter = String.fromCharCode(65 + index);

              let optionClass = 'quiz-option';
              if (isAnswered) {
                if (index === currentQ.correct) {
                  optionClass += ' correct';
                } else if (index === selectedOption) {
                  optionClass += ' wrong';
                }
              }

              return (
                <button
                  key={index}
                  className={optionClass}
                  disabled={isAnswered}
                  onClick={() => handleSelect(index)}
                >
                  <span style={{ fontWeight: 900, color: 'var(--purple-main)' }}>{letter}.</span>
                  <span>{text}</span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="callout-box" style={{ marginTop: '16px' }} aria-live="polite">
              <strong>
                {selectedOption === currentQ.correct
                  ? (lang === 'my' ? '✓ မှန်ကန်ပါတယ်!' : '✓ Correct!')
                  : (lang === 'my' ? '✕ မမှန်သေးပါ၊ ဒါပေမဲ့ ကောင်းမွန်တဲ့ ကြိုးစားမှုပါ။' : '✕ Not quite, but good effort!')}
              </strong>
              <span>{lang === 'my' ? currentQ.whyMy : currentQ.whyEn}</span>
            </div>
          )}

          {isAnswered && (
            <div style={{ marginTop: '18px' }}>
              <button className="btn-primary" onClick={handleNext}>
                {currentIndex === QUIZ_QUESTIONS.length - 1 ? t('quiz.see_results') : t('quiz.next')}
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: '50px', marginBottom: '12px' }}>🎉 🌟 🧠</div>
          <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>
            {t('quiz.complete')}
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--ink-secondary)', marginBottom: '20px' }}>
            {lang === 'my'
              ? `${QUIZ_QUESTIONS.length} ခုထဲက ${score} ခု မှန်ကန်စွာ ဖြေဆိုနိုင်ခဲ့ပါတယ်။ +10 XP ရရှိပါပြီ!`
              : `You scored ${score} out of ${QUIZ_QUESTIONS.length}! +10 XP earned!`}
          </p>

          <button className="btn-primary" onClick={handleRestart}>
            {t('quiz.try_again')}
          </button>
        </div>
      )}
    </div>
  );
};
