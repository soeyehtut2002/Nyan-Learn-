import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MAZE_LEVELS, MAZE_GRID_SIZE } from '../data/mazeLevels';
import {
  calculateNextMazePosition,
  findOptimalMazePath,
  turnLeft,
  turnRight,
  headingToDirection,
  isPathClearAhead,
  generateCodePreview
} from '../logic/mazeLogic';
import { Direction, Heading, MazeLevel, AgeTier, RobotCommand, CodeLanguage } from '../../../types/maze.types';
import { useProgress } from '../../../context/ProgressContext';
import { useTranslation } from '../../../i18n/LanguageContext';
import { AudioService } from '../../../services/audio/AudioService';
// import { PhaserMazeGame } from './PhaserMazeGame';
import { MazeScene } from '../game/MazeScene';

// ─── Age Tier Config ────────────────────────────────────────────────────────
const TIER_CONFIG = {
  junior: {
    label: { en: '🐣 Junior Coder', my: '🐣 စတင်သင်ယူသူ' },
    ages: { en: 'Ages 7–10', my: 'အသက် ၇–၁၀ နှစ်' },
    concept: { en: 'Sequencing & Directions', my: 'အဆင့်ဆင့် ညွှန်ကြားချက်များ' },
    desc: {
      en: 'Use the D-Pad or command blocks to guide your robot. Learn sequencing and turns!',
      my: 'D-Pad သို့မဟုတ် command block များသုံး၍ robot ကိုပို့ပါ။ Sequencing နှင့် ကွေ့ပတ်ခြင်းကို သင်ယူပါ!',
    },
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    badgeBg: '#d1fae5',
    badgeColor: '#065f46',
    accentColor: '#10b981',
    borderColor: '#6ee7b7',
    levelRange: [1, 5],
  },
  intermediate: {
    label: { en: '🚀 Intermediate Coder', my: '🚀 အလယ်အလတ် ကုဒ်ဆရာ' },
    ages: { en: 'Ages 11–14', my: 'အသက် ၁၁–၁၄ နှစ်' },
    concept: { en: 'Loops & Pattern Thinking', my: 'Loop ပတ်ခြင်းနှင့် Pattern ကြည့်တတ်ခြင်း' },
    desc: {
      en: 'Use Repeat loops and conditional blocks to write efficient code programs!',
      my: 'Repeat loop နှင့် conditional block များသုံး၍ ထိရောက်သော code program ရေးပါ!',
    },
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    badgeBg: '#ede9fe',
    badgeColor: '#5b21b6',
    accentColor: '#7c3aed',
    borderColor: '#c4b5fd',
    levelRange: [6, 10],
  },
  senior: {
    label: { en: '⚡ Senior Coder', my: '⚡ အဆင့်မြင့် ကုဒ်ဆရာ' },
    ages: { en: 'Ages 15–18', my: 'အသက် ၁၅–၁၈ နှစ်' },
    concept: { en: 'Algorithms & Real Code', my: 'Algorithm နှင့် တကယ့် Code ရေးသားခြင်း' },
    desc: {
      en: 'Master BFS pathfinding, write real Python & JS code. Think like a software engineer!',
      my: 'BFS pathfinding ကျွမ်းကျင်အောင် လေ့ကျင့်ပါ။ Python နှင့် JS code တကယ်ရေးပါ။ Software engineer လို တွေးပါ!',
    },
    icon: '💻',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    badgeBg: '#fee2e2',
    badgeColor: '#991b1b',
    accentColor: '#ef4444',
    borderColor: '#fca5a5',
    levelRange: [11, 15],
  },
} as const;

const tierOrder: AgeTier[] = ['junior', 'intermediate', 'senior'];

