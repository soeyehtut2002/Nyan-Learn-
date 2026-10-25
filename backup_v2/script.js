/**
 * CodeQuest — AI & Coding Adventure for Kids
 * High quality, modular, responsive, and child-safe client logic.
 */

'use strict';

// -----------------------------------------------------------------------------
// 1. DOM Helper Functions
// -----------------------------------------------------------------------------
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// -----------------------------------------------------------------------------
// 2. State Management & Persistence
// -----------------------------------------------------------------------------
const STORAGE_KEY = 'codequest-adventure-data-v2';

const defaultState = {
  xp: 0,
  mazeDone: false,
  quizDone: false,
  aiDone: false,
  builderDone: false,
  badges: [],
  unlockedMazeLevels: [1],
  completedMazeLevels: []
};

let state = { ...defaultState };

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = { ...defaultState, ...parsed };
      if (!Array.isArray(state.badges)) state.badges = [];
      if (!Array.isArray(state.unlockedMazeLevels) || state.unlockedMazeLevels.length === 0) {
        state.unlockedMazeLevels = [1];
      }
      if (!Array.isArray(state.completedMazeLevels)) {
        state.completedMazeLevels = state.mazeDone ? [1] : [];
      }
    }
  } catch (err) {
    console.warn('Error loading progress from localStorage:', err);
    state = { ...defaultState };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Error saving progress to localStorage:', err);
  }
  updateStatsDisplay();
}

function getLevel() {
  // Every 50 XP gains 1 level
  return Math.floor(state.xp / 50) + 1;
}

/**
 * Awards XP and checks for badges and level-ups.
 */
function award(xp = 0, badge = null) {
  const previousLevel = getLevel();

  if (badge && !state.badges.includes(badge)) {
    state.badges.push(badge);
  }

  state.xp += xp;

  // Check if player earned a level-up badge
  const newLevel = getLevel();
  if (newLevel > 1 && !state.badges.includes('level')) {
    state.badges.push('level');
  }

  saveState();

  if (xp > 0) {
    playSound('correct');
    const msg = currentLang === 'my'
      ? `🎉 ကောင်းလိုက်တာ! +${xp} XP ရရှိပါပြီ။`
      : `🎉 Awesome job! +${xp} XP earned!`;
    showToast(msg);
  }

  if (newLevel > previousLevel) {
    setTimeout(() => {
      playSound('star');
      const lvlMsg = currentLang === 'my'
        ? `🌟 ဂုဏ်ယူပါတယ်! Level ${newLevel} သို့ တက်ရောက်သွားပါပြီ!`
        : `🌟 Congratulations! You reached Level ${newLevel}!`;
      showToast(lvlMsg);
    }, 1200);
  }
}

// -----------------------------------------------------------------------------
// 3. Audio FX Engine (Gentle Web Audio API Synthesizer)
// -----------------------------------------------------------------------------
let soundEnabled = true;
let audioCtx = null;

function initAudio() {
  if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'step') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'jump') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.16);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.start(now);
      osc.stop(now + 0.16);
    } else if (type === 'blocked') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(130, now + 0.06);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'star') {
      // Cheerful 3-note chime
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(audioCtx.destination);
        const startTime = now + idx * 0.09;
        g.gain.setValueAtTime(0.12, startTime);
        g.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);
        o.start(startTime);
        o.stop(startTime + 0.22);
      });
    } else if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.1);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'wrong') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.setValueAtTime(220, now + 0.1);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (e) {
    console.debug('Audio playback note:', e);
  }
}

// -----------------------------------------------------------------------------
// 4. Badges Metadata & Rendering
// -----------------------------------------------------------------------------
const badgeListInfo = [
  ['maze', '🤖', 'Maze Master', 'လမ်းကြောင်းကျွမ်းကျင်သူ'],
  ['quiz', '🧠', 'Brain Builder', 'ဉာဏ်စမ်းသူ'],
  ['ai', '✨', 'AI Explorer', 'AI စူးစမ်းသူ'],
  ['builder', '🧱', 'Code Builder', 'Code တည်ဆောက်သူ'],
  ['level', '🌟', 'Level Up', 'Level တက်သူ']
];

function updateStatsDisplay() {
  const currentLevel = getLevel();

  // Top bar
  if ($('#topXP')) $('#topXP').textContent = state.xp;

  // Home stats
  if ($('#statXP')) $('#statXP').textContent = `${state.xp} XP`;
  if ($('#statLevel')) $('#statLevel').textContent = `Level ${currentLevel}`;
  if ($('#statBadges')) $('#statBadges').textContent = state.badges.length;

  // Rewards page stats
  if ($('#rewardXP')) $('#rewardXP').textContent = state.xp;
  if ($('#rewardLevel')) $('#rewardLevel').textContent = currentLevel;
  if ($('#rewardBadges')) $('#rewardBadges').textContent = `${state.badges.length}/${badgeListInfo.length}`;

  // Parent page stats
  if ($('#parentXP')) $('#parentXP').textContent = `${state.xp} XP`;
  if ($('#parentLevel')) $('#parentLevel').textContent = `Level ${currentLevel}`;

  const doneLabel = currentLang === 'my' ? 'ပြီးပါပြီ' : 'Completed';
  const notDoneLabel = currentLang === 'my' ? 'မစရသေး' : 'Not started';

  if ($('#parentQuiz')) $('#parentQuiz').textContent = state.quizDone ? doneLabel : notDoneLabel;
  if ($('#parentAI')) $('#parentAI').textContent = state.aiDone ? doneLabel : notDoneLabel;

  renderBadges();
}

