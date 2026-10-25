import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { LanguageProvider } from './i18n/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import '../style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </LanguageProvider>
  </React.StrictMode>
);
