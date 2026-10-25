import { CourseData } from '../../../types/course.types';
import { programmingCourse } from './programmingCourse';
import { aiCourse } from './aiCourse';
import { cybersecurityCourse } from './cybersecurityCourse';
import { webDevCourse } from './webDevCourse';

export const ALL_COURSES: CourseData[] = [
  programmingCourse,
  aiCourse,
  cybersecurityCourse,
  webDevCourse
];

export const getCourseById = (courseId: string): CourseData | undefined => {
  return ALL_COURSES.find(c => c.id === courseId);
};

export const getLessonById = (courseId: string, lessonId: string) => {
  const course = getCourseById(courseId);
  if (!course) return null;
  const lesson = course.lessons.find(l => l.id === lessonId);
  return lesson || null;
};