function renderBadges() {
  const container = $('#badgeList');
  if (!container) return;

  container.innerHTML = badgeListInfo.map(([id, emoji, titleEn, titleMy]) => {
    const isUnlocked = state.badges.includes(id);
    const title = currentLang === 'my' ? titleMy : titleEn;
    const statusText = isUnlocked
      ? (currentLang === 'my' ? 'ရရှိပြီးပါပြီ ✓' : 'Unlocked ✓')
      : (currentLang === 'my' ? 'သော့ခတ်ထားဆဲ 🔒' : 'Locked 🔒');

    return `
      <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <span class="badge-emoji">${isUnlocked ? emoji : '🔒'}</span>
        <strong>${title}</strong>
        <p>${statusText}</p>
      </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// 5. Toast Notifications
// -----------------------------------------------------------------------------
let toastTimer = null;
function showToast(msg) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

// -----------------------------------------------------------------------------
// 6. Navigation Router
// -----------------------------------------------------------------------------
function navigateTo(pageId) {
  const pages = $$('.page');
  const navButtons = $$('.nav-btn');

  let targetFound = false;
  pages.forEach(p => {
    const match = p.id === pageId;
    p.classList.toggle('hidden', !match);
    if (match) targetFound = true;
  });

  if (!targetFound && pages.length > 0) {
    pages[0].classList.remove('hidden');
  }

  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh page-specific components
  if (pageId === 'rewards' || pageId === 'parent') {
    updateStatsDisplay();
  }
}

// -----------------------------------------------------------------------------
// 7. Bilingual Internationalization Engine (Burmese & English)
// -----------------------------------------------------------------------------
let currentLang = 'my'; // Default to Burmese as in original codequest_mvp_v2

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update switcher button label
  const langBtnText = $('#langBtnText');
  if (langBtnText) {
    langBtnText.textContent = lang === 'my' ? 'English' : 'မြန်မာ';
  }

  // Update all elements with data-en & data-my
  $$('[data-en][data-my]').forEach(el => {
    const translation = el.dataset[lang];
    if (translation !== undefined) {
      if (translation.includes('<br>') || translation.includes('&amp;')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update input placeholders
  $$('[data-ph-en][data-ph-my]').forEach(el => {
    el.placeholder = el.dataset[lang === 'my' ? 'phMy' : 'phEn'] || '';
  });

  // Redraw dynamic views
  updateMazeHeader();
  renderMazeLevelSelector();
  updateSequenceTrail();
  drawMaze();
  renderQuizQuestion();
  renderAIItem();
  renderBlocks();
  updateStatsDisplay();

  // Reset tutor answer guidance text
  const tutorAns = $('#tutorAnswer');
  if (tutorAns && !tutorAns.dataset.hasAnswer) {
    tutorAns.textContent = lang === 'my'
      ? 'အသစ်တစ်ခုခု သင်ယူဖို့ အပေါ်က ခေါင်းစဉ်တစ်ခု ရွေးပါ သို့မဟုတ် မေးခွန်းတစ်ခု ရိုက်ထည့်ပါ။'
      : 'Pick a topic above or type a keyword to learn something new!';
  }
}

// -----------------------------------------------------------------------------
// 8. Game 1: Robot Maze Game (10 Progressive Levels)
// -----------------------------------------------------------------------------
let currentMazeLevelId = 1;
let robotPos = 20;
let mazeMovesCount = 0;
let mazePlannedMoves = []; // Sequence trail of directions taken
let isMazeWon = false;
let isMazeAutoRunning = false;

function getCurrentMazeLevel() {
  if (typeof MAZE_LEVELS === 'undefined') return null;
  return MAZE_LEVELS.find(lvl => lvl.id === currentMazeLevelId) || MAZE_LEVELS[0];
}

function updateMazeHeader() {
  const level = getCurrentMazeLevel();
  if (!level) return;

  const titleEl = $('#mazeLevelTitle');
  if (titleEl) {
    titleEl.textContent = level.name[currentLang] || level.name.en;
  }

  const subEl = $('#mazeLevelSubtitle');
  if (subEl) {
    subEl.textContent = level.subtitle[currentLang] || level.subtitle.en;
  }

  const countEl = $('#mazeMoveCount');
  if (countEl) countEl.textContent = mazeMovesCount;

  const limitEl = $('#mazeMoveLimit');
  if (limitEl) limitEl.textContent = level.moveLimit;
}

function renderMazeLevelSelector() {
  const container = $('#mazeLevelSelector');
  if (!container || typeof MAZE_LEVELS === 'undefined') return;

  container.innerHTML = MAZE_LEVELS.map(lvl => {
    const isUnlocked = state.unlockedMazeLevels.includes(lvl.id);
    const isCompleted = state.completedMazeLevels.includes(lvl.id);
    const isActive = lvl.id === currentMazeLevelId;

    let classes = 'lvl-pill';
    if (isActive) classes += ' active';
    if (isCompleted) classes += ' completed';
    if (!isUnlocked) classes += ' locked';

    let icon = '';
    if (isCompleted) icon = '⭐';
    else if (!isUnlocked) icon = '🔒';

    const label = `${lvl.id} ${icon}`.trim();
    const tooltip = currentLang === 'my' ? lvl.name.my : lvl.name.en;

    return `
      <button class="${classes}" data-maze-level="${lvl.id}" ${!isUnlocked ? 'disabled' : ''} title="${tooltip}">
        ${label}
      </button>
    `;
  }).join('');

  $$('[data-maze-level]', container).forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLvl = Number(btn.dataset.mazeLevel);
      if (state.unlockedMazeLevels.includes(targetLvl)) {
        playSound('step');
        loadMazeLevel(targetLvl);
      }
    });
  });
}

function updateSequenceTrail() {
  const trailContainer = $('#trailSteps');
  if (!trailContainer) return;

  if (mazePlannedMoves.length === 0) {
    trailContainer.innerHTML = `<span class="trail-empty">${currentLang === 'my' ? 'လှုပ်ရှားရန် မြှားခလုတ်များကို နှိပ်ပါ' : 'Press arrow buttons to move'}</span>`;
    return;
  }

  const arrowSymbols = { up: '⬆️', down: '⬇️', left: '⬅️', right: '➡️' };
  trailContainer.innerHTML = mazePlannedMoves.map((dir, idx) => `
    <span class="trail-step-chip" title="Step ${idx + 1}">${idx + 1}. ${arrowSymbols[dir] || dir}</span>
  `).join('');

  // Auto-scroll trail to end
  trailContainer.scrollLeft = trailContainer.scrollWidth;
}

function loadMazeLevel(levelId) {
  currentMazeLevelId = levelId;
  const level = getCurrentMazeLevel();
  if (!level) return;

  robotPos = level.start;
  mazeMovesCount = 0;
  mazePlannedMoves = [];
  isMazeWon = false;
  isMazeAutoRunning = false;

  const winCard = $('#mazeWinCard');
  if (winCard) winCard.classList.add('hidden');

  const hintBox = $('#mazeHintBox');
  if (hintBox) hintBox.classList.add('hidden');

  updateMazeHeader();
  renderMazeLevelSelector();
  updateSequenceTrail();
  drawMaze();

  const promptMsg = currentLang === 'my'
    ? `Robot ကို ကြယ်ဆီရောက်အောင် လမ်းညွှန်ပါ။ (လှုပ်ရှားမှု ကန့်သတ်ချက်: ${level.moveLimit} ကြိမ်)`
    : `Guide the robot to the star! (Move limit: ${level.moveLimit} steps)`;
  setMazeStatus(promptMsg);
}

function drawMaze(highlightIndices = []) {
  const mazeEl = $('#maze');
  const level = getCurrentMazeLevel();
  if (!mazeEl || !level) return;

  mazeEl.innerHTML = '';

  for (let i = 0; i < 25; i++) {
    const tile = document.createElement('div');
    const isWall = level.walls.includes(i);
    const isGoal = i === level.goal;
    const isRobot = i === robotPos;
    const isHint = highlightIndices.includes(i);

    let classes = 'tile';
    if (isWall) classes += ' wall';
    if (isGoal) classes += ' goal';
    if (isRobot) classes += ' robot-tile';
    if (isHint) classes += ' hint-path';

    tile.className = classes;

    if (isRobot) {
      tile.textContent = '🤖';
      tile.setAttribute('aria-label', 'Robot Position');
    } else if (isGoal) {
      tile.textContent = '⭐';
      tile.setAttribute('aria-label', 'Goal Star');
    } else if (isWall) {
      tile.textContent = '🪨';
      tile.setAttribute('aria-label', 'Stone Obstacle');
    }

    mazeEl.appendChild(tile);
  }
}

function moveRobot(dir) {
  if (isMazeWon || isMazeAutoRunning) return;

  const level = getCurrentMazeLevel();
  if (!level) return;

  // Move Limit Constraint Check
  if (mazeMovesCount >= level.moveLimit) {
    playSound('blocked');
    triggerRobotShake();
    const limitFailMsg = currentLang === 'my'
      ? `⚠️ လှုပ်ရှားမှု ကန့်သတ်ချက် (${level.moveLimit} ကြိမ်) ပြည့်သွားပါပြီ! ↻ ပြန်စမယ် ကိုနှိပ်ပြီး အသစ်ပြန်ကြိုးစားပါ။`
      : `⚠️ Move limit reached (${level.moveLimit} moves)! Press ↻ Reset to try a shorter sequence.`;
    setMazeStatus(limitFailMsg);
    return;
  }

  // Pure logic collision check via calculateNextMazePosition
  const moveCheck = calculateNextMazePosition(robotPos, dir, level.walls, MAZE_GRID_SIZE);

  if (!moveCheck.valid) {
    playSound('blocked');
    triggerRobotShake();

    if (moveCheck.reason === 'wall') {
      const wallMsg = currentLang === 'my'
        ? '❌ အဲဒီမှာ အတားအဆီး ကျောက်တံတိုင်း ရှိတယ်! တခြားလမ်းကို စမ်းကြည့်ပါ။'
        : '❌ Blocked by a stone wall! Plan a different turn.';
      setMazeStatus(wallMsg);
    } else {
      const edgeMsg = currentLang === 'my'
        ? 'နံရံအစွန်းဖြစ်နေပါတယ်! တခြားဘက်ကို ရွှေ့ပါ။'
        : 'Edge of the board! Try another direction.';
      setMazeStatus(edgeMsg);
    }
    return;
  }

  // Valid move execution
  robotPos = moveCheck.nextPos;
  mazeMovesCount++;
  mazePlannedMoves.push(dir);

  updateMazeHeader();
  updateSequenceTrail();
  playSound('step');
  drawMaze();

  // Goal check
  if (robotPos === level.goal) {
    handleMazeLevelWin(level);
  } else {
    if (mazeMovesCount >= level.moveLimit) {
      playSound('blocked');
      triggerRobotShake();
      const limitFailMsg = currentLang === 'my'
        ? `⚠️ လှုပ်ရှားမှု ကန့်သတ်ချက် (${level.moveLimit} ကြိမ်) ပြည့်သွားပါပြီ! ↻ ပြန်စမယ် ကိုနှိပ်ပြီး အသစ်ပြန်ကြိုးစားပါ။`
        : `⚠️ Move limit reached (${level.moveLimit} moves)! Press ↻ Reset to try a shorter sequence.`;
      setMazeStatus(limitFailMsg);
    } else {
      const okMsg = currentLang === 'my'
        ? `ကောင်းတယ်။ ဆက်ကြိုးစားပါ။ (${mazeMovesCount}/${level.moveLimit})`
        : `Nice move! Keep navigating. (${mazeMovesCount}/${level.moveLimit})`;
      setMazeStatus(okMsg);
    }
  }
}

function triggerRobotShake() {
  const robotTile = $('.tile.robot-tile');
  if (robotTile) {
    robotTile.classList.add('shake');
    setTimeout(() => robotTile.classList.remove('shake'), 350);
  }
}

function handleMazeLevelWin(level) {
  isMazeWon = true;
  playSound('star');

  const alreadyCompleted = state.completedMazeLevels.includes(level.id);

  // Prevent duplicate reward farming
  if (!alreadyCompleted) {
    state.completedMazeLevels.push(level.id);
    state.mazeDone = true;
    award(level.xpReward, 'maze');
  }

  // Unlock next level if available
  if (level.id < 10 && !state.unlockedMazeLevels.includes(level.id + 1)) {
    state.unlockedMazeLevels.push(level.id + 1);
    const unlockMsg = currentLang === 'my'
      ? `🔓 အဆင့် ${level.id + 1} ကို ဖွင့်လှစ်လိုက်ပါပြီ!`
      : `🔓 Level ${level.id + 1} Unlocked!`;
    showToast(unlockMsg);
  }

  saveState();
  renderMazeLevelSelector();

  // Show celebratory win card
  const winCard = $('#mazeWinCard');
  const winTitle = $('#mazeWinTitle');
  const winDesc = $('#mazeWinDesc');
  const nextBtn = $('#mazeNextLevelBtn');

  if (winTitle) {
    winTitle.textContent = currentLang === 'my'
      ? `🎉 အဆင့် ${level.id} အောင်မြင်ပြီ!`
      : `🎉 Level ${level.id} Complete!`;
  }

  if (winDesc) {
    if (!alreadyCompleted) {
      winDesc.textContent = currentLang === 'my'
        ? `ထူးချွန်တဲ့ Logic ပါ! လှုပ်ရှားမှု ${mazeMovesCount} ကြိမ်ဖြင့် အောင်မြင်ခဲ့ပြီး +${level.xpReward} XP ရရှိပါပြီ။`
        : `Fantastic computational thinking! Solved in ${mazeMovesCount} steps. +${level.xpReward} XP earned!`;
    } else {
      winDesc.textContent = currentLang === 'my'
        ? `ကောင်းမွန်တဲ့ ပြန်လည်လေ့ကျင့်မှုပါ။ (ဒီအဆင့်အတွက် XP ရယူပြီးဖြစ်၍ ထပ်မံမရယူနိုင်ပါ)`
        : `Great replay practice! (Level already completed previously - no duplicate XP).`;
    }
  }

  if (nextBtn) {
    if (level.id < 10) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerHTML = currentLang === 'my' ? 'နောက်တစ်ဆင့် ➔' : 'Next Level ➔';
      nextBtn.onclick = () => {
        playSound('step');
        loadMazeLevel(level.id + 1);
      };
    } else {
      nextBtn.style.display = 'none';
      if (winDesc) {
        winDesc.textContent += currentLang === 'my'
          ? ' 🏆 ဂုဏ်ယူပါတယ်! Robot Maze အဆင့် ၁၀ ဆင့်စလုံးကို ကျွမ်းကျင်စွာ အောင်မြင်ခဲ့ပါပြီ!'
          : ' 🏆 Congratulations! You have conquered all 10 Maze levels!';
      }
    }
  }

  const replayBtn = $('#mazeReplayBtn');
  if (replayBtn) {
    replayBtn.onclick = () => {
      playSound('step');
      resetMaze();
    };
  }

  if (winCard) winCard.classList.remove('hidden');

  const winStatusMsg = currentLang === 'my'
    ? `🎉 အောင်မြင်ပြီ! Robot က ကြယ်ဆီရောက်သွားပြီ။`
    : `🎉 Victory! The robot reached the star!`;
  setMazeStatus(winStatusMsg);
}

function resetMaze() {
  const level = getCurrentMazeLevel();
  if (!level) return;

  robotPos = level.start;
  mazeMovesCount = 0;
  mazePlannedMoves = [];
  isMazeWon = false;
  isMazeAutoRunning = false;

  const winCard = $('#mazeWinCard');
  if (winCard) winCard.classList.add('hidden');

  const hintBox = $('#mazeHintBox');
  if (hintBox) hintBox.classList.add('hidden');

  updateMazeHeader();
  updateSequenceTrail();
  drawMaze();

  const resetMsg = currentLang === 'my'
    ? `Robot ကို ကြယ်ဆီရောက်အောင် လမ်းညွှန်ပါ။ (လှုပ်ရှားမှု ကန့်သတ်ချက်: ${level.moveLimit} ကြိမ်)`
    : `Guide the robot to the star! (Move limit: ${level.moveLimit} steps)`;
  setMazeStatus(resetMsg);
}

function showMazeHint() {
  const level = getCurrentMazeLevel();
  if (!level) return;

  const hintBox = $('#mazeHintBox');
  const hintText = $('#mazeHintText');

  if (hintBox && hintText) {
    hintText.textContent = level.hint[currentLang] || level.hint.en;
    hintBox.classList.remove('hidden');
  }

  // Calculate and flash next optimal steps
  const path = findOptimalMazePath(robotPos, level.goal, level.walls, MAZE_GRID_SIZE);
  if (path && path.length > 1) {
    const nextSteps = path.slice(1, 3);
    drawMaze(nextSteps);
    setTimeout(() => {
      drawMaze();
    }, 2400);
  }

  playSound('step');
  const statusMsg = currentLang === 'my'
    ? '💡 အကြံပြုချက်ကို လေ့လာပြီး လမ်းကြောင်းကို စီစဉ်ပါ။'
    : '💡 Check the hint below to guide your sequence!';
  setMazeStatus(statusMsg);
}

async function runMazeSequence() {
  if (isMazeAutoRunning || isMazeWon) return;

  if (mazePlannedMoves.length === 0) {
    const noMovesMsg = currentLang === 'my'
      ? 'လှုပ်ရှားမှု မှတ်တမ်း မရှိသေးပါ။ မြှားခလုတ်များဖြင့် အရင်စမ်းပါ!'
      : 'No moves recorded yet! Use the arrow buttons first.';
    showToast(noMovesMsg);
    return;
  }

  const movesToReplay = [...mazePlannedMoves];
  const level = getCurrentMazeLevel();
  if (!level) return;

  // Reset to start of level
  resetMaze();
  isMazeAutoRunning = true;

  const statusMsg = currentLang === 'my'
    ? '▶ စီစဉ်ထားသော လှုပ်ရှားမှုများကို ပြန်လည် Run နေပါသည်...'
    : '▶ Replaying recorded sequence...';
  setMazeStatus(statusMsg);

  for (let i = 0; i < movesToReplay.length; i++) {
    const dir = movesToReplay[i];
    await new Promise(res => setTimeout(res, 280));
    moveRobot(dir);
    if (isMazeWon) break;
  }

  isMazeAutoRunning = false;
}

function setMazeStatus(msg) {
  const statusEl = $('#mazeStatus');
  if (statusEl) statusEl.textContent = msg;
}

// -----------------------------------------------------------------------------
// 9. Game 2: Brain Quiz
// -----------------------------------------------------------------------------
const quizQuestions = [
  {
    my: 'Algorithm ဆိုတာ ဘာလဲ?',
    en: 'What is an algorithm in computing?',
    opts: [
      ['အဆင့်လိုက် လုပ်ဆောင်ရမည့် ညွှန်ကြားချက်များ', 'A step-by-step set of ordered instructions'],
      ['ကွန်ပျူတာမျက်နှာပြင်', 'A computer monitor screen'],
      ['အင်တာနက်ကြိုး', 'An internet networking cable'],
      ['ဂိမ်းထဲက ရမှတ်', 'A video game high score']
    ],
    correct: 0,
    whyMy: 'Algorithm ဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့ သို့မဟုတ် အလုပ်တစ်ခုပြီးမြောက်ဖို့ အစီအစဉ်တကျ ရေးဆွဲထားတဲ့ အဆင့်တွေဖြစ်ပါတယ်။',
    whyEn: 'An algorithm is a precise, ordered sequence of instructions followed to solve a problem or accomplish a goal.'
  },
  {
    my: 'Coding မှာ Loop ကို ဘာအတွက် အဓိက သုံးသလဲ?',
    en: 'What is a Loop used for in programming?',
    opts: [
      ['အလုပ်တစ်ခုကို ထပ်ခါထပ်ခါ လုပ်ဆောင်ရန်', 'To repeat an action multiple times'],
      ['ကွန်ပျူတာကို ချက်ချင်းပိတ်ရန်', 'To shut down the computer immediately'],
      ['ပုံဆွဲရန်သာ သုံးခြင်း', 'Only used for drawing shapes'],
      ['Password ဖျက်ပစ်ရန်', 'To delete a user password']
    ],
    correct: 0,
    whyMy: 'Loop က တူညီတဲ့ လုပ်ဆောင်ချက်ကို အကြိမ်ကြိမ် ပြန်မရေးရဘဲ အလိုအလျောက် ထပ်ခါထပ်ခါ လုပ်ဆောင်စေနိုင်ပါတယ်။',
    whyEn: 'Loops let programs repeat actions efficiently without needing to duplicate lines of code.'
  },
  {
    my: 'AI စနစ်တစ်ခုကို သင်ယူတတ်မြောက်အောင် ဘာက အဓိက ကူညီသလဲ?',
    en: 'What is essential to train an AI model?',
    opts: [
      ['အရည်အသွေးမြင့် ဥပမာများနှင့် Data', 'Quality examples and training data'],
      ['ကျပန်းခန့်မှန်းခြင်းသက်သက်', 'Pure random guessing'],
      ['ကွန်ပျူတာမျက်နှာပြင် အရောင်', 'The color of the computer screen'],
      ['Mouse ရဲ့ အရွယ်အစား', 'The physical size of the computer mouse']
    ],
    correct: 0,
    whyMy: 'AI model များသည် ပေးထားသော ဥပမာများနှင့် Data များထဲမှ Pattern များကို ရှာဖွေသင်ယူကြပါတယ်။',
    whyEn: 'Machine learning models identify patterns and rules from quality dataset examples.'
  },
  {
    my: 'အွန်လိုင်းပေါ်မှာ ကိုယ်ရေးအချက်အလက်ကို ဘယ်လို ကိုင်တွယ်သင့်သလဲ?',
    en: 'How should you handle personal information online?',
    opts: [
      ['မိဘ သို့မဟုတ် ယုံကြည်ရသူကို အမြဲတိုင်ပင်ပြီး လုံခြုံစွာထားမယ်', 'Keep it private & ask a trusted adult first'],
      ['တွေ့သမျှလူတိုင်းကို အားမနာဘဲ ပေးမယ်', 'Share it freely with anyone who asks'],
      ['Password ကို လူမှုကွန်ရက်ပေါ် တင်မယ်', 'Post your secret passwords on social media'],
      ['မသိတဲ့ Link အားလုံးကို လိုက်ဖွင့်မယ်', 'Click on every random link from strangers']
    ],
    correct: 0,
    whyMy: 'လုံခြုံရေးအတွက် ကိုယ်ရေးအချက်အလက်များကို မသိသူများနှင့် မမျှဝေဘဲ ယုံကြည်ရသော မိဘ/လူကြီးများကို အမြဲ တိုင်ပင်ပါ။',
    whyEn: 'Protecting your identity and passwords is vital. Always consult a parent or guardian before sharing data.'
  }
];

let currentQuestionIndex = 0;
let quizScore = 0;
let isQuizAnswered = false;
let isQuizFinished = false;

function renderQuizQuestion() {
  if (isQuizFinished) {
    showQuizResultsScreen();
    return;
  }

  isQuizAnswered = false;
  const q = quizQuestions[currentQuestionIndex];

  // Header & progress
  const countEl = $('#quizCount');
  if (countEl) {
    countEl.textContent = currentLang === 'my'
      ? `မေးခွန်း ${currentQuestionIndex + 1} / ${quizQuestions.length}`
      : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  }

  const scoreEl = $('#quizScore');
  if (scoreEl) {
    scoreEl.textContent = currentLang === 'my'
      ? `ရမှတ်: ${quizScore}`
      : `Score: ${quizScore}`;
  }

  const progEl = $('#quizProgress');
  if (progEl) {
    progEl.style.width = `${(currentQuestionIndex / quizQuestions.length) * 100}%`;
  }

  const qText = $('#questionText');
  if (qText) qText.textContent = currentLang === 'my' ? q.my : q.en;

  // Options
  const optsContainer = $('#quizOptions');
  if (optsContainer) {
    optsContainer.innerHTML = q.opts.map((optionTuple, index) => {
      const text = currentLang === 'my' ? optionTuple[0] : optionTuple[1];
      const letter = String.fromCharCode(65 + index);
      return `
        <button class="quiz-option" data-option="${index}">
          <span style="font-weight:900; color:var(--purple-main);">${letter}.</span>
          <span>${text}</span>
        </button>
      `;
    }).join('');

    $$('[data-option]', optsContainer).forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswer(Number(btn.dataset.option)));
    });
  }

  const feedback = $('#quizFeedback');
  if (feedback) feedback.classList.add('hidden');

  const nextBtn = $('#nextQuestion');
  if (nextBtn) nextBtn.classList.add('hidden');
}

function handleQuizAnswer(selectedIndex) {
  if (isQuizAnswered) return;
  isQuizAnswered = true;

  const q = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) {
    quizScore++;
    playSound('correct');
  } else {
    playSound('wrong');
  }

  // Update option styles
  $$('.quiz-option').forEach(btn => {
    const idx = Number(btn.dataset.option);
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('wrong');
    }
  });

  // Feedback explanation
  const feedback = $('#quizFeedback');
  if (feedback) {
    const explanation = currentLang === 'my' ? q.whyMy : q.whyEn;
    const prefix = isCorrect
      ? (currentLang === 'my' ? '✓ မှန်ကန်ပါတယ်! ' : '✓ Correct! ')
      : (currentLang === 'my' ? '✕ မမှန်သေးပါ၊ ဒါပေမဲ့ ကောင်းမွန်တဲ့ ကြိုးစားမှုပါ။ ' : '✕ Not quite, but good effort! ');

    feedback.innerHTML = `<strong>${prefix}</strong><span>${explanation}</span>`;
    feedback.classList.remove('hidden');
  }

  const scoreEl = $('#quizScore');
  if (scoreEl) {
    scoreEl.textContent = currentLang === 'my' ? `ရမှတ်: ${quizScore}` : `Score: ${quizScore}`;
  }

  const progEl = $('#quizProgress');
  if (progEl) {
    progEl.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
  }

  const nextBtn = $('#nextQuestion');
  if (nextBtn) {
    const isLast = currentQuestionIndex === quizQuestions.length - 1;
    nextBtn.textContent = isLast
      ? (currentLang === 'my' ? 'ရလဒ်ကြည့်မယ် →' : 'See Results →')
      : (currentLang === 'my' ? 'နောက်မေးခွန်း →' : 'Next Question →');
    nextBtn.classList.remove('hidden');
  }
}

function showQuizResultsScreen() {
  isQuizFinished = true;

  const progEl = $('#quizProgress');
  if (progEl) progEl.style.width = '100%';

  const qText = $('#questionText');
  if (qText) {
    qText.textContent = currentLang === 'my'
      ? `🎉 Quiz ပြီးပါပြီ! ${quizQuestions.length} ခုထဲက ${quizScore} ခု မှန်ကန်ပါတယ်။`
      : `🎉 Quiz Complete! You scored ${quizScore} out of ${quizQuestions.length}!`;
  }

  const optsContainer = $('#quizOptions');
  if (optsContainer) optsContainer.innerHTML = '';

  const feedback = $('#quizFeedback');
  if (feedback) {
    feedback.innerHTML = `
      <strong>${currentLang === 'my' ? 'လေ့လာမှုအတွက် အကြံပြုချက်:' : 'Learning Tip:'}</strong>
      <span>${currentLang === 'my'
        ? 'အမှားတွေကနေ ပြန်လည်သင်ယူပြီး အချိန်မရွေး ထပ်မံကြိုးစားနိုင်ပါတယ်။'
        : 'Review the explanations, explore more modules, and try again anytime!'}</span>
    `;
    feedback.classList.remove('hidden');
  }

  if (!state.quizDone) {
    state.quizDone = true;
    award(10, 'quiz');
  }

  const nextBtn = $('#nextQuestion');
  if (nextBtn) {
    nextBtn.textContent = currentLang === 'my' ? 'ထပ်မံဖြေဆိုမယ် ↻' : 'Try Again ↻';
    nextBtn.classList.remove('hidden');
  }
}

function handleNextQuestionClick() {
  if (isQuizFinished) {
    // Reset and retry
    currentQuestionIndex = 0;
    quizScore = 0;
    isQuizFinished = false;
    renderQuizQuestion();
    return;
  }

  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuizQuestion();
  } else {
    showQuizResultsScreen();
  }
}

// -----------------------------------------------------------------------------
// 10. Game 3: AI Detective Lab (Simulation)
// -----------------------------------------------------------------------------
const aiTrainingItems = [
  { emoji: '🍎', name: 'Apple', my: 'ပန်းသီး', type: 'fruit' },
  { emoji: '🚗', name: 'Car', my: 'ကား', type: 'vehicle' },
  { emoji: '🍌', name: 'Banana', my: 'ငှက်ပျောသီး', type: 'fruit' },
  { emoji: '🚌', name: 'Bus', my: 'ဘတ်စ်ကား', type: 'vehicle' },
  { emoji: '🐱', name: 'Cat', my: 'ကြောင်', type: 'animal' },
  { emoji: '✈️', name: 'Airplane', my: 'လေယာဉ်', type: 'vehicle' }
];

let aiCurrentIndex = 0;
let aiIsAnswered = false;
let aiCorrectCount = 0;
let aiIsFinished = false;

function renderAIItem() {
  if (aiIsFinished) {
    showAIResultsScreen();
    return;
  }

  aiIsAnswered = false;
  const item = aiTrainingItems[aiCurrentIndex];

  if ($('#aiEmoji')) $('#aiEmoji').textContent = item.emoji;
  if ($('#aiName')) $('#aiName').textContent = currentLang === 'my' ? item.my : item.name;
  if ($('#aiSub')) {
    $('#aiSub').textContent = currentLang === 'my' ? 'ဘယ်အမျိုးအစားထဲ ထည့်မလဲ?' : 'Which category does this fit?';
  }
  if ($('#aiPrompt')) {
    $('#aiPrompt').textContent = currentLang === 'my'
      ? `ပုံ #${aiCurrentIndex + 1} — ဒီအရာကို AI က ဘယ်လိုခွဲခြားမလဲ?`
      : `Example #${aiCurrentIndex + 1} — Which category should AI place this into?`;
  }

  const feedback = $('#aiFeedback');
  if (feedback) feedback.classList.add('hidden');

  const nextBtn = $('#nextAI');
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent = currentLang === 'my' ? 'နောက်ဥပမာ →' : 'Next Example →';
  }
}

