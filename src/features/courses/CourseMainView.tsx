import React, { useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  Award,
  Code,
  Shield,
  Bot,
  Globe,
  ArrowLeft,
  Check,
} from './components/Icons';
import { ALL_COURSES, getCourseById } from './data/allCourses';
import { CourseData } from '../../types/course.types';
import { useProgress } from '../../context/ProgressContext';
import { LessonView } from './components/LessonView';
import { CourseReviewView } from './components/CourseReviewView';
import './courses.css';

interface CourseMainViewProps {
  initialCourseId?: string;
  initialLessonId?: string;
  language: 'en' | 'my';
  onBackToHome?: () => void;
}

export const CourseMainView: React.FC<CourseMainViewProps> = ({
  initialCourseId,
  initialLessonId,
  language,
}) => {
  const { progress } = useProgress();

  // Navigation mode
  const [activeCourseId, setActiveCourseId] = useState<string | null>(
    initialCourseId || null
  );
  const [activeLessonId, setActiveLessonId] = useState<string | null>(
    initialLessonId || null
  );
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const activeCourse = activeCourseId ? getCourseById(activeCourseId) : null;
  const activeLesson =
    activeCourse && activeLessonId
      ? activeCourse.lessons.find((l) => l.id === activeLessonId)
      : null;

  // Helper to calculate course completion %
  const getCourseProgress = (course: CourseData) => {
    const total = course.lessons.length;
    if (total === 0) return 0;
    const completedList = progress.completedLessons?.[course.id] || [];
    const completedCount = course.lessons.filter((l) =>
      completedList.includes(l.id)
    ).length;
    return Math.round((completedCount / total) * 100);
  };

  const getCourseCompletedCount = (course: CourseData) => {
    const completedList = progress.completedLessons?.[course.id] || [];
    return course.lessons.filter((l) =>
      completedList.includes(l.id)
    ).length;
  };

  // Icon selector based on category
  const renderCourseIcon = (courseId: string) => {
    switch (courseId) {
      case 'programming':
        return <Code className="w-6 h-6 text-indigo-400" />;
      case 'ai':
        return <Bot className="w-6 h-6 text-purple-400" />;
      case 'cybersecurity':
        return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'webdev':
        return <Globe className="w-6 h-6 text-sky-400" />;
      default:
        return <BookOpen className="w-6 h-6 text-amber-400" />;
    }
  };

  // If viewing a lesson
  if (activeCourse && activeLesson && !isReviewOpen) {
    return (
      <LessonView
        course={activeCourse}
        lesson={activeLesson}
        onNavigateLesson={(lessonId) => setActiveLessonId(lessonId)}
        onNavigateCourseReview={() => setIsReviewOpen(true)}
        onBackToCourseDetail={() => setActiveLessonId(null)}
        language={language}
      />
    );
  }

  // If viewing the course final review & exam
  if (activeCourse && isReviewOpen) {
    return (
      <CourseReviewView
        course={activeCourse}
        onBackToCourseDetail={() => setIsReviewOpen(false)}
        onNavigateLesson={(lessonId) => {
          setIsReviewOpen(false);
          setActiveLessonId(lessonId);
        }}
        language={language}
      />
    );
  }

  // If viewing a single course's syllabus / detail
  if (activeCourse && !activeLesson) {
    const completionPercent = getCourseProgress(activeCourse);
    const completedCount = getCourseCompletedCount(activeCourse);
    const hasCert = progress.courseCertificates?.[activeCourse.id] !== undefined;

    const courseTitle = language === 'my' ? activeCourse.titleMy : activeCourse.titleEn;
    const targetAge = language === 'my' ? activeCourse.targetAgeMy : activeCourse.targetAgeEn;
    const courseDesc = language === 'my' ? activeCourse.descriptionMy : activeCourse.descriptionEn;

    return (
      <div className="courses-wrapper">
        {/* Back button */}
        <button
          onClick={() => setActiveCourseId(null)}
          className="back-link"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {language === 'my'
              ? 'သင်တန်းအားလုံး စာရင်းသို့ ပြန်သွားရန်'
              : 'Back to All Courses'}
          </span>
        </button>

        {/* Course Banner */}
        <div className="course-banner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="course-icon-box">
                {renderCourseIcon(activeCourse.id)}
              </div>
              <div>
                <span className="course-badge-pill">
                  {targetAge}
                </span>
                <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink, #1e2448)', marginTop: '4px' }}>
                  {courseTitle}
                </h1>
              </div>
            </div>

            {hasCert && (
              <span className="course-cert-badge">
                🏆 {language === 'my' ? 'လက်မှတ်ရရှိပြီး' : 'Certificate Earned'}
              </span>
            )}
          </div>

          <p style={{ fontSize: '14.5px', color: 'var(--ink-secondary, #585d82)', lineHeight: 1.6 }}>
            {courseDesc}
          </p>

          {/* Progress summary bar */}
          <div style={{ marginTop: '4px' }}>
            <div className="course-progress-header">
              <span>
                {language === 'my' ? 'သင်ယူပြီးမြောက်မှု' : 'Course Progress'}:{' '}
                {completedCount} / {activeCourse.lessons.length} lessons
              </span>
              <span style={{ fontWeight: 800, color: 'var(--purple-main, #6c47ff)' }}>
                {completionPercent}%
              </span>
            </div>
            <div className="course-progress-track">
              <div
                className="course-progress-fill"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Lessons Syllabus */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink, #1e2448)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>
                {language === 'my' ? 'သင်ခန်းစာများ (Syllabus)' : 'Course Lessons'}
              </span>
            </h2>
            <span style={{ fontSize: '12px', color: 'var(--ink-muted, #7f85a8)', fontWeight: 600 }}>
              {activeCourse.lessons.length} Total Lessons
            </span>
          </div>

          <div className="syllabus-list">
            {activeCourse.lessons.map((lesson) => {
              const completedList = progress.completedLessons?.[activeCourse.id] || [];
              const isCompleted = completedList.includes(lesson.id);
              const score = progress.courseQuizScores?.[activeCourse.id]?.[lesson.id];
              const lTitle = language === 'my' ? lesson.titleMy : lesson.titleEn;
              const lIntro = language === 'my' ? lesson.shortIntroMy : lesson.shortIntroEn;

              return (
                <div
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  className="lesson-item-card"
                >
                  <div className="lesson-item-left">
                    <div
                      className={`lesson-number-badge ${isCompleted ? 'completed' : ''}`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : lesson.lessonNumber}
                    </div>
                    <div>
                      <h3 className="lesson-item-title">
                        {lTitle}
                      </h3>
                      <p className="lesson-item-intro">
                        {lIntro}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {score !== undefined && (
                      <span style={{ fontSize: '12px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#f1f5f9', color: '#334155' }}>
                        {score}%
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLessonId(lesson.id);
                      }}
                      className="course-cta-btn"
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                    >
                      <span>
                        {isCompleted
                          ? language === 'my'
                            ? 'ပြန်လေ့လာမည်'
                            : 'Review'
                          : language === 'my'
                          ? 'လေ့လာမည်'
                          : 'Start'}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Assessment / Review Card */}
          <div className="final-milestone-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#fef08a', color: '#854d0e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#b45309', letterSpacing: '0.05em' }}>
                  {language === 'my' ? 'သင်တန်းဆင်းစစ်ဆေးမှု' : 'Course Milestone'}
                </span>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#78350f', margin: '2px 0' }}>
                  {language === 'my'
                    ? 'သင်တန်းပြီးဆုံးမှု ပြန်လည်ဆန်းစစ်ခြင်းနှင့် လက်မှတ်'
                    : 'Final Course Review, Exam & Certificate'}
                </h3>
                <p style={{ fontSize: '12.5px', color: '#92400e' }}>
                  {language === 'my'
                    ? 'သဘောတရားအနှစ်ချုပ်၊ ဝေါဟာရများနှင့် ၁၀ ပုဒ် စစ်ဆေးမှု'
                    : 'Concept checklist, vocabulary, 10-question final exam & achievement certificate'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsReviewOpen(true)}
              className="course-cta-btn"
              style={{ background: '#d97706', padding: '10px 20px', fontSize: '13px' }}
            >
              <Award className="w-4 h-4" />
              <span>
                {language === 'my' ? 'ဆန်းစစ်ချက် စတင်မည်' : 'Open Final Review'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: CATALOG OF ALL 4 COURSES
  return (
    <div className="courses-wrapper">
      {/* Header */}
      <div className="courses-header">
        <div className="eyebrow-pill">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Nyan Learn Academy • စနစ်တကျ သင်ရိုးများ</span>
        </div>
        <h1 className="courses-title">
          {language === 'my' ? 'အပြည့်အစုံ သင်ယူရန် သင်တန်းများ' : 'Comprehensive Courses'}
        </h1>
        <p className="courses-desc">
          {language === 'my'
            ? 'ကလေးငယ်များနှင့် စတင်လေ့လာသူများအတွက် ပရိုဂရမ်မင်း၊ ဉာဏ်ရည်တု (AI)၊ ဆိုက်ဘာလုံခြုံရေး နှင့် ဝဘ်ဆိုဒ်တည်ဆောက်ခြင်းတို့ကို ရုပ်ပုံများ၊ လက်တွေ့လေ့ကျင့်ခန်းများဖြင့် သင်ယူပါ။'
            : 'Interactive, visual courses designed for young minds and beginners. Master Programming, AI, Cybersecurity, and Web Development through step-by-step lessons, hands-on tasks, and real achievements.'}
        </p>
      </div>

      {/* 4 Course Cards Grid */}
      <div className="courses-grid">
        {ALL_COURSES.map((course) => {
          const completionPercent = getCourseProgress(course);
          const completedCount = getCourseCompletedCount(course);
          const hasCert = progress.courseCertificates?.[course.id] !== undefined;

          const cTitle = language === 'my' ? course.titleMy : course.titleEn;
          const cAge = language === 'my' ? course.targetAgeMy : course.targetAgeEn;
          const cDesc = language === 'my' ? course.descriptionMy : course.descriptionEn;

          return (
            <div
              key={course.id}
              onClick={() => setActiveCourseId(course.id)}
              className="course-card"
            >
              <div>
                {/* Top tags */}
                <div className="course-card-top">
                  <div className="course-icon-box">
                    {renderCourseIcon(course.id)}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span className="course-badge-pill">
                      {cAge}
                    </span>
                    {hasCert && (
                      <span className="course-cert-badge">
                        🏆 Cert
                      </span>
                    )}
                  </div>
                </div>

                {/* Course Title & Description */}
                <div>
                  <h2 className="course-card-title">
                    {cTitle}
                  </h2>
                  <p className="course-card-desc">
                    {cDesc}
                  </p>
                </div>
              </div>

              {/* Bottom stats and action */}
              <div className="course-card-footer">
                {/* Progress bar */}
                <div>
                  <div className="course-progress-header">
                    <span>
                      {completedCount} / {course.lessons.length} Lessons
                    </span>
                    <span style={{ fontWeight: 800, color: 'var(--purple-main, #6c47ff)' }}>
                      {completionPercent}%
                    </span>
                  </div>
                  <div className="course-progress-track">
                    <div
                      className="course-progress-fill"
                      style={{ width: `${completionPercent}%` }}
                    />
                  </div>
                </div>

                <div className="course-card-action">
                  <span className="course-xp-label">
                    ⚡ +{course.lessons.length * 30 + 100} XP
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCourseId(course.id);
                    }}
                    className="course-cta-btn"
                  >
                    <span>
                      {completionPercent === 100
                        ? language === 'my'
                          ? 'ပြန်လည်လေ့လာမည်'
                          : 'Review'
                        : completionPercent > 0
                        ? language === 'my'
                          ? 'ဆက်လက်လေ့လာမည်'
                          : 'Continue'
                        : language === 'my'
                          ? 'စတင်လေ့လာမည်'
                          : 'Start Course'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
