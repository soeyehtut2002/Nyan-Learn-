import { describe, it, expect } from 'vitest';
import { ALL_COURSES, getCourseById } from '../src/features/courses/data/allCourses';

describe('Nyan Learn Academy - 4 Complete Courses Content Audit', () => {
  it('should load all 4 courses successfully', () => {
    expect(ALL_COURSES).toHaveLength(4);
    const ids = ALL_COURSES.map((c) => c.id);
    expect(ids).toEqual(['programming', 'ai', 'cybersecurity', 'webdev']);
  });

  describe('Course 1: Basic Programming for Kids', () => {
    const course = getCourseById('programming');
    it('exists and targets 6-12 years', () => {
      expect(course).toBeDefined();
      expect(course?.targetAgeEn).toContain('6–12');
    });

    it('has exactly 10 complete lessons', () => {
      expect(course?.lessons).toHaveLength(10);
    });

    it('contains lesson 10 Final Project: Program a Robot Maze', () => {
      const l10 = course?.lessons[9];
      expect(l10?.lessonNumber).toBe(10);
      expect(l10?.titleEn).toContain('Program a Robot Maze');
    });

    it('has a 10-question final assessment and complete vocabulary', () => {
      expect(course?.finalReview.finalQuiz).toHaveLength(10);
      expect(course?.finalReview.vocabulary.length).toBeGreaterThanOrEqual(8);
      expect(course?.finalReview.learnedChecklistEn.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe('Course 2: AI for Kids', () => {
    const course = getCourseById('ai');
    it('exists and targets 8-14 years', () => {
      expect(course).toBeDefined();
      expect(course?.targetAgeEn).toContain('8–14');
    });

    it('has exactly 10 complete lessons', () => {
      expect(course?.lessons).toHaveLength(10);
    });

    it('contains Generative AI, Prompts, Fact Checking, Ethics & Final Project', () => {
      const titles = course?.lessons.map((l) => l.titleEn) || [];
      expect(titles.some((t) => t.includes('Generative AI'))).toBe(true);
      expect(titles.some((t) => t.includes('Writing Clear Prompts'))).toBe(true);
      expect(titles.some((t) => t.includes('Mistakes and Fact Checking'))).toBe(true);
      expect(titles.some((t) => t.includes('Design a Simple AI Idea'))).toBe(true);
    });

    it('has a 10-question final assessment', () => {
      expect(course?.finalReview.finalQuiz).toHaveLength(10);
    });
  });

  describe('Course 3: Cybersecurity for Kids', () => {
    const course = getCourseById('cybersecurity');
    it('exists and targets 8-14 years', () => {
      expect(course).toBeDefined();
      expect(course?.targetAgeEn).toContain('8–14');
    });

    it('has exactly 10 complete lessons focused on defense and privacy', () => {
      expect(course?.lessons).toHaveLength(10);
      const titles = course?.lessons.map((l) => l.titleEn) || [];
      expect(titles.some((t) => t.includes('Personal Information and Privacy'))).toBe(true);
      expect(titles.some((t) => t.includes('Strong Passwords'))).toBe(true);
      expect(titles.some((t) => t.includes('Recognizing Phishing'))).toBe(true);
      expect(titles.some((t) => t.includes('Two-Factor Authentication'))).toBe(true);
      expect(titles.some((t) => t.includes('Cyber Safety Detective'))).toBe(true);
    });

    it('has a 10-question final assessment', () => {
      expect(course?.finalReview.finalQuiz).toHaveLength(10);
    });
  });

  describe('Course 4: Basic Web Development', () => {
    const course = getCourseById('webdev');
    it('exists and targets 10 years and above', () => {
      expect(course).toBeDefined();
      expect(course?.targetAgeEn).toContain('10+');
    });

    it('has exactly 11 complete lessons', () => {
      expect(course?.lessons).toHaveLength(11);
    });

    it('contains HTML, CSS, Responsive, JS, DOM, DevTools & Personal Website Final Project', () => {
      const titles = course?.lessons.map((l) => l.titleEn) || [];
      expect(titles.some((t) => t.includes('HTML and Page Structure'))).toBe(true);
      expect(titles.some((t) => t.includes('CSS and Website Styling'))).toBe(true);
      expect(titles.some((t) => t.includes('Responsive Design'))).toBe(true);
      expect(titles.some((t) => t.includes('JavaScript and Interactivity'))).toBe(true);
      expect(titles.some((t) => t.includes('Browser Developer Tools'))).toBe(true);
      expect(titles.some((t) => t.includes('Build a Personal Learning Website'))).toBe(true);
    });

    it('has a 10-question final assessment', () => {
      expect(course?.finalReview.finalQuiz).toHaveLength(10);
    });
  });

  describe('Universal Lesson Quality and Schema Compliance', () => {
    ALL_COURSES.forEach((course) => {
      course.lessons.forEach((lesson) => {
        it(`${course.id} - Lesson ${lesson.lessonNumber}: ${lesson.titleEn} satisfies all requirements`, () => {
          // 1. Title and short intro
          expect(lesson.titleEn).toBeTruthy();
          expect(lesson.titleMy).toBeTruthy();
          expect(lesson.shortIntroEn).toBeTruthy();
          expect(lesson.shortIntroMy).toBeTruthy();

          // 2. Learning objectives
          expect(lesson.learningObjectivesEn.length).toBeGreaterThanOrEqual(2);
          expect(lesson.learningObjectivesMy.length).toBeGreaterThanOrEqual(2);

          // 3. Explanation
          expect(lesson.explanationEn.length).toBeGreaterThanOrEqual(2);
          expect(lesson.explanationMy.length).toBeGreaterThanOrEqual(2);

          // 4. Visual Diagram
          expect(lesson.diagram).toBeDefined();
          expect(lesson.diagram.type).toBeTruthy();
          expect(lesson.diagram.captionEn).toBeTruthy();
          expect(lesson.diagram.captionMy).toBeTruthy();

          // 5. Analogy
          expect(lesson.analogyEn.title).toBeTruthy();
          expect(lesson.analogyEn.description).toBeTruthy();
          expect(lesson.analogyMy.title).toBeTruthy();
          expect(lesson.analogyMy.description).toBeTruthy();

          // 6. Worked Example
          expect(lesson.workedExampleEn.steps.length).toBeGreaterThanOrEqual(2);
          expect(lesson.workedExampleMy.steps.length).toBeGreaterThanOrEqual(2);

          // 7. Interactive Activity
          expect(lesson.activity).toBeDefined();
          expect(lesson.activity.type).toBeTruthy();
          expect(lesson.activity.titleEn).toBeTruthy();

          // 8 & 9. Check your understanding quiz (3 to 5 questions with 4 options each)
          expect(lesson.quizQuestions.length).toBeGreaterThanOrEqual(3);
          expect(lesson.quizQuestions.length).toBeLessThanOrEqual(5);

          lesson.quizQuestions.forEach((q) => {
            expect(q.options).toHaveLength(4);
            const validOptionIds = q.options.map((o) => o.id);
            expect(validOptionIds).toContain(q.correctOptionId);
            expect(q.explanationEn).toBeTruthy();
            expect(q.explanationMy).toBeTruthy();
          });

          // 11. Short summary
          expect(lesson.summaryEn.length).toBeGreaterThanOrEqual(2);
          expect(lesson.summaryMy.length).toBeGreaterThanOrEqual(2);
        });
      });
    });
  });
});