function handleAIAnswer(selectedCategory) {
  if (aiIsAnswered || aiIsFinished) return;
  aiIsAnswered = true;

  const item = aiTrainingItems[aiCurrentIndex];
  const isMatch = selectedCategory === item.type;

  if (isMatch) {
    aiCorrectCount++;
    playSound('correct');
  } else {
    playSound('wrong');
  }

  const categoryNames = {
    fruit: currentLang === 'my' ? 'သစ်သီး' : 'Fruit',
    vehicle: currentLang === 'my' ? 'ယာဉ်' : 'Vehicle',
    animal: currentLang === 'my' ? 'တိရစ္ဆာန်' : 'Animal'
  };

  const feedback = $('#aiFeedback');
  if (feedback) {
    const statusText = isMatch
      ? (currentLang === 'my' ? '✓ မှန်ကန်ပါတယ်!' : '✓ Correct!')
      : (currentLang === 'my' ? '✕ မမှန်သေးပါ။' : '✕ Not quite.');
    const explanation = isMatch
      ? (currentLang === 'my'
          ? `ပုံစံမှန်ကန်သော ဥပမာများသည် AI အား တိကျစွာ ခွဲခြားနိုင်စေပါတယ်။ (${categoryNames[item.type]})`
          : `Accurate labels help train the pattern recognizer properly. (${categoryNames[item.type]})`)
      : (currentLang === 'my'
          ? `ဒီအရာ၏ အမှန်အမျိုးအစားမှာ "${categoryNames[item.type]}" ဖြစ်ပါတယ်။ မှားယွင်းသော Label က AI ကို အမှားသင်ပေးတတ်ပါတယ်။`
          : `The correct category is "${categoryNames[item.type]}". Mislabelled training data confuses AI systems.`);

    feedback.innerHTML = `<strong>${statusText}</strong> <span>${explanation}</span>`;
    feedback.classList.remove('hidden');
  }

  const nextBtn = $('#nextAI');
  if (nextBtn) {
    nextBtn.disabled = false;
    const isLast = aiCurrentIndex === aiTrainingItems.length - 1;
    nextBtn.textContent = isLast
      ? (currentLang === 'my' ? 'ရလဒ်ကြည့်မယ် →' : 'See Results →')
      : (currentLang === 'my' ? 'နောက်ဥပမာ →' : 'Next Example →');
  }
}

