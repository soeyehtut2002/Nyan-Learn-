import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  XCircle,
  ExternalLink,
  Printer,
} from './Icons';
import { CourseData } from '../../../types/course.types';
import { useProgress } from '../../../context/ProgressContext';
import { BadgeId } from '../../../types/progress.types';

interface CourseReviewViewProps {
  course: CourseData;
  onBackToCourseDetail: () => void;
  onNavigateLesson: (lessonId: string) => void;
  language: 'en' | 'my';
}

export const CourseReviewView: React.FC<CourseReviewViewProps> = ({
  course,
  onBackToCourseDetail,
  onNavigateLesson,
  language,
}) => {
  const { progress, completeCourseCertificate } = useProgress();
  const review = course.finalReview;

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<{ [idx: number]: boolean }>({});

  // 10-Question Final Assessment state: selected option IDs
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qIdx: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState<number | null>(null);

  // Student name for certificate
  const [learnerName, setLearnerName] = useState('Young Explorer');

  // Existing certificate check
  const existingCert = progress.courseCertificates?.[course.id];

  const handleToggleChecklist = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSelectOption = (qIdx: number, optId: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optId }));
  };

  const getCourseBadgeId = (cId: string): BadgeId => {
    switch (cId) {
      case 'programming':
        return 'course_prog';
      case 'ai':
        return 'course_ai';
      case 'cybersecurity':
        return 'course_cyber';
      case 'webdev':
        return 'course_web';
      default:
        return 'course_prog';
    }
  };

  const handleSubmitAssessment = () => {
    let correct = 0;
    review.finalQuiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionId) {
        correct += 1;
      }
    });

    const percent = Math.round((correct / review.finalQuiz.length) * 100);
    setScorePercentage(percent);
    setSubmitted(true);

    if (percent >= 70) {
      completeCourseCertificate(course.id, percent, getCourseBadgeId(course.id));
    }
  };

  const handleRetryAssessment = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScorePercentage(null);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  // Identify recommended lessons to review based on mistakes
  const recommendedLessons: string[] = [];
  if (submitted && scorePercentage !== null) {
    review.finalQuiz.forEach((q, idx) => {
      if (selectedAnswers[idx] !== q.correctOptionId) {
        const lessonIndex = Math.min(idx, course.lessons.length - 1);
        const lId = course.lessons[lessonIndex].id;
        if (!recommendedLessons.includes(lId)) {
          recommendedLessons.push(lId);
        }
      }
    });
  }

  const isPassed =
    (scorePercentage !== null && scorePercentage >= 70) || existingCert !== undefined;

  const courseTitle = language === 'my' ? course.titleMy : course.titleEn;
  const summaryPoints = language === 'my' ? review.summaryMy : review.summaryEn;
  const checklistItems = language === 'my' ? review.learnedChecklistMy : review.learnedChecklistEn;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <button
            onClick={onBackToCourseDetail}
            className="flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'my' ? 'သင်တန်းဇယားသို့ပြန်သွားရန်' : 'Back to Course'}
            </span>
          </button>
          <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            {courseTitle} • Final Course Review
          </span>
        </div>

        {/* Course Header */}
        <header className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <Award className="w-4 h-4" />
            <span>
              {language === 'my'
                ? 'သင်တန်းပြီးမြောက်မှု ဆန်းစစ်ခြင်း'
                : 'What Did You Learn? (Course Review)'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {courseTitle}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'my'
              ? 'ဤသင်တန်းတွင် သင်လေ့လာခဲ့သော အဓိကသဘောတရားများ၊ ဝေါဟာရများနှင့် လက်တွေ့စစ်ဆေးမှု ၁၀ ခုကို ပြန်လည်လေ့လာပါ။'
              : 'Review key concepts, vocabulary, check off your skills, and take the 10-question final assessment to earn your Nyan Learn Certificate!'}
          </p>
        </header>

        {/* 1. VISUAL SUMMARY OF MAIN CONCEPTS */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg md:text-xl font-bold text-white">
              {language === 'my' ? 'အဓိကသဘောတရားများ အနှစ်ချုပ်' : 'Key Concepts Summary'}
            </h2>
          </div>
          <div className="space-y-2.5 pt-2 text-sm text-slate-300">
            {summaryPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <span className="text-indigo-400 font-bold mt-0.5">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. "WHAT YOU LEARNED" CHECKLIST */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
            <CheckSquare className="w-5 h-5 text-cyan-400" />
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">
                {language === 'my' ? 'သင်တတ်မြောက်သွားသော ကျွမ်းကျင်မှုများ' : 'What You Learned Checklist'}
              </h2>
              <span className="text-xs text-slate-400">
                {language === 'my'
                  ? 'သင်နားလည်သဘောပေါက်သည့် အချက်များကို အမှန်ခြစ်ပါ'
                  : 'Check off each skill you feel confident about:'}
              </span>
            </div>
          </div>
          <div className="space-y-2.5 pt-2">
            {checklistItems.map((item, idx) => {
              const isChecked = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => handleToggleChecklist(idx)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                    isChecked
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs mt-0.5 border ${
                      isChecked
                        ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold'
                        : 'border-slate-600 bg-slate-900'
                    }`}
                  >
                    {isChecked ? '✓' : ''}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. KEY VOCABULARY AND DEFINITIONS */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg md:text-xl font-bold text-white">
              {language === 'my' ? 'အဓိကဝေါဟာရများနှင့် အဓိပ္ပာယ်ဖွင့်ဆိုချက်များ' : 'Key Vocabulary & Definitions'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {review.vocabulary.map((vocab, idx) => {
              const def = language === 'my' ? vocab.definitionMy : vocab.definitionEn;
              const ex = language === 'my' ? vocab.exampleMy : vocab.exampleEn;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-amber-400 font-mono">
                      {vocab.term}
                    </span>
                    {vocab.pronunciation && (
                      <span className="text-xs text-slate-400 font-mono">
                        [{vocab.pronunciation}]
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {def}
                  </p>
                  {ex && (
                    <div className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-850">
                      💡 {ex}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. FINAL MULTIPLE-CHOICE ASSESSMENT (10 Questions) */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                <HelpCircle className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {language === 'my'
                    ? 'သင်တန်းဆင်း နောက်ဆုံးဆန်းစစ်မှု (၁၀ ပုဒ်)'
                    : 'Course Final Assessment (10 Questions)'}
                </span>
                <h3 className="text-base md:text-xl font-bold text-white">
                  Pass Mark: 70%
                </h3>
              </div>
            </div>

            {submitted && scorePercentage !== null && (
              <div
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border ${
                  scorePercentage >= 70
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}
              >
                Final Score: {scorePercentage}% (
                {scorePercentage >= 70 ? 'Passed! 🎉' : 'Try Again'})
              </div>
            )}
          </div>

          {/* 10 Questions */}
          <div className="space-y-6">
            {review.finalQuiz.map((q, qIdx) => {
              const selectedOptId = selectedAnswers[qIdx];
              const qText = language === 'my' ? q.questionMy : q.questionEn;
              const qExp = language === 'my' ? q.explanationMy : q.explanationEn;

              return (
                <div
                  key={q.id}
                  className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <h4 className="text-sm md:text-base font-semibold text-white">
                      {qText}
                    </h4>
                  </div>

                  {/* Choices */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOptId === opt.id;
                      const isCorrect = opt.id === q.correctOptionId;
                      const optText = language === 'my' ? opt.textMy : opt.textEn;

                      let btnStyle =
                        'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700';

                      if (submitted) {
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
                          'bg-indigo-950/60 border-indigo-500 text-indigo-200 font-medium';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(qIdx, opt.id)}
                          disabled={submitted}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full border border-current text-[11px] font-mono flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{optText}</span>
                          </div>
                          {submitted && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {submitted && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Feedback */}
                  {submitted && selectedOptId !== undefined && (
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
                      {qExp}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
            {!submitted ? (
              <button
                onClick={handleSubmitAssessment}
                disabled={
                  Object.keys(selectedAnswers).length < review.finalQuiz.length
                }
                className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 disabled:hover:from-emerald-600 text-white rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                {language === 'my' ? 'နောက်ဆုံးအဖြေများ စစ်ဆေးမည်' : 'Submit Final Assessment'}
              </button>
            ) : (
              <button
                onClick={handleRetryAssessment}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-medium border border-slate-700 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                {language === 'my' ? 'ပြန်လည်ဖြေဆိုမည်' : 'Retry Assessment'}
              </button>
            )}
          </div>
        </section>

        {/* 8. RECOMMENDATIONS FOR LESSONS TO REVIEW (IF MISTAKES OCCURRED) */}
        {submitted && recommendedLessons.length > 0 && (
          <section className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {language === 'my' ? 'ပြန်လည်လေ့လာရန် အကြံပြုချက်များ' : 'Recommended Lessons to Review'}
            </h3>
            <p className="text-xs text-amber-200">
              {language === 'my'
                ? 'မေးခွန်းအချို့ မှားယွင်းခဲ့သောကြောင့် အောက်ပါသင်ခန်းစာများကို ပြန်လည်ဖတ်ရှုရန် အကြံပြုပါသည်:'
                : 'Based on your quiz answers, reviewing these specific lessons will help reinforce your understanding:'}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {recommendedLessons.map((lId) => {
                const targetLesson = course.lessons.find((l) => l.id === lId);
                if (!targetLesson) return null;
                return (
                  <button
                    key={lId}
                    onClick={() => onNavigateLesson(lId)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-900/40 hover:bg-amber-800/60 border border-amber-500/40 text-amber-200 rounded-lg text-xs font-medium transition-colors"
                  >
                    <span>
                      Lesson {targetLesson.lessonNumber}:{' '}
                      {language === 'my' ? targetLesson.titleMy : targetLesson.titleEn}
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* 10. NYAN LEARN CERTIFICATE OF COMPLETION */}
        {isPassed && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                {language === 'my' ? 'သင်တန်းဆင်းလက်မှတ်' : 'Certificate of Achievement'}
              </h2>
              <button
                onClick={handlePrintCertificate}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'my' ? 'ပုံနှိပ်မည် / Print' : 'Print Certificate'}</span>
              </button>
            </div>

            {/* Editable learner name */}
            <div className="flex items-center gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">
                {language === 'my' ? 'လက်မှတ်တွင်ထည့်မည့် အမည်:' : 'Name on Certificate:'}
              </span>
              <input
                type="text"
                value={learnerName}
                onChange={(e) => setLearnerName(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-xs text-white outline-none focus:border-amber-400"
              />
            </div>

            {/* Certificate Display Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-4 border-amber-400/80 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6 overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Award className="w-96 h-96 text-amber-400" />
              </div>

              {/* Logo / Badge */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg border-2 border-amber-200">
                  <Award className="w-9 h-9 text-slate-950" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400">
                  Nyan Learn • Educational Platform
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide font-serif">
                  CERTIFICATE OF ACHIEVEMENT
                </h3>
                <p className="text-xs text-slate-400">
                  This milestone certificate is proudly presented to
                </p>
              </div>

              <div className="py-2">
                <div className="text-xl sm:text-3xl font-extrabold text-amber-300 font-serif border-b-2 border-amber-400/40 inline-block px-8 pb-1">
                  {learnerName}
                </div>
              </div>

              <div className="max-w-xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
                for demonstrating exceptional commitment and successfully completing all
                lessons, interactive activities, and the final assessment of the course:
              </div>

              <div className="text-base sm:text-xl font-bold text-white bg-slate-950/60 border border-slate-800 rounded-xl py-3 px-6 inline-block">
                {courseTitle}
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-4 text-xs text-slate-400 border-t border-slate-800/80">
                <div>
                  <span className="block text-slate-500 font-mono text-[11px]">DATE COMPLETED</span>
                  <strong className="text-slate-200">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </strong>
                </div>
                <div>
                  <span className="block text-slate-500 font-mono text-[11px]">CERTIFICATE ID</span>
                  <strong className="text-amber-400 font-mono">
                    NYAN-{course.id.toUpperCase()}-2026
                  </strong>
                </div>
              </div>

              {/* Mandatory Regulatory / Educational Disclaimer */}
              <div className="pt-6 border-t border-slate-800/80 text-[10px] text-slate-400 italic max-w-lg mx-auto">
                ⚠️ Notice: This Certificate of Achievement is issued by Nyan Learn to
                celebrate personal learning milestones and practical skills. It is not an
                accredited university degree or government qualification.
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
