import { Direction, MoveResult } from '../../../types/maze.types';
import { MAZE_GRID_SIZE } from '../data/mazeLevels';

export function calculateNextMazePosition(
  currentPos: number,
  dir: Direction,
  walls: number[],
  gridSize = MAZE_GRID_SIZE
): MoveResult {
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

export function findOptimalMazePath(
  start: number,
  goal: number,
  walls: number[],
  gridSize = MAZE_GRID_SIZE
): number[] | null {
  const queue: [number, number[]][] = [[start, [start]]];
  const visited = new Set<number>([start]);

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;
    const [curr, path] = item;
    if (curr === goal) return path;

    const row = Math.floor(curr / gridSize);
    const col = curr % gridSize;
    const neighbors: number[] = [];

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