function showAIResultsScreen() {
  aiIsFinished = true;

  if ($('#aiPrompt')) {
    $('#aiPrompt').textContent = currentLang === 'my'
      ? `🎉 AI သင်ယူမှု ဥပမာများ ပြီးဆုံးပါပြီ! ${aiTrainingItems.length} ခုတွင် ${aiCorrectCount} ခု မှန်ကန်စွာ Label တပ်နိုင်ခဲ့ပါတယ်။`
      : `🎉 Training Simulation Complete! You accurately labelled ${aiCorrectCount} of ${aiTrainingItems.length} items!`;
  }

  const feedback = $('#aiFeedback');
  if (feedback) {
    feedback.innerHTML = `
      <strong>${currentLang === 'my' ? 'အဓိက သဘောတရား:' : 'Key Takeaway:'}</strong>
      <span>${currentLang === 'my'
        ? 'တကယ့် AI စနစ်များသည် သန်းပေါင်းများစွာသော ဥပမာများကို အသုံးပြု၍ Model တည်ဆောက်ကြရပါတယ်။ Data မပြည့်စုံပါက AI သည် အမှားလုပ်တတ်ပါတယ်။'
        : 'Real AI requires diverse, high-quality datasets to prevent bias and errors. Human guidance is always needed.'}</span>
    `;
    feedback.classList.remove('hidden');
  }

  if (!state.aiDone) {
    state.aiDone = true;
    award(15, 'ai');
  }

  const nextBtn = $('#nextAI');
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.textContent = currentLang === 'my' ? 'ထပ်မံစမ်းသပ်မယ် ↻' : 'Try Again ↻';
  }
}

