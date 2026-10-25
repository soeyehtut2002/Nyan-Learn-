/**
 * CodeQuest - Robot Maze Level Definitions & Pure Game Logic
 * Separated from UI code for modularity, testability, and clean architecture.
 */

'use strict';

const MAZE_GRID_SIZE = 5; // 5x5 Grid (25 tiles: 0 to 24)

/**
 * 10 Progressive Maze Levels
 * Each level has tested, verified reachable paths and calibrated move limits.
 */
const MAZE_LEVELS = [
  {
    id: 1,
    name: { en: 'Level 1: First Steps', my: 'အဆင့် ၁ — ပထမခြေလှမ်း' },
    subtitle: { en: 'Learn straight paths and basic turns', my: 'အခြေခံလမ်းဖြောင့်နှင့် ကွေ့လမ်းများကို လေ့လာခြင်း' },
    start: 20,
    goal: 4,
    walls: [6, 7, 12, 17, 18],
    moveLimit: 12,
    xpReward: 20,
    hint: {
      en: 'Move right ➡️ along the bottom to the corner, then move straight up ⬆️ to the star!',
      my: 'အောက်ဘက်အတိုင်း ညာဘက်သို့ ➡️ ထောင့်အထိသွားပြီး အပေါ်တည့်တည့် ⬆️ တက်ပါ!'
    }
  },
  {
    id: 2,
    name: { en: 'Level 2: The Corner Turn', my: 'အဆင့် ၂ — ထောင့်ချိုးကွေ့' },
    subtitle: { en: 'Navigate around a large central obstacle', my: 'ဗဟိုအတားအဆီးကြီးကို ပတ်ပြီး သွားပါ' },
    start: 0,
    goal: 24,
    walls: [6, 7, 8, 11, 12, 13, 16, 17, 18],
    moveLimit: 12,
    xpReward: 15,
    hint: {
      en: 'Follow the left outer edge down ⬇️ to the bottom-left corner, then go all the way right ➡️!',
      my: 'ဘယ်ဘက်အစွန်းအတိုင်း အောက်ဆင်း ⬇️ ပြီးနောက် ညာဘက်အဆုံးအထိ ➡️ သွားပါ!'
    }
  },
  {
    id: 3,
    name: { en: 'Level 3: Zigzag Alley', my: 'အဆင့် ၃ — ဇစ်ဇက်လမ်းကြား' },
    subtitle: { en: 'Weave back and forth through wall gaps', my: 'နံရံအပေါက်များမှတစ်ဆင့် ဇစ်ဇက် ကွေ့ပတ်သွားပါ' },
    start: 20,
    goal: 0,
    walls: [15, 16, 17, 18, 6, 7, 8, 9],
    moveLimit: 16,
    xpReward: 15,
    hint: {
      en: 'Go right ➡️ to the gap, go up ⬆️, then walk left ⬅️ to the next gap, and up ⬆️ to the goal!',
      my: 'ညာဘက်ပေါက်ဆီ ➡️ သွား၊ အပေါ်တက် ⬆️၊ ဘယ်ဘက်ပေါက်ဆီ ⬅️ သွားပြီး ပန်းတိုင်ဆီ အပေါ်တက်ပါ ⬆️!'
    }
  },
  {
    id: 4,
    name: { en: 'Level 4: Island Pillars', my: 'အဆင့် ၄ — ကျွန်းငယ်တိုင်များ' },
    subtitle: { en: 'Dodge scattered stone pillars', my: 'ကျောက်တိုင်ငယ်များကို ရှောင်ကွင်းပါ' },
    start: 20,
    goal: 2,
    walls: [7, 11, 13, 17, 21],
    moveLimit: 10,
    xpReward: 15,
    hint: {
      en: 'Walk straight up ⬆️ along the clear left column, then turn right ➡️ to the top center!',
      my: 'ဘယ်ဘက်တန်းရှင်းလင်းသော လမ်းအတိုင်း အပေါ်တက် ⬆️ ပြီး ထိပ်အလယ်ဆီ ညာဘက်ကွေ့ပါ ➡️!'
    }
  },
  {
    id: 5,
    name: { en: 'Level 5: The Spiral', my: 'အဆင့် ၅ — ခရုပတ်လမ်း' },
    subtitle: { en: 'Follow the spiral passage into the center', my: 'အလယ်ဗဟိုဆီသို့ ခရုပတ်လမ်းအတိုင်း ဝင်ရောက်ပါ' },
    start: 0,
    goal: 12,
    walls: [5, 10, 15, 16, 7, 8, 13, 17],
    moveLimit: 14,
    xpReward: 15,
    hint: {
      en: 'Follow the open outer hallway right ➡️, then curve inside toward the center star ⭐!',
      my: 'အပြင်ဘက်စင်္ကြံအတိုင်း ညာဘက်သို့သွားပြီး အလယ်က ကြယ်ဆီ ⭐ အတွင်းဘက်သို့ ကွေ့ဝင်ပါ!'
    }
  },
  {
    id: 6,
    name: { en: 'Level 6: Fork in the Road', my: 'အဆင့် ၆ — လမ်းခွဲနှစ်ခွ' },
    subtitle: { en: 'Identify dead ends and choose the winning branch', my: 'ပိတ်နေသောလမ်းကို ရှောင်ပြီး လမ်းမှန်ကို ရွေးချယ်ပါ' },
    start: 22,
    goal: 2,
    walls: [1, 6, 7, 10, 11, 15, 16, 21],
    moveLimit: 12,
    xpReward: 15,
    hint: {
      en: 'The left passage is a dead end! Take the right corridor ➡️ and head up ⬆️ to the star.',
      my: 'ဘယ်ဘက်လမ်းက ပိတ်နေပါတယ်! ညာဘက်လမ်းကြားအတိုင်း ➡️ သွားပြီး အပေါ်တက်ပါ ⬆️။'
    }
  },
  {
    id: 7,
    name: { en: 'Level 7: Stepping Stones', my: 'အဆင့် ၇ — ကျောက်တုံးလမ်းကူး' },
    subtitle: { en: 'Navigate through a symmetric stone garden', my: 'ကျောက်တုံးဥယျာဉ်လမ်းကို ဖြတ်သန်းပါ' },
    start: 20,
    goal: 4,
    walls: [6, 8, 16, 18, 22],
    moveLimit: 12,
    xpReward: 15,
    hint: {
      en: 'Use the open center crossway to weave between the stone pillars toward the goal!',
      my: 'ကျောက်တိုင်များကြားရှိ အလယ်လမ်းမကြီးမှတစ်ဆင့် ပန်းတိုင်ဆီသို့ ကွေ့ပတ်သွားပါ!'
    }
  },
  {
    id: 8,
    name: { en: 'Level 8: The S-Curve', my: 'အဆင့် ၈ — အက်စ်ပုံစံကွေ့' },
    subtitle: { en: 'Master long-sequence planning across multiple corridors', my: 'အကွေ့အကောက်များသော လမ်းရှည်ကြီးကို စီစဉ်ပါ' },
    start: 24,
    goal: 0,
    walls: [5, 6, 7, 8, 16, 17, 18, 19],
    moveLimit: 20,
    xpReward: 20,
    hint: {
      en: 'Follow the S-shape: left ⬅️ along bottom, up ⬆️ on the left, right ➡️ across the middle, up ⬆️, and left ⬅️ to goal!',
      my: 'အက်စ် (S) ပုံစံအတိုင်း သွားပါ — အောက်ဘက်ကနေ ဘယ် ⬅️၊ အပေါ်တက် ⬆️၊ အလယ်အတိုင်း ညာ ➡️၊ အပေါ်တက် ⬆️၊ ပြီးလျှင် ဘယ်ဘက် ⬅️!'
    }
  },
  {
    id: 9,
    name: { en: 'Level 9: The Fortress', my: 'အဆင့် ၉ — ခံတပ်လမ်း' },
    subtitle: { en: 'Penetrate fortress walls through the secret gate', my: 'လျှို့ဝှက်တံခါးပေါက်မှတစ်ဆင့် ခံတပ်ထဲသို့ ဝင်ရောက်ပါ' },
    start: 20,
    goal: 12,
    walls: [1, 6, 7, 8, 11, 13, 16, 18, 23],
    moveLimit: 12,
    xpReward: 20,
    hint: {
      en: 'Walk right ➡️ to column 2, then step north ⬆️ directly through the open fortress gate!',
      my: 'ညာဘက် ➡️ အကွက် (၂) ဆီသွားပြီး ခံတပ်တံခါးပေါက်မှတစ်ဆင့် အပေါ်သို့ ⬆️ တိုက်ရိုက်ဝင်ပါ!'
    }
  },
  {
    id: 10,
    name: { en: 'Level 10: Master Quest', my: 'အဆင့် ၁၀ — မာစတာစိန်ခေါ်မှု' },
    subtitle: { en: 'The ultimate computational sequence challenge', my: 'အမြင့်ဆုံး အဆင့်ဆင့် တွေးခေါ်မှု စိန်ခေါ်ချက်' },
    start: 20,
    goal: 4,
    walls: [1, 7, 12, 16, 23],
    moveLimit: 14,
    xpReward: 25,
    hint: {
      en: 'Step around the obstacles in row 3 and 1, weaving diagonally toward the top right!',
      my: 'အတားအဆီးများကို ကျော်ကွင်းပြီး အပေါ်ညာဘက်ထောင့်ရှိ မာစတာကြယ်ဆီသို့ ရောက်အောင်သွားပါ!'
    }
  }
];

