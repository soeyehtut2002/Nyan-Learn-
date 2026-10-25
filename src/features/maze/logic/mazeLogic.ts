import { Direction, Heading, MoveResult, RobotCommand, CodeLanguage } from '../../../types/maze.types';
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

export function turnLeft(heading: Heading): Heading {
  switch (heading) {
    case 'north': return 'west';
    case 'west': return 'south';
    case 'south': return 'east';
    case 'east': return 'north';
  }
}

export function turnRight(heading: Heading): Heading {
  switch (heading) {
    case 'north': return 'east';
    case 'east': return 'south';
    case 'south': return 'west';
    case 'west': return 'north';
  }
}

export function headingToDirection(heading: Heading): Direction {
  switch (heading) {
    case 'north': return 'up';
    case 'east': return 'right';
    case 'south': return 'down';
    case 'west': return 'left';
  }
}

export function headingToAngle(heading: Heading): number {
  switch (heading) {
    case 'north': return 0;
    case 'east': return 90;
    case 'south': return 180;
    case 'west': return 270;
  }
}

export function isPathClearAhead(
  pos: number,
  heading: Heading,
  walls: number[],
  gridSize = MAZE_GRID_SIZE
): boolean {
  const dir = headingToDirection(heading);
  const result = calculateNextMazePosition(pos, dir, walls, gridSize);
  return result.valid;
}

export function isPathClearLeft(
  pos: number,
  heading: Heading,
  walls: number[],
  gridSize = MAZE_GRID_SIZE
): boolean {
  const leftHeading = turnLeft(heading);
  const dir = headingToDirection(leftHeading);
  return calculateNextMazePosition(pos, dir, walls, gridSize).valid;
}

export function isPathClearRight(
  pos: number,
  heading: Heading,
  walls: number[],
  gridSize = MAZE_GRID_SIZE
): boolean {
  const rightHeading = turnRight(heading);
  const dir = headingToDirection(rightHeading);
  return calculateNextMazePosition(pos, dir, walls, gridSize).valid;
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

/**
 * Generate formatted code preview (Python or JavaScript) for programming education
 */
export function generateCodePreview(commands: RobotCommand[], lang: CodeLanguage): string {
  if (lang === 'blocks') return '';

  const isPython = lang === 'python';

  function renderCommands(list: RobotCommand[], indentLevel: number): string {
    const indent = '    '.repeat(indentLevel);
    const lines: string[] = [];

    for (const cmd of list) {
      if (cmd.type === 'forward') {
        lines.push(`${indent}${isPython ? 'robot.move_forward()' : 'robot.moveForward();'}`);
      } else if (cmd.type === 'turn_left') {
        lines.push(`${indent}${isPython ? 'robot.turn_left()' : 'robot.turnLeft();'}`);
      } else if (cmd.type === 'turn_right') {
        lines.push(`${indent}${isPython ? 'robot.turn_right()' : 'robot.turnRight();'}`);
      } else if (cmd.type === 'repeat') {
        const count = cmd.repeatCount || 2;
        if (isPython) {
          lines.push(`${indent}for step in range(${count}):`);
        } else {
          lines.push(`${indent}for (let i = 0; i < ${count}; i++) {`);
        }
        if (cmd.subCommands && cmd.subCommands.length > 0) {
          lines.push(renderCommands(cmd.subCommands, indentLevel + 1));
        } else {
          lines.push(`${'    '.repeat(indentLevel + 1)}${isPython ? 'pass' : '// empty loop'}`);
        }
        if (!isPython) {
          lines.push(`${indent}}`);
        }
      } else if (cmd.type === 'if_clear') {
        if (isPython) {
          lines.push(`${indent}if robot.front_is_clear():`);
        } else {
          lines.push(`${indent}if (robot.frontIsClear()) {`);
        }
        if (cmd.subCommands && cmd.subCommands.length > 0) {
          lines.push(renderCommands(cmd.subCommands, indentLevel + 1));
        } else {
          lines.push(`${'    '.repeat(indentLevel + 1)}${isPython ? 'pass' : '// empty branch'}`);
        }
        if (!isPython) {
          lines.push(`${indent}}`);
        }
      } else if (cmd.type === 'if_wall') {
        if (isPython) {
          lines.push(`${indent}if robot.wall_ahead():`);
        } else {
          lines.push(`${indent}if (robot.isBlockedAhead()) {`);
        }
        if (cmd.subCommands && cmd.subCommands.length > 0) {
          lines.push(renderCommands(cmd.subCommands, indentLevel + 1));
        } else {
          lines.push(`${'    '.repeat(indentLevel + 1)}${isPython ? 'pass' : '// empty branch'}`);
        }
        if (!isPython) {
          lines.push(`${indent}}`);
        }
      }
    }

    return lines.join('\n');
  }

  if (commands.length === 0) {
    return isPython
      ? `# Robot Program (Python)\n# Drag blocks or add commands to write code\n\ndef run_mission():\n    pass\n`
      : `// Robot Program (JavaScript)\n// Assemble commands in the workspace\n\nfunction runMission() {\n  // Code will appear here\n}\n`;
  }

  if (isPython) {
    return `# Robot Program (Python)\n# Designed for ages 7-18 coding basics\n\ndef run_mission(robot):\n${renderCommands(commands, 1)}\n\n# Execute program\nrun_mission(robot)`;
  } else {
    return `// Robot Program (JavaScript)\n// Designed for ages 7-18 coding basics\n\nfunction runMission(robot) {\n${renderCommands(commands, 1)}\n}\n\n// Execute program\nrunMission(robot);`;
  }
}
