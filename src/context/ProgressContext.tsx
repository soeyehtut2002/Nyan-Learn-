import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { UserProgressState, BadgeId, BadgeInfo, BADGES_METADATA } from '../types/progress.types';
import { StorageService } from '../services/storage/StorageService';
import { AudioService } from '../services/audio/AudioService';
import { useTranslation } from '../i18n/LanguageContext';

export const BADGE_DEFINITIONS: BadgeInfo[] = BADGES_METADATA;

interface ProgressContextType {
  progress: UserProgressState;
  state: UserProgressState;
  level: number;
  currentLevel: number;
  soundEnabled: boolean;
  award: (xp?: number, badge?: BadgeId | null) => void;
  awardXP: (xp: number, badge?: BadgeId | null) => void;
  markModuleCompleted: (moduleKey: 'mazeDone' | 'quizDone' | 'aiDone' | 'builderDone') => void;
  toggleSound: () => void;
  completeMazeLevel: (levelId: number, xpReward: number) => { isFirstTime: boolean };
  resetAllProgress: () => void;
  toastMessage: string | null;
  clearToast: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgressState>(() => StorageService.loadProgress());
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { lang } = useTranslation();

  const level = Math.floor(progress.xp / 50) + 1;

  useEffect(() => {
    StorageService.saveProgress(progress);
    AudioService.soundEnabled = progress.soundEnabled;
  }, [progress]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  const clearToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  const toggleSound = useCallback(() => {
    setProgress(prev => {
      const nextSound = !prev.soundEnabled;
      AudioService.soundEnabled = nextSound;
      showToast(nextSound
        ? (lang === 'my' ? 'အသံဖွင့်ထားပါသည် 🔊' : 'Sound Enabled 🔊')
        : (lang === 'my' ? 'အသံပိတ်ထားပါသည် 🔇' : 'Sound Muted 🔇')
      );
      return { ...prev, soundEnabled: nextSound };
    });
  }, [lang, showToast]);

  const award = useCallback((xp = 0, badge: BadgeId | null = null) => {
    setProgress(prev => {
      const prevLevel = Math.floor(prev.xp / 50) + 1;
      const nextXp = prev.xp + xp;
      const nextLevel = Math.floor(nextXp / 50) + 1;
      const newBadges = [...prev.badges];

      if (badge && !newBadges.includes(badge)) {
        newBadges.push(badge);
      }

      if (nextLevel > 1 && !newBadges.includes('level')) {
        newBadges.push('level');
      }

      if (xp > 0) {
        AudioService.play('correct');
        const msg = lang === 'my'
          ? `🎉 ကောင်းလိုက်တာ! +${xp} XP ရရှိပါပြီ။`
          : `🎉 Great job! +${xp} XP earned!`;
        showToast(msg);
      }

      if (nextLevel > prevLevel) {
        setTimeout(() => {
          AudioService.play('star');
          const lvlMsg = lang === 'my'
            ? `🌟 ဂုဏ်ယူပါတယ်! Level ${nextLevel} သို့ တက်ရောက်သွားပါပြီ!`
            : `🌟 Congratulations! You reached Level ${nextLevel}!`;
          showToast(lvlMsg);
        }, 1200);
      }

      return {
        ...prev,
        xp: nextXp,
        badges: newBadges,
      };
    });
  }, [lang, showToast]);

  const completeMazeLevel = useCallback((levelId: number, xpReward: number) => {
    let isFirstTime = false;
    setProgress(prev => {
      const alreadyCompleted = prev.completedMazeLevels.includes(levelId);
      isFirstTime = !alreadyCompleted;

      const nextCompleted = alreadyCompleted
        ? prev.completedMazeLevels
        : [...prev.completedMazeLevels, levelId];

      const nextUnlocked = [...prev.unlockedMazeLevels];
      if (levelId < 10 && !nextUnlocked.includes(levelId + 1)) {
        nextUnlocked.push(levelId + 1);
        const unlockMsg = lang === 'my'
          ? `🔓 အဆင့် ${levelId + 1} ကို ဖွင့်လှစ်လိုက်ပါပြီ!`
          : `🔓 Level ${levelId + 1} Unlocked!`;
        showToast(unlockMsg);
      }

      const nextBadges = [...prev.badges];
      if (!nextBadges.includes('maze')) {
        nextBadges.push('maze');
      }

      const addedXp = isFirstTime ? xpReward : 0;
      const nextXp = prev.xp + addedXp;

      if (isFirstTime && addedXp > 0) {
        AudioService.play('star');
        showToast(lang === 'my'
          ? `🎉 အဆင့် ${levelId} အောင်မြင်ပြီ! +${addedXp} XP!`
          : `🎉 Level ${levelId} Complete! +${addedXp} XP!`);
      }

      return {
        ...prev,
        xp: nextXp,
        badges: nextBadges,
        mazeDone: true,
        completedMazeLevels: nextCompleted,
        unlockedMazeLevels: nextUnlocked,
      };
    });

    return { isFirstTime };
  }, [lang, showToast]);

  const markModuleCompleted = useCallback((moduleKey: 'mazeDone' | 'quizDone' | 'aiDone' | 'builderDone') => {
    setProgress(prev => {
      if (prev[moduleKey]) return prev;
      return { ...prev, [moduleKey]: true };
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    const fresh = StorageService.resetProgress();
    setProgress(fresh);
    AudioService.play('step');
    showToast(lang === 'my' ? 'မှတ်တမ်းများကို ပြန်လည်စတင်ပြီးပါပြီ။' : 'Progress has been reset.');
  }, [lang, showToast]);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        state: progress,
        level,
        currentLevel: level,
        soundEnabled: progress.soundEnabled,
        award,
        awardXP: award,
        markModuleCompleted,
        toggleSound,
        completeMazeLevel,
        resetAllProgress,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
