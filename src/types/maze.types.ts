export type Direction = 'up' | 'down' | 'left' | 'right';
export type Heading = 'north' | 'east' | 'south' | 'west';

export interface LocalizedString {
  en: string;
  my: string;
}

export type AgeTier = 'junior' | 'intermediate' | 'senior';

export interface MazeLevel {
  id: number;
  name: LocalizedString;
  subtitle: LocalizedString;
  start: number;
  goal: number;
  walls: number[];
  moveLimit: number;
  xpReward: number;
  hint: LocalizedString;
  tier: AgeTier;
  ageBracket: string;
  concept: LocalizedString;
  initialHeading?: Heading;
}

export interface MoveResult {
  valid: boolean;
  nextPos: number;
  reason: 'ok' | 'wall' | 'edge' | 'invalid_dir';
}

export type CommandType =
  | 'forward'
  | 'turn_left'
  | 'turn_right'
  | 'repeat'
  | 'if_clear'
  | 'if_wall';

export interface RobotCommand {
  id: string;
  type: CommandType;
  repeatCount?: number;
  subCommands?: RobotCommand[];
}

export type CodeLanguage = 'blocks' | 'python' | 'javascript';
