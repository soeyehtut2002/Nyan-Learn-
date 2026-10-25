export interface QuizOption {
  id: string;
  textEn: string;
  textMy: string;
}

export interface QuizQuestion {
  id: string;
  questionEn: string;
  questionMy: string;
  options: QuizOption[];
  correctOptionId: string;
  explanationEn: string;
  explanationMy: string;
}

export type ActivityType =
  | 'sequence-sorter'
  | 'condition-tester'
  | 'loop-counter'
  | 'classification-sorter'
  | 'prompt-tester'
  | 'phishing-detector'
  | 'password-checker'
  | 'privacy-sorter'
  | 'code-sandbox'
  | 'code-inspect';

export interface InteractiveActivityData {
  type: ActivityType;
  titleEn: string;
  titleMy: string;
  instructionsEn: string;
  instructionsMy: string;
  initialData?: any;
  solution?: any;
}

export interface VisualDiagramData {
  type: string; // e.g., 'algorithm-flowchart', 'sandwich-steps', 'loop-cycle', 'neural-net', 'phishing-email', 'dom-tree', etc.
  captionEn: string;
  captionMy: string;
  altEn: string;
  altMy: string;
  data?: any;
}

export interface LessonContent {
  id: string;
  lessonNumber: number;
  titleEn: string;
  titleMy: string;
  shortIntroEn: string;
  shortIntroMy: string;
  learningObjectivesEn: string[];
  learningObjectivesMy: string[];
  explanationEn: string[]; // Structured paragraphs
  explanationMy: string[];
  diagram: VisualDiagramData;
  analogyEn: {
    title: string;
    description: string;
  };
  analogyMy: {
    title: string;
    description: string;
  };
  workedExampleEn: {
    title: string;
    scenario: string;
    steps: { stepNumber: number; instruction: string; outcome: string }[];
  };
  workedExampleMy: {
    title: string;
    scenario: string;
    steps: { stepNumber: number; instruction: string; outcome: string }[];
  };
  activity: InteractiveActivityData;
  quizQuestions: QuizQuestion[]; // 3-5 questions
  summaryEn: string[];
  summaryMy: string[];
}

export interface VocabularyTerm {
  term: string;
  pronunciation?: string;
  definitionEn: string;
  definitionMy: string;
  exampleEn: string;
  exampleMy: string;
}

export interface CourseData {
  id: string; // 'programming', 'ai', 'cybersecurity', 'webdev'
  titleEn: string;
  titleMy: string;
  badgeEmoji: string;
  targetAgeEn: string;
  targetAgeMy: string;
  descriptionEn: string;
  descriptionMy: string;
  category: string;
  color: string;
  bgLight: string;
  lessons: LessonContent[];
  finalReview: {
    summaryEn: string[];
    summaryMy: string[];
    learnedChecklistEn: string[];
    learnedChecklistMy: string[];
    vocabulary: VocabularyTerm[];
    finalQuiz: QuizQuestion[]; // 10 comprehensive questions
    badgeTitleEn: string;
    badgeTitleMy: string;
    certificateTitleEn: string;
    certificateTitleMy: string;
  };
}
