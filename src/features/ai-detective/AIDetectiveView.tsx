import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useTranslation } from '../../i18n/LanguageContext';

interface TrainingItem {
  emoji: string;
  name: string;
  my: string;
  type: 'fruit' | 'vehicle' | 'animal';
}

const AI_TRAINING_ITEMS: TrainingItem[] = [
  { emoji: '🍎', name: 'Apple', my: 'ပန်းသီး', type: 'fruit' },
  { emoji: '🚗', name: 'Car', my: 'ကား', type: 'vehicle' },
  { emoji: '🍌', name: 'Banana', my: 'ငှက်ပျောသီး', type: 'fruit' },
  { emoji: '🚌', name: 'Bus', my: 'ဘတ်စ်ကား', type: 'vehicle' },
  { emoji: '🐱', name: 'Cat', my: 'ကြောင်', type: 'animal' },
  { emoji: '✈️', name: 'Airplane', my: 'လေယာဉ်', type: 'vehicle' }
];

export const AIDetectiveView: React.FC = () => {
  const { awardXP, markModuleCompleted } = useProgress();
  const { lang, t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState<{ isMatch: boolean; message: string; sub: string } | null>(null);

  const currentItem = AI_TRAINING_ITEMS[currentIndex];

  const categoryNames = {
    fruit: lang === 'my' ? 'သစ်သီး' : 'Fruit',
    vehicle: lang === 'my' ? 'ယာဉ်' : 'Vehicle',
    animal: lang === 'my' ? 'တိရစ္ဆာန်' : 'Animal'
  };

  const handleCategorySelect = (selectedCategory: 'fruit' | 'vehicle' | 'animal') => {
    if (isAnswered || isFinished) return;
    setIsAnswered(true);

    const isMatch = selectedCategory === currentItem.type;
    if (isMatch) {
      setCorrectCount(prev => prev + 1);
    }

    const message = isMatch
      ? (lang === 'my' ? '✓ မှန်ကန်ပါတယ်!' : '✓ Correct!')
      : (lang === 'my' ? '✕ မမှန်သေးပါ။' : '✕ Not quite.');

    const sub = isMatch
      ? (lang === 'my'
          ? `ပုံစံမှန်ကန်သော ဥပမာများသည် AI အား တိကျစွာ ခွဲခြားနိုင်စေပါတယ်။ (${categoryNames[currentItem.type]})`
          : `Accurate labels help train the pattern recognizer properly. (${categoryNames[currentItem.type]})`)
      : (lang === 'my'
          ? `ဒီအရာ၏ အမှန်အမျိုးအစားမှာ "${categoryNames[currentItem.type]}" ဖြစ်ပါတယ်။ မှားယွင်းသော Label က AI ကို အမှားသင်ပေးတတ်ပါတယ်။`
          : `The correct category is "${categoryNames[currentItem.type]}". Mislabelled training data confuses AI systems.`);

    setFeedback({ isMatch, message, sub });
  };

  const handleNext = () => {
    if (isFinished) {
      setCurrentIndex(0);
      setCorrectCount(0);
      setIsFinished(false);
      setIsAnswered(false);
      setFeedback(null);
      return;
    }

    if (currentIndex < AI_TRAINING_ITEMS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
      setFeedback(null);
    } else {
      setIsFinished(true);
      markModuleCompleted('aiDone');
      awardXP(15, 'ai');
    }
  };

  return (
    <div className="section-container">
      <div className="card">
        <div className="card-header">
          <span className="card-icon">✨</span>
          <div>
            <h2>{t('aiDetectiveTitle')}</h2>
            <p className="card-subtitle">{t('aiDetectiveSubtitle')}</p>
          </div>
        </div>

        {!isFinished ? (
          <div>
            <div className="ai-training-card">
              <span className="ai-emoji-display">{currentItem.emoji}</span>
              <h3 style={{ fontSize: '24px', margin: '8px 0 4px' }}>
                {lang === 'my' ? currentItem.my : currentItem.name}
              </h3>
              <p style={{ color: 'var(--text-sub)', margin: 0, fontWeight: 700 }}>
                {lang === 'my' ? 'ဘယ်အမျိုးအစားထဲ ထည့်မလဲ?' : 'Which category does this fit?'}
              </p>
            </div>

            <p style={{ fontWeight: 800, textAlign: 'center', margin: '16px 0 10px' }}>
              {lang === 'my'
                ? `ပုံ #${currentIndex + 1} — ဒီအရာကို AI က ဘယ်လိုခွဲခြားမလဲ?`
                : `Example #${currentIndex + 1} — Which category should AI place this into?`}
            </p>

            <div className="ai-btn-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '16px 0' }}>
              <button
                type="button"
                className="btn btn-outline"
                disabled={isAnswered}
                onClick={() => handleCategorySelect('fruit')}
              >
                🍎 {categoryNames.fruit}
              </button>
              <button
                type="button"
                className="btn btn-outline"
                disabled={isAnswered}
                onClick={() => handleCategorySelect('vehicle')}
              >
                🚗 {categoryNames.vehicle}
              </button>
              <button
                type="button"
                className="btn btn-outline"
                disabled={isAnswered}
                onClick={() => handleCategorySelect('animal')}
              >
                🐱 {categoryNames.animal}
              </button>
            </div>

            {feedback && (
              <div className={`quiz-feedback-box ${feedback.isMatch ? 'correct' : 'wrong'}`}>
                <strong>{feedback.message}</strong> <span>{feedback.sub}</span>
              </div>
            )}

            <div style={{ textAlign: 'right', marginTop: '16px' }}>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!isAnswered}
                onClick={handleNext}
              >
                {currentIndex === AI_TRAINING_ITEMS.length - 1
                  ? (lang === 'my' ? 'ရလဒ်ကြည့်မယ် →' : 'See Results →')
                  : (lang === 'my' ? 'နောက်ဥပမာ →' : 'Next Example →')}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span style={{ fontSize: '56px', display: 'block', marginBottom: '10px' }}>🎉</span>
            <h3>
              {lang === 'my'
                ? `AI သင်ယူမှု ဥပမာများ ပြီးဆုံးပါပြီ!`
                : `Training Simulation Complete!`}
            </h3>
            <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--purple-main)' }}>
              {lang === 'my'
                ? `${AI_TRAINING_ITEMS.length} ခုတွင် ${correctCount} ခု မှန်ကန်စွာ Label တပ်နိုင်ခဲ့ပါတယ်။`
                : `You accurately labelled ${correctCount} of ${AI_TRAINING_ITEMS.length} items!`}
            </p>

            <div className="quiz-feedback-box correct" style={{ margin: '20px auto', maxWidth: '520px', textAlign: 'left' }}>
              <strong>{lang === 'my' ? 'အဓိက သဘောတရား:' : 'Key Takeaway:'}</strong>{' '}
              <span>
                {lang === 'my'
                  ? 'တကယ့် AI စနစ်များသည် သန်းပေါင်းများစွာသော ဥပမာများကို အသုံးပြု၍ Model တည်ဆောက်ကြရပါတယ်။ Data မပြည့်စုံပါက AI သည် အမှားလုပ်တတ်ပါတယ်။'
                  : 'Real AI requires diverse, high-quality datasets to prevent bias and errors. Human guidance is always needed.'}
              </span>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
              style={{ marginTop: '12px' }}
            >
              {lang === 'my' ? 'ထပ်မံစမ်းသပ်မယ် ↻' : 'Try Again ↻'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
