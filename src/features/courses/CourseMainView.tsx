import React, { useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  Sparkles,
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
      <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back button */}
          <button
            onClick={() => setActiveCourseId(null)}
            className="flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'my'
                ? 'သင်တန်းအားလုံး စာရင်းသို့ ပြန်သွားရန်'
                : 'Back to All Courses'}
            </span>
          </button>

          {/* Course Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  {renderCourseIcon(activeCourse.id)}
                </div>
                <div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {targetAge}
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1">
                    {courseTitle}
                  </h1>
                </div>
              </div>

              {hasCert && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full text-xs font-bold">
                  <Award className="w-4 h-4" />
                  <span>{language === 'my' ? 'လက်မှတ်ရရှိပြီး' : 'Certificate Earned'}</span>
                </div>
              )}
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {courseDesc}
            </p>

            {/* Progress summary bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                <span>
                  {language === 'my' ? 'သင်ယူပြီးမြောက်မှု' : 'Course Progress'}:{' '}
                  {completedCount} / {activeCourse.lessons.length} lessons
                </span>
                <span className="text-indigo-400 font-bold">
                  {completionPercent}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Lessons Syllabus */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>
                  {language === 'my' ? 'သင်ခန်းစာများ (Syllabus)' : 'Course Lessons'}
                </span>
              </h2>
              <span className="text-xs text-slate-400">
                {activeCourse.lessons.length} Total Lessons
              </span>
            </div>

            <div className="space-y-3">
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
                    className="bg-slate-900 border border-slate-800 hover:border-indigo-500/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-all hover:bg-slate-850/80 group"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold font-mono shrink-0 transition-colors ${
                          isCompleted
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-indigo-500/50'
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4" /> : lesson.lessonNumber}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                            {lTitle}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {lIntro}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                      {score !== undefined && (
                        <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                          {score}%
                        </span>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveLessonId(lesson.id);
                        }}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          isCompleted
                            ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md'
                        }`}
                      >
                        <span>
                          {isCompleted
                            ? language === 'my'
                              ? 'ပြန်လည်ဖတ်ရှုမည်'
                              : 'Review'
                            : language === 'my'
                            ? 'စတင်လေ့လာမည်'
                            : 'Start Lesson'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final Assessment / Review Card */}
            <div className="mt-8 bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-900 border-2 border-indigo-500/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {language === 'my' ? 'သင်တန်းဆင်းစစ်ဆေးမှု' : 'Course Milestone'}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {language === 'my'
                      ? 'သင်တန်းပြီးဆုံးမှု ပြန်လည်ဆန်းစစ်ခြင်းနှင့် လက်မှတ်'
                      : 'Final Course Review, Exam & Certificate'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {language === 'my'
                      ? 'သဘောတရားအနှစ်ချုပ်၊ ဝေါဟာရများနှင့် ၁၀ ပုဒ် စစ်ဆေးမှု'
                      : 'Concept checklist, vocabulary, 10-question final exam & achievement certificate'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsReviewOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
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
      </div>
    );
  }

  // DEFAULT VIEW: CATALOG OF ALL 4 COURSES
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center sm:text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nyan Learn Academy • စနစ်တကျ သင်ရိုးများ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {language === 'my' ? 'အပြည့်အစုံ သင်ယူရန် သင်တန်းများ' : 'Comprehensive Courses'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {language === 'my'
              ? 'ကလေးငယ်များနှင့် စတင်လေ့လာသူများအတွက် ပရိုဂရမ်မင်း၊ ဉာဏ်ရည်တု (AI)၊ ဆိုက်ဘာလုံခြုံရေး နှင့် ဝဘ်ဆိုဒ်တည်ဆောက်ခြင်းတို့ကို ရုပ်ပုံများ၊ လက်တွေ့လေ့ကျင့်ခန်းများဖြင့် သင်ယူပါ။'
              : 'Interactive, visual courses designed for young minds and beginners. Master Programming, AI, Cybersecurity, and Web Development through step-by-step lessons, hands-on tasks, and real achievements.'}
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all hover:bg-slate-850/80 hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Top tags */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      {renderCourseIcon(course.id)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {cAge}
                      </span>
                      {hasCert && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          Cert
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Title & Description */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {cTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {cDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom stats and action */}
                <div className="pt-6 space-y-4 border-t border-slate-800/80 mt-6">
                  {/* Progress bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>
                        {completedCount} / {course.lessons.length} Lessons
                      </span>
                      <span className="font-semibold text-indigo-400">
                        {completionPercent}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
                        style={{ width: `${completionPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      +{course.lessons.length * 30 + 100} Total XP
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCourseId(course.id);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md group-hover:scale-105"
                    >
                      <span>
                        {completionPercent === 100
                          ? language === 'my'
                            ? 'ပြန်လည်လေ့လာမည်'
                            : 'Review Course'
                          : completionPercent > 0
                          ? language === 'my'
                            ? 'ဆက်လက်လေ့လာမည်'
                            : 'Continue'
                          : language === 'my'
                          ? 'သင်တန်းစတင်မည်'
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
    </div>
  );
};
