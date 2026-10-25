import React from 'react';

export type MascotMood = 'happy' | 'thinking' | 'success' | 'detective' | 'coder';

interface ByteMascotProps {
  mood?: MascotMood;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ByteMascot: React.FC<ByteMascotProps> = ({
  mood = 'happy',
  size = 120,
  style,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 160 160"
        width={size}
        height={size}
        style={{ overflow: 'visible', filter: 'drop-shadow(0 8px 16px rgba(108, 71, 255, 0.25))' }}
      >
        <defs>
          <linearGradient id="byteBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <linearGradient id="byteFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="byteAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="byteCheekGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <linearGradient id="byteGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>

        {/* Floating shadow */}
        <ellipse cx="80" cy="150" rx="42" ry="7" fill="rgba(30, 41, 59, 0.15)" />

        {/* Antenna */}
        <line x1="80" y1="26" x2="80" y2="40" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
        <circle cx="80" cy="22" r="7" fill={mood === 'thinking' ? '#fde047' : '#06b6d4'} stroke="#ffffff" strokeWidth="2" />
        {mood === 'thinking' && (
          <circle cx="80" cy="22" r="11" fill="none" stroke="#fde047" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
        )}

        {/* Ears / Head Bolts */}
        <rect x="22" y="58" width="8" height="18" rx="4" fill="#38bdf8" />
        <rect x="130" y="58" width="8" height="18" rx="4" fill="#38bdf8" />

        {/* Head Shell */}
        <rect x="28" y="38" width="104" height="66" rx="28" fill="url(#byteBodyGrad)" stroke="#ffffff" strokeWidth="3" />

        {/* Screen / Visor */}
        <rect x="38" y="48" width="84" height="46" rx="18" fill="url(#byteFaceGrad)" />

        {/* Eyes based on Mood */}
        {mood === 'happy' && (
          <>
            {/* Curved happy eyes */}
            <path d="M 52 68 Q 60 58 68 68" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 92 68 Q 100 58 108 68" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
            {/* Cute cheeks */}
            <circle cx="48" cy="76" r="4.5" fill="url(#byteCheekGrad)" opacity="0.8" />
            <circle cx="112" cy="76" r="4.5" fill="url(#byteCheekGrad)" opacity="0.8" />
            {/* Smile */}
            <path d="M 74 81 Q 80 87 86 81" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {mood === 'thinking' && (
          <>
            {/* One big eye, one squinted */}
            <circle cx="60" cy="67" r="7" fill="#38bdf8" />
            <circle cx="62" cy="65" r="2.5" fill="#ffffff" />
            <line x1="92" y1="67" x2="108" y2="67" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
            {/* Thinking mouth */}
            <circle cx="80" cy="80" r="3.5" fill="#38bdf8" />
          </>
        )}

        {mood === 'success' && (
          <>
            {/* Starry eyes */}
            <polygon points="60,60 63,66 70,66 64,70 66,77 60,73 54,77 56,70 50,66 57,66" fill="url(#byteGoldGrad)" />
            <polygon points="100,60 103,66 110,66 104,70 106,77 100,73 94,77 96,70 90,66 97,66" fill="url(#byteGoldGrad)" />
            {/* Big open smile */}
            <path d="M 72 80 Q 80 90 88 80 Z" fill="#38bdf8" />
            {/* Confetti pieces */}
            <rect x="20" y="24" width="6" height="6" rx="1" fill="#f43f5e" transform="rotate(25 23 27)" />
            <circle cx="138" cy="30" r="4" fill="#eab308" />
            <polygon points="132,48 135,53 140,51 136,56 138,61 133,58 129,61 131,56 127,52 132,53" fill="#38bdf8" />
          </>
        )}

        {mood === 'detective' && (
          <>
            {/* Detective Hat */}
            <ellipse cx="80" cy="38" rx="46" ry="8" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            <path d="M 50 38 Q 80 12 110 38 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
            <rect x="52" y="34" width="56" height="5" fill="#f59e0b" />
            {/* Serious detective eyes */}
            <circle cx="58" cy="68" r="6" fill="#38bdf8" />
            <circle cx="60" cy="66" r="2" fill="#ffffff" />
            <circle cx="102" cy="68" r="6" fill="#38bdf8" />
            <circle cx="104" cy="66" r="2" fill="#ffffff" />
            <path d="M 74 81 L 86 81" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {mood === 'coder' && (
          <>
            {/* Gamer / Coder Headphones */}
            <path d="M 24 66 A 56 56 0 0 1 136 66" fill="none" stroke="#f43f5e" strokeWidth="7" strokeLinecap="round" />
            <rect x="18" y="56" width="12" height="24" rx="6" fill="#f43f5e" />
            <rect x="130" y="56" width="12" height="24" rx="6" fill="#f43f5e" />
            {/* Cool glasses / eyes */}
            <rect x="48" y="60" width="26" height="15" rx="5" fill="#06b6d4" />
            <rect x="86" y="60" width="26" height="15" rx="5" fill="#06b6d4" />
            <line x1="74" y1="67" x2="86" y2="67" stroke="#06b6d4" strokeWidth="3" />
            <path d="M 74 82 Q 80 87 86 82" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {/* Torso / Body */}
        <rect x="46" y="102" width="68" height="42" rx="18" fill="url(#byteBodyGrad)" stroke="#ffffff" strokeWidth="3" />
        {/* Heart / Power Indicator */}
        <circle cx="80" cy="120" r="10" fill={mood === 'success' ? '#10b981' : '#06b6d4'} stroke="#ffffff" strokeWidth="2" />
        <path d="M 77 120 L 79 123 L 84 117" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Left Arm */}
        {mood === 'happy' || mood === 'success' ? (
          <path d="M 46 112 Q 26 95 24 82" fill="none" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
        ) : (
          <path d="M 46 112 Q 32 124 30 134" fill="none" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
        )}
        {/* Hand */}
        <circle cx={mood === 'happy' || mood === 'success' ? 24 : 30} cy={mood === 'happy' || mood === 'success' ? 82 : 134} r="6" fill="#38bdf8" />

        {/* Right Arm */}
        {mood === 'success' ? (
          <path d="M 114 112 Q 134 95 136 82" fill="none" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
        ) : (
          <path d="M 114 112 Q 128 124 130 134" fill="none" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
        )}
        <circle cx={mood === 'success' ? 136 : 130} cy={mood === 'success' ? 82 : 134} r="6" fill="#38bdf8" />
      </svg>
    </div>
  );
};

interface MascotSpeechProps {
  mood?: MascotMood;
  title: string;
  message: string;
  badge?: string;
  size?: number;
}

export const MascotSpeech: React.FC<MascotSpeechProps> = ({
  mood = 'happy',
  title,
  message,
  badge,
  size = 90,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
        border: '2px solid #c7d2fe',
        borderRadius: '24px',
        padding: '16px 20px',
        boxShadow: '0 8px 24px rgba(99, 102, 241, 0.12)',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circle glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.5)',
          pointerEvents: 'none',
        }}
      />

      <ByteMascot mood={mood} size={size} />

      <div style={{ flex: 1, zIndex: 1 }}>
        {badge && (
          <span
            style={{
              display: 'inline-block',
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '9999px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px',
            }}
          >
            {badge}
          </span>
        )}
        <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1e1b4b', margin: '0 0 4px 0' }}>
          {title}
        </h4>
        <p style={{ fontSize: '13.5px', color: '#312e81', margin: 0, lineHeight: 1.5 }}>
          {message}
        </p>
      </div>
    </div>
  );
};
