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
    <div className="courses-wrapper">
      {/* Navigation Breadcrumb */}
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
        <span className="course-badge-pill">
          {courseTitle} • Final Course Review
        </span>
      </div>

      {/* Course Header */}
      <header style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="eyebrow-pill" style={{ alignSelf: 'flex-start', background: '#dcfce7', color: '#15803d', borderColor: '#86efac' }}>
          <Award className="w-4 h-4" />
          <span>
            {language === 'my'
              ? 'သင်တန်းပြီးမြောက်မှု ဆန်းစစ်ခြင်း'
              : 'What Did You Learn? (Course Review)'}
          </span>
        </div>
        <h1 className="courses-title">
          {courseTitle}
        </h1>
        <p className="courses-desc">
          {language === 'my'
            ? 'ဤသင်တန်းတွင် သင်လေ့လာခဲ့သော အဓိကသဘောတရားများ၊ ဝေါဟာရများနှင့် လက်တွေ့စစ်ဆေးမှု ၁၀ ခုကို ပြန်လည်လေ့လာပါ။'
            : 'Review key concepts, vocabulary, check off your skills, and take the 10-question final assessment to earn your Nyan Learn Certificate!'}
        </p>
      </header>

      {/* 1. VISUAL SUMMARY OF MAIN CONCEPTS */}
      <section className="lesson-card-box">
        <h2 className="lesson-section-title">
          <Sparkles className="w-5 h-5" style={{ color: 'var(--purple-main, #6c47ff)' }} />
          <span>{language === 'my' ? 'အဓိကသဘောတရားများ အနှစ်ချုပ်' : 'Key Concepts Summary'}</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {summaryPoints.map((point, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '14px', color: 'var(--ink, #1e2448)' }}>
              <span style={{ color: 'var(--purple-main, #6c47ff)', fontWeight: 800, marginTop: '2px' }}>•</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. "WHAT YOU LEARNED" CHECKLIST */}
      <section className="lesson-card-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', borderBottom: '1.5px solid #f1f5f9', paddingBottom: '12px' }}>
          <CheckSquare className="w-5 h-5" style={{ color: 'var(--cyan, #22c7d9)' }} />
          <div>
            <h2 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink, #1e2448)', margin: 0 }}>
              {language === 'my' ? 'သင်တတ်မြောက်သွားသော ကျွမ်းကျင်မှုများ' : 'What You Learned Checklist'}
            </h2>
            <span style={{ fontSize: '12px', color: 'var(--ink-secondary, #585d82)' }}>
              {language === 'my'
                ? 'သင်နားလည်သဘောပေါက်သည့် အချက်များကို အမှန်ခြစ်ပါ'
                : 'Check off each skill you feel confident about:'}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {checklistItems.map((item, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <div
                key={idx}
                onClick={() => handleToggleChecklist(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: isChecked ? '1.5px solid var(--purple-main, #6c47ff)' : '1px solid #e2e8f0',
                  background: isChecked ? 'var(--purple-light, #f0edff)' : '#ffffff',
                  cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800,
                    border: isChecked ? 'none' : '1.5px solid #94a3b8',
                    background: isChecked ? 'var(--purple-main, #6c47ff)' : 'transparent',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  {isChecked ? '✓' : ''}
                </div>
                <span style={{ fontSize: '13.5px', fontWeight: isChecked ? 700 : 500, color: 'var(--ink, #1e2448)' }}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. KEY VOCABULARY AND DEFINITIONS */}
      <section className="lesson-card-box">
        <h2 className="lesson-section-title">
          <BookOpen className="w-5 h-5" style={{ color: '#d97706' }} />
          <span>{language === 'my' ? 'အဓိကဝေါဟာရများနှင့် အဓိပ္ပာယ်ဖွင့်ဆိုချက်များ' : 'Key Vocabulary & Definitions'}</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {review.vocabulary.map((vocab, idx) => {
            const def = language === 'my' ? vocab.definitionMy : vocab.definitionEn;
            const ex = language === 'my' ? vocab.exampleMy : vocab.exampleEn;
            return (
              <div
                key={idx}
                style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '14px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#b45309', fontFamily: 'monospace' }}>
                    {vocab.term}
                  </span>
                  {vocab.pronunciation && (
                    <span style={{ fontSize: '11px', color: '#92400e', fontFamily: 'monospace' }}>
                      [{vocab.pronunciation}]
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '12.5px', color: '#78350f', lineHeight: 1.5, margin: 0 }}>
                  {def}
                </p>
                {ex && (
                  <div style={{ fontSize: '11.5px', color: '#92400e', fontStyle: 'italic', paddingTop: '4px', borderTop: '1px dashed #fde68a' }}>
                    💡 {ex}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FINAL MULTIPLE-CHOICE ASSESSMENT (10 Questions) */}
      <section className="quiz-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', borderBottom: '1.5px solid var(--border-line, #e3e7f8)', paddingBottom: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--purple-light, #f0edff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--purple-main, #6c47ff)' }}>
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--purple-main, #6c47ff)' }}>
                {language === 'my'
                  ? 'သင်တန်းဆင်း နောက်ဆုံးဆန်းစစ်မှု (၁၀ ပုဒ်)'
                  : 'Course Final Assessment (10 Questions)'}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink, #1e2448)', margin: 0 }}>
                {language === 'my' ? 'အောင်မှတ်: ၇၀%' : 'Pass Mark: 70%'}
              </h3>
            </div>
          </div>

          {submitted && scorePercentage !== null && (
            <div
              style={{
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 800,
                border: scorePercentage >= 70 ? '1.5px solid #86efac' : '1.5px solid #fca5a5',
                background: scorePercentage >= 70 ? '#dcfce7' : '#fee2e2',
                color: scorePercentage >= 70 ? '#15803d' : '#b91c1c',
              }}
            >
              {language === 'my' ? 'ရမှတ်:' : 'Final Score:'} {scorePercentage}% (
              {scorePercentage >= 70
                ? (language === 'my' ? 'အောင်မြင်ပါသည်! 🎉' : 'Passed! 🎉')
                : (language === 'my' ? 'ပြန်လည်ကြိုးစားပါ' : 'Try Again')}
              )
            </div>
          )}
        </div>

        {/* 10 Questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {review.finalQuiz.map((q, qIdx) => {
            const selectedOptId = selectedAnswers[qIdx];
            const qText = language === 'my' ? q.questionMy : q.questionEn;
            const qExp = language === 'my' ? q.explanationMy : q.explanationEn;

            return (
              <div key={q.id} className="quiz-q-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '8px',
                      background: 'var(--purple-light, #f0edff)',
                      color: 'var(--purple-main, #6c47ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {qIdx + 1}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink, #1e2448)', margin: 0, lineHeight: 1.4 }}>
                    {qText}
                  </h4>
                </div>

                {/* Choices */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOptId === opt.id;
                    const isCorrect = opt.id === q.correctOptionId;
                    const optText = language === 'my' ? opt.textMy : opt.textEn;

                    let btnClass = 'quiz-option-btn';
                    if (submitted) {
                      if (isCorrect) {
                        btnClass += ' correct';
                      } else if (isSelected && !isCorrect) {
                        btnClass += ' incorrect';
                      }
                    } else if (isSelected) {
                      btnClass += ' selected';
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(qIdx, opt.id)}
                        disabled={submitted}
                        className={btnClass}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              border: '1.5px solid currentColor',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '11px',
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{optText}</span>
                        </div>
                        {submitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4" style={{ color: '#16a34a', flexShrink: 0 }} />
                        )}
                        {submitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4" style={{ color: '#dc2626', flexShrink: 0 }} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Immediate Feedback */}
                {submitted && selectedOptId !== undefined && (
                  <div
                    style={{
                      marginTop: '10px',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      fontSize: '12.5px',
                      lineHeight: 1.5,
                      border: selectedOptId === q.correctOptionId ? '1px solid #86efac' : '1px solid #fca5a5',
                      background: selectedOptId === q.correctOptionId ? '#f0fdf4' : '#fef2f2',
                      color: selectedOptId === q.correctOptionId ? '#166534' : '#991b1b',
                    }}
                  >
                    <strong>
                      {selectedOptId === q.correctOptionId
                        ? (language === 'my' ? '✅ အဖြေမှန်ပါသည်!' : '✅ Correct!')
                        : (language === 'my' ? '❌ မှားယွင်းပါသည် - ရှင်းလင်းချက်:' : '❌ Explanation:')}
                    </strong>{' '}
                    {qExp}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginTop: '20px', paddingTop: '16px', borderTop: '1.5px solid var(--border-line, #e3e7f8)' }}>
          {!submitted ? (
            <button
              onClick={handleSubmitAssessment}
              disabled={Object.keys(selectedAnswers).length < review.finalQuiz.length}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: Object.keys(selectedAnswers).length < review.finalQuiz.length ? '#94a3b8' : 'var(--purple-main, #6c47ff)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '14px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: Object.keys(selectedAnswers).length < review.finalQuiz.length ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 14px rgba(108, 71, 255, 0.25)',
              }}
            >
              <Award className="w-4 h-4" />
              <span>{language === 'my' ? 'နောက်ဆုံးအဖြေများ စစ်ဆေးမည်' : 'Submit Final Assessment'}</span>
            </button>
          ) : (
            <button
              onClick={handleRetryAssessment}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: '#f1f5f9',
                border: '1.5px solid #cbd5e1',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '13.5px',
                color: 'var(--ink, #1e2448)',
                cursor: 'pointer',
              }}
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'my' ? 'ပြန်လည်ဖြေဆိုမည်' : 'Retry Assessment'}</span>
            </button>
          )}
        </div>
      </section>

      {/* 8. RECOMMENDATIONS FOR LESSONS TO REVIEW (IF MISTAKES OCCURRED) */}
      {submitted && recommendedLessons.length > 0 && (
        <section style={{ background: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: '18px', padding: '20px 24px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#92400e', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 8px 0' }}>
            <BookOpen className="w-4 h-4" />
            <span>{language === 'my' ? 'ပြန်လည်လေ့လာရန် အကြံပြုချက်များ' : 'Recommended Lessons to Review'}</span>
          </h3>
          <p style={{ fontSize: '13px', color: '#78350f', margin: '0 0 12px 0' }}>
            {language === 'my'
              ? 'မေးခွန်းအချို့ မှားယွင်းခဲ့သောကြောင့် အောက်ပါသင်ခန်းစာများကို ပြန်လည်ဖတ်ရှုရန် အကြံပြုပါသည်:'
              : 'Based on your quiz answers, reviewing these specific lessons will help reinforce your understanding:'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {recommendedLessons.map((lId) => {
              const targetLesson = course.lessons.find((l) => l.id === lId);
              if (!targetLesson) return null;
              return (
                <button
                  key={lId}
                  onClick={() => onNavigateLesson(lId)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    background: '#ffffff',
                    border: '1px solid #fcd34d',
                    borderRadius: '10px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: '#92400e',
                    cursor: 'pointer',
                  }}
                >
                  <span>
                    Lesson {targetLesson.lessonNumber}:{' '}
                    {language === 'my' ? targetLesson.titleMy : targetLesson.titleEn}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* 10. NYAN LEARN CERTIFICATE OF COMPLETION */}
      {isPassed && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--ink, #1e2448)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Award className="w-6 h-6" style={{ color: '#d97706' }} />
              <span>{language === 'my' ? 'သင်တန်းဆင်းလက်မှတ်' : 'Certificate of Achievement'}</span>
            </h2>
            <button
              onClick={handlePrintCertificate}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: '#f1f5f9',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--ink, #1e2448)',
                cursor: 'pointer',
              }}
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'my' ? 'ပုံနှိပ်မည် / Print' : 'Print Certificate'}</span>
            </button>
          </div>

          {/* Editable learner name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', padding: '12px 18px', borderRadius: '14px', border: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink, #1e2448)' }}>
              {language === 'my' ? 'လက်မှတ်တွင်ထည့်မည့် အမည်:' : 'Name on Certificate:'}
            </span>
            <input
              type="text"
              value={learnerName}
              onChange={(e) => setLearnerName(e.target.value)}
              style={{
                background: '#ffffff',
                border: '1.5px solid var(--purple-main, #6c47ff)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--ink, #1e2448)',
                outline: 'none',
              }}
            />
          </div>

          {/* Certificate Display Card */}
          <div className="cert-card-container">
            {/* Watermark Logo / Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(217, 119, 6, 0.4)',
                  border: '2px solid #fef08a',
                }}
              >
                <Award className="w-8 h-8" style={{ color: '#ffffff' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fcd34d' }}>
                Nyan Learn • Educational Platform
              </span>
              <h3 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', margin: '4px 0', fontFamily: 'serif' }}>
                CERTIFICATE OF ACHIEVEMENT
              </h3>
              <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0 }}>
                This milestone certificate is proudly presented to
              </p>
            </div>

            <div>
              <div className="cert-recipient">
                {learnerName}
              </div>
            </div>

            <div style={{ maxWidth: '580px', margin: '0 auto', fontSize: '13.5px', color: '#e2e8f0', lineHeight: 1.6 }}>
              for demonstrating exceptional commitment and successfully completing all
              lessons, interactive activities, and the final assessment of the course:
            </div>

            <div style={{ display: 'inline-block', fontSize: '18px', fontWeight: 800, color: '#ffffff', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px 24px', margin: '16px auto' }}>
              {courseTitle}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', maxWidth: '440px', margin: '16px auto 0', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '12px', color: '#94a3b8' }}>
              <div>
                <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DATE COMPLETED</span>
                <strong style={{ color: '#ffffff', fontSize: '13px' }}>
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CERTIFICATE ID</span>
                <strong style={{ color: '#fcd34d', fontFamily: 'monospace', fontSize: '13px' }}>
                  NYAN-{course.id.toUpperCase()}-2026
                </strong>
              </div>
            </div>

            {/* Mandatory Regulatory / Educational Disclaimer */}
            <div style={{ paddingTop: '20px', marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '10.5px', color: '#94a3b8', fontStyle: 'italic', maxWidth: '540px', margin: '16px auto 0' }}>
              ⚠️ Notice: This Certificate of Achievement is issued by Nyan Learn to
              celebrate personal learning milestones and practical skills. It is not an
              accredited university degree or government qualification.
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
