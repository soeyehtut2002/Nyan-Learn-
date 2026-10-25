import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MAZE_LEVELS, MAZE_GRID_SIZE } from '../data/mazeLevels';
import { calculateNextMazePosition, findOptimalMazePath } from '../logic/mazeLogic';
import { Direction, MazeLevel } from '../../../types/maze.types';
import { useProgress } from '../../../context/ProgressContext';
import { useTranslation } from '../../../i18n/LanguageContext';
import { AudioService } from '../../../services/audio/AudioService';
import { PhaserMazeGame } from './PhaserMazeGame';
import { MazeScene } from '../game/MazeScene';

export const MazeView: React.FC = () => {
  const { lang, t } = useTranslation();
  const { progress, completeMazeLevel } = useProgress();

  const [currentLevelId, setCurrentLevelId] = useState(1);
  const currentLevel: MazeLevel = MAZE_LEVELS.find(l => l.id === currentLevelId) || MAZE_LEVELS[0];

  const [robotPos, setRobotPos] = useState(currentLevel.start);
  const [movesCount, setMovesCount] = useState(0);
  const [plannedMoves, setPlannedMoves] = useState<Direction[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [isAutoRunning, setIsAutoRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [highlightTiles, setHighlightTiles] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'phaser' | 'dom'>('dom');

  const phaserSceneRef = useRef<MazeScene | null>(null);

  // Initialize / Switch level
  const loadLevel = useCallback((lvlId: number) => {
    setCurrentLevelId(lvlId);
    const targetLvl = MAZE_LEVELS.find(l => l.id === lvlId) || MAZE_LEVELS[0];
    setRobotPos(targetLvl.start);
    setMovesCount(0);
    setPlannedMoves([]);
    setIsWon(false);
    setIsAutoRunning(false);
    setShowHint(false);
    setHighlightTiles([]);

    const welcomeMsg = lang === 'my'
      ? `Robot ကို ကြယ်ဆီရောက်အောင် လမ်းညွှန်ပါ။ (လှုပ်ရှားမှု ကန့်သတ်ချက်: ${targetLvl.moveLimit} ကြိမ်)`
      : `Guide the robot to the star! (Move limit: ${targetLvl.moveLimit} steps)`;
    setStatusMessage(welcomeMsg);

    if (phaserSceneRef.current) {
      phaserSceneRef.current.resetPosition(targetLvl.start);
    }
  }, [lang]);

  useEffect(() => {
    loadLevel(currentLevelId);
  }, [currentLevelId, loadLevel]);

  // Execute movement step
  const moveRobot = useCallback((dir: Direction) => {
    if (isWon || isAutoRunning) return;

    // Move Limit Check
    if (movesCount >= currentLevel.moveLimit) {
      AudioService.play('blocked');
      if (phaserSceneRef.current) phaserSceneRef.current.shakeRobot();
      setStatusMessage(lang === 'my'
        ? `⚠️ လှုပ်ရှားမှု ကန့်သတ်ချက် (${currentLevel.moveLimit} ကြိမ်) ပြည့်သွားပါပြီ! ↻ ပြန်စမယ် ကိုနှိပ်ပါ။`
        : `⚠️ Move limit reached (${currentLevel.moveLimit} moves)! Press ↻ Reset to try again.`);
      return;
    }

    const check = calculateNextMazePosition(robotPos, dir, currentLevel.walls, MAZE_GRID_SIZE);

    if (!check.valid) {
      AudioService.play('blocked');
      if (phaserSceneRef.current) phaserSceneRef.current.shakeRobot();

      if (check.reason === 'wall') {
        setStatusMessage(lang === 'my'
          ? '❌ အဲဒီမှာ အတားအဆီး ကျောက်တံတိုင်း ရှိတယ်! တခြားလမ်းစမ်းကြည့်ပါ။'
          : '❌ Blocked by a stone wall! Plan a different turn.');
      } else {
        setStatusMessage(lang === 'my'
          ? 'နံရံအစွန်းဖြစ်နေပါတယ်! တခြားဘက်ကို ရွှေ့ပါ။'
          : 'Edge of the board! Try another direction.');
      }
      return;
    }

    const nextPos = check.nextPos;
    const newMovesCount = movesCount + 1;
    setRobotPos(nextPos);
    setMovesCount(newMovesCount);
    setPlannedMoves(prev => [...prev, dir]);
    AudioService.play('step');

    if (phaserSceneRef.current) {
      phaserSceneRef.current.animateMove(nextPos);
    }

    // Goal Check
    if (nextPos === currentLevel.goal) {
      setIsWon(true);
      AudioService.play('star');
      if (phaserSceneRef.current) phaserSceneRef.current.celebrateGoal();

      const { isFirstTime } = completeMazeLevel(currentLevel.id, currentLevel.xpReward);

      setStatusMessage(isFirstTime
        ? (lang === 'my'
            ? `🎉 အောင်မြင်ပြီ! +${currentLevel.xpReward} XP ရရှိပါပြီ။`
            : `🎉 Level Complete! +${currentLevel.xpReward} XP earned!`)
        : (lang === 'my'
            ? `🎉 အဆင့် ${currentLevel.id} အောင်မြင်ပြီ! (ပြီးမြောက်ပြီးဖြစ်၍ XP မတိုးပါ)`
            : `🎉 Level Complete! (Already earned XP - great replay!)`));
    } else {
      if (newMovesCount >= currentLevel.moveLimit) {
        AudioService.play('blocked');
        setStatusMessage(lang === 'my'
          ? `⚠️ လှုပ်ရှားမှု ကန့်သတ်ချက် (${currentLevel.moveLimit} ကြိမ်) ပြည့်သွားပါပြီ! ↻ ပြန်စမယ် ကိုနှိပ်ပါ။`
          : `⚠️ Move limit reached (${currentLevel.moveLimit} moves)! Press ↻ Reset to try again.`);
      } else {
        setStatusMessage(lang === 'my'
          ? `ကောင်းတယ်။ ဆက်ကြိုးစားပါ။ (${newMovesCount}/${currentLevel.moveLimit})`
          : `Nice move! Keep navigating. (${newMovesCount}/${currentLevel.moveLimit})`);
      }
    }
  }, [isWon, isAutoRunning, movesCount, currentLevel, robotPos, lang, completeMazeLevel]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyMap: Record<string, Direction> = {
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
        resetLevel();
      } else if (e.key === 'h' || e.key === 'H') {
        toggleHint();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveRobot]);

  const resetLevel = () => {
    setRobotPos(currentLevel.start);
    setMovesCount(0);
    setPlannedMoves([]);
    setIsWon(false);
    setIsAutoRunning(false);
    setShowHint(false);
    setHighlightTiles([]);
    AudioService.play('step');

    setStatusMessage(lang === 'my'
      ? `Robot ကို ကြယ်ဆီရောက်အောင် လမ်းညွှန်ပါ။ (လှုပ်ရှားမှု ကန့်သတ်ချက်: ${currentLevel.moveLimit} ကြိမ်)`
      : `Guide the robot to the star! (Move limit: ${currentLevel.moveLimit} steps)`);

    if (phaserSceneRef.current) {
      phaserSceneRef.current.resetPosition(currentLevel.start);
    }
  };

  const toggleHint = () => {
    setShowHint(prev => !prev);
    const path = findOptimalMazePath(robotPos, currentLevel.goal, currentLevel.walls, MAZE_GRID_SIZE);
    if (path && path.length > 1) {
      setHighlightTiles(path.slice(1, 3));
      setTimeout(() => setHighlightTiles([]), 2400);
    }
    AudioService.play('step');
  };

  const runSequence = async () => {
    if (isAutoRunning || isWon || plannedMoves.length === 0) return;

    const movesToReplay = [...plannedMoves];
    resetLevel();
    setIsAutoRunning(true);
    setStatusMessage(lang === 'my' ? '▶ စီစဉ်ထားသော လှုပ်ရှားမှုများကို ပြန်လည် Run နေပါသည်...' : '▶ Running recorded sequence...');

    for (const dir of movesToReplay) {
      await new Promise(r => setTimeout(r, 260));
      moveRobot(dir);
    }

    setIsAutoRunning(false);
  };

  const arrowSymbols: Record<Direction, string> = {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️'
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h2 className="panel-title">{t('maze.title')}</h2>
        <p className="panel-desc">{t('maze.desc')}</p>
      </div>

      {/* Level Header Info */}
      <div className="maze-level-bar">
        <div className="maze-level-info">
          <h3>{currentLevel.name[lang]}</h3>
          <p>{currentLevel.subtitle[lang]}</p>
        </div>
        <div className="maze-meta-pills">
          <button
            className="btn-secondary btn-sm"
            onClick={() => setViewMode(prev => prev === 'phaser' ? 'dom' : 'phaser')}
            style={{ fontSize: '11px', padding: '6px 10px' }}
          >
            🎮 {viewMode === 'phaser' ? 'Phaser 2D Mode' : 'DOM Grid Mode'}
          </button>
          <span className="pill" style={{ background: '#ffffff', borderColor: '#d7e2f5' }}>
            👣 {t('maze.moves')} <strong>{movesCount}</strong> / {currentLevel.moveLimit}
          </span>
        </div>
      </div>

      {/* Level Selector Pills 1 to 10 */}
      <div className="maze-level-selector" role="tablist">
        {MAZE_LEVELS.map(lvl => {
          const isUnlocked = progress.unlockedMazeLevels.includes(lvl.id);
          const isCompleted = progress.completedMazeLevels.includes(lvl.id);
          const isActive = lvl.id === currentLevelId;

          let classes = 'lvl-pill';
          if (isActive) classes += ' active';
          if (isCompleted) classes += ' completed';
          if (!isUnlocked) classes += ' locked';

          return (
            <button
              key={lvl.id}
              className={classes}
              disabled={!isUnlocked}
              onClick={() => {
                if (isUnlocked) {
                  AudioService.play('step');
                  loadLevel(lvl.id);
                }
              }}
              title={lvl.name[lang]}
            >
              {lvl.id} {isCompleted ? '⭐' : !isUnlocked ? '🔒' : ''}
            </button>
          );
        })}
      </div>

      <div className="game-area">
        {/* Win Card Banner */}
        {isWon && (
          <div className="maze-win-card">
            <div className="maze-win-badge">🎉 ⭐ 🎉</div>
            <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '6px' }}>
              {lang === 'my' ? `အဆင့် ${currentLevel.id} အောင်မြင်ပြီ!` : `Level ${currentLevel.id} Complete!`}
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', marginBottom: '16px' }}>
              {lang === 'my'
                ? `ထူးချွန်တဲ့ Logic ပါ! လှုပ်ရှားမှု ${movesCount} ကြိမ်ဖြင့် အောင်မြင်ခဲ့ပါတယ်။`
                : `Fantastic sequence logic! Solved in ${movesCount} steps.`}
            </p>
            <div className="maze-win-actions">
              {currentLevel.id < 10 ? (
                <button
                  className="btn-primary"
                  onClick={() => {
                    AudioService.play('step');
                    loadLevel(currentLevel.id + 1);
                  }}
                >
                  {t('maze.next_level')}
                </button>
              ) : (
                <div style={{ color: '#27ae60', fontWeight: 900 }}>
                  🏆 {t('maze.champion')}
                </div>
              )}
              <button className="btn-secondary btn-sm" onClick={resetLevel}>
                ↻ {t('maze.replay')}
              </button>
            </div>
          </div>
        )}

        {/* Board View: Phaser 2D Canvas or Accessible DOM Tiles */}
        {viewMode === 'phaser' ? (
          <PhaserMazeGame
            level={currentLevel}
            robotPos={robotPos}
            highlightIndices={highlightTiles}
            onSceneReady={(scene) => {
              phaserSceneRef.current = scene;
            }}
          />
        ) : (
          <div className="maze-grid" role="grid" aria-label="Robot Maze Grid">
            {Array.from({ length: 25 }, (_, i) => {
              const isWall = currentLevel.walls.includes(i);
              const isGoal = i === currentLevel.goal;
              const isRobot = i === robotPos;
              const isHighlighted = highlightTiles.includes(i);

              let classes = 'tile';
              if (isWall) classes += ' wall';
              if (isGoal) classes += ' goal';
              if (isRobot) classes += ' robot-tile';
              if (isHighlighted) classes += ' hint-path';

              return (
                <div key={i} className={classes} role="gridcell">
                  {isRobot ? '🤖' : isGoal ? '⭐' : isWall ? '🪨' : ''}
                </div>
              );
            })}
          </div>
        )}

        {/* Sequence Trail */}
        <div className="maze-sequence-trail">
          <span className="trail-label">{lang === 'my' ? 'လှုပ်ရှားမှုများ:' : 'Steps sequence:'}</span>
          <div className="trail-steps">
            {plannedMoves.length === 0 ? (
              <span className="trail-empty">
                {lang === 'my' ? 'လှုပ်ရှားရန် မြှားခလုတ်များကို နှိပ်ပါ' : 'Use arrow buttons to move'}
              </span>
            ) : (
              plannedMoves.map((dir, idx) => (
                <span key={idx} className="trail-step-chip">
                  {idx + 1}. {arrowSymbols[dir]}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Directional & Action Buttons */}
        <div className="maze-controls">
          <button className="maze-btn" onClick={() => moveRobot('up')} aria-label="Move Up">⬆️</button>
          <button className="maze-btn" onClick={() => moveRobot('left')} aria-label="Move Left">⬅️</button>
          <button className="maze-btn" onClick={() => moveRobot('down')} aria-label="Move Down">⬇️</button>
          <button className="maze-btn" onClick={() => moveRobot('right')} aria-label="Move Right">➡️</button>

          <div className="maze-action-group">
            <button className="maze-action-btn btn-run" onClick={runSequence} title="Run sequence">
              ▶ {t('maze.run')}
            </button>
            <button className="maze-action-btn btn-reset" onClick={resetLevel} title="Reset level">
              ↻ {t('maze.reset')}
            </button>
            <button className="maze-action-btn btn-hint" onClick={toggleHint} title="Get a hint">
              💡 {t('maze.hint')}
            </button>
          </div>
        </div>

        {/* Status Alert */}
        <div className="game-status" aria-live="polite">
          {statusMessage}
        </div>

        {/* Hint Box */}
        {showHint && (
          <div className="callout-box" style={{ background: '#fff9e6', borderColor: '#ffe48a', color: '#6d4b00', marginTop: '14px' }}>
            <strong>💡 {lang === 'my' ? 'အဆင့် လမ်းညွှန်ချက်' : 'Level Hint'}</strong>
            <span>{currentLevel.hint[lang]}</span>
          </div>
        )}
      </div>

      <div className="callout-box">
        <strong>{t('maze.concept_title')}</strong>
        <span>{t('maze.concept_desc')}</span>
      </div>
    </div>
  );
};
