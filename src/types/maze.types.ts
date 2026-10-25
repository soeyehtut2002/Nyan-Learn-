export type Direction = 'up' | 'down' | 'left' | 'right';

export interface LocalizedString {
  en: string;
  my: string;
}

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
}

export interface MoveResult {
  valid: boolean;
  nextPos: number;
  reason: 'ok' | 'wall' | 'edge' | 'invalid_dir';
}
