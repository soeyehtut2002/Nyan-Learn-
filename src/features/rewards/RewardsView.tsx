import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useTranslation } from '../../i18n/LanguageContext';
import { BADGES_METADATA, BadgeInfo } from '../../types/progress.types';

export const RewardsView: React.FC = () => {
  const { state, currentLevel } = useProgress();
  const { lang, t } = useTranslation();

  return (
    <div className="section-container">
      <div className="card">
        <div className="card-header">
          <span className="card-icon">🏆</span>
          <div>
            <h2>{t('rewardsTitle')}</h2>
            <p className="card-subtitle">{t('rewardsSubtitle')}</p>
          </div>
        </div>

        <div className="stats-grid" style={{ marginBottom: '24px' }}>
          <div className="stat-card">
            <span className="stat-value">{state.xp}</span>
            <span className="stat-label">Total XP</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">Level {currentLevel}</span>
            <span className="stat-label">Explorer Rank</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">
              {state.badges.length}/{BADGES_METADATA.length}
            </span>
            <span className="stat-label">Badges Collected</span>
          </div>
        </div>

        <h3 style={{ margin: '16px 0 12px' }}>
          {lang === 'my' ? 'ဆုတံဆိပ်များ (Badges)' : 'Achievement Badges'}
        </h3>

        <div className="badge-grid">
          {BADGES_METADATA.map((badge: BadgeInfo) => {
            const isUnlocked = state.badges.includes(badge.id);
            const title = lang === 'my' ? badge.titleMy : badge.titleEn;
            const statusText = isUnlocked
              ? (lang === 'my' ? 'ရရှိပြီးပါပြီ ✓' : 'Unlocked ✓')
              : (lang === 'my' ? 'သော့ခတ်ထားဆဲ 🔒' : 'Locked 🔒');

            return (
              <div
                key={badge.id}
                className={`badge-card ${isUnlocked ? 'unlocked' : 'locked'}`}
              >
                <span className="badge-emoji">{isUnlocked ? badge.emoji : '🔒'}</span>
                <strong>{title}</strong>
                <p>{statusText}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