function handleNextAIClick() {
  if (aiIsFinished) {
    aiCurrentIndex = 0;
    aiCorrectCount = 0;
    aiIsFinished = false;
    renderAIItem();
    return;
  }

  if (aiCurrentIndex < aiTrainingItems.length - 1) {
    aiCurrentIndex++;
    renderAIItem();
  } else {
    showAIResultsScreen();
  }
}

// -----------------------------------------------------------------------------
// 11. Game 4: Code Builder (Block Sandbox with Animated Runner Stage)
// -----------------------------------------------------------------------------
const blockDefinitions = {
  right: { my: '➡️ ညာဘက်ရွှေ့', en: '➡️ Move right' },
  jump: { my: '⬆️ ခုန်မယ်', en: '⬆️ Jump' },
  repeat: { my: '🔁 ၂ ကြိမ်ထပ်လုပ်', en: '🔁 Repeat ×2' }
};

let userProgram = [];
let isProgramRunning = false;

function renderBlocks() {
  const workspace = $('#workspace');
  if (!workspace) return;
  workspace.innerHTML = '';

  if (!userProgram.length) {
    const hintText = currentLang === 'my'
      ? 'ထည့်ထားတဲ့ Block တွေ ဒီမှာပေါ်လာပါမယ်။ စတင်တည်ဆောက်ဖို့ အပေါ်က Block တွေကို ထည့်ပါ။'
      : 'Your blocks will appear here. Add blocks above to start building!';
    workspace.innerHTML = `<div id="workspaceHint" class="workspace-hint">${hintText}</div>`;
    return;
  }

  userProgram.forEach((blockKind, index) => {
    const row = document.createElement('div');
    row.className = 'code-step';
    row.draggable = true;
    row.dataset.index = index;

    const label = blockDefinitions[blockKind]
      ? blockDefinitions[blockKind][currentLang]
      : blockKind;

    row.innerHTML = `
      <span class="step-num">${index + 1}</span>
      <span>${label}</span>
      <button type="button" class="btn-remove-step" aria-label="Remove block">×</button>
    `;

    // Remove block button
    row.querySelector('.btn-remove-step').addEventListener('click', (e) => {
      e.stopPropagation();
      userProgram.splice(index, 1);
      renderBlocks();
    });

    // Drag-to-reorder within workspace
    row.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/code-index', String(index));
    });

    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      row.style.borderColor = 'var(--purple-main)';
    });

    row.addEventListener('dragleave', () => {
      row.style.borderColor = '';
    });

    row.addEventListener('drop', (e) => {
      e.preventDefault();
      row.style.borderColor = '';
      const sourceIndex = Number(e.dataTransfer.getData('text/code-index'));
      if (Number.isInteger(sourceIndex) && sourceIndex >= 0 && sourceIndex < userProgram.length) {
        const [movedItem] = userProgram.splice(sourceIndex, 1);
        userProgram.splice(index, 0, movedItem);
        renderBlocks();
      }
    });

    workspace.appendChild(row);
  });
}

