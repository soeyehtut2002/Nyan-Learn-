import { describe, it, expect } from 'vitest';
import {
  calculateNextMazePosition,
  findOptimalMazePath,
  turnLeft,
  turnRight,
  headingToDirection,
  isPathClearAhead,
  generateCodePreview
} from '../src/features/maze/logic/mazeLogic';
import { MAZE_LEVELS } from '../src/features/maze/data/mazeLevels';
import { RobotCommand } from '../src/types/maze.types';

describe('Maze Logic & Collision Engine', () => {
  it('should allow valid moves within grid boundaries', () => {
    const result = calculateNextMazePosition(0, 'right', []);
    expect(result.valid).toBe(true);
    expect(result.nextPos).toBe(1);
  });

  it('should block moving outside grid boundary', () => {
    const leftResult = calculateNextMazePosition(0, 'left', []);
    expect(leftResult.valid).toBe(false);
    expect(leftResult.reason).toBe('edge');

    const upResult = calculateNextMazePosition(0, 'up', []);
    expect(upResult.valid).toBe(false);
    expect(upResult.reason).toBe('edge');
  });

  it('should block moving into wall obstacles', () => {
    const result = calculateNextMazePosition(0, 'right', [1]);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe('wall');
  });

  it('verifies robotics heading and turning logic', () => {
    expect(turnRight('north')).toBe('east');
    expect(turnRight('east')).toBe('south');
    expect(turnLeft('north')).toBe('west');
    expect(turnLeft('west')).toBe('south');
    expect(headingToDirection('north')).toBe('up');
    expect(headingToDirection('east')).toBe('right');
  });

  it('verifies sensory wall scanning ahead of robot', () => {
    // Robot at tile 0 facing east. Wall at tile 1.
    expect(isPathClearAhead(0, 'east', [1])).toBe(false);
    // Facing south toward tile 5 (clear)
    expect(isPathClearAhead(0, 'south', [1])).toBe(true);
  });

  it('verifies code generation in Python and JavaScript for ages 13-18', () => {
    const sampleCommands: RobotCommand[] = [
      { id: '1', type: 'forward' },
      { id: '2', type: 'turn_left' },
      { id: '3', type: 'repeat', repeatCount: 3, subCommands: [{ id: '4', type: 'forward' }] }
    ];

    const pyCode = generateCodePreview(sampleCommands, 'python');
    expect(pyCode).toContain('robot.move_forward()');
    expect(pyCode).toContain('robot.turn_left()');
    expect(pyCode).toContain('for step in range(3):');

    const jsCode = generateCodePreview(sampleCommands, 'javascript');
    expect(jsCode).toContain('robot.moveForward();');
    expect(jsCode).toContain('robot.turnLeft();');
    expect(jsCode).toContain('for (let i = 0; i < 3; i++)');
  });

  it('verifies all 15 maze levels across 3 age tiers have valid BFS paths from start to goal', () => {
    expect(MAZE_LEVELS.length).toBe(15);

    MAZE_LEVELS.forEach(level => {
      const optimalPath = findOptimalMazePath(level.start, level.goal, level.walls);
      expect(optimalPath, `Level ${level.id} (${level.name.en}) should have a valid path`).not.toBeNull();
      if (optimalPath) {
        const moveCount = optimalPath.length - 1;
        expect(
          moveCount,
          `Level ${level.id} shortest moves (${moveCount}) must not exceed move limit (${level.moveLimit})`
        ).toBeLessThanOrEqual(level.moveLimit);
      }
    });
  });
});
