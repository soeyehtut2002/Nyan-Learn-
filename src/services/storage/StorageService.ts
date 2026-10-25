import { UserProgressState, BadgeId } from '../../types/progress.types';

const STORAGE_KEY = 'codequest-adventure-data-v2';

export const defaultProgressState: UserProgressState = {
  xp: 0,
  mazeDone: false,
  quizDone: false,
  aiDone: false,
  builderDone: false,
  badges: [],
  unlockedMazeLevels: [1],
  completedMazeLevels: [],
  soundEnabled: true,
};

export class StorageService {
  /**
   * Loads user progress, safely migrating legacy prototypes and schema versions.
   */
  static loadProgress(): UserProgressState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultProgressState };

      const parsed = JSON.parse(raw);

      // Safe schema migration & field normalization
      const migrated: UserProgressState = {
        xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
        mazeDone: Boolean(parsed.mazeDone),
        quizDone: Boolean(parsed.quizDone),
        aiDone: Boolean(parsed.aiDone),
        builderDone: Boolean(parsed.builderDone),
        badges: Array.isArray(parsed.badges) ? (parsed.badges as BadgeId[]) : [],
        unlockedMazeLevels: Array.isArray(parsed.unlockedMazeLevels) && parsed.unlockedMazeLevels.length > 0
          ? parsed.unlockedMazeLevels
          : [1],
        completedMazeLevels: Array.isArray(parsed.completedMazeLevels)
          ? parsed.completedMazeLevels
          : parsed.mazeDone ? [1] : [],
        soundEnabled: parsed.soundEnabled !== false,
      };

      return migrated;
    } catch (err) {
      console.warn('StorageService: Error reading localStorage progress:', err);
      return { ...defaultProgressState };
    }
  }

  /**
   * Persists progress state to localStorage.
   */
  static saveProgress(state: UserProgressState): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('StorageService: Error saving progress to localStorage:', err);
    }
  }

  /**
   * Resets progress to default baseline state.
   */
  static resetProgress(): UserProgressState {
    const fresh = { ...defaultProgressState };
    this.saveProgress(fresh);
    return fresh;
  }
}
