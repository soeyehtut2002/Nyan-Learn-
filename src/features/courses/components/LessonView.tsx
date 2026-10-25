import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Lightbulb,
  CheckSquare,
  Award,
  RotateCcw,
  ListOrdered,
  Layers,
  ChevronRight,
  ChevronLeft,
  XCircle,
} from './Icons';
import { CourseData, LessonContent } from '../../../types/course.types';
import { useProgress } from '../../../context/ProgressContext';
import { VisualDiagram } from './VisualDiagram';
import { InteractiveActivity } from './InteractiveActivity';
import { ByteMascot } from './ByteMascot';

interface LessonViewProps {
  course: CourseData;
  lesson: LessonContent;
  onNavigateLesson: (lessonId: string) => void;
  onNavigateCourseReview: () => void;
  onBackToCourseDetail: () => void;
  language: 'en' | 'my';
}

export const LessonView: React.FC<LessonViewProps> = ({
  course,
  lesson,
  onNavigateLesson,
  onNavigateCourseReview,
  onBackToCourseDetail,
  language,
}) => {
  const { progress, completeLesson } = useProgress();

  // Quiz state: selectedOptionId for each question index
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qIndex: number]: string }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState<number | null>(null);

  // Check if previously completed in progress
  const isPreviouslyCompleted = (progress.completedLessons?.[course.id] || []).includes(lesson.id);
  const previousScore = progress.courseQuizScores?.[course.id]?.[lesson.id];

  // Scroll to top on lesson change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScorePercentage(previousScore ?? null);
  }, [lesson.id, previousScore]);

  // Current lesson index in course
  const currentIndex = course.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < course.lessons.length - 1
      ? course.lessons[currentIndex + 1]
      : null;

  // Handle quiz option selection
  const handleSelectOption = (questionIndex: number, optionId: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionId,
    }));
  };

  // Submit quiz
  const handleSubmitQuiz = () => {
    const totalQuestions = lesson.quizQuestions.length;
    let correctCount = 0;
    lesson.quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionId) {
        correctCount += 1;
      }
    });

    const percent = Math.round((correctCount / totalQuestions) * 100);
    setScorePercentage(percent);
    setQuizSubmitted(true);

    // Passing score is 70%
    if (percent >= 70) {
      completeLesson(course.id, lesson.id, percent, 30);
    }
  };

  // Retry quiz
  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScorePercentage(null);
  };

  const title = language === 'my' ? lesson.titleMy : lesson.titleEn;
  const intro = language === 'my' ? lesson.shortIntroMy : lesson.shortIntroEn;
  const objectives = language === 'my' ? lesson.learningObjectivesMy : lesson.learningObjectivesEn;
  const explanation = language === 'my' ? lesson.explanationMy : lesson.explanationEn;
  const analogy = language === 'my' ? lesson.analogyMy : lesson.analogyEn;
  const workedExample = language === 'my' ? lesson.workedExampleMy : lesson.workedExampleEn;
  const summary = language === 'my' ? lesson.summaryMy : lesson.summaryEn;

  return (
    <div className="courses-wrapper">
      {/* Navigation Breadcrumb / Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '1.5px solid var(--border-line, #e3e7f8)', paddingBottom: '12px' }}>
        <button
          onClick={onBackToCourseDetail}
          className="back-link"
          style={{ marginBottom: 0 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {language === 'my' ? 'သင်တန်းဇယားသို့ပြန်သွားရန်' : 'Back to Course'}
          </span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="course-badge-pill">
            {language === 'my' ? course.titleMy : course.titleEn} • Lesson {lesson.lessonNumber} / {course.lessons.length}
          </span>
          {isPreviouslyCompleted && (
            <span style={{ fontSize: '11px', fontWeight: 800, background: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 className="w-3.5 h-3.5" />
              {language === 'my' ? 'ပြီးမြောက်ပြီး' : 'Completed'}
            </span>
          )}
        </div>
      </div>

      {/* 1. LESSON TITLE & INTRO */}
      <header style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="eyebrow-pill" style={{ alignSelf: 'flex-start' }}>
          <BookOpen className="w-3.5 h-3.5" />
          <span>
            {language === 'my'
              ? `အခန်း ${lesson.lessonNumber}`
              : `Lesson ${lesson.lessonNumber}`}
          </span>
        </div>

        <h1 className="courses-title">
          {title}
        </h1>

        <p className="courses-desc" style={{ fontSize: '16px' }}>
          {intro}
        </p>
      </header>

      {/* 2. LEARNING OBJECTIVES */}
      <div className="lesson-card-box" style={{ background: '#f8fafc' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--purple-main, #6c47ff)', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <CheckSquare className="w-4 h-4" />
          {language === 'my'
            ? 'ဤသင်ခန်းစာတွင် သင်ယူမည့်အရာများ (Learning Objectives)'
            : 'What You Will Learn (Objectives)'}
        </h2>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
          {objectives.map((obj, idx) => (
            <li
              key={idx}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--ink, #1e2448)' }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--purple-main, #6c47ff)', marginTop: '8px', flexShrink: 0 }} />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. WRITTEN EXPLANATION */}
      <section className="lesson-card-box">
        <h2 className="lesson-section-title">
          <Layers className="w-5 h-5" style={{ color: 'var(--purple-main, #6c47ff)' }} />
          <span>
            {language === 'my' ? 'အသေးစိတ်ရှင်းလင်းချက်' : 'Concept Explanation'}
          </span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', color: 'var(--ink, #1e2448)', lineHeight: 1.65 }}>
          {explanation.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* 4. EDUCATIONAL VISUAL DIAGRAM */}
        {lesson.diagram && (
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1.5px solid var(--border-line, #e3e7f8)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-secondary, #585d82)', letterSpacing: '0.05em', marginBottom: '8px' }}>
              {language === 'my' ? 'သင်ထောက်ကူ ပုံပြကားချပ်:' : 'Visual Diagram:'}
            </div>
            <VisualDiagram diagram={lesson.diagram} />
          </div>
        )}
      </section>

      {/* 5. REAL-LIFE ANALOGY */}
      {analogy && (
        <section className="analogy-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fef08a', color: '#854d0e', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 8px rgba(234, 179, 8, 0.25)' }}>
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#b45309' }}>
                  {language === 'my' ? '📖 ပုံပြင်ဥပမာဖြင့် နားလည်ခြင်း' : '📖 Real-Life Story Analogy'}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#78350f', margin: '2px 0' }}>
                  {analogy.title}
                </h3>
              </div>
            </div>
            <ByteMascot mood="thinking" size={56} />
          </div>

          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78350f', margin: 0 }}>
            {analogy.description}
          </p>
        </section>
      )}

      {/* 6. WORKED EXAMPLE */}
      {workedExample && (
        <section className="worked-example-card" style={{ border: '2px solid #bae6fd', borderRadius: '24px', padding: '24px', boxShadow: '0 8px 24px rgba(14, 165, 233, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--cyan-light, #e4f9fc)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 8px rgba(6, 182, 212, 0.2)' }}>
                <ListOrdered className="w-5 h-5" />
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#0284c7', letterSpacing: '0.05em' }}>
                  {language === 'my' ? '🤖 လက်တွေ့ဥပမာ (လိုက်လုပ်ကြည့်ပါ)' : '🤖 Follow-Along Worked Example'}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink, #1e2448)', margin: '2px 0' }}>
                  {workedExample.title}
                </h3>
              </div>
            </div>
            <ByteMascot mood="coder" size={56} />
          </div>

          <p style={{ fontSize: '14.5px', color: '#475569', marginBottom: '14px', lineHeight: 1.6 }}>
            {workedExample.scenario}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {workedExample.steps.map((st) => (
              <div
                key={st.stepNumber}
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 800,
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(2, 132, 199, 0.3)',
                    }}
                  >
                    {st.stepNumber}
                  </span>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--ink, #1e2448)', fontFamily: 'monospace' }}>
                    {st.instruction}
                  </div>
                </div>

                <div style={{ fontSize: '13px', color: '#0369a1', background: '#e0f2fe', padding: '6px 12px', borderRadius: '10px', fontWeight: 600 }}>
                  💡 {st.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. INTERACTIVE ACTIVITY / CODE PLAYGROUND */}
      {lesson.activity && (
        <section>
          <InteractiveActivity
            activity={lesson.activity}
            language={language}
          />
        </section>
      )}

      {/* 8. CHECK YOUR UNDERSTANDING (QUIZ) */}
      <section className="quiz-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '1.5px solid var(--border-line, #e3e7f8)', paddingBottom: '14px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--purple-light, #f0edff)', color: 'var(--purple-main, #6c47ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--purple-main, #6c47ff)', letterSpacing: '0.05em' }}>
                {language === 'my' ? 'နားလည်မှုစစ်ဆေးခြင်း မေးခွန်းများ' : 'Check Your Understanding'}
              </span>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink, #1e2448)', margin: '2px 0' }}>
                {lesson.quizQuestions.length} Questions (Pass mark: 70%)
              </h3>
            </div>
          </div>

          {quizSubmitted && scorePercentage !== null && (
            <div
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 800,
                background: scorePercentage >= 70 ? '#dcfce7' : '#fee2e2',
                color: scorePercentage >= 70 ? '#15803d' : '#b91c1c',
                border: `1px solid ${scorePercentage >= 70 ? '#86efac' : '#fca5a5'}`,
              }}
            >
              Score: {scorePercentage}% {scorePercentage >= 70 ? '(Passed 🎉)' : '(Needs Review)'}
            </div>
          )}
        </div>

        {/* Question List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {lesson.quizQuestions.map((q, qIdx) => {
            const selectedOptId = selectedAnswers[qIdx];
            const qText = language === 'my' ? q.questionMy : q.questionEn;
            const qExplanation = language === 'my' ? q.explanationMy : q.explanationEn;

            return (
              <div key={q.id} className="quiz-q-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--purple-light, #f0edff)', color: 'var(--purple-main, #6c47ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0 }}>
                    {qIdx + 1}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink, #1e2448)', marginTop: '2px' }}>
                    {qText}
                  </h4>
                </div>

                {/* Options */}
                <div>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOptId === opt.id;
                    const isCorrect = opt.id === q.correctOptionId;
                    const optText = language === 'my' ? opt.textMy : opt.textEn;

                    let optClass = 'quiz-option-btn';
                    if (quizSubmitted) {
                      if (isCorrect) optClass += ' correct';
                      else if (isSelected && !isCorrect) optClass += ' incorrect';
                    } else if (isSelected) {
                      optClass += ' selected';
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(qIdx, opt.id)}
                        disabled={quizSubmitted}
                        className={optClass}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0 }}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{optText}</span>
                        </div>
                        {quizSubmitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4" style={{ color: '#15803d', flexShrink: 0 }} />
                        )}
                        {quizSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4" style={{ color: '#b91c1c', flexShrink: 0 }} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback explanation after submit */}
                {quizSubmitted && selectedOptId !== undefined && (
                  <div
                    style={{
                      marginTop: '12px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      background: selectedOptId === q.correctOptionId ? '#f0fdf4' : '#fef2f2',
                      color: selectedOptId === q.correctOptionId ? '#15803d' : '#991b1b',
                      border: `1px solid ${selectedOptId === q.correctOptionId ? '#bbf7d0' : '#fecaca'}`,
                    }}
                  >
                    <strong>
                      {selectedOptId === q.correctOptionId
                        ? language === 'my'
                          ? '✅ အဖြေမှန်ပါသည်!'
                          : '✅ Correct!'
                        : language === 'my'
                        ? '❌ မှားယွင်းပါသည်:'
                        : '❌ Explanation:'}
                    </strong>{' '}
                    {qExplanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiz Action Buttons */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1.5px solid var(--border-line, #e3e7f8)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          {!quizSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={Object.keys(selectedAnswers).length < lesson.quizQuestions.length}
              className="kid-btn kid-btn-primary"
              style={{
                opacity: Object.keys(selectedAnswers).length < lesson.quizQuestions.length ? 0.45 : 1,
                cursor: Object.keys(selectedAnswers).length < lesson.quizQuestions.length ? 'not-allowed' : 'pointer',
              }}
            >
              <Award className="w-4 h-4" />
              <span>{language === 'my' ? '🚀 အဖြေများ စစ်ဆေးမည်' : '🚀 Submit Answers'}</span>
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={handleRetryQuiz}
                className="kid-btn kid-btn-secondary"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{language === 'my' ? 'ထပ်မံကြိုးစားမည်' : 'Retry Quiz'}</span>
              </button>

              {scorePercentage !== null && scorePercentage >= 70 && (
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#15803d', display: 'flex', alignItems: 'center', gap: '6px', background: '#dcfce7', padding: '6px 14px', borderRadius: '12px', border: '1px solid #86efac' }}>
                  <Sparkles className="w-4 h-4" />
                  +30 XP Earned! 🎉
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 11. SHORT LESSON SUMMARY */}
      <section className="lesson-card-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <Sparkles className="w-5 h-5" style={{ color: 'var(--purple-main, #6c47ff)' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink, #1e2448)', margin: 0 }}>
            {language === 'my' ? 'သင်ခန်းစာ အနှစ်ချုပ်' : 'Lesson Summary'}
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--ink, #1e2448)', lineHeight: 1.6 }}>
          {summary.map((point, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#f8fafc', padding: '10px 14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <span style={{ color: 'var(--purple-main, #6c47ff)', fontWeight: 800 }}>✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 12. PREVIOUS / NEXT LESSON NAVIGATION */}
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '18px', borderTop: '1.5px solid var(--border-line, #e3e7f8)' }}>
        {prevLesson ? (
          <button
            onClick={() => onNavigateLesson(prevLesson.id)}
            className="kid-btn kid-btn-secondary"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              {language === 'my' ? 'ယခင်သင်ခန်းစာ' : 'Previous'}:{' '}
              {language === 'my' ? prevLesson.titleMy : prevLesson.titleEn}
            </span>
          </button>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <button
            onClick={() => onNavigateLesson(nextLesson.id)}
            className="kid-btn kid-btn-primary"
            style={{ marginLeft: 'auto' }}
          >
            <span>
              {language === 'my' ? 'နောက်သင်ခန်းစာ' : 'Next'}:{' '}
              {language === 'my' ? nextLesson.titleMy : nextLesson.titleEn}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onNavigateCourseReview}
            className="kid-btn kid-btn-success"
            style={{ marginLeft: 'auto' }}
          >
            <Award className="w-4 h-4" />
            <span>
              {language === 'my'
                ? 'သင်တန်းနောက်ဆုံးဆန်းစစ်ချက်သို့'
                : 'Go to Course Review & Exam'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </div>
  );
};
