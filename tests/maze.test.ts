import { describe, it, expect } from 'vitest';
import { calculateNextMazePosition, findOptimalMazePath } from '../src/features/maze/logic/mazeLogic';
import { MAZE_LEVELS } from '../src/features/maze/data/mazeLevels';

describe('Maze Logic & Collision Engine', () => {
  it('should allow valid moves within grid boundaries', () => {
    // At index 0 (0,0), moving right should go to index 1 (1,0)
    const result = calculateNextMazePosition(0, 'right', []);
    expect(result.valid).toBe(true);
    expect(result.nextPos).toBe(1);
  });

  it('should block moving outside grid boundary', () => {
    // At index 0 (0,0), moving left or up is off-grid
    const leftResult = calculateNextMazePosition(0, 'left', []);
    expect(leftResult.valid).toBe(false);
    expect(leftResult.reason).toBe('edge');

    const upResult = calculateNextMazePosition(0, 'up', []);
    expect(upResult.valid).toBe(false);
    expect(upResult.reason).toBe('edge');
  });

  it('should block moving into wall obstacles', () => {
    // Wall at index 1
    const result = calculateNextMazePosition(0, 'right', [1]);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe('wall');
  });

  it('verifies all 10 maze levels have valid BFS paths from start to goal', () => {
    expect(MAZE_LEVELS.length).toBe(10);

    MAZE_LEVELS.forEach(level => {
      const optimalPath = findOptimalMazePath(level.start, level.goal, level.walls);
      expect(optimalPath, `Level ${level.id} should have a valid path`).not.toBeNull();
      if (optimalPath) {
        // Number of moves is path length minus start tile
        const moveCount = optimalPath.length - 1;
        expect(
          moveCount,
          `Level ${level.id} shortest moves (${moveCount}) must not exceed move limit (${level.moveLimit})`
        ).toBeLessThanOrEqual(level.moveLimit);
      }
    });
  });
});