/**
 * Pure Logic: Validates if a movement from currentPos in direction `dir` is valid.
 * @returns {{ valid: boolean, nextPos: number, reason: 'wall'|'edge'|'ok' }}
 */
function calculateNextMazePosition(currentPos, dir, walls, gridSize = MAZE_GRID_SIZE) {
  const row = Math.floor(currentPos / gridSize);
  const col = currentPos % gridSize;
  let nextPos = currentPos;

  if (dir === 'up') {
    if (row <= 0) return { valid: false, nextPos: currentPos, reason: 'edge' };
    nextPos = currentPos - gridSize;
  } else if (dir === 'down') {
    if (row >= gridSize - 1) return { valid: false, nextPos: currentPos, reason: 'edge' };
    nextPos = currentPos + gridSize;
  } else if (dir === 'left') {
    if (col <= 0) return { valid: false, nextPos: currentPos, reason: 'edge' };
    nextPos = currentPos - 1;
  } else if (dir === 'right') {
    if (col >= gridSize - 1) return { valid: false, nextPos: currentPos, reason: 'edge' };
    nextPos = currentPos + 1;
  } else {
    return { valid: false, nextPos: currentPos, reason: 'invalid_dir' };
  }

  if (walls.includes(nextPos)) {
    return { valid: false, nextPos: currentPos, reason: 'wall' };
  }

  return { valid: true, nextPos, reason: 'ok' };
}

/**
 * Pure Logic: Breadth-First Search to find the optimal path
 */
function findOptimalMazePath(start, goal, walls, gridSize = MAZE_GRID_SIZE) {
  const queue = [[start, [start]]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const [curr, path] = queue.shift();
    if (curr === goal) return path;

    const row = Math.floor(curr / gridSize);
    const col = curr % gridSize;
    const neighbors = [];

    if (row > 0) neighbors.push(curr - gridSize);
    if (row < gridSize - 1) neighbors.push(curr + gridSize);
    if (col > 0) neighbors.push(curr - 1);
    if (col < gridSize - 1) neighbors.push(curr + 1);

    for (const n of neighbors) {
      if (!walls.includes(n) && !visited.has(n)) {
        visited.add(n);
        queue.push([n, [...path, n]]);
      }
    }
  }

  return null;
}