// ─── Component ───────────────────────────────────────────────────────────────
export const MazeView: React.FC = () => {
  const { lang } = useTranslation();
  const { progress, completeMazeLevel } = useProgress();

  const [activeTier, setActiveTier] = useState<AgeTier>('junior');
  const [currentLevelId, setCurrentLevelId] = useState(1);
  const currentLevel: MazeLevel = MAZE_LEVELS.find(l => l.id === currentLevelId) || MAZE_LEVELS[0];
  const tierCfg = TIER_CONFIG[activeTier];

  // Robot state
  const [robotPos, setRobotPos] = useState(currentLevel.start);
  const [robotHeading, setRobotHeading] = useState<Heading>(currentLevel.initialHeading || 'north');
  const [movesCount, setMovesCount] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [highlightTiles, setHighlightTiles] = useState<number[]>([]);

  // Programming workspace
  const [controlTab, setControlTab] = useState<'code' | 'arcade'>('code');
  const [codeLang, setCodeLang] = useState<CodeLanguage>('python');
  const [program, setProgram] = useState<RobotCommand[]>([]);
  const [repeatCountInput, setRepeatCountInput] = useState<number>(3);
  const [execSpeed, setExecSpeed] = useState<'normal' | 'fast'>('normal');

  const phaserSceneRef = useRef<MazeScene | null>(null);

  // Switch tier → auto-load first level of that tier
  const switchTier = (tier: AgeTier) => {
    setActiveTier(tier);
    const firstLevel = MAZE_LEVELS.find(l => l.tier === tier);
    if (firstLevel) loadLevel(firstLevel.id);
  };

  // Load level
  const loadLevel = useCallback((lvlId: number) => {
    setCurrentLevelId(lvlId);
    const targetLvl = MAZE_LEVELS.find(l => l.id === lvlId) || MAZE_LEVELS[0];
    const initialH: Heading = targetLvl.initialHeading || 'north';
    setRobotPos(targetLvl.start);
    setRobotHeading(initialH);
    setMovesCount(0);
    setIsWon(false);
    setIsExecuting(false);
    setActiveStepIndex(null);
    setShowHint(false);
    setHighlightTiles([]);
    setProgram([]);
    setStatusMessage(
      lang === 'my'
        ? `${targetLvl.name.my}: Robot ကို ⭐ ဆီ ပို့ပေးပါ!`
        : `${targetLvl.name.en}: Guide your robot to the ⭐ star!`
    );
    if (phaserSceneRef.current) phaserSceneRef.current.resetPosition(targetLvl.start, initialH);
  }, [lang]);

  useEffect(() => { loadLevel(currentLevelId); }, [currentLevelId, loadLevel]);

  // Movement helpers
  const stepForward = useCallback((): boolean => {
    const dir = headingToDirection(robotHeading);
    const check = calculateNextMazePosition(robotPos, dir, currentLevel.walls, MAZE_GRID_SIZE);
    if (!check.valid) {
      AudioService.play('blocked');
      if (phaserSceneRef.current) phaserSceneRef.current.shakeRobot();
      setStatusMessage(lang === 'my' ? '❌ နံရံနဲ့ တိုက်မိနေသည်!' : '❌ Blocked by a wall!');
      return false;
    }
    const nextPos = check.nextPos;
    setRobotPos(nextPos);
    setMovesCount(c => c + 1);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.animateMove(nextPos);
    if (nextPos === currentLevel.goal) {
      setIsWon(true);
      AudioService.play('star');
      if (phaserSceneRef.current) phaserSceneRef.current.celebrateGoal();
      const { isFirstTime } = completeMazeLevel(currentLevel.id, currentLevel.xpReward);
      setStatusMessage(isFirstTime
        ? (lang === 'my' ? `🎉 ဂုဏ်ယူပါတယ်! +${currentLevel.xpReward} XP ရရှိပါပြီ!` : `🎉 Amazing! +${currentLevel.xpReward} XP earned!`)
        : (lang === 'my' ? '🎉 ထပ်မံ အောင်မြင်ပါသည်!' : '🎉 Solved again! Great practice!'));
    }
    return true;
  }, [robotHeading, robotPos, currentLevel, lang, completeMazeLevel]);

  const handleTurnLeft = useCallback(() => {
    const nextH = turnLeft(robotHeading);
    setRobotHeading(nextH);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.setHeading(nextH);
  }, [robotHeading]);

  const handleTurnRight = useCallback(() => {
    const nextH = turnRight(robotHeading);
    setRobotHeading(nextH);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.setHeading(nextH);
  }, [robotHeading]);

  const moveDirect = useCallback((dir: Direction) => {
    if (isWon || isExecuting) return;
    let newH: Heading = 'north';
    if (dir === 'up') newH = 'north';
    else if (dir === 'down') newH = 'south';
    else if (dir === 'left') newH = 'west';
    else newH = 'east';
    setRobotHeading(newH);
    if (phaserSceneRef.current) phaserSceneRef.current.setHeading(newH);
    const check = calculateNextMazePosition(robotPos, dir, currentLevel.walls, MAZE_GRID_SIZE);
    if (!check.valid) {
      AudioService.play('blocked');
      if (phaserSceneRef.current) phaserSceneRef.current.shakeRobot();
      setStatusMessage(lang === 'my' ? '❌ အတားအဆီး ရှိသည်!' : '❌ Blocked!');
      return;
    }
    const nextPos = check.nextPos;
    setRobotPos(nextPos);
    setMovesCount(prev => prev + 1);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.animateMove(nextPos);
    if (nextPos === currentLevel.goal) {
      setIsWon(true);
      AudioService.play('star');
      if (phaserSceneRef.current) phaserSceneRef.current.celebrateGoal();
      completeMazeLevel(currentLevel.id, currentLevel.xpReward);
    }
  }, [isWon, isExecuting, robotPos, currentLevel, lang, completeMazeLevel]);

  const resetLevel = () => {
    const initialH: Heading = currentLevel.initialHeading || 'north';
    setRobotPos(currentLevel.start);
    setRobotHeading(initialH);
    setMovesCount(0);
    setIsWon(false);
    setIsExecuting(false);
    setActiveStepIndex(null);
    setShowHint(false);
    setHighlightTiles([]);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.resetPosition(currentLevel.start, initialH);
  };

  const addCommand = (type: RobotCommand['type'], repeatCount?: number) => {
    if (isExecuting) return;
    const newCmd: RobotCommand = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      repeatCount: type === 'repeat' ? (repeatCount || repeatCountInput) : undefined,
      subCommands: type === 'repeat' ? [{ id: Math.random().toString(36).substring(2, 9), type: 'forward' }] : undefined
    };
    setProgram(prev => [...prev, newCmd]);
    AudioService.play('step');
  };

  const removeCommand = (index: number) => {
    if (isExecuting) return;
    setProgram(prev => prev.filter((_, i) => i !== index));
  };

  const clearProgram = () => {
    if (isExecuting) return;
    setProgram([]);
  };

  const runProgram = async () => {
    if (isExecuting || program.length === 0) return;
    resetLevel();
    setIsExecuting(true);
    const delay = execSpeed === 'fast' ? 140 : 300;
    let currPos = currentLevel.start;
    let currH = currentLevel.initialHeading || 'north';

    for (let i = 0; i < program.length; i++) {
      if (currPos === currentLevel.goal) break;
      setActiveStepIndex(i);
      const cmd = program[i];

      if (cmd.type === 'forward') {
        const dir = headingToDirection(currH);
        const check = calculateNextMazePosition(currPos, dir, currentLevel.walls, MAZE_GRID_SIZE);
        if (check.valid) {
          currPos = check.nextPos;
          setRobotPos(currPos);
          setMovesCount(c => c + 1);
          AudioService.play('step');
          if (phaserSceneRef.current) phaserSceneRef.current.animateMove(currPos);
        } else {
          AudioService.play('blocked');
          if (phaserSceneRef.current) phaserSceneRef.current.shakeRobot();
          setStatusMessage(lang === 'my' ? `⚠️ အဆင့် ${i + 1} — တိုက်မိပါသည်!` : `⚠️ Step ${i + 1} — Blocked!`);
          break;
        }
      } else if (cmd.type === 'turn_left') {
        currH = turnLeft(currH);
        setRobotHeading(currH);
        AudioService.play('step');
        if (phaserSceneRef.current) phaserSceneRef.current.setHeading(currH);
      } else if (cmd.type === 'turn_right') {
        currH = turnRight(currH);
        setRobotHeading(currH);
        AudioService.play('step');
        if (phaserSceneRef.current) phaserSceneRef.current.setHeading(currH);
      } else if (cmd.type === 'repeat') {
        const reps = cmd.repeatCount || 2;
        for (let r = 0; r < reps; r++) {
          if (currPos === currentLevel.goal) break;
          const dir = headingToDirection(currH);
          const check = calculateNextMazePosition(currPos, dir, currentLevel.walls, MAZE_GRID_SIZE);
          if (check.valid) {
            currPos = check.nextPos;
            setRobotPos(currPos);
            setMovesCount(c => c + 1);
            AudioService.play('step');
            if (phaserSceneRef.current) phaserSceneRef.current.animateMove(currPos);
          } else { AudioService.play('blocked'); break; }
          await new Promise(res => setTimeout(res, delay));
        }
      } else if (cmd.type === 'if_clear') {
        if (isPathClearAhead(currPos, currH, currentLevel.walls, MAZE_GRID_SIZE)) {
          const dir = headingToDirection(currH);
          const check = calculateNextMazePosition(currPos, dir, currentLevel.walls, MAZE_GRID_SIZE);
          if (check.valid) {
            currPos = check.nextPos;
            setRobotPos(currPos);
            setMovesCount(c => c + 1);
            AudioService.play('step');
            if (phaserSceneRef.current) phaserSceneRef.current.animateMove(currPos);
          }
        }
      } else if (cmd.type === 'if_wall') {
        if (!isPathClearAhead(currPos, currH, currentLevel.walls, MAZE_GRID_SIZE)) {
          currH = turnRight(currH);
          setRobotHeading(currH);
          AudioService.play('step');
          if (phaserSceneRef.current) phaserSceneRef.current.setHeading(currH);
        }
      }
      await new Promise(res => setTimeout(res, delay));
    }

    setActiveStepIndex(null);
    setIsExecuting(false);
    if (currPos === currentLevel.goal) {
      setIsWon(true);
      AudioService.play('star');
      if (phaserSceneRef.current) phaserSceneRef.current.celebrateGoal();
      completeMazeLevel(currentLevel.id, currentLevel.xpReward);
    }
  };

  const stepDebugger = () => {
    if (isExecuting || program.length === 0 || isWon) return;
    const nextIdx = activeStepIndex === null ? 0 : (activeStepIndex + 1) % program.length;
    setActiveStepIndex(nextIdx);
    const cmd = program[nextIdx];
    if (cmd.type === 'forward') stepForward();
    else if (cmd.type === 'turn_left') handleTurnLeft();
    else if (cmd.type === 'turn_right') handleTurnRight();
    else if (cmd.type === 'repeat') stepForward();
  };

  const toggleHint = () => {
    setShowHint(prev => !prev);
    const path = findOptimalMazePath(robotPos, currentLevel.goal, currentLevel.walls, MAZE_GRID_SIZE);
    if (path && path.length > 1) {
      setHighlightTiles(path.slice(1, 4));
      setTimeout(() => setHighlightTiles([]), 3000);
    }
    AudioService.play('step');
  };

  // Keyboard for arcade
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (controlTab !== 'arcade') return;
      const keyMap: Record<string, Direction> = {
        ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
        KeyW: 'up', KeyS: 'down', KeyA: 'left', KeyD: 'right'
      };
      if (keyMap[e.code] || keyMap[e.key]) {
        e.preventDefault();
        moveDirect(keyMap[e.code] || keyMap[e.key]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [controlTab, moveDirect]);

  const tierLevels = MAZE_LEVELS.filter(l => l.tier === activeTier);
  const headingSymbols: Record<Heading, string> = {
    north: '⬆️', east: '➡️', south: '⬇️', west: '⬅️'
  };
  const movesLeft = currentLevel.moveLimit - movesCount;
  const movesPercent = Math.max(0, (movesLeft / currentLevel.moveLimit) * 100);

  return (
    <div className="section-container" style={{ padding: '0 0 40px' }}>

      {/* ══════════════ HERO BANNER ══════════════ */}
      <div style={{
        background: tierCfg.gradient,
        borderRadius: '0 0 32px 32px',
        padding: '32px 24px 28px',
        textAlign: 'center',
        marginBottom: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.18) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 50%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '52px', marginBottom: '8px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>🤖</div>
          <h1 style={{ margin: '0 0 6px', fontSize: '26px', fontWeight: 900, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            {lang === 'my' ? 'Robot Maze — ပရိုဂရမ်မင်း စွန့်စားခန်း' : 'Robot Maze — Programming Adventure'}
          </h1>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '15px', fontWeight: 600 }}>
            {lang === 'my'
              ? 'ကလေးများ programming သင်ယူရန် — အဆင့် ၁၅ ဆင့် | အသက် ၇ မှ ၁၈ နှစ်'
              : 'Teaching kids to code through play — 15 levels across 3 age groups'}
          </p>
        </div>
      </div>

      {/* ══════════════ AGE TIER TABS ══════════════ */}
      <div style={{ display: 'flex', gap: '0', background: '#fff', borderBottom: '3px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        {tierOrder.map(tier => {
          const cfg = TIER_CONFIG[tier];
          const isActive = activeTier === tier;
          const completedInTier = MAZE_LEVELS.filter(l => l.tier === tier && progress.completedMazeLevels.includes(l.id)).length;
          const totalInTier = MAZE_LEVELS.filter(l => l.tier === tier).length;
          return (
            <button
              key={tier}
              type="button"
              onClick={() => switchTier(tier)}
              style={{
                flex: 1,
                padding: '14px 8px 12px',
                border: 'none',
                background: isActive ? '#fff' : '#f8fafc',
                borderBottom: isActive ? `3px solid ${cfg.accentColor}` : '3px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '-3px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
              }}
            >
              <span style={{ fontSize: '22px' }}>{cfg.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: 800, color: isActive ? cfg.accentColor : '#64748b' }}>
                {lang === 'my' ? cfg.label.my : cfg.label.en}
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>
                {lang === 'my' ? cfg.ages.my : cfg.ages.en}
              </span>
              <span style={{
                fontSize: '10px',
                background: isActive ? cfg.badgeBg : '#f1f5f9',
                color: isActive ? cfg.badgeColor : '#94a3b8',
                padding: '1px 7px',
                borderRadius: '99px',
                fontWeight: 800,
              }}>
                {completedInTier}/{totalInTier} ✓
              </span>
            </button>
          );
        })}
      </div>

      <div style={{ padding: '0 16px' }}>

        {/* ══════════════ TIER INTRO CARD ══════════════ */}
        <div style={{
          background: tierCfg.gradient,
          borderRadius: '20px',
          padding: '20px 24px',
          margin: '20px 0 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          <div style={{ fontSize: '44px' }}>{tierCfg.icon}</div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6px' }}>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#fff' }}>
                {lang === 'my' ? tierCfg.label.my : tierCfg.label.en}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '2px 10px',
                borderRadius: '99px',
                fontSize: '12px',
                fontWeight: 800,
              }}>
                {lang === 'my' ? tierCfg.ages.my : tierCfg.ages.en}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '2px 10px',
                borderRadius: '99px',
                fontSize: '12px',
                fontWeight: 800,
              }}>
                {lang === 'my' ? tierCfg.concept.my : tierCfg.concept.en}
              </span>
            </div>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.92)', fontSize: '14px', fontWeight: 600, lineHeight: 1.5 }}>
              {lang === 'my' ? tierCfg.desc.my : tierCfg.desc.en}
            </p>
          </div>
        </div>

        {/* ══════════════ LEVEL PICKER ══════════════ */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: 800, color: '#64748b' }}>
            {lang === 'my' ? '📚 Level ရွေးပါ:' : '📚 Pick a Level:'}
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tierLevels.map(lvl => {
              const isUnlocked = progress.unlockedMazeLevels.includes(lvl.id);
              const isCompleted = progress.completedMazeLevels.includes(lvl.id);
              const isActive = lvl.id === currentLevelId;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  disabled={!isUnlocked}
                  onClick={() => loadLevel(lvl.id)}
                  title={lang === 'my' ? lvl.name.my : lvl.name.en}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    border: `3px solid ${isActive ? tierCfg.accentColor : isCompleted ? tierCfg.borderColor : '#e2e8f0'}`,
                    background: isActive
                      ? tierCfg.gradient
                      : isCompleted ? tierCfg.badgeBg : '#f8fafc',
                    color: isActive ? '#fff' : isCompleted ? tierCfg.badgeColor : '#94a3b8',
                    cursor: isUnlocked ? 'pointer' : 'not-allowed',
                    opacity: isUnlocked ? 1 : 0.45,
                    fontWeight: 900,
                    fontSize: '13px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                    transition: 'all 0.15s ease',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isActive ? `0 4px 16px ${tierCfg.accentColor}44` : 'none',
                  }}
                >
                  <span style={{ fontSize: '18px' }}>
                    {!isUnlocked ? '🔒' : isCompleted ? '✅' : lvl.id}
                  </span>
                  <span style={{ fontSize: '10px', opacity: 0.8 }}>
                    {isUnlocked ? `Lv.${lvl.id}` : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ══════════════ LEVEL INFO BANNER ══════════════ */}
        <div style={{
          background: '#fff',
          border: `2px solid ${tierCfg.borderColor}`,
          borderRadius: '20px',
          padding: '16px 20px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '14px',
          boxShadow: `0 2px 16px ${tierCfg.accentColor}18`,
        }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6px' }}>
              <span style={{ fontSize: '17px', fontWeight: 900, color: '#1e293b' }}>
                {lang === 'my' ? currentLevel.name.my : currentLevel.name.en}
              </span>
              <span style={{
                background: tierCfg.badgeBg, color: tierCfg.badgeColor,
                padding: '2px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: 800,
              }}>
                {lang === 'my' ? currentLevel.concept.my : currentLevel.concept.en}
              </span>
            </div>
            <p style={{ margin: '0 0 10px', color: '#64748b', fontSize: '13px', lineHeight: 1.5 }}>
              {lang === 'my' ? currentLevel.subtitle.my : currentLevel.subtitle.en}
            </p>
            {/* Move bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', whiteSpace: 'nowrap' }}>
                {lang === 'my' ? 'ခြေလှမ်း:' : 'Steps:'} <strong style={{ color: movesLeft <= 3 ? '#ef4444' : tierCfg.accentColor }}>{movesLeft}</strong> / {currentLevel.moveLimit}
              </span>
              <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${movesPercent}%`,
                  background: movesPercent > 40 ? tierCfg.gradient : 'linear-gradient(90deg,#ef4444,#f97316)',
                  borderRadius: '99px',
                  transition: 'width 0.3s ease',
                }} />
              </div>
            </div>
          </div>

          {/* Heading + XP + Reward */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <div style={{
              background: '#f8fafc', border: '1px solid #e2e8f0',
              borderRadius: '12px', padding: '8px 14px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '22px' }}>{headingSymbols[robotHeading]}</div>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700 }}>
                {lang === 'my' ? 'ဦးတည်ချက်' : 'Heading'}
              </div>
            </div>
            <div style={{
              background: '#fef3c7', border: '1px solid #fde68a',
              borderRadius: '12px', padding: '6px 14px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#92400e' }}>+{currentLevel.xpReward} XP</div>
            </div>
          </div>
        </div>

        {/* ══════════════ STATUS MESSAGE ══════════════ */}
        <div style={{
          background: isWon ? '#ecfdf5' : '#f8fafc',
          color: isWon ? '#065f46' : '#334155',
          padding: '12px 18px',
          borderRadius: '14px',
          fontWeight: 700,
          fontSize: '14px',
          marginBottom: showHint ? '10px' : '20px',
          borderLeft: `4px solid ${isWon ? '#10b981' : tierCfg.accentColor}`,
          transition: 'all 0.3s ease',
        }}>
          {isWon && <span style={{ marginRight: '8px', fontSize: '20px' }}>🎉</span>}
          {statusMessage}
        </div>

        {/* Hint Banner */}
        {showHint && (
          <div style={{
            background: '#fffbeb',
            color: '#78350f',
            padding: '12px 18px',
            borderRadius: '14px',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '20px',
            border: '1.5px solid #fde68a',
            lineHeight: 1.6,
          }}>
            💡 <strong>{lang === 'my' ? 'အကြံပြုချက်:' : 'Algorithm Hint:'}</strong>{' '}
            {lang === 'my' ? currentLevel.hint.my : currentLevel.hint.en}
          </div>
        )}

        {/* ══════════════ MAIN GAME AREA ══════════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}>

          {/* ── Left: Maze Grid ── */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            border: `2px solid ${tierCfg.borderColor}`,
            padding: '20px',
            boxShadow: `0 4px 24px ${tierCfg.accentColor}18`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontWeight: 800, fontSize: '15px', color: '#1e293b' }}>
                {lang === 'my' ? '🗺️ Maze Grid' : '🗺️ Maze Grid'}
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  onClick={resetLevel}
                  disabled={isExecuting}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '10px',
                    border: `2px solid ${tierCfg.borderColor}`,
                    background: '#fff',
                    color: tierCfg.accentColor,
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  ↻ {lang === 'my' ? 'ပြန်စမယ်' : 'Reset'}
                </button>
                <button
                  type="button"
                  onClick={toggleHint}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '10px',
                    border: `2px solid #fde68a`,
                    background: showHint ? '#fef3c7' : '#fff',
                    color: '#92400e',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  💡 {lang === 'my' ? 'Hint' : 'Hint'}
                </button>
              </div>
            </div>

            {/* Grid */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gridTemplateRows: 'repeat(5, 1fr)',
                  gap: '6px',
                  width: '100%',
                  maxWidth: '380px',
                  aspectRatio: '1',
                  padding: '12px',
                  background: '#e2e8f0',
                  borderRadius: '18px',
                  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {Array.from({ length: 25 }, (_, i) => {
                  const isWall = currentLevel.walls.includes(i);
                  const isGoal = i === currentLevel.goal;
                  const isRobot = i === robotPos;
                  const isHint = highlightTiles.includes(i);

                  let bg = '#ffffff';
                  let border = '2px solid #cbd5e1';
                  if (isWall) { bg = '#94a3b8'; border = '2px solid #64748b'; }
                  if (isGoal) { bg = '#dcfce7'; border = '2px solid #86efac'; }
                  if (isHint) { bg = '#fef08a'; border = '2px solid #eab308'; }
                  if (isRobot) { border = `3px solid ${tierCfg.accentColor}`; }

                  const headingAngles: Record<Heading, number> = {
                    north: 0, east: 90, south: 180, west: 270
                  };

                  return (
                    <div
                      key={i}
                      style={{
                        background: bg,
                        border,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: isRobot ? '28px' : isGoal ? '24px' : '20px',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                        boxShadow: isRobot ? `0 0 16px ${tierCfg.accentColor}55` : 'none',
                      }}
                    >
                      {isRobot && (
                        <div style={{
                          transform: `rotate(${headingAngles[robotHeading]}deg)`,
                          transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                        }}>
                          🤖
                        </div>
                      )}
                      {!isRobot && isGoal && <span>⭐</span>}
                      {!isRobot && isWall && <span>🪨</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Win overlay */}
            {isWon && (
              <div style={{
                textAlign: 'center',
                marginTop: '16px',
                padding: '16px',
                background: 'linear-gradient(135deg,#ecfdf5,#d1fae5)',
                borderRadius: '16px',
                border: '2px solid #6ee7b7',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '4px' }}>🎉⭐🎉</div>
                <div style={{ fontWeight: 900, fontSize: '16px', color: '#065f46' }}>
                  {lang === 'my' ? 'ဂုဏ်ယူပါတယ်! Level ပြီးမြောက်ပါပြီ!' : 'Level Complete! Awesome work!'}
                </div>
                {currentLevelId < 15 && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = MAZE_LEVELS.find(l => l.id === currentLevelId + 1);
                      if (next) { setActiveTier(next.tier as AgeTier); loadLevel(next.id); }
                    }}
                    style={{
                      marginTop: '12px',
                      padding: '10px 24px',
                      borderRadius: '12px',
                      border: 'none',
                      background: 'linear-gradient(135deg,#10b981,#059669)',
                      color: '#fff',
                      fontWeight: 900,
                      fontSize: '14px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px #10b98144',
                    }}
                  >
                    {lang === 'my' ? 'ရှေ့ဆက် →' : 'Next Level →'}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ── Right: Programming Workspace ── */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            border: `2px solid ${tierCfg.borderColor}`,
            padding: '20px',
            boxShadow: `0 4px 24px ${tierCfg.accentColor}18`,
          }}>

            {/* Tab switcher */}
            <div style={{
              display: 'flex',
              background: '#f1f5f9',
              borderRadius: '14px',
              padding: '4px',
              marginBottom: '18px',
              gap: '4px',
            }}>
              {([
                { key: 'code', icon: '🧩', en: 'Code Workspace', my: 'Code ရေးသားပါ' },
                { key: 'arcade', icon: '🕹️', en: 'Arcade D-Pad', my: 'D-Pad ထိန်းချုပ်' },
              ] as const).map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setControlTab(tab.key)}
                  style={{
                    flex: 1,
                    padding: '9px 8px',
                    borderRadius: '10px',
                    border: 'none',
                    background: controlTab === tab.key ? '#fff' : 'transparent',
                    color: controlTab === tab.key ? tierCfg.accentColor : '#64748b',
                    fontWeight: 800,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: controlTab === tab.key ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab.icon} {lang === 'my' ? tab.my : tab.en}
                </button>
              ))}
            </div>

            {controlTab === 'code' ? (
              <div>
                {/* Command Palette Label */}
                <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {lang === 'my' ? '🧱 အမိန့်ခလုတ်များ:' : '🧱 Command Blocks:'}
                </p>

                {/* Command Blocks - big kid-friendly buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                  {[
                    { type: 'forward' as const, icon: '⬆️', en: 'Move Forward', my: 'ရှေ့တက်' },
                    { type: 'turn_left' as const, icon: '↩️', en: 'Turn Left', my: 'ဘယ်ကွေ့' },
                    { type: 'turn_right' as const, icon: '↪️', en: 'Turn Right', my: 'ညာကွေ့' },
                    { type: 'if_clear' as const, icon: '🛡️', en: 'If Clear → Go', my: 'လမ်းပွင့်ရင် → သွား' },
                  ].map(cmd => (
                    <button
                      key={cmd.type}
                      type="button"
                      disabled={isExecuting}
                      onClick={() => addCommand(cmd.type)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '14px',
                        border: `2px solid ${tierCfg.borderColor}`,
                        background: '#f8fafc',
                        color: '#334155',
                        fontWeight: 800,
                        fontSize: '13px',
                        cursor: isExecuting ? 'not-allowed' : 'pointer',
                        opacity: isExecuting ? 0.5 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>{cmd.icon}</span>
                      <span>{lang === 'my' ? cmd.my : cmd.en}</span>
                    </button>
                  ))}
                </div>

                {/* Loop block */}
                <div style={{
                  background: '#f5f3ff',
                  borderRadius: '14px',
                  padding: '10px 14px',
                  marginBottom: '14px',
                  border: '2px dashed #c4b5fd',
                }}>
                  <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 800, color: '#7c3aed' }}>
                    🔁 {lang === 'my' ? 'Loop (ထပ်ခါထပ်ခါ):' : 'Repeat Loop:'}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 700 }}>
                      {lang === 'my' ? 'အကြိမ်:' : 'Times:'}
                    </span>
                    {[2, 3, 4, 5].map(n => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRepeatCountInput(n)}
                        style={{
                          width: '32px', height: '32px',
                          borderRadius: '8px',
                          border: `2px solid ${repeatCountInput === n ? '#7c3aed' : '#e2e8f0'}`,
                          background: repeatCountInput === n ? '#7c3aed' : '#fff',
                          color: repeatCountInput === n ? '#fff' : '#334155',
                          fontWeight: 900,
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {n}
                      </button>
                    ))}
                    <button
                      type="button"
                      disabled={isExecuting}
                      onClick={() => addCommand('repeat', repeatCountInput)}
                      style={{
                        marginLeft: 'auto',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        border: 'none',
                        background: '#7c3aed',
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      + {lang === 'my' ? 'ထည့် Loop' : 'Add Loop'}
                    </button>
                  </div>
                </div>

                {/* Program Queue */}
                <div style={{
                  border: '2px solid #e2e8f0',
                  borderRadius: '14px',
                  minHeight: '100px',
                  maxHeight: '180px',
                  overflowY: 'auto',
                  padding: '10px',
                  marginBottom: '14px',
                  background: '#fafafa',
                }}>
                  {program.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#cbd5e1', padding: '24px 0', fontSize: '13px', fontWeight: 700 }}>
                      <div style={{ fontSize: '28px', marginBottom: '6px' }}>🧩</div>
                      {lang === 'my' ? 'ခလုတ်နှိပ်၍ code ထည့်ပါ!' : 'Tap blocks above to build your code!'}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      {program.map((cmd, idx) => {
                        const isActive = activeStepIndex === idx;
                        const labels: Record<string, string> = {
                          forward: '⬆️ Move Forward',
                          turn_left: '↩️ Turn Left',
                          turn_right: '↪️ Turn Right',
                          if_clear: '🛡️ If Clear → Go',
                          if_wall: '🧱 If Wall → Turn',
                          repeat: `🔁 Repeat ×${cmd.repeatCount || 2}`,
                        };
                        return (
                          <div
                            key={cmd.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              background: isActive ? '#fef9c3' : '#fff',
                              border: `1.5px solid ${isActive ? '#eab308' : '#e2e8f0'}`,
                              padding: '7px 10px',
                              borderRadius: '10px',
                              fontSize: '13px',
                              fontWeight: 700,
                              transition: 'background 0.15s',
                            }}
                          >
                            <span style={{ color: tierCfg.accentColor, minWidth: '20px', fontWeight: 900 }}>{idx + 1}.</span>
                            <span style={{ flex: 1 }}>{labels[cmd.type] || cmd.type}</span>
                            <button
                              type="button"
                              onClick={() => removeCommand(idx)}
                              disabled={isExecuting}
                              style={{ color: '#ef4444', fontWeight: 900, background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}
                            >
                              ×
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Run Controls */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px', alignItems: 'center' }}>
                  <button
                    type="button"
                    disabled={isExecuting || program.length === 0 || isWon}
                    onClick={runProgram}
                    style={{
                      padding: '11px 22px',
                      borderRadius: '12px',
                      border: 'none',
                      background: isExecuting || program.length === 0 || isWon
                        ? '#e2e8f0'
                        : tierCfg.gradient,
                      color: isExecuting || program.length === 0 || isWon ? '#94a3b8' : '#fff',
                      fontWeight: 900,
                      fontSize: '14px',
                      cursor: isExecuting || program.length === 0 || isWon ? 'not-allowed' : 'pointer',
                      boxShadow: isExecuting || program.length === 0 || isWon ? 'none' : `0 4px 14px ${tierCfg.accentColor}44`,
                    }}
                  >
                    ▶ {lang === 'my' ? 'Run Program' : 'Run Program'}
                  </button>
                  <button
                    type="button"
                    disabled={isExecuting || program.length === 0 || isWon}
                    onClick={stepDebugger}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: `2px solid ${tierCfg.borderColor}`,
                      background: '#fff',
                      color: tierCfg.accentColor,
                      fontWeight: 800,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    ⏭ {lang === 'my' ? 'Step' : 'Step'}
                  </button>
                  <button
                    type="button"
                    disabled={isExecuting || program.length === 0}
                    onClick={clearProgram}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '2px solid #fee2e2',
                      background: '#fff',
                      color: '#ef4444',
                      fontWeight: 800,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    🗑️
                  </button>
                  <button
                    type="button"
                    onClick={() => setExecSpeed(s => s === 'normal' ? 'fast' : 'normal')}
                    style={{
                      marginLeft: 'auto',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      border: '2px solid #e2e8f0',
                      background: '#fff',
                      color: '#64748b',
                      fontWeight: 800,
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    {execSpeed === 'fast' ? '🐇 Fast' : '🐢 Normal'}
                  </button>
                </div>

                {/* Code Preview (Senior tier or on demand) */}
                {(activeTier === 'senior' || activeTier === 'intermediate') && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {(['python', 'javascript'] as CodeLanguage[]).map(c => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCodeLang(c)}
                            style={{
                              padding: '4px 12px',
                              borderRadius: '8px',
                              border: `2px solid ${codeLang === c ? tierCfg.accentColor : '#e2e8f0'}`,
                              background: codeLang === c ? tierCfg.badgeBg : '#fff',
                              color: codeLang === c ? tierCfg.badgeColor : '#64748b',
                              fontWeight: 800,
                              fontSize: '11px',
                              cursor: 'pointer',
                            }}
                          >
                            {c === 'python' ? '🐍 Python' : '⚡ JS'}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => navigator.clipboard.writeText(generateCodePreview(program, codeLang))}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          background: '#fff',
                          color: '#64748b',
                          fontSize: '11px',
                          cursor: 'pointer',
                          fontWeight: 700,
                        }}
                      >
                        📋 {lang === 'my' ? 'ကူးယူ' : 'Copy'}
                      </button>
                    </div>
                    <pre style={{
                      background: '#0f172a',
                      color: '#38bdf8',
                      padding: '12px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      lineHeight: 1.6,
                      overflowX: 'auto',
                      margin: 0,
                      fontFamily: '"Fira Code", "Cascadia Code", monospace',
                    }}>
                      {program.length > 0 ? generateCodePreview(program, codeLang) : (
                        codeLang === 'python'
                          ? '# Add command blocks above\n# to see Python code here!'
                          : '// Add command blocks above\n// to see JavaScript code here!'
                      )}
                    </pre>
                  </div>
                )}

                {/* Friendly tip for juniors */}
                {activeTier === 'junior' && (
                  <div style={{
                    background: '#f0fdf4',
                    border: '1.5px solid #bbf7d0',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    fontSize: '13px',
                    color: '#166534',
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}>
                    🌟 {lang === 'my'
                      ? 'Tip: ⬆️ ရှေ့တက် ↩️ ဘယ်ကွေ့ ↪️ ညာကွေ့ — ဒါတွေကို လိုသလို ပေါင်းစပ်ပြီး Robot ကို ⭐ ဆီ ပို့ပေးပါ!'
                      : 'Tip: Use ⬆️ Forward, ↩️ Turn Left, ↪️ Turn Right to build a sequence that guides your robot to the ⭐ star!'}
                  </div>
                )}
              </div>
            ) : (
              /* ── Arcade D-Pad ── */
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: '0 0 20px', fontWeight: 700, color: '#64748b', fontSize: '14px' }}>
                  {lang === 'my'
                    ? '🕹️ ခလုတ်များ (သို့မဟုတ်) Keyboard Arrow Keys / WASD သုံးနိုင်ပါသည်'
                    : '🕹️ Tap buttons or use Arrow Keys / WASD on your keyboard'}
                </p>

                {/* D-Pad */}
                <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(3, 64px)', gridTemplateRows: 'repeat(3, 64px)', gap: '8px' }}>
                  <div />
                  <button
                    type="button"
                    onClick={() => moveDirect('up')}
                    style={dpadBtnStyle(tierCfg.gradient, tierCfg.accentColor)}
                  >⬆️</button>
                  <div />
                  <button
                    type="button"
                    onClick={() => moveDirect('left')}
                    style={dpadBtnStyle(tierCfg.gradient, tierCfg.accentColor)}
                  >⬅️</button>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#f1f5f9', borderRadius: '16px', fontSize: '24px',
                  }}>🤖</div>
                  <button
                    type="button"
                    onClick={() => moveDirect('right')}
                    style={dpadBtnStyle(tierCfg.gradient, tierCfg.accentColor)}
                  >➡️</button>
                  <div />
                  <button
                    type="button"
                    onClick={() => moveDirect('down')}
                    style={dpadBtnStyle(tierCfg.gradient, tierCfg.accentColor)}
                  >⬇️</button>
                  <div />
                </div>

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={handleTurnLeft}
                    style={{
                      padding: '10px 20px', borderRadius: '12px',
                      border: `2px solid ${tierCfg.borderColor}`,
                      background: '#fff', color: tierCfg.accentColor,
                      fontWeight: 800, fontSize: '13px', cursor: 'pointer',
                    }}
                  >↩️ {lang === 'my' ? 'ဘယ်ကွေ့' : 'Turn Left'}</button>
                  <button
                    type="button"
                    onClick={handleTurnRight}
                    style={{
                      padding: '10px 20px', borderRadius: '12px',
                      border: `2px solid ${tierCfg.borderColor}`,
                      background: '#fff', color: tierCfg.accentColor,
                      fontWeight: 800, fontSize: '13px', cursor: 'pointer',
                    }}
                  >↪️ {lang === 'my' ? 'ညာကွေ့' : 'Turn Right'}</button>
                </div>

                <p style={{ marginTop: '20px', fontSize: '12px', color: '#94a3b8', fontWeight: 700 }}>
                  {lang === 'my'
                    ? 'D-Pad သည် Arcade Mode ဖြစ်ပြီး ခြေလှမ်းချင်း ထိန်းချုပ်နိုင်ပါသည်'
                    : 'Arcade mode: move step-by-step with direct control — no programming needed!'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ══════════════ HOW IT WORKS — Education Cards ══════════════ */}
        <div style={{ marginTop: '36px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '18px', fontWeight: 900, color: '#1e293b', marginBottom: '16px' }}>
            {lang === 'my' ? '📖 ဘာကိုသင်ယူမလဲ?' : '📖 What You\'ll Learn'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { tier: 'junior' as AgeTier, icon: '📋', en: 'Sequencing', my: 'Sequence ဆွဲခြင်း', desc: { en: 'Plan step-by-step instructions for your robot', my: 'Robot အတွက် အဆင့်ဆင့် ညွှန်ကြားချက်ရေးသားပါ' } },
              { tier: 'junior' as AgeTier, icon: '🔄', en: 'Turning', my: 'ကွေ့ပတ်ခြင်း', desc: { en: 'Use Left and Right turns to navigate mazes', my: 'Maze ကိုဖြတ်ရန် ဘယ်/ညာ ကွေ့ပတ်ပါ' } },
              { tier: 'intermediate' as AgeTier, icon: '🔁', en: 'Loops', my: 'Loop (ထပ်ခါ)', desc: { en: 'Repeat actions without rewriting code', my: 'Code ထပ်ဆင့်ရေးမနေဘဲ Loop သုံးပါ' } },
              { tier: 'intermediate' as AgeTier, icon: '🌿', en: 'Conditionals', my: 'If/Else', desc: { en: 'Make your robot smart with If/Else decisions', my: 'If/Else ဖြင့် Robot ကို ဉာဏ်ရှိစေပါ' } },
              { tier: 'senior' as AgeTier, icon: '🗺️', en: 'Pathfinding (BFS)', my: 'BFS လမ်းရှာဆန်းစစ်', desc: { en: 'Understand BFS algorithm for shortest path', my: 'အတိုဆုံးလမ်းကြောင်းသိရန် BFS algorithm နားလည်ပါ' } },
              { tier: 'senior' as AgeTier, icon: '💻', en: 'Real Code', my: 'တကယ့် Code', desc: { en: 'See your commands translated to Python & JS', my: 'သင့် command ကို Python/JS code အဖြစ် မြင်ပါ' } },
            ].map((card, i) => {
              const cfg = TIER_CONFIG[card.tier];
              return (
                <div
                  key={i}
                  style={{
                    background: '#fff',
                    border: `2px solid ${cfg.borderColor}`,
                    borderRadius: '18px',
                    padding: '16px',
                    boxShadow: `0 2px 12px ${cfg.accentColor}12`,
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{card.icon}</div>
                  <div style={{ fontWeight: 900, fontSize: '14px', color: '#1e293b', marginBottom: '4px' }}>
                    {lang === 'my' ? card.my : card.en}
                  </div>
                  <span style={{
                    background: cfg.badgeBg, color: cfg.badgeColor,
                    padding: '2px 8px', borderRadius: '99px', fontSize: '10px', fontWeight: 800,
                  }}>
                    {lang === 'my' ? cfg.ages.my : cfg.ages.en}
                  </span>
                  <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '12px', lineHeight: 1.5 }}>
                    {lang === 'my' ? card.desc.my : card.desc.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

// ── Helper: D-Pad button style ────────────────────────────────────────────────
function dpadBtnStyle(gradient: string, accent: string): React.CSSProperties {
  return {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    border: 'none',
    background: gradient,
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: `0 4px 14px ${accent}44`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.1s ease',
  };
}