function addBlockToProgram(kind) {
  if (isProgramRunning) return;
  userProgram.push(kind);
  renderBlocks();
  playSound('step');

  const out = $('#codeOutput');
  if (out) {
    out.textContent = currentLang === 'my'
      ? 'Block အသစ် ထည့်ပြီးပါပြီ။ Program ကို Run ကြည့်ပါ။'
      : 'Block added to sequence. Hit Run to see the animation!';
  }
}

async function runUserProgram() {
  if (isProgramRunning) return;
  if (!userProgram.length) {
    const out = $('#codeOutput');
    if (out) {
      out.textContent = currentLang === 'my'
        ? 'အရင်ဆုံး Block တစ်ခုခု အနည်းဆုံး ထည့်သွင်းပေးပါ။'
        : 'Please add at least one block to your program first.';
    }
    return;
  }

  isProgramRunning = true;
  const robot = $('#stageRobot');
  const runBtn = $('#runCode');
  if (runBtn) runBtn.disabled = true;

  // Reset robot position to starting line
  if (robot) {
    robot.style.transition = 'none';
    robot.style.left = '20px';
    robot.style.transform = 'translateY(0)';
  }
  await new Promise(r => setTimeout(r, 100));

  let currentLeft = 20;
  let moveRightCount = 0;
  let jumpCount = 0;
  let repeatCount = 0;

  const stepElements = $$('.code-step');

  for (let i = 0; i < userProgram.length; i++) {
    const block = userProgram[i];
    // Highlight step
    if (stepElements[i]) stepElements[i].classList.add('executing');

    if (block === 'right') {
      moveRightCount++;
      currentLeft = Math.min(currentLeft + 55, 320);
      playSound('step');
      if (robot) {
        robot.style.transition = 'left 0.35s ease';
        robot.style.left = `${currentLeft}px`;
      }
      await new Promise(r => setTimeout(r, 420));
    } else if (block === 'jump') {
      jumpCount++;
      playSound('jump');
      if (robot) {
        robot.style.transition = 'transform 0.22s ease-out';
        robot.style.transform = 'translateY(-38px)';
      }
      await new Promise(r => setTimeout(r, 220));
      if (robot) {
        robot.style.transition = 'transform 0.22s ease-in';
        robot.style.transform = 'translateY(0)';
      }
      await new Promise(r => setTimeout(r, 240));
    } else if (block === 'repeat') {
      repeatCount += 2;
      // Do 2 mini steps
      for (let rep = 0; rep < 2; rep++) {
        currentLeft = Math.min(currentLeft + 35, 320);
        playSound('step');
        if (robot) {
          robot.style.transition = 'left 0.28s ease';
          robot.style.left = `${currentLeft}px`;
        }
        await new Promise(r => setTimeout(r, 320));
      }
    }

    if (stepElements[i]) stepElements[i].classList.remove('executing');
  }

  // Goal celebration check
  if (currentLeft >= 260) {
    playSound('star');
    if (robot) {
      robot.style.transform = 'scale(1.2) translateY(-10px)';
      setTimeout(() => { robot.style.transform = 'scale(1) translateY(0)'; }, 400);
    }
  }

  const totalActions = moveRightCount + jumpCount + repeatCount;
  const out = $('#codeOutput');
  if (out) {
    out.textContent = currentLang === 'my'
      ? `🎉 Program အောင်မြင်စွာ အလုပ်လုပ်ပါပြီ။ ညာဘက်ရွှေ့မှု ${moveRightCount} ကြိမ်၊ ခုန်မှု ${jumpCount} ကြိမ်၊ Repeat မှ ${repeatCount} ကြိမ်။ စုစုပေါင်း လုပ်ဆောင်မှု ${totalActions} ခု။`
      : `🎉 Program executed! Move-right: ${moveRightCount}, Jump: ${jumpCount}, Repeated moves: ${repeatCount}. Total actions: ${totalActions}!`;
  }

  if (!state.builderDone) {
    state.builderDone = true;
    award(10, 'builder');
  }

  isProgramRunning = false;
  if (runBtn) runBtn.disabled = false;
}

