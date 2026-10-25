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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb / Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <button
            onClick={onBackToCourseDetail}
            className="flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'my' ? 'သင်တန်းဇယားသို့ပြန်သွားရန်' : 'Back to Course'}
            </span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {language === 'my' ? course.titleMy : course.titleEn} • Lesson {lesson.lessonNumber} of{' '}
              {course.lessons.length}
            </span>
            {isPreviouslyCompleted && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {language === 'my' ? 'ပြီးမြောက်ပြီး' : 'Completed'}
              </span>
            )}
          </div>
        </div>

        {/* 1. LESSON TITLE & INTRO */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {language === 'my'
                ? `အခန်း ${lesson.lessonNumber}`
                : `Lesson ${lesson.lessonNumber}`}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {intro}
          </p>
        </header>

        {/* 2. LEARNING OBJECTIVES */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-md space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <CheckSquare className="w-4 h-4" />
            {language === 'my'
              ? 'ဤသင်ခန်းစာတွင် သင်ယူမည့်အရာများ (Learning Objectives)'
              : 'What You Will Learn (Objectives)'}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {objectives.map((obj, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs md:text-sm text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. WRITTEN EXPLANATION */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-md space-y-6">
          <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2.5 pb-3 border-b border-slate-800">
            <Layers className="w-5 h-5 text-indigo-400" />
            {language === 'my'
              ? 'အသေးစိတ်ရှင်းလင်းချက်'
              : 'Concept Explanation'}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {explanation.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 4. EDUCATIONAL VISUAL DIAGRAM */}
          {lesson.diagram && (
            <div className="pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {language === 'my' ? 'သင်ထောက်ကူ ပုံပြကားချပ်:' : 'Visual Diagram:'}
              </div>
              <VisualDiagram diagram={lesson.diagram} />
            </div>
          )}
        </section>

        {/* 5. REAL-LIFE ANALOGY */}
        {analogy && (
          <section className="bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-900 border border-amber-500/30 rounded-2xl p-6 md:p-7 shadow-md space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Lightbulb className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {language === 'my'
                    ? 'နေ့စဉ်ဘဝ ဥပမာဖြင့် နားလည်ခြင်း'
                    : 'Real-Life Analogy'}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white">
                  {analogy.title}
                </h3>
              </div>
            </div>

            <p className="text-sm md:text-base text-amber-100/90 leading-relaxed pl-1">
              {analogy.description}
            </p>
          </section>
        )}

        {/* 6. WORKED EXAMPLE */}
        {workedExample && (
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-7 shadow-md space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                <ListOrdered className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  {language === 'my' ? 'လက်တွေ့ဥပမာ' : 'Worked Example'}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white">
                  {workedExample.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300">
              {workedExample.scenario}
            </p>

            {/* Step-by-step list */}
            <div className="space-y-3 pt-1">
              {workedExample.steps.map((st) => (
                <div
                  key={st.stepNumber}
                  className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row gap-3 sm:items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center text-xs font-bold font-mono shrink-0">
                      {st.stepNumber}
                    </span>
                    <div className="text-sm font-semibold text-white">
                      {st.instruction}
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 sm:w-1/2 bg-slate-900/60 p-2 rounded-lg border border-slate-850">
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
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <HelpCircle className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  {language === 'my'
                    ? 'နားလည်မှုစစ်ဆေးခြင်း မေးခွန်းများ'
                    : 'Check Your Understanding'}
                </span>
                <h3 className="text-base md:text-xl font-bold text-white">
                  {lesson.quizQuestions.length} Questions (Pass mark: 70%)
                </h3>
              </div>
            </div>

            {quizSubmitted && scorePercentage !== null && (
              <div
                className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
                  scorePercentage >= 70
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}
              >
                Score: {scorePercentage}% {scorePercentage >= 70 ? '(Passed 🎉)' : '(Needs Review)'}
              </div>
            )}
          </div>

          {/* Question List */}
          <div className="space-y-6">
            {lesson.quizQuestions.map((q, qIdx) => {
              const selectedOptId = selectedAnswers[qIdx];
              const qText = language === 'my' ? q.questionMy : q.questionEn;
              const qExplanation = language === 'my' ? q.explanationMy : q.explanationEn;

              return (
                <div
                  key={q.id}
                  className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <h4 className="text-sm md:text-base font-semibold text-white">
                      {qText}
                    </h4>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOptId === opt.id;
                      const isCorrect = opt.id === q.correctOptionId;
                      const optText = language === 'my' ? opt.textMy : opt.textEn;

                      let btnStyle =
                        'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700';

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle =
                            'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium';
                        } else if (isSelected && !isCorrect) {
                          btnStyle =
                            'bg-rose-950/60 border-rose-500 text-rose-200 font-medium';
                        } else {
                          btnStyle =
                            'bg-slate-900/40 border-slate-850 text-slate-500 opacity-60';
                        }
                      } else if (isSelected) {
                        btnStyle =
                          'bg-purple-950/60 border-purple-500 text-purple-200 font-medium';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(qIdx, opt.id)}
                          disabled={quizSubmitted}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full border border-current text-[11px] font-mono flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{optText}</span>
                          </div>
                          {quizSubmitted && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {quizSubmitted && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback explanation after submit */}
                  {quizSubmitted && selectedOptId !== undefined && (
                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed border ${
                        selectedOptId === q.correctOptionId
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                          : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
                      }`}
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
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
            {!quizSubmitted ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={
                  Object.keys(selectedAnswers).length < lesson.quizQuestions.length
                }
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 disabled:hover:from-purple-600 disabled:hover:to-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                {language === 'my' ? 'အဖြေများ စစ်ဆေးမည်' : 'Submit Answers'}
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleRetryQuiz}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-medium border border-slate-700 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  {language === 'my' ? 'ထပ်မံကြိုးစားမည်' : 'Retry Quiz'}
                </button>

                {scorePercentage !== null && scorePercentage >= 70 && (
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    +30 XP Earned!
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 11. SHORT LESSON SUMMARY */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-7 shadow-md space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base md:text-lg font-bold text-white">
              {language === 'my' ? 'သင်ခန်းစာ အနှစ်ချုပ်' : 'Lesson Summary'}
            </h3>
          </div>
          <div className="space-y-2 text-sm md:text-base text-slate-300 leading-relaxed">
            {summary.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 12. PREVIOUS / NEXT LESSON NAVIGATION */}
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          {prevLesson ? (
            <button
              onClick={() => onNavigateLesson(prevLesson.id)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-300 transition-all"
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
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all ml-auto"
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
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all ml-auto"
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
    </div>
  );
};
