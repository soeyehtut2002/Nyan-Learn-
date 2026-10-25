import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { MazeScene } from '../game/MazeScene';
import { MazeLevel, Heading } from '../../../types/maze.types';

interface PhaserMazeGameProps {
  level: MazeLevel;
  robotPos: number;
  highlightIndices: number[];
  heading?: Heading;
  onSceneReady?: (scene: MazeScene) => void;
}

export const PhaserMazeGame: React.FC<PhaserMazeGameProps> = ({
  level,
  robotPos,
  highlightIndices,
  heading = 'north',
  onSceneReady,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const sceneRef = useRef<MazeScene | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Instantiate Phaser Game
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: containerRef.current,
      width: 390,
      height: 390,
      transparent: true,
      physics: {
        default: 'arcade',
        arcade: { gravity: { x: 0, y: 0 } },
      },
      scene: [MazeScene],
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    game.events.once('ready', () => {
      const scene = game.scene.getScene('MazeScene') as MazeScene;
      sceneRef.current = scene;
      scene.init({ level });
      if (onSceneReady) onSceneReady(scene);
    });

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []); // Mount once

  // React to level changes
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.updateLevel(level);
      sceneRef.current.resetPosition(level.start);
    }
  }, [level]);

  // Animate robot movement on position changes
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.animateMove(robotPos);
    }
  }, [robotPos]);

  // Update robot orientation heading
  useEffect(() => {
    if (sceneRef.current && heading) {
      sceneRef.current.setHeading(heading);
    }
  }, [heading]);

  // React to hint path highlights
  useEffect(() => {
    if (sceneRef.current && highlightIndices.length > 0) {
      // Subtle cue when hint is requested
      sceneRef.current.shakeRobot();
    }
  }, [highlightIndices]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '390px',
        minHeight: '390px',
      }}
    />
  );
};
