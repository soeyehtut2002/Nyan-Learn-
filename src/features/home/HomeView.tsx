import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useTranslation } from '../../i18n/LanguageContext';
import { AudioService } from '../../services/audio/AudioService';

interface HomeViewProps {
  onNavigate?: (pageId: string) => void;
  onStart?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onStart }) => {
  const { progress, level } = useProgress();
  const { t } = useTranslation();

  const handleNav = (target: string) => {
    AudioService.play('step');
    if (onStart && target === 'coding') {
      onStart();
    } else if (onNavigate) {
      onNavigate(target);
    }
  };

  return (
    <div>
      {/* Hero Card */}
      <div className="hero-card">
        <div className="hero-body">
          <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
          <h2 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          <p className="hero-desc">{t('hero.desc')}</p>
          <button className="btn-primary" onClick={() => handleNav('coding')}>
            {t('hero.cta')}
          </button>
        </div>
        <div className="hero-mascot" aria-label="Friendly Robot Mascot">🤖</div>
      </div>

      {/* Quick Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-info">
            <strong>{progress.xp} XP</strong>
            <span>{t('stats.xp')}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🌟</div>
          <div className="stat-info">
            <strong>{t('stats.level')} {level}</strong>
            <span>{t('stats.level_title')}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏅</div>
          <div className="stat-info">
            <strong>{progress.badges.length}</strong>
            <span>{t('stats.badges')}</span>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="section-header">
        <div>
          <h2>{t('missions.heading')}</h2>
          <p>{t('missions.subheading')}</p>
        </div>
        <button className="text-link" onClick={() => handleNav('rewards')}>
          {t('missions.view_rewards')}
        </button>
      </div>

      {/* Missions Grid */}
      <div className="missions-grid">
        <article className="mission-card">
          <div className="mission-art">🧩</div>
          <h3>{t('missions.maze_title')}</h3>
          <p>{t('missions.maze_desc')}</p>
          <div className="mission-foot">
            <span className="xp-tag">⚡ +20 XP</span>
            <button className="btn-secondary btn-sm" onClick={() => handleNav('coding')}>
              {t('missions.maze_cta')}
            </button>
          </div>
        </article>

        <article className="mission-card">
          <div className="mission-art">🧠</div>
          <h3>{t('missions.quiz_title')}</h3>
          <p>{t('missions.quiz_desc')}</p>
          <div className="mission-foot">
            <span className="xp-tag">⚡ +10 XP</span>
            <button className="btn-secondary btn-sm" onClick={() => handleNav('quiz')}>
              {t('missions.quiz_cta')}
            </button>
          </div>
        </article>

        <article className="mission-card">
          <div className="mission-art">🔎</div>
          <h3>{t('missions.ai_title')}</h3>
          <p>{t('missions.ai_desc')}</p>
          <div className="mission-foot">
            <span className="xp-tag">⚡ +15 XP</span>
            <button className="btn-secondary btn-sm" onClick={() => handleNav('ai')}>
              {t('missions.ai_cta')}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
