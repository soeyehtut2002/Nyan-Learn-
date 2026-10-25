import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MAZE_LEVELS, MAZE_GRID_SIZE } from '../data/mazeLevels';
import {
  calculateNextMazePosition,
  findOptimalMazePath,
  turnLeft,
  turnRight,
  headingToDirection,
  headingToAngle,
  isPathClearAhead,
  generateCodePreview
} from '../logic/mazeLogic';
import { Direction, Heading, MazeLevel, AgeTier, RobotCommand, CodeLanguage } from '../../../types/maze.types';
import { useProgress } from '../../../context/ProgressContext';
import { useTranslation } from '../../../i18n/LanguageContext';
import { AudioService } from '../../../services/audio/AudioService';
import { PhaserMazeGame } from './PhaserMazeGame';
import { MazeScene } from '../game/MazeScene';

export const MazeView: React.FC = () => {
  const { lang } = useTranslation();
  const { progress, completeMazeLevel } = useProgress();

  const [currentLevelId, setCurrentLevelId] = useState(1);
  const currentLevel: MazeLevel = MAZE_LEVELS.find(l => l.id === currentLevelId) || MAZE_LEVELS[0];

  // Selected age tier filter
  const [selectedTier, setSelectedTier] = useState<AgeTier | 'all'>('all');

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
  const [viewMode, setViewMode] = useState<'dom' | 'phaser'>('dom');

  // Programming workspace
  const [controlTab, setControlTab] = useState<'code' | 'arcade'>('code');
  const [codeLang, setCodeLang] = useState<CodeLanguage>('python');
  const [program, setProgram] = useState<RobotCommand[]>([]);
  const [repeatCountInput, setRepeatCountInput] = useState<number>(3);
  const [execSpeed, setExecSpeed] = useState<'normal' | 'fast'>('normal');

  const phaserSceneRef = useRef<MazeScene | null>(null);

  // Initialize or change level
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

    const welcomeMsg = lang === 'my'
      ? `${targetLvl.name.my}: Robot ကို လမ်းညွှန်ပါ။ (အဆင့်: ${targetLvl.ageBracket} နှစ်၊ အများဆုံး: ${targetLvl.moveLimit} ကြိမ်)`
      : `${targetLvl.name.en}: Guide the robot! (Ages ${targetLvl.ageBracket}, Move Limit: ${targetLvl.moveLimit} steps)`;
    setStatusMessage(welcomeMsg);

    if (phaserSceneRef.current) {
      phaserSceneRef.current.resetPosition(targetLvl.start, initialH);
    }
  }, [lang]);

  useEffect(() => {
    loadLevel(currentLevelId);
  }, [currentLevelId, loadLevel]);

  // Execute single movement forward
  const stepForward = useCallback((overrideHeading?: Heading): boolean => {
    const heading = overrideHeading || robotHeading;
    const dir = headingToDirection(heading);
    const check = calculateNextMazePosition(robotPos, dir, currentLevel.walls, MAZE_GRID_SIZE);

    if (!check.valid) {
      AudioService.play('blocked');
      if (phaserSceneRef.current) phaserSceneRef.current.shakeRobot();
      setStatusMessage(lang === 'my'
        ? (check.reason === 'wall' ? '❌ အတားအဆီး ကျောက်တံတိုင်း ရှိတယ်!' : 'နံရံအစွန်းဖြစ်နေပါတယ်!')
        : (check.reason === 'wall' ? '❌ Blocked by stone wall!' : 'Edge of the grid!'));
      return false;
    }

    const nextPos = check.nextPos;
    const newCount = movesCount + 1;
    setRobotPos(nextPos);
    setMovesCount(newCount);
    AudioService.play('step');

    if (phaserSceneRef.current) {
      phaserSceneRef.current.animateMove(nextPos);
    }

    if (nextPos === currentLevel.goal) {
      setIsWon(true);
      AudioService.play('star');
      if (phaserSceneRef.current) phaserSceneRef.current.celebrateGoal();
      const { isFirstTime } = completeMazeLevel(currentLevel.id, currentLevel.xpReward);
      setStatusMessage(isFirstTime
        ? (lang === 'my'
            ? `🎉 ဂုဏ်ယူပါတယ်! Level ${currentLevel.id} အောင်မြင်ပြီ! +${currentLevel.xpReward} XP ရရှိပါပြီ။`
            : `🎉 Congratulations! Level ${currentLevel.id} Solved! +${currentLevel.xpReward} XP earned!`)
        : (lang === 'my'
            ? `🎉 အောင်မြင်ပါသည်! (ပြီးမြောက်ပြီးဖြစ်ပါသည်)`
            : `🎉 Solved! (Already mastered - great practice!)`));
    }

    return true;
  }, [robotHeading, robotPos, currentLevel, movesCount, lang, completeMazeLevel]);

  // Turn robot left
  const handleTurnLeft = useCallback(() => {
    const nextH = turnLeft(robotHeading);
    setRobotHeading(nextH);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.setHeading(nextH);
  }, [robotHeading]);

  // Turn robot right
  const handleTurnRight = useCallback(() => {
    const nextH = turnRight(robotHeading);
    setRobotHeading(nextH);
    AudioService.play('step');
    if (phaserSceneRef.current) phaserSceneRef.current.setHeading(nextH);
  }, [robotHeading]);

  // Direct move (for arcade mode)
  const moveDirect = useCallback((dir: Direction) => {
    if (isWon || isExecuting) return;

    // Check heading align
    let newH: Heading = 'north';
    if (dir === 'up') newH = 'north';
    else if (dir === 'down') newH = 'south';
    else if (dir === 'left') newH = 'west';
    else if (dir === 'right') newH = 'east';

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

  // Reset Level
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

    if (phaserSceneRef.current) {
      phaserSceneRef.current.resetPosition(currentLevel.start, initialH);
    }
  };

  // Add command to program
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
    AudioService.play('step');
  };

  const clearProgram = () => {
    if (isExecuting) return;
    setProgram([]);
    AudioService.play('step');
  };

  // Run Program sequentially
  const runProgram = async () => {
    if (isExecuting || program.length === 0) return;
    resetLevel();
    setIsExecuting(true);
    const delay = execSpeed === 'fast' ? 140 : 280;

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
          setStatusMessage(lang === 'my' ? `⚠️ အဆင့် ${i + 1} တွင် တိုက်မိပါသည်!` : `⚠️ Blocked at Step ${i + 1}!`);
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
          } else {
            AudioService.play('blocked');
            break;
          }
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

  // Step-by-Step Debugger (Executes 1 command at a time)
  const stepDebugger = () => {
    if (isExecuting || program.length === 0 || isWon) return;
    const nextIdx = activeStepIndex === null ? 0 : (activeStepIndex + 1) % program.length;
    setActiveStepIndex(nextIdx);
    const cmd = program[nextIdx];

    if (cmd.type === 'forward') {
      stepForward();
    } else if (cmd.type === 'turn_left') {
      handleTurnLeft();
    } else if (cmd.type === 'turn_right') {
      handleTurnRight();
    } else if (cmd.type === 'repeat') {
      stepForward();
    }
  };

  // Hint
  const toggleHint = () => {
    setShowHint(prev => !prev);
    const path = findOptimalMazePath(robotPos, currentLevel.goal, currentLevel.walls, MAZE_GRID_SIZE);
    if (path && path.length > 1) {
      setHighlightTiles(path.slice(1, 4));
      setTimeout(() => setHighlightTiles([]), 3000);
    }
    AudioService.play('step');
  };

  // Keyboard navigation for Arcade Mode
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

  // Filter levels by tier
  const filteredLevels = selectedTier === 'all'
    ? MAZE_LEVELS
    : MAZE_LEVELS.filter(lvl => lvl.tier === selectedTier);

  const headingSymbols: Record<Heading, string> = {
    north: '⬆️ North',
    east: '➡️ East',
    south: '⬇️ South',
    west: '⬅️ West'
  };

  return (
    <div className="section-container">
      <div className="card">
        {/* Header with Title and Age Tier Switcher */}
        <div className="card-header" style={{ flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="card-icon">🤖</span>
            <div>
              <h2 style={{ margin: 0 }}>
                {lang === 'my' ? 'Robot Maze — ပရိုဂရမ်မင်း အခြေခံ စွန့်စားခန်း' : 'Robot Maze — Programming Basics Adventure'}
              </h2>
              <p className="card-subtitle" style={{ margin: '4px 0 0' }}>
                {lang === 'my'
                  ? 'အသက် ၇ နှစ်မှ ၁၈ နှစ်အထိ Sequence၊ Loop နှင့် Logic အခြေခံများကို လက်တွေ့ကစားရင်း သင်ယူပါ'
                  : 'Designed for ages 7 to 18: Learn Sequencing, Loops, Sensors & Real Code (Python/JS)'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={`btn btn-sm ${selectedTier === 'all' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedTier('all')}
            >
              🌐 All Levels (1–15)
            </button>
            <button
              type="button"
              className={`btn btn-sm ${selectedTier === 'junior' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedTier('junior')}
            >
              🐣 Junior (Ages 7–10)
            </button>
            <button
              type="button"
              className={`btn btn-sm ${selectedTier === 'intermediate' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedTier('intermediate')}
            >
              🚀 Intermediate (Ages 11–14)
            </button>
            <button
              type="button"
              className={`btn btn-sm ${selectedTier === 'senior' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedTier('senior')}
            >
              ⚡ Senior (Ages 15–18)
            </button>
          </div>
        </div>

        {/* Level Info Banner */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          background: '#f8fafc',
          padding: '12px 18px',
          borderRadius: '16px',
          margin: '16px 0',
          border: '1px solid #e2e8f0'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <strong style={{ fontSize: '18px' }}>
                {lang === 'my' ? currentLevel.name.my : currentLevel.name.en}
              </strong>
              <span style={{
                background: currentLevel.tier === 'junior' ? '#dcfce7' : currentLevel.tier === 'intermediate' ? '#e0e7ff' : '#fee2e2',
                color: currentLevel.tier === 'junior' ? '#15803d' : currentLevel.tier === 'intermediate' ? '#4338ca' : '#b91c1c',
                padding: '2px 8px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 800
              }}>
                Ages {currentLevel.ageBracket}
              </span>
              <span style={{ background: '#ede9fe', color: '#7c3aed', padding: '2px 8px', borderRadius: '999px', fontSize: '12px', fontWeight: 800 }}>
                {lang === 'my' ? currentLevel.concept.my : currentLevel.concept.en}
              </span>
            </div>
            <p style={{ margin: 0, color: 'var(--text-sub)', fontSize: '13px' }}>
              {lang === 'my' ? currentLevel.subtitle.my : currentLevel.subtitle.en}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-sub)' }}>
              Heading: <strong>{headingSymbols[robotHeading]}</strong>
            </span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple-main)' }}>
              Steps: <strong>{movesCount}</strong> / {currentLevel.moveLimit}
            </span>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => setViewMode(prev => prev === 'dom' ? 'phaser' : 'dom')}
            >
              🎮 {viewMode === 'phaser' ? 'Phaser 2D' : 'DOM Grid'}
            </button>
          </div>
        </div>

        {/* Level Selector Grid (1 to 15) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {filteredLevels.map(lvl => {
            const isUnlocked = progress.unlockedMazeLevels.includes(lvl.id);
            const isCompleted = progress.completedMazeLevels.includes(lvl.id);
            const isActive = lvl.id === currentLevelId;

            return (
              <button
                key={lvl.id}
                type="button"
                className={`btn btn-sm ${isActive ? 'btn-primary' : isCompleted ? 'btn-secondary' : 'btn-outline'}`}
                style={{
                  minWidth: '42px',
                  fontWeight: 800,
                  opacity: isUnlocked ? 1 : 0.45,
                  cursor: isUnlocked ? 'pointer' : 'not-allowed'
                }}
                disabled={!isUnlocked}
                onClick={() => loadLevel(lvl.id)}
              >
                {lvl.id} {isCompleted ? '✓' : !isUnlocked ? '🔒' : ''}
              </button>
            );
          })}
        </div>

        {/* Status Message */}
        <div style={{
          background: isWon ? '#ecfdf5' : '#f1f5f9',
          color: isWon ? '#065f46' : 'var(--ink)',
          padding: '10px 16px',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '14px',
          marginBottom: '12px',
          borderLeft: `4px solid ${isWon ? '#10b981' : 'var(--purple-main)'}`
        }}>
          {statusMessage}
        </div>

        {/* Algorithm Hint Banner */}
        {showHint && (
          <div style={{
            background: '#fefce8',
            color: '#854d0e',
            padding: '10px 16px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '16px',
            border: '1px solid #fef08a'
          }}>
            💡 <strong>{lang === 'my' ? 'အကြံပြုချက် (Hint):' : 'Algorithm Hint:'}</strong>{' '}
            {lang === 'my' ? currentLevel.hint.my : currentLevel.hint.en}
          </div>
        )}

        {/* Main Split: Left Grid, Right Programming Workspace */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
          {/* Maze Grid View */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {viewMode === 'phaser' ? (
              <PhaserMazeGame
                level={currentLevel}
                robotPos={robotPos}
                highlightIndices={highlightTiles}
                heading={robotHeading}
                onSceneReady={(scene) => { phaserSceneRef.current = scene; }}
              />
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 64px)',
                  gridTemplateRows: 'repeat(5, 64px)',
                  gap: '6px',
                  padding: '12px',
                  background: '#e2e8f0',
                  borderRadius: '16px',
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06)'
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

                  return (
                    <div
                      key={i}
                      style={{
                        background: bg,
                        border,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: isRobot ? '32px' : isGoal ? '28px' : '24px',
                        transition: 'all 0.18s ease',
                        position: 'relative'
                      }}
                    >
                      {isRobot && (
                        <div
                          style={{
                            transform: `rotate(${headingToAngle(robotHeading)}deg)`,
                            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                        >
                          🤖
                        </div>
                      )}
                      {!isRobot && isGoal && <span>⭐</span>}
                      {!isRobot && isWall && <span>🪨</span>}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Quick Actions Bar */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button type="button" className="btn btn-outline btn-sm" onClick={resetLevel} disabled={isExecuting}>
                ↻ {lang === 'my' ? 'ပြန်စမယ်' : 'Reset'}
              </button>
              <button type="button" className="btn btn-outline btn-sm" onClick={toggleHint}>
                💡 {lang === 'my' ? 'လမ်းပြ Hint' : 'Hint (BFS)'}
              </button>
            </div>
          </div>

          {/* Programming Workspace & Code Preview */}
          <div className="card" style={{ background: '#f8fafc', padding: '16px', border: '2px solid #e2e8f0' }}>
            {/* Control Tabs: Visual Code Builder vs Arcade Manual */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  className={`btn btn-sm ${controlTab === 'code' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setControlTab('code')}
                >
                  🧩 {lang === 'my' ? 'Code ရေးသားမှု (Programming)' : 'Code Workspace'}
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${controlTab === 'arcade' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setControlTab('arcade')}
                >
                  🎮 {lang === 'my' ? 'လက်တန်းထိန်းချုပ် (Arcade)' : 'Arcade D-Pad'}
                </button>
              </div>

              {controlTab === 'code' && (
                <div style={{ display: 'flex', gap: '4px' }}>
                  {(['python', 'javascript'] as CodeLanguage[]).map(c => (
                    <button
                      key={c}
                      type="button"
                      className={`btn btn-sm ${codeLang === c ? 'btn-primary' : 'btn-outline'}`}
                      style={{ fontSize: '11px', padding: '3px 8px' }}
                      onClick={() => setCodeLang(c)}
                    >
                      {c === 'python' ? '🐍 Python' : '⚡ JS'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {controlTab === 'code' ? (
              <div>
                {/* Command Action Palette */}
                <div style={{ marginBottom: '12px' }}>
                  <p style={{ margin: '0 0 6px', fontSize: '12px', fontWeight: 800, color: 'var(--text-sub)' }}>
                    {lang === 'my' ? 'အမိန့်များ ရွေးချယ်ထည့်သွင်းပါ:' : 'Action Command Palette:'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => addCommand('forward')}
                      disabled={isExecuting}
                    >
                      ⬆️ {lang === 'my' ? 'ရှေ့တက် (Forward)' : 'Step Forward'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => addCommand('turn_left')}
                      disabled={isExecuting}
                    >
                      ↩️ {lang === 'my' ? 'ဘယ်ကွေ့ (Turn Left)' : 'Turn Left'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => addCommand('turn_right')}
                      disabled={isExecuting}
                    >
                      ↪️ {lang === 'my' ? 'ညာကွေ့ (Turn Right)' : 'Turn Right'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => addCommand('repeat', repeatCountInput)}
                      disabled={isExecuting}
                    >
                      🔁 {lang === 'my' ? `Repeat ×${repeatCountInput}` : `Repeat ×${repeatCountInput}`}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => addCommand('if_clear')}
                      disabled={isExecuting}
                    >
                      🛡️ {lang === 'my' ? 'If Path Clear' : 'If Path Clear'}
                    </button>
                  </div>
                </div>

                {/* Repeat count slider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '12px' }}>
                  <span style={{ fontWeight: 700 }}>Loop Repeat Count:</span>
                  {[2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      type="button"
                      className={`btn btn-sm ${repeatCountInput === n ? 'btn-primary' : 'btn-outline'}`}
                      style={{ padding: '2px 8px', fontSize: '11px' }}
                      onClick={() => setRepeatCountInput(n)}
                    >
                      {n}×
                    </button>
                  ))}
                </div>

                {/* Program Queue Box */}
                <div style={{
                  background: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '10px',
                  minHeight: '120px',
                  maxHeight: '180px',
                  overflowY: 'auto',
                  marginBottom: '12px'
                }}>
                  {program.length === 0 ? (
                    <div style={{ color: '#94a3b8', textAlign: 'center', padding: '30px 0', fontSize: '13px' }}>
                      {lang === 'my'
                        ? 'Program အမိန့်များ ထည့်သွင်းထားခြင်း မရှိသေးပါ။ အပေါ်ရှိ ခလုတ်များကို နှိပ်၍ အစီအစဉ်ဆွဲပါ။'
                        : 'No commands in program. Tap buttons above to assemble code!'}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {program.map((cmd, idx) => {
                        const isActive = activeStepIndex === idx;
                        let label = '⬆️ Step Forward';
                        if (cmd.type === 'turn_left') label = '↩️ Turn Left';
                        if (cmd.type === 'turn_right') label = '↪️ Turn Right';
                        if (cmd.type === 'repeat') label = `🔁 Loop (${cmd.repeatCount || 2}× Forward)`;
                        if (cmd.type === 'if_clear') label = '🛡️ If Path Clear ➔ Forward';

                        return (
                          <div
                            key={cmd.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: isActive ? '#fef08a' : '#f8fafc',
                              border: `1px solid ${isActive ? '#eab308' : '#e2e8f0'}`,
                              padding: '6px 10px',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 700,
                              transition: 'background 0.15s ease'
                            }}
                          >
                            <span>
                              <span style={{ color: 'var(--purple-main)', marginRight: '6px' }}>{idx + 1}.</span>
                              {label}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeCommand(idx)}
                              disabled={isExecuting}
                              style={{ color: '#ef4444', fontWeight: 900, padding: '0 4px', cursor: 'pointer' }}
                            >
                              ×
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Execution Controls: Run, Step Debugger, Clear */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={isExecuting || program.length === 0 || isWon}
                    onClick={runProgram}
                  >
                    ▶ {lang === 'my' ? 'Run Program' : 'Run Program'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    disabled={isExecuting || program.length === 0 || isWon}
                    onClick={stepDebugger}
                  >
                    ⏭ {lang === 'my' ? 'အဆင့်လိုက် Debug' : 'Step Debugger'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    disabled={isExecuting || program.length === 0}
                    onClick={clearProgram}
                  >
                    🗑️ {lang === 'my' ? 'ဖျက်မယ်' : 'Clear'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setExecSpeed(s => s === 'normal' ? 'fast' : 'normal')}
                    style={{ marginLeft: 'auto' }}
                  >
                    {execSpeed === 'fast' ? '🐇 Fast' : '🐢 Normal'}
                  </button>
                </div>

                {/* Live Code Preview (Python / JavaScript) for Ages 13–18 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-sub)' }}>
                      {codeLang === 'python' ? '🐍 Python 3 Code Preview:' : '⚡ JavaScript Code Preview:'}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      style={{ fontSize: '10px', padding: '2px 6px' }}
                      onClick={() => {
                        navigator.clipboard.writeText(generateCodePreview(program, codeLang));
                      }}
                    >
                      📋 Copy Code
                    </button>
                  </div>
                  <pre style={{
                    background: '#1e293b',
                    color: '#38bdf8',
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    lineHeight: 1.5,
                    overflowX: 'auto',
                    margin: 0,
                    fontFamily: 'monospace'
                  }}>
                    {generateCodePreview(program, codeLang)}
                  </pre>
                </div>
              </div>
            ) : (
              /* Arcade D-Pad Controller */
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <p style={{ margin: '0 0 16px', fontWeight: 700, color: 'var(--text-sub)', fontSize: '14px' }}>
                  {lang === 'my' ? 'ခလုတ်များ သို့မဟုတ် Keyboard Arrow / WASD သုံးနိုင်ပါသည်:' : 'Direct Arcade Mode: Use D-Pad or Arrow Keys:'}
                </p>
                <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(3, 54px)', gap: '8px' }}>
                  <div />
                  <button type="button" className="btn btn-primary" onClick={() => moveDirect('up')}>⬆️</button>
                  <div />
                  <button type="button" className="btn btn-primary" onClick={() => moveDirect('left')}>⬅️</button>
                  <button type="button" className="btn btn-primary" onClick={() => moveDirect('down')}>⬇️</button>
                  <button type="button" className="btn btn-primary" onClick={() => moveDirect('right')}>➡️</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