// -----------------------------------------------------------------------------
// 12. AI Tutor Engine (Kid-Safe Transparent Simulation)
// -----------------------------------------------------------------------------
const tutorKnowledgeBase = {
  algorithm: {
    title: { my: 'Algorithm ဆိုတာ ဘာလဲ?', en: 'What is an algorithm?' },
    my: 'Algorithm (အယ်လဂိုရီသမ်) ဆိုတာ အလုပ်တစ်ခုကို အောင်မြင်အောင် လုပ်ဆောင်ဖို့ ရေးဆွဲထားတဲ့ အဆင့်လိုက် ညွှန်ကြားချက်တွေ ဖြစ်ပါတယ်။ ဥပမာ — မနက်ခင်း သွားတိုက်ဖို့ သွားတိုက်တံယူမယ်၊ သွားတိုက်ဆေးတင်မယ်၊ သွားတိုက်မယ်၊ ပါးလုတ်ကျင်းမယ် ဆိုတဲ့ အဆင့်တွေကို စနစ်တကျ လိုက်နာရသလိုပါပဲ!',
    en: 'An algorithm is an ordered set of step-by-step instructions to solve a problem. Think of a recipe for baking cookies or the exact steps you take to tie your shoelaces!'
  },
  loop: {
    title: { my: 'Loop ဆိုတာ ဘာလဲ?', en: 'What is a loop?' },
    my: 'Loop ဆိုတာ တူညီတဲ့ လုပ်ဆောင်ချက်တစ်ခု သို့မဟုတ် အများအပြားကို ထပ်ခါထပ်ခါ လုပ်စေဖို့ အသုံးပြုတာပါ။ ဥပမာ — သီချင်းတစ်ပုဒ်ကို ထပ်ခါတလဲလဲ ဖွင့်တာ ဒါမှမဟုတ် ကြယ် ၁၀ ပွင့်ကို တစ်ခုပြီးတစ်ခု ဆွဲဖို့ ကွန်ပျူတာကို Loop ပတ်ခိုင်းနိုင်ပါတယ်။',
    en: 'A loop tells a computer to repeat a set of actions without having to write them over and over. For example, telling a game character to walk 10 steps using one repeat command instead of 10 separate ones!'
  },
  ai: {
    title: { my: 'AI က ဘယ်လို သင်ယူသလဲ?', en: 'How does AI learn?' },
    my: 'AI (ဉာဏ်ရည်တု) စနစ်တွေဟာ လူသားတွေလိုပဲ ဥပမာတွေ၊ ဓာတ်ပုံတွေနဲ့ စာသား အမြောက်အမြားကို လေ့လာပြီး Pattern (ပုံစံတူများ) ကို ရှာဖွေသင်ယူပါတယ်။ အကယ်၍ သင်ပေးတဲ့ ဥပမာတွေမှာ အမှားပါနေရင် AI ကလည်း အမှားလုပ်တတ်တဲ့အတွက် လူသားတွေက အမြဲ ပြန်လည်စစ်ဆေးပေးဖို့ လိုအပ်ပါတယ်။',
    en: 'AI models learn patterns by reviewing huge collections of examples (like thousands of pictures of cats and dogs). Because AI only knows what it has been taught, humans must always double-check its answers for safety and accuracy!'
  },
  bug: {
    title: { my: 'Coding မှာ Bug ဆိုတာ ဘာလဲ?', en: 'What is a bug in code?' },
    my: 'Bug ဆိုတာ Program ထဲမှာ ဖြစ်ပေါ်နေတဲ့ အမှားအယွင်း သို့မဟုတ် ချို့ယွင်းချက်ကို ခေါ်တာပါ။ Bug ကို ရှာဖွေပြင်ဆင်တာကိုတော့ Debugging လို့ ခေါ်ပြီး Programmer တိုင်း နေ့စဉ် ရင်ဆိုင်ဖြေရှင်းရတဲ့ ပျော်စရာ ပဟေဠိတစ်ခု ဖြစ်ပါတယ်။',
    en: 'A bug is an error or mistake in computer code that prevents a program from running correctly. Finding and fixing these mistakes is called "debugging" — it makes you a true coding detective!'
  },
  safety: {
    title: { my: 'အွန်လိုင်းမှာ ဘယ်လို လုံခြုံမလဲ?', en: 'How do I stay safe online?' },
    my: 'အွန်လိုင်းမှာ လုံခြုံစေဖို့ ကိုယ့်ရဲ့ အမည်အပြည့်အစုံ၊ အိမ်လိပ်စာ၊ ကျောင်းအမည်၊ ဖုန်းနံပါတ်၊ Password တွေနဲ့ ဓာတ်ပုံတွေကို မသိသူတွေဆီ လုံးဝ မပေးပါနဲ့။ စိတ်မသက်မသာဖြစ်စရာ ဒါမှမဟုတ် မသင်္ကာစရာ တစ်ခုခု ကြုံတွေ့ရပါက ယုံကြည်ရတဲ့ မိဘ သို့မဟုတ် လူကြီးတစ်ယောက်ကို အမြဲ အသိပေးပါ။',
    en: 'To stay safe online: never share private info like passwords, addresses, full names, or phone numbers with anyone you meet on the internet. If anything ever makes you feel uncomfortable, immediately tell a trusted adult or teacher!'
  }
};

function displayTutorAnswer(topicKey) {
  const data = tutorKnowledgeBase[topicKey];
  const tutorAns = $('#tutorAnswer');
  if (!tutorAns || !data) return;

  const title = currentLang === 'my' ? data.title.my : data.title.en;
  const body = currentLang === 'my' ? data.my : data.en;

  tutorAns.dataset.hasAnswer = 'true';
  tutorAns.innerHTML = `
    <div style="margin-bottom: 8px;">
      <span style="background:var(--purple-light); color:var(--purple-main); padding:3px 10px; border-radius:999px; font-size:12px; font-weight:800;">
        🤖 AI Tutor (Simulation)
      </span>
    </div>
    <strong style="font-size:16px; display:block; margin-bottom:6px;">${title}</strong>
    <p style="margin:0;">${body}</p>
  `;
  playSound('step');
}

