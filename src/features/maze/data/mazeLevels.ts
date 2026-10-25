import { MazeLevel } from '../../../types/maze.types';

export const MAZE_GRID_SIZE = 5; // 5x5 Grid (25 tiles: 0 to 24)

export const MAZE_LEVELS: MazeLevel[] = [
  // =========================================================================
  // TIER 1: JUNIOR CODER (Ages 7–10) - SEQUENCING & DIRECTIONS
  // =========================================================================
  {
    id: 1,
    tier: 'junior',
    ageBracket: '7–10',
    concept: { en: 'Sequencing & Straight Paths', my: 'အဆင့်လိုက် အစီအစဉ်ဆွဲခြင်း' },
    name: { en: 'Level 1: First Steps', my: 'အဆင့် ၁ — ပထမခြေလှမ်း' },
    subtitle: { en: 'Learn straight paths and basic turns', my: 'အခြေခံလမ်းဖြောင့်နှင့် ကွေ့လမ်းများကို လေ့လာခြင်း' },
    start: 20,
    goal: 4,
    walls: [6, 7, 12, 17, 18],
    moveLimit: 12,
    xpReward: 20,
    initialHeading: 'east',
    hint: {
      en: 'Move right ➡️ along the bottom to the corner, then move straight up ⬆️ to the star!',
      my: 'အောက်ဘက်အတိုင်း ညာဘက်သို့ ➡️ ထောင့်အထိသွားပြီး အပေါ်တည့်တည့် ⬆️ တက်ပါ!'
    }
  },
  {
    id: 2,
    tier: 'junior',
    ageBracket: '7–10',
    concept: { en: 'Corner Navigation & Perimeter Steps', my: 'ထောင့်ချိုးလမ်းပြောင်းခြင်း' },
    name: { en: 'Level 2: The Corner Turn', my: 'အဆင့် ၂ — ထောင့်ချိုးကွေ့' },
    subtitle: { en: 'Navigate around a large central obstacle', my: 'ဗဟိုအတားအဆီးကြီးကို ပတ်ပြီး သွားပါ' },
    start: 0,
    goal: 24,
    walls: [6, 7, 8, 11, 12, 13, 16, 17, 18],
    moveLimit: 12,
    xpReward: 15,
    initialHeading: 'south',
    hint: {
      en: 'Follow the left outer edge down ⬇️ to the bottom-left corner, then go all the way right ➡️!',
      my: 'ဘယ်ဘက်အစွန်းအတိုင်း အောက်ဆင်း ⬇️ ပြီးနောက် ညာဘက်အဆုံးအထိ ➡️ သွားပါ!'
    }
  },
  {
    id: 3,
    tier: 'junior',
    ageBracket: '7–10',
    concept: { en: 'Zigzag Routing & Reversible Steps', my: 'ဇစ်ဇက် အလှည့်အပြောင်း လမ်းကြောင်း' },
    name: { en: 'Level 3: Zigzag Alley', my: 'အဆင့် ၃ — ဇစ်ဇက်လမ်းကြား' },
    subtitle: { en: 'Weave back and forth through wall gaps', my: 'နံရံအပေါက်များမှတစ်ဆင့် ဇစ်ဇက် ကွေ့ပတ်သွားပါ' },
    start: 20,
    goal: 0,
    walls: [15, 16, 17, 18, 6, 7, 8, 9],
    moveLimit: 16,
    xpReward: 15,
    initialHeading: 'east',
    hint: {
      en: 'Go right ➡️ to the gap, go up ⬆️, then walk left ⬅️ to the next gap, and up ⬆️ to the goal!',
      my: 'ညာဘက်ပေါက်ဆီ ➡️ သွား၊ အပေါ်တက် ⬆️၊ ဘယ်ဘက်ပေါက်ဆီ ⬅️ သွားပြီး ပန်းတိုင်ဆီ အပေါ်တက်ပါ ⬆️!'
    }
  },
  {
    id: 4,
    tier: 'junior',
    ageBracket: '7–10',
    concept: { en: 'Obstacle Evasion (Debugging Paths)', my: 'အတားအဆီးရှောင်ကွင်းခြင်း' },
    name: { en: 'Level 4: Island Pillars', my: 'အဆင့် ၄ — ကျွန်းငယ်တိုင်များ' },
    subtitle: { en: 'Dodge scattered stone pillars', my: 'ကျောက်တိုင်ငယ်များကို ရှောင်ကွင်းပါ' },
    start: 20,
    goal: 2,
    walls: [7, 11, 13, 17, 21],
    moveLimit: 10,
    xpReward: 15,
    initialHeading: 'north',
    hint: {
      en: 'Walk straight up ⬆️ along the clear left column, then turn right ➡️ to the top center!',
      my: 'ဘယ်ဘက်တန်းရှင်းလင်းသော လမ်းအတိုင်း အပေါ်တက် ⬆️ ပြီး ထိပ်အလယ်ဆီ ညာဘက်ကွေ့ပါ ➡️!'
    }
  },
  {
    id: 5,
    tier: 'junior',
    ageBracket: '7–10',
    concept: { en: 'Inward Spiral Sequences', my: 'ခရုပတ်လမ်းစဉ် နည်းစနစ်' },
    name: { en: 'Level 5: The Spiral', my: 'အဆင့် ၅ — ခရုပတ်လမ်း' },
    subtitle: { en: 'Follow the spiral passage into the center', my: 'အလယ်ဗဟိုဆီသို့ ခရုပတ်လမ်းအတိုင်း ဝင်ရောက်ပါ' },
    start: 0,
    goal: 12,
    walls: [5, 10, 15, 16, 7, 8, 13, 17],
    moveLimit: 14,
    xpReward: 15,
    initialHeading: 'east',
    hint: {
      en: 'Follow the open outer hallway right ➡️, then curve inside toward the center star ⭐!',
      my: 'အပြင်ဘက်စင်္ကြံအတိုင်း ညာဘက်သို့သွားပြီး အလယ်က ကြယ်ဆီ ⭐ အတွင်းဘက်သို့ ကွေ့ဝင်ပါ!'
    }
  },

  // =========================================================================
  // TIER 2: INTERMEDIATE CODER (Ages 11–14) - LOOPS & PATTERN REPETITION
  // =========================================================================
  {
    id: 6,
    tier: 'intermediate',
    ageBracket: '11–14',
    concept: { en: 'Decision Trees & Dead-End Pruning', my: 'လမ်းခွဲများကြား အမှားရှောင်ခြင်း' },
    name: { en: 'Level 6: Fork in the Road', my: 'အဆင့် ၆ — လမ်းခွဲနှစ်ခွ' },
    subtitle: { en: 'Identify dead ends and choose the winning branch', my: 'ပိတ်နေသောလမ်းကို ရှောင်ပြီး လမ်းမှန်ကို ရွေးချယ်ပါ' },
    start: 22,
    goal: 2,
    walls: [1, 6, 7, 10, 11, 15, 16, 21],
    moveLimit: 12,
    xpReward: 15,
    initialHeading: 'north',
    hint: {
      en: 'The left passage is a dead end! Take the right corridor ➡️ and head up ⬆️ to the star.',
      my: 'ဘယ်ဘက်လမ်းက ပိတ်နေပါတယ်! ညာဘက်လမ်းကြားအတိုင်း ➡️ သွားပြီး အပေါ်တက်ပါ ⬆️။'
    }
  },
  {
    id: 7,
    tier: 'intermediate',
    ageBracket: '11–14',
    concept: { en: 'Loop Optimization (Repeat Pattern)', my: 'ထပ်ခါထပ်ခါ Loop ပတ်ခြင်း' },
    name: { en: 'Level 7: Stepping Stones', my: 'အဆင့် ၇ — ကျောက်တုံးလမ်းကူး' },
    subtitle: { en: 'Navigate through a symmetric stone garden', my: 'ကျောက်တုံးဥယျာဉ်လမ်းကို ဖြတ်သန်းပါ' },
    start: 20,
    goal: 4,
    walls: [6, 8, 16, 18, 22],
    moveLimit: 12,
    xpReward: 15,
    initialHeading: 'east',
    hint: {
      en: 'Use the open center crossway to weave between the stone pillars toward the goal!',
      my: 'ကျောက်တိုင်များကြားရှိ အလယ်လမ်းမကြီးမှတစ်ဆင့် ပန်းတိုင်ဆီသို့ ကွေ့ပတ်သွားပါ!'
    }
  },
  {
    id: 8,
    tier: 'intermediate',
    ageBracket: '11–14',
    concept: { en: 'Complex S-Curve Decomposition', my: 'ရှုပ်ထွေးသော အကွေ့လမ်းများကို ခွဲခြမ်းခြင်း' },
    name: { en: 'Level 8: The S-Curve', my: 'အဆင့် ၈ — အက်စ်ပုံစံကွေ့' },
    subtitle: { en: 'Master long-sequence planning across multiple corridors', my: 'အကွေ့အကောက်များသော လမ်းရှည်ကြီးကို စီစဉ်ပါ' },
    start: 24,
    goal: 0,
    walls: [5, 6, 7, 8, 16, 17, 18, 19],
    moveLimit: 20,
    xpReward: 20,
    initialHeading: 'west',
    hint: {
      en: 'Follow the S-shape: left ⬅️ along bottom, up ⬆️ on the left, right ➡️ across the middle, up ⬆️, and left ⬅️ to goal!',
      my: 'အက်စ် (S) ပုံစံအတိုင်း သွားပါ — အောက်ဘက်ကနေ ဘယ် ⬅️၊ အပေါ်တက် ⬆️၊ အလယ်အတိုင်း ညာ ➡️၊ အပေါ်တက် ⬆️၊ ပြီးလျှင် ဘယ်ဘက် ⬅️!'
    }
  },
  {
    id: 9,
    tier: 'intermediate',
    ageBracket: '11–14',
    concept: { en: 'Subroutines & Gate Penetration', my: 'တံခါးပေါက် ရှာဖွေရေး Function' },
    name: { en: 'Level 9: The Fortress', my: 'အဆင့် ၉ — ခံတပ်လမ်း' },
    subtitle: { en: 'Penetrate fortress walls through the secret gate', my: 'လျှို့ဝှက်တံခါးပေါက်မှတစ်ဆင့် ခံတပ်ထဲသို့ ဝင်ရောက်ပါ' },
    start: 20,
    goal: 12,
    walls: [1, 6, 7, 8, 11, 13, 16, 18, 23],
    moveLimit: 12,
    xpReward: 20,
    initialHeading: 'east',
    hint: {
      en: 'Walk right ➡️ to column 2, then step north ⬆️ directly through the open fortress gate!',
      my: 'ညာဘက် ➡️ အကွက် (၂) ဆီသွားပြီး ခံတပ်တံခါးပေါက်မှတစ်ဆင့် အပေါ်သို့ ⬆️ တိုက်ရိုက်ဝင်ပါ!'
    }
  },
  {
    id: 10,
    tier: 'intermediate',
    ageBracket: '11–14',
    concept: { en: 'Pattern Compression (DRY Principle)', my: 'အကြိမ်ရေ အနည်းဆုံးဖြင့် အဖြေရှာခြင်း' },
    name: { en: 'Level 10: Master Quest', my: 'အဆင့် ၁၀ — မာစတာစိန်ခေါ်မှု' },
    subtitle: { en: 'The ultimate computational sequence challenge', my: 'အမြင့်ဆုံး အဆင့်ဆင့် တွေးခေါ်မှု စိန်ခေါ်ချက်' },
    start: 20,
    goal: 4,
    walls: [1, 7, 12, 16, 23],
    moveLimit: 14,
    xpReward: 25,
    initialHeading: 'east',
    hint: {
      en: 'Step around the obstacles in row 3 and 1, weaving diagonally toward the top right!',
      my: 'အတားအဆီးများကို ကျော်ကွင်းပြီး အပေါ်ညာဘက်ထောင့်ရှိ မာစတာကြယ်ဆီသို့ ရောက်အောင်သွားပါ!'
    }
  },

  // =========================================================================
  // TIER 3: SENIOR CODER (Ages 15–18) - CONDITIONALS, SENSORS & ALGORITHMS
  // =========================================================================
  {
    id: 11,
    tier: 'senior',
    ageBracket: '15–18',
    concept: { en: 'Sensory Obstacle Scans (if/else)', my: 'Sensor စနစ်ဖြင့် အတားအဆီး စစ်ဆေးခြင်း' },
    name: { en: 'Level 11: Sensor Scan', my: 'အဆင့် ၁၁ — Sensor စကန်ဖတ်ခြင်း' },
    subtitle: { en: 'Use if/else logic to check before moving', my: 'If/Else ဖြင့် အတားအဆီး ရှိ/မရှိ စစ်ဆေးပြီး လှုပ်ရှားပါ' },
    start: 20,
    goal: 2,
    walls: [1, 3, 6, 8, 11, 13, 16, 18],
    moveLimit: 12,
    xpReward: 25,
    initialHeading: 'east',
    hint: {
      en: 'Scan the central vertical lane. Use the center pathway between pillars to reach the star!',
      my: 'အလယ်တည့်တည့်လမ်းကြောင်းကို စကန်ဖတ်ပါ။ ကျောက်တိုင်များကြား လမ်းမမှတစ်ဆင့် ပန်းတိုင်ဆီသွားပါ!'
    }
  },
  {
    id: 12,
    tier: 'senior',
    ageBracket: '15–18',
    concept: { en: 'Conditional Branching & Logic Gates', my: 'အခြေအနေအရ လမ်းခွဲရွေးချယ်မှု' },
    name: { en: 'Level 12: Forking Paths', my: 'အဆင့် ၁၂ — လမ်းခွဲများ၏ ဆုံးဖြတ်ချက်' },
    subtitle: { en: 'Handle multi-branch decisions using logic conditionals', my: 'Logic စည်းမျဉ်းများဖြင့် လမ်းခွဲများကို ဖြတ်ကျော်ပါ' },
    start: 24,
    goal: 0,
    walls: [1, 2, 8, 11, 16, 20, 22],
    moveLimit: 14,
    xpReward: 30,
    initialHeading: 'north',
    hint: {
      en: 'Step north along the right edge, weave through row 2 and 1 to evade the perimeter traps!',
      my: 'ညာဘက်အစွန်းမှ အပေါ်တက်ပြီး အကွက်တန်း (၂) နှင့် (၁) မှတစ်ဆင့် ထောင်ချောက်များကို ရှောင်ပါ!'
    }
  },
  {
    id: 13,
    tier: 'senior',
    ageBracket: '15–18',
    concept: { en: 'Wall-Follower Autonomous Algorithm', my: 'နံရံကပ် ကိုယ်ပိုင် အယ်လဂိုရီသမ်' },
    name: { en: 'Level 13: Labyrinth of Shadows', my: 'အဆင့် ၁၃ — အရိပ်ဝင်္ကပါ' },
    subtitle: { en: 'Apply the right-hand rule algorithm to escape the dense maze', my: 'ညာလက်ကပ် စည်းမျဉ်းဖြင့် ဝင်္ကပါကို အောင်မြင်စွာ ဖြေရှင်းပါ' },
    start: 20,
    goal: 4,
    walls: [3, 5, 10, 13, 17, 22, 23, 24],
    moveLimit: 14,
    xpReward: 30,
    initialHeading: 'east',
    hint: {
      en: 'Keep your sensors alert along the walls: move east into column 1, weave up and across to the top right!',
      my: 'နံရံများအနီး Sensor သတိထားပါ — အကွက် ၁ ဆီသွားပြီး အပေါ်ညာဘက်သို့ အောင်မြင်စွာ ထွက်ခွာပါ!'
    }
  },
  {
    id: 14,
    tier: 'senior',
    ageBracket: '15–18',
    concept: { en: 'Nested Loops & Switchback Logic', my: 'ဆင့်ကဲ Loop ပတ်ခြင်းနှင့် ကွေ့ကောက်လမ်း' },
    name: { en: 'Level 14: Switchback Pass', my: 'အဆင့် ၁၄ — အကွေ့အကောက် တောင်ကြား' },
    subtitle: { en: 'Combine nested loops and condition checks across switchbacks', my: 'ဆင့်ကဲ Loop များနှင့် အခြေအနေစစ်ဆေးမှုများကို ပေါင်းစပ်ပါ' },
    start: 0,
    goal: 24,
    walls: [3, 4, 5, 8, 15, 16, 17],
    moveLimit: 14,
    xpReward: 35,
    initialHeading: 'east',
    hint: {
      en: 'Take the diagonal corridor from top-left through the center to reach the bottom-right!',
      my: 'ထိပ်ဘယ်ဘက်မှ အလယ်ဗဟိုတောင်ကြားကို ဖြတ်သန်းကာ အောက်ညာဘက် ပန်းတိုင်ဆီသို့ ဆင်းပါ!'
    }
  },
  {
    id: 15,
    tier: 'senior',
    ageBracket: '15–18',
    concept: { en: 'Grand Autonomous AI Navigation Challenge', my: 'မဟာ AI အလိုအလျောက် ဖြေရှင်းမှု စိန်ခေါ်ချက်' },
    name: { en: 'Level 15: Grand AI Challenge', my: 'အဆင့် ၁၅ — မဟာ AI စိန်ခေါ်မှု' },
    subtitle: { en: 'Synthesize sequencing, loops, and sensory conditions into a complete algorithm', my: 'Sequence၊ Loop နှင့် Condition အားလုံးကို ပေါင်းစပ်၍ Algorithm ရေးပါ' },
    start: 20,
    goal: 4,
    walls: [1, 5, 7, 9, 11, 12, 21, 22, 24],
    moveLimit: 14,
    xpReward: 50,
    initialHeading: 'east',
    hint: {
      en: 'Navigate along the lower corridor to column 3, step north through the center avenue directly to the star!',
      my: 'အောက်လမ်းကြားအတိုင်း အကွက် ၃ အထိသွားပြီး အလယ်လမ်းမမှ အပေါ်တက်ကာ ရွှေကြယ်ဆီသို့ အရောက်လှမ်းပါ!'
    }
  }
];
