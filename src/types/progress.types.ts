export type BadgeId = 'maze' | 'quiz' | 'ai' | 'builder' | 'level';

export interface BadgeInfo {
  id: BadgeId;
  emoji: string;
  titleEn: string;
  titleMy: string;
  name?: {
    en: string;
    my: string;
  };
  description?: {
    en: string;
    my: string;
  };
}

export interface UserProgressState {
  xp: number;
  mazeDone: boolean;
  quizDone: boolean;
  aiDone: boolean;
  builderDone: boolean;
  badges: BadgeId[];
  unlockedMazeLevels: number[];
  completedMazeLevels: number[];
  soundEnabled: boolean;
}

export const BADGES_METADATA: BadgeInfo[] = [
  {
    id: 'maze',
    emoji: '🤖',
    titleEn: 'Maze Master',
    titleMy: 'လမ်းကြောင်းကျွမ်းကျင်သူ',
    name: { en: 'Maze Master', my: 'လမ်းကြောင်းကျွမ်းကျင်သူ' },
    description: { en: 'Conquer the Robot Maze', my: 'Robot လမ်းကြောင်းကို အောင်မြင်စွာ ဖြတ်သန်းပါ' }
  },
  {
    id: 'quiz',
    emoji: '🧠',
    titleEn: 'Brain Builder',
    titleMy: 'ဉာဏ်စမ်းသူ',
    name: { en: 'Brain Builder', my: 'ဉာဏ်စမ်းသူ' },
    description: { en: 'Master coding concepts', my: 'Coding အယူအဆများကို ဖြေဆိုပါ' }
  },
  {
    id: 'ai',
    emoji: '✨',
    titleEn: 'AI Explorer',
    titleMy: 'AI စူးစမ်းသူ',
    name: { en: 'AI Explorer', my: 'AI စူးစမ်းသူ' },
    description: { en: 'Discover machine learning patterns', my: 'Machine Learning ပုံစံများကို ရှာဖွေပါ' }
  },
  {
    id: 'builder',
    emoji: '🧱',
    titleEn: 'Code Builder',
    titleMy: 'Code တည်ဆောက်သူ',
    name: { en: 'Code Builder', my: 'Code တည်ဆောက်သူ' },
    description: { en: 'Create programs with blocks', my: 'Block ဖြင့် Program များ တည်ဆောက်ပါ' }
  },
  {
    id: 'level',
    emoji: '🌟',
    titleEn: 'Level Up',
    titleMy: 'Level တက်သူ',
    name: { en: 'Level Up', my: 'Level တက်သူ' },
    description: { en: 'Reach Level 2 or higher', my: 'Level 2 နှင့်အထက်သို့ တက်လှမ်းပါ' }
  }
];
