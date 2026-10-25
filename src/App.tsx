import React, { useState } from 'react';
import { useProgress } from './context/ProgressContext';
import { useTranslation } from './i18n/LanguageContext';
import { audioService } from './services/audio/AudioService';

// Feature Views
import { HomeView } from './features/home/HomeView';
import { MazeView } from './features/maze/components/MazeView';
import { QuizView } from './features/quiz/QuizView';
import { AIDetectiveView } from './features/ai-detective/AIDetectiveView';
import { RewardsView } from './features/rewards/RewardsView';
import { LearningPathView } from './features/path/LearningPathView';
import { BlocklyBuilderView } from './features/blockly-builder/components/BlocklyBuilderView';
import { AITutorView } from './features/tutor/AITutorView';
import { ParentZoneView } from './features/parent/ParentZoneView';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const { state, soundEnabled, toggleSound } = useProgress();
  const { lang, setLanguage, t } = useTranslation();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    audioService.play('step');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    audioService.play('step');
    setLanguage(lang === 'my' ? 'en' : 'my');
  };

  return (
    <div className="app">
      {/* Top Header Bar */}
      <header className="top-header">
        <div
          className="brand-wrapper"
          onClick={() => handleNavigate('home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="brand-logo" aria-hidden="true">✦</div>
          <div className="brand-text">
            <h1>CodeQuest<span>.</span></h1>
            <div className="brand-tagline">{t('brandTagline')}</div>
          </div>
        </div>

        <div className="top-actions">
          <span className="pill safety-pill" title="Child Safe Environment">
            🛡️ <span>{t('kidSafePill')}</span>
          </span>

          <span className="pill xp-pill" aria-label="Experience Points">
            ⚡ <strong>{state.xp}</strong> XP
          </span>

          {/* Sound Toggle */}
          <button
            id="soundToggleBtn"
            className="icon-btn"
            onClick={toggleSound}
            aria-label="Toggle Sound Effects"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>

          {/* Bilingual Switcher */}
          <button
            className="lang-btn"
            id="langBtn"
            onClick={toggleLanguage}
            aria-label="Change language between Burmese and English"
          >
            🌐 <span>{lang === 'my' ? 'English' : 'မြန်မာ'}</span>
          </button>
        </div>
      </header>

      {/* Main Application Layout */}
      <div className="main-layout">
        {/* Navigation Sidebar */}
        <aside className="sidebar" aria-label="Main Navigation">
          <nav className="nav-group">
            <button
              className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigate('home')}
            >
              <span className="ico">🏡</span>
              <span>{t('navHome')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'coding' ? 'active' : ''}`}
              onClick={() => handleNavigate('coding')}
            >
              <span className="ico">🤖</span>
              <span>{t('navMaze')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'quiz' ? 'active' : ''}`}
              onClick={() => handleNavigate('quiz')}
            >
              <span className="ico">🧠</span>
              <span>{t('navQuiz')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'ai' ? 'active' : ''}`}
              onClick={() => handleNavigate('ai')}
            >
              <span className="ico">✨</span>
              <span>{t('navAI')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'rewards' ? 'active' : ''}`}
              onClick={() => handleNavigate('rewards')}
            >
              <span className="ico">🏆</span>
              <span>{t('navRewards')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'path' ? 'active' : ''}`}
              onClick={() => handleNavigate('path')}
            >
              <span className="ico">🗺️</span>
              <span>{t('navPath')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'builder' ? 'active' : ''}`}
              onClick={() => handleNavigate('builder')}
            >
              <span className="ico">🧱</span>
              <span>{t('navBuilder')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'tutor' ? 'active' : ''}`}
              onClick={() => handleNavigate('tutor')}
            >
              <span className="ico">💬</span>
              <span>{t('navTutor')}</span>
            </button>
            <button
              className={`nav-btn ${currentPage === 'parent' ? 'active' : ''}`}
              onClick={() => handleNavigate('parent')}
            >
              <span className="ico">👨‍👩‍👧</span>
              <span>{t('navParent')}</span>
            </button>
          </nav>

          <div className="side-tip">
            🛡️ <strong>{t('safeLearningTitle')}</strong>
            <span>{t('safeLearningDesc')}</span>
          </div>
        </aside>

        {/* Main Content View Switcher */}
        <main className="content-area">
          {currentPage === 'home' && <HomeView onNavigate={handleNavigate} onStart={() => handleNavigate('coding')} />}
          {currentPage === 'coding' && <MazeView />}
          {currentPage === 'quiz' && <QuizView />}
          {currentPage === 'ai' && <AIDetectiveView />}
          {currentPage === 'rewards' && <RewardsView />}
          {currentPage === 'path' && <LearningPathView onNavigate={handleNavigate} />}
          {currentPage === 'builder' && <BlocklyBuilderView />}
          {currentPage === 'tutor' && <AITutorView />}
          {currentPage === 'parent' && <ParentZoneView />}
        </main>
      </div>

      <footer className="footer" style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', borderTop: '1px solid #e2e8f0', color: 'var(--ink-secondary)', fontSize: '13px' }}>
        <p>CodeQuest — Empowering Young Creators with Playful Programming & AI Literacy 🚀</p>
      </footer>
    </div>
  );
};