function handleCustomTutorQuestion() {
  const input = $('#tutorCustomInput');
  if (!input) return;

  const query = input.value.trim().toLowerCase();
  if (!query) {
    displayTutorAnswer('algorithm');
    return;
  }

  // Check matching keywords in query
  if (query.includes('loop') || query.includes('repeat') || query.includes('ထပ်')) {
    displayTutorAnswer('loop');
  } else if (query.includes('bug') || query.includes('error') || query.includes('အမှား')) {
    displayTutorAnswer('bug');
  } else if (query.includes('ai') || query.includes('learn') || query.includes('ဉာဏ်')) {
    displayTutorAnswer('ai');
  } else if (query.includes('safe') || query.includes('password') || query.includes('လုံခြုံ')) {
    displayTutorAnswer('safety');
  } else {
    // Default friendly response
    const tutorAns = $('#tutorAnswer');
    if (tutorAns) {
      tutorAns.dataset.hasAnswer = 'true';
      tutorAns.innerHTML = currentLang === 'my'
        ? `
          <div style="margin-bottom: 8px;">
            <span style="background:var(--purple-light); color:var(--purple-main); padding:3px 10px; border-radius:999px; font-size:12px; font-weight:800;">
              🤖 AI Tutor (Simulation)
            </span>
          </div>
          <strong style="font-size:16px; display:block; margin-bottom:6px;">"${input.value}" အကြောင်း မေးခွန်းအတွက် ကျေးဇူးတင်ပါတယ်!</strong>
          <p>ဒီ Demo စနစ်တွင် ကလေးများ လုံခြုံရေးအတွက် ကြိုတင်စိစစ်ထားသော ပညာပေးအဖြေများကိုသာ အသုံးပြုထားပါတယ်။ Algorithm၊ Loop၊ AI၊ Bug နှင့် Online Safety စသည့် အဓိက ခေါင်းစဉ်များကို အပေါ်ရှိ ခလုတ်များမှတစ်ဆင့် အလွယ်တကူ လေ့လာနိုင်ပါတယ်!</p>
        `
        : `
          <div style="margin-bottom: 8px;">
            <span style="background:var(--purple-light); color:var(--purple-main); padding:3px 10px; border-radius:999px; font-size:12px; font-weight:800;">
              🤖 AI Tutor (Simulation)
            </span>
          </div>
          <strong style="font-size:16px; display:block; margin-bottom:6px;">Great question about "${input.value}"!</strong>
          <p>In this child-safe prototype, all answers are locally simulated and curated to protect your privacy. You can tap the popular topic buttons above (Algorithm, Loop, AI, Bug, Online Safety) to explore fundamental coding concepts safely!</p>
        `;
    }
  }

  input.value = '';
}

// -----------------------------------------------------------------------------
// 13. Event Listeners & Initialization
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Load saved progress
  loadState();

  // Language switch button
  const langBtn = $('#langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      playSound('step');
      setLanguage(currentLang === 'my' ? 'en' : 'my');
    });
  }

  // Sound toggle button
  const soundToggleBtn = $('#soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.textContent = soundEnabled ? '🔊' : '🔇';
      showToast(soundEnabled
        ? (currentLang === 'my' ? 'အသံဖွင့်ထားပါသည်' : 'Sound Enabled')
        : (currentLang === 'my' ? 'အသံပိတ်ထားပါသည်' : 'Sound Muted'));
    });
  }

  // Navigation Links
  $$('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('step');
      navigateTo(btn.dataset.page);
    });
  });

  $$('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('step');
      navigateTo(btn.dataset.go);
    });
  });

  // Maze controls
  $$('[data-move]').forEach(btn => {
    btn.addEventListener('click', () => moveRobot(btn.dataset.move));
  });

  const resetMazeBtn = $('#resetMaze');
  if (resetMazeBtn) {
    resetMazeBtn.addEventListener('click', () => {
      playSound('step');
      resetMaze();
    });
  }

  const hintMazeBtn = $('#hintMaze');
  if (hintMazeBtn) {
    hintMazeBtn.addEventListener('click', () => {
      showMazeHint();
    });
  }

  const runMazeBtn = $('#runMaze');
  if (runMazeBtn) {
    runMazeBtn.addEventListener('click', () => {
      playSound('step');
      runMazeSequence();
    });
  }

  // Keyboard navigation for Maze (Arrows & WASD)
  document.addEventListener('keydown', (e) => {
    const mazeSection = $('#coding');
    if (mazeSection && !mazeSection.classList.contains('hidden')) {
      const keyMap = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
        KeyW: 'up',
        KeyS: 'down',
        KeyA: 'left',
        KeyD: 'right'
      };

      if (keyMap[e.code] || keyMap[e.key]) {
        e.preventDefault();
        moveRobot(keyMap[e.code] || keyMap[e.key]);
      } else if (e.key === 'r' || e.key === 'R') {
        resetMaze();
      } else if (e.key === 'h' || e.key === 'H') {
        showMazeHint();
      }
    }
  });

  // Quiz next / retry button
  const nextQuizBtn = $('#nextQuestion');
  if (nextQuizBtn) {
    nextQuizBtn.addEventListener('click', handleNextQuestionClick);
  }

  // AI Detective buttons
  $$('.aiAnswer').forEach(btn => {
    btn.addEventListener('click', () => handleAIAnswer(btn.dataset.answer));
  });

  const nextAIBtn = $('#nextAI');
  if (nextAIBtn) {
    nextAIBtn.addEventListener('click', handleNextAIClick);
  }

  // Code Builder: Palette click & drag handlers
  $$('[data-block]').forEach(chip => {
    chip.addEventListener('click', () => addBlockToProgram(chip.dataset.block));
    chip.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/block-kind', chip.dataset.block);
    });
  });

  const workspace = $('#workspace');
  if (workspace) {
    workspace.addEventListener('dragover', (e) => {
      e.preventDefault();
      workspace.classList.add('drag-over');
    });
    workspace.addEventListener('dragleave', () => {
      workspace.classList.remove('drag-over');
    });
    workspace.addEventListener('drop', (e) => {
      e.preventDefault();
      workspace.classList.remove('drag-over');
      const kind = e.dataTransfer.getData('text/block-kind');
      if (kind && blockDefinitions[kind]) {
        addBlockToProgram(kind);
      }
    });
  }

  const runCodeBtn = $('#runCode');
  if (runCodeBtn) runCodeBtn.addEventListener('click', runUserProgram);

  const clearCodeBtn = $('#clearCode');
  if (clearCodeBtn) {
    clearCodeBtn.addEventListener('click', () => {
      if (isProgramRunning) return;
      userProgram = [];
      renderBlocks();
      playSound('step');
      const out = $('#codeOutput');
      if (out) {
        out.textContent = currentLang === 'my'
          ? 'Block များကို ဖျက်ပြီးပါပြီ။'
          : 'All blocks cleared.';
      }
    });
  }

  // AI Tutor topic chips
  $$('.tutor-topic').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tutor-topic').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayTutorAnswer(btn.dataset.topic);
    });
  });

  const tutorAskBtn = $('#tutorAskBtn');
  if (tutorAskBtn) tutorAskBtn.addEventListener('click', handleCustomTutorQuestion);

  const tutorInput = $('#tutorCustomInput');
  if (tutorInput) {
    tutorInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleCustomTutorQuestion();
    });
  }

  // Reset Progress button
  const resetBtn = $('#resetProgress');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const confirmMsg = currentLang === 'my'
        ? 'ဒီစက်ပေါ်ရှိ သင်ယူမှုမှတ်တမ်း (XP၊ အဆင့်၊ ဖွင့်ထားသော Level များနှင့် ဆုတံဆိပ်များ) အားလုံးကို ပြန်လည်စတင်လိုပါသလား?'
        : 'Reset all your local progress, unlocked levels, XP, and badges on this browser?';
      if (window.confirm(confirmMsg)) {
        state = {
          ...defaultState,
          unlockedMazeLevels: [1],
          completedMazeLevels: []
        };
        saveState();
        loadMazeLevel(1);
        showToast(currentLang === 'my' ? 'မှတ်တမ်းများကို ပြန်လည်စတင်ပြီးပါပြီ။' : 'Progress has been reset.');
        playSound('step');
      }
    });
  }

  // Initial load
  loadMazeLevel(currentMazeLevelId);
  renderQuizQuestion();
  renderAIItem();
  renderBlocks();
  updateStatsDisplay();
});
