import React from 'react';
import { VisualDiagramData } from '../../../types/course.types';
import { useTranslation } from '../../../i18n/LanguageContext';

interface VisualDiagramProps {
  diagram: VisualDiagramData;
}

export const VisualDiagram: React.FC<VisualDiagramProps> = ({ diagram }) => {
  const { lang } = useTranslation();
  const caption = lang === 'my' ? diagram.captionMy : diagram.captionEn;
  const alt = lang === 'my' ? diagram.altMy : diagram.altEn;

  // Render dedicated SVG / graphic based on diagram.type
  const renderGraphic = () => {
    switch (diagram.type) {
      // -----------------------------------------------------------------------
      // Programming Course Diagrams
      // -----------------------------------------------------------------------
      case 'programmer-computer-bridge':
        return (
          <svg viewBox="0 0 700 240" className="visual-svg" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="progGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6c47ff" />
                <stop offset="100%" stopColor="#8d6eff" />
              </linearGradient>
              <linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c7d9" />
                <stop offset="100%" stopColor="#1499a8" />
              </linearGradient>
              <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffc436" />
                <stop offset="100%" stopColor="#ff9f1a" />
              </linearGradient>
            </defs>
            {/* Stage 1: Programmer */}
            <rect x="30" y="40" width="180" height="150" rx="16" fill="url(#progGrad)" />
            <text x="120" y="90" fontSize="38" textAnchor="middle">👩‍💻</text>
            <text x="120" y="130" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">Programmer</text>
            <text x="120" y="155" fontSize="12" fill="#f0edff" textAnchor="middle">Writes code instructions</text>

            {/* Arrow 1 */}
            <path d="M 225 115 L 265 115" stroke="#6c47ff" strokeWidth="5" strokeDasharray="6,4" />
            <polygon points="275,115 263,107 263,123" fill="#6c47ff" />
            <text x="250" y="100" fontSize="11" fontWeight="bold" fill="#6c47ff" textAnchor="middle">Code</text>

            {/* Stage 2: Computer Processor */}
            <rect x="285" y="40" width="180" height="150" rx="16" fill="url(#compGrad)" />
            <text x="375" y="90" fontSize="38" textAnchor="middle">💻</text>
            <text x="375" y="130" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">Computer</text>
            <text x="375" y="155" fontSize="12" fill="#e4f9fc" textAnchor="middle">Translates & executes</text>

            {/* Arrow 2 */}
            <path d="M 480 115 L 520 115" stroke="#22c7d9" strokeWidth="5" strokeDasharray="6,4" />
            <polygon points="530,115 518,107 518,123" fill="#22c7d9" />
            <text x="505" y="100" fontSize="11" fontWeight="bold" fill="#1499a8" textAnchor="middle">Actions</text>

            {/* Stage 3: Robot / App Action */}
            <rect x="540" y="40" width="140" height="150" rx="16" fill="url(#botGrad)" />
            <text x="610" y="90" fontSize="38" textAnchor="middle">🤖</text>
            <text x="610" y="130" fontSize="16" fontWeight="bold" fill="#1e2448" textAnchor="middle">Byte the Robot</text>
            <text x="610" y="155" fontSize="12" fill="#1e2448" textAnchor="middle">Moves & Solves!</text>
          </svg>
        );

      case 'algorithm-steps-flow':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Step 1: Start */}
            <circle cx="80" cy="100" r="45" fill="#2ecc71" />
            <text x="80" y="95" fontSize="24" textAnchor="middle">🚩</text>
            <text x="80" y="120" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">START</text>

            <line x1="130" y1="100" x2="180" y2="100" stroke="#585d82" strokeWidth="4" />
            <polygon points="190,100 178,93 178,107" fill="#585d82" />

            {/* Step 2 */}
            <rect x="195" y="55" width="125" height="90" rx="12" fill="#ffffff" stroke="#6c47ff" strokeWidth="3" />
            <text x="257" y="90" fontSize="20" textAnchor="middle">👣</text>
            <text x="257" y="115" fontSize="13" fontWeight="bold" fill="#1e2448" textAnchor="middle">Step 1: Step</text>

            <line x1="325" y1="100" x2="375" y2="100" stroke="#585d82" strokeWidth="4" />
            <polygon points="385,100 373,93 373,107" fill="#585d82" />

            {/* Step 3 */}
            <rect x="390" y="55" width="125" height="90" rx="12" fill="#ffffff" stroke="#6c47ff" strokeWidth="3" />
            <text x="452" y="90" fontSize="20" textAnchor="middle">↩️</text>
            <text x="452" y="115" fontSize="13" fontWeight="bold" fill="#1e2448" textAnchor="middle">Step 2: Turn</text>

            <line x1="520" y1="100" x2="570" y2="100" stroke="#585d82" strokeWidth="4" />
            <polygon points="580,100 568,93 568,107" fill="#585d82" />

            {/* Goal */}
            <circle cx="630" cy="100" r="45" fill="#ffc436" />
            <text x="630" y="95" fontSize="24" textAnchor="middle">⭐</text>
            <text x="630" y="120" fontSize="13" fontWeight="bold" fill="#1e2448" textAnchor="middle">GOAL!</text>
          </svg>
        );

      case 'sequence-order-visual':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            <rect x="50" y="20" width="600" height="180" rx="16" fill="#1e2448" />
            {/* Line 1 */}
            <rect x="80" y="40" width="30" height="30" rx="6" fill="#6c47ff" />
            <text x="95" y="61" fill="#fff" fontWeight="bold" fontSize="14" textAnchor="middle">1</text>
            <text x="130" y="61" fill="#22c7d9" fontFamily="monospace" fontSize="15">put_on_socks();</text>
            <text x="480" y="61" fill="#2ecc71" fontSize="14">✓ Correct First</text>

            <line x1="95" y1="75" x2="95" y2="90" stroke="#6c47ff" strokeWidth="3" />

            {/* Line 2 */}
            <rect x="80" y="95" width="30" height="30" rx="6" fill="#6c47ff" />
            <text x="95" y="116" fill="#fff" fontWeight="bold" fontSize="14" textAnchor="middle">2</text>
            <text x="130" y="116" fill="#22c7d9" fontFamily="monospace" fontSize="15">put_on_shoes();</text>
            <text x="480" y="116" fill="#2ecc71" fontSize="14">✓ Order matters</text>

            <line x1="95" y1="130" x2="95" y2="145" stroke="#6c47ff" strokeWidth="3" />

            {/* Line 3 */}
            <rect x="80" y="150" width="30" height="30" rx="6" fill="#6c47ff" />
            <text x="95" y="171" fill="#fff" fontWeight="bold" fontSize="14" textAnchor="middle">3</text>
            <text x="130" y="171" fill="#ffc436" fontFamily="monospace" fontSize="15">tie_shoelaces();</text>
            <text x="480" y="171" fill="#2ecc71" fontSize="14">✓ Safe to walk!</text>
          </svg>
        );

      case 'event-action-pair':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Event Box */}
            <rect x="50" y="40" width="240" height="120" rx="16" fill="#fff" stroke="#ff6b6b" strokeWidth="3" />
            <circle cx="90" cy="80" r="24" fill="#fff0f0" />
            <text x="90" y="88" fontSize="24" textAnchor="middle">🖱️</text>
            <text x="130" y="75" fontSize="16" fontWeight="bold" fill="#1e2448">EVENT</text>
            <text x="130" y="100" fontSize="13" fill="#585d82">User Clicks Button</text>
            <text x="70" y="135" fontSize="11" fill="#ff6b6b" fontWeight="bold">TRIGGER OCCURS</text>

            {/* Lightning bolt / arrow */}
            <path d="M 310 100 L 370 100" stroke="#ffc436" strokeWidth="6" strokeDasharray="8,4" />
            <text x="340" y="85" fontSize="28" textAnchor="middle">⚡</text>

            {/* Action Box */}
            <rect x="390" y="40" width="260" height="120" rx="16" fill="#6c47ff" />
            <circle cx="430" cy="80" r="24" fill="rgba(255,255,255,0.2)" />
            <text x="430" y="88" fontSize="24" textAnchor="middle">🚀</text>
            <text x="470" y="75" fontSize="16" fontWeight="bold" fill="#fff">ACTION</text>
            <text x="470" y="100" fontSize="13" fill="#f0edff">Robot Leaps into Air</text>
            <text x="410" y="135" fontSize="11" fill="#ffc436" fontWeight="bold">CODE RESPONDS!</text>
          </svg>
        );

      case 'loop-circle-flow':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            <circle cx="350" cy="110" r="75" fill="none" stroke="#6c47ff" strokeWidth="8" strokeDasharray="14,6" />
            {/* Center Robot */}
            <circle cx="350" cy="110" r="50" fill="#f0edff" />
            <text x="350" y="115" fontSize="32" textAnchor="middle">🤖</text>
            <text x="350" y="140" fontSize="11" fontWeight="bold" fill="#6c47ff" textAnchor="middle">Repeat 4x</text>

            {/* Action Nodes */}
            <rect x="110" y="85" width="120" height="50" rx="10" fill="#22c7d9" />
            <text x="170" y="115" fontSize="13" fontWeight="bold" fill="#fff" textAnchor="middle">Step Forward</text>

            <rect x="470" y="85" width="120" height="50" rx="10" fill="#ffc436" />
            <text x="530" y="115" fontSize="13" fontWeight="bold" fill="#1e2448" textAnchor="middle">Turn Right</text>

            <text x="350" y="25" fontSize="14" fontWeight="bold" fill="#6c47ff" textAnchor="middle">↺ Loop saves 8 redundant lines of code!</text>
          </svg>
        );

      case 'if-else-branch':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            {/* Start */}
            <rect x="50" y="85" width="120" height="50" rx="10" fill="#585d82" />
            <text x="110" y="115" fill="#fff" fontWeight="bold" fontSize="13" textAnchor="middle">Check Path</text>

            <line x1="175" y1="110" x2="235" y2="110" stroke="#585d82" strokeWidth="3" />

            {/* Diamond Decision */}
            <polygon points="300,50 360,110 300,170 240,110" fill="#ffc436" stroke="#b8860b" strokeWidth="3" />
            <text x="300" y="105" fontSize="12" fontWeight="bold" fill="#1e2448" textAnchor="middle">Path Clear?</text>
            <text x="300" y="125" fontSize="10" fill="#1e2448" textAnchor="middle">Condition</text>

            {/* True Branch */}
            <line x1="360" y1="110" x2="430" y2="60" stroke="#2ecc71" strokeWidth="4" />
            <rect x="440" y="35" width="180" height="50" rx="10" fill="#2ecc71" />
            <text x="530" y="65" fill="#fff" fontWeight="bold" fontSize="13" textAnchor="middle">IF TRUE: Move Forward 👣</text>

            {/* False Branch */}
            <line x1="360" y1="110" x2="430" y2="160" stroke="#ff6b6b" strokeWidth="4" />
            <rect x="440" y="135" width="180" height="50" rx="10" fill="#ff6b6b" />
            <text x="530" y="165" fill="#fff" fontWeight="bold" fontSize="13" textAnchor="middle">ELSE: Jump / Turn ↩️</text>
          </svg>
        );

      case 'variable-box-visual':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Box 1 */}
            <rect x="80" y="40" width="160" height="120" rx="14" fill="#fff" stroke="#6c47ff" strokeWidth="4" />
            <rect x="95" y="25" width="130" height="30" rx="6" fill="#6c47ff" />
            <text x="160" y="45" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">let playerScore</text>
            <text x="160" y="115" fontSize="36" fontWeight="bold" fill="#1e2448" textAnchor="middle">50</text>
            <text x="160" y="145" fontSize="11" fill="#585d82" textAnchor="middle">Data Type: Number</text>

            {/* Plus sign */}
            <text x="280" y="110" fontSize="32" fontWeight="bold" fill="#6c47ff" textAnchor="middle">➔</text>
            <text x="280" y="80" fontSize="12" fill="#2ecc71" fontWeight="bold" textAnchor="middle">+10 Coins</text>

            {/* Box 2 Updated */}
            <rect x="330" y="40" width="160" height="120" rx="14" fill="#e9fbf0" stroke="#2ecc71" strokeWidth="4" />
            <rect x="345" y="25" width="130" height="30" rx="6" fill="#2ecc71" />
            <text x="410" y="45" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">playerScore</text>
            <text x="410" y="115" fontSize="36" fontWeight="bold" fill="#15803d" textAnchor="middle">60</text>
            <text x="410" y="145" fontSize="11" fill="#15803d" textAnchor="middle">Updated Value!</text>

            {/* Box 3 String */}
            <rect x="520" y="40" width="150" height="120" rx="14" fill="#fff" stroke="#22c7d9" strokeWidth="4" />
            <rect x="530" y="25" width="130" height="30" rx="6" fill="#22c7d9" />
            <text x="595" y="45" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">let playerName</text>
            <text x="595" y="110" fontSize="20" fontWeight="bold" fill="#1e2448" textAnchor="middle">"Aisha"</text>
            <text x="595" y="145" fontSize="11" fill="#585d82" textAnchor="middle">Data Type: String</text>
          </svg>
        );

      case 'function-box-flow':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            <rect x="60" y="30" width="580" height="140" rx="16" fill="#1e2448" />
            <text x="90" y="65" fill="#ffc436" fontFamily="monospace" fontSize="16" fontWeight="bold">function victoryDance() &#123;</text>
            <text x="120" y="95" fill="#22c7d9" fontFamily="monospace" fontSize="14">robot.jump(100);</text>
            <text x="120" y="120" fill="#22c7d9" fontFamily="monospace" fontSize="14">robot.spin(360);</text>
            <text x="120" y="145" fill="#2ecc71" fontFamily="monospace" fontSize="14">playCheerSound();</text>
            <text x="90" y="165" fill="#ffc436" fontFamily="monospace" fontSize="16" fontWeight="bold">&#125;</text>

            <rect x="420" y="60" width="190" height="80" rx="12" fill="#6c47ff" />
            <text x="515" y="95" fill="#fff" fontWeight="bold" fontSize="14" textAnchor="middle">Call: victoryDance();</text>
            <text x="515" y="120" fill="#f0edff" fontSize="11" textAnchor="middle">Runs all 3 steps anytime!</text>
          </svg>
        );

      case 'debugging-cycle-circle':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            <circle cx="350" cy="110" r="80" fill="none" stroke="#22c7d9" strokeWidth="6" strokeDasharray="10,6" />
            <circle cx="350" cy="110" r="45" fill="#ffffff" stroke="#e3e7f8" strokeWidth="2" />
            <text x="350" y="118" fontSize="28" textAnchor="middle">🔍</text>

            {/* 4 Nodes */}
            <rect x="290" y="10" width="120" height="36" rx="18" fill="#ff6b6b" />
            <text x="350" y="33" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">1. Spot Bug 🐛</text>

            <rect x="520" y="92" width="120" height="36" rx="18" fill="#ffc436" />
            <text x="580" y="115" fill="#1e2448" fontWeight="bold" fontSize="12" textAnchor="middle">2. Isolate Line</text>

            <rect x="290" y="174" width="120" height="36" rx="18" fill="#6c47ff" />
            <text x="350" y="197" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">3. Fix Code ✍️</text>

            <rect x="60" y="92" width="120" height="36" rx="18" fill="#2ecc71" />
            <text x="120" y="115" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">4. Test Again ✓</text>
          </svg>
        );

      // -----------------------------------------------------------------------
      // AI Course Diagrams
      // -----------------------------------------------------------------------
      case 'ai-definition-comparison':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            {/* Human Intelligence */}
            <rect x="60" y="30" width="260" height="160" rx="16" fill="#fff" stroke="#ff6b6b" strokeWidth="3" />
            <text x="190" y="70" fontSize="32" textAnchor="middle">🧠</text>
            <text x="190" y="100" fontSize="15" fontWeight="bold" fill="#1e2448" textAnchor="middle">Human Intelligence</text>
            <text x="190" y="125" fontSize="12" fill="#585d82" textAnchor="middle">• Empathy & Emotions</text>
            <text x="190" y="145" fontSize="12" fill="#585d82" textAnchor="middle">• Common Sense & Context</text>
            <text x="190" y="165" fontSize="12" fill="#585d82" textAnchor="middle">• Consciousness & Morals</text>

            {/* VS */}
            <circle cx="350" cy="110" r="24" fill="#e3e7f8" />
            <text x="350" y="116" fontWeight="bold" fontSize="14" fill="#585d82" textAnchor="middle">VS</text>

            {/* Machine AI */}
            <rect x="380" y="30" width="260" height="160" rx="16" fill="#fff" stroke="#22c7d9" strokeWidth="3" />
            <text x="510" y="70" fontSize="32" textAnchor="middle">🤖</text>
            <text x="510" y="100" fontSize="15" fontWeight="bold" fill="#1e2448" textAnchor="middle">Artificial Intelligence</text>
            <text x="510" y="125" fontSize="12" fill="#585d82" textAnchor="middle">• Math & Probability</text>
            <text x="510" y="145" fontSize="12" fill="#585d82" textAnchor="middle">• Statistical Pattern Matching</text>
            <text x="510" y="165" fontSize="12" fill="#585d82" textAnchor="middle">• Trained on Datasets</text>
          </svg>
        );

      case 'traditional-vs-ml-flow':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Traditional */}
            <rect x="40" y="30" width="620" height="60" rx="12" fill="#f0edff" />
            <text x="60" y="65" fontWeight="bold" fontSize="13" fill="#6c47ff">Traditional:</text>
            <text x="180" y="65" fontSize="13" fill="#1e2448">Human Rules + Input Data ➔</text>
            <rect x="420" y="42" width="120" height="36" rx="8" fill="#6c47ff" />
            <text x="480" y="65" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">Answers</text>

            {/* Machine Learning */}
            <rect x="40" y="110" width="620" height="60" rx="12" fill="#e4f9fc" />
            <text x="60" y="145" fontWeight="bold" fontSize="13" fill="#0088aa">Machine Learning:</text>
            <text x="210" y="145" fontSize="13" fill="#1e2448">Input Data + Answers ➔</text>
            <rect x="420" y="122" width="200" height="36" rx="8" fill="#22c7d9" />
            <text x="520" y="145" fill="#1e2448" fontWeight="bold" fontSize="12" textAnchor="middle">Learned Rules (Model)!</text>
          </svg>
        );

      case 'training-testing-split':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            <rect x="60" y="60" width="420" height="80" rx="12" fill="#22c7d9" />
            <text x="270" y="105" fill="#fff" fontWeight="bold" fontSize="18" textAnchor="middle">80% Training Data (Study)</text>

            <rect x="490" y="60" width="150" height="80" rx="12" fill="#ffc436" />
            <text x="565" y="105" fill="#1e2448" fontWeight="bold" fontSize="16" textAnchor="middle">20% Testing (Exam)</text>

            <text x="350" y="170" fill="#585d82" fontSize="12" textAnchor="middle">The testing data is kept completely hidden during training to measure real accuracy.</text>
          </svg>
        );

      case 'pixel-grid-layers':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Step 1: Pixels */}
            <rect x="40" y="50" width="110" height="100" rx="10" fill="#1e2448" />
            <text x="95" y="95" fontSize="24" textAnchor="middle">▦</text>
            <text x="95" y="125" fill="#fff" fontSize="11" textAnchor="middle">Raw Pixels</text>

            <line x1="160" y1="100" x2="200" y2="100" stroke="#6c47ff" strokeWidth="3" />

            {/* Step 2: Edges */}
            <rect x="210" y="50" width="110" height="100" rx="10" fill="#f0edff" stroke="#6c47ff" strokeWidth="2" />
            <text x="265" y="95" fontSize="24" textAnchor="middle">╱ ╲</text>
            <text x="265" y="125" fill="#1e2448" fontSize="11" textAnchor="middle">Edges & Lines</text>

            <line x1="330" y1="100" x2="370" y2="100" stroke="#6c47ff" strokeWidth="3" />

            {/* Step 3: Shapes */}
            <rect x="380" y="50" width="110" height="100" rx="10" fill="#f0edff" stroke="#6c47ff" strokeWidth="2" />
            <text x="435" y="95" fontSize="24" textAnchor="middle">◯ △</text>
            <text x="435" y="125" fill="#1e2448" fontSize="11" textAnchor="middle">Shapes (Ears)</text>

            <line x1="500" y1="100" x2="540" y2="100" stroke="#6c47ff" strokeWidth="3" />

            {/* Step 4: Classification */}
            <rect x="550" y="50" width="110" height="100" rx="10" fill="#2ecc71" />
            <text x="605" y="95" fontSize="26" textAnchor="middle">🐱</text>
            <text x="605" y="125" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">98% Cat!</text>
          </svg>
        );

      case 'generative-prediction-chain':
        return (
          <svg viewBox="0 0 700 180" className="visual-svg" role="img" aria-label={alt}>
            <rect x="40" y="60" width="160" height="55" rx="8" fill="#f0edff" stroke="#6c47ff" strokeWidth="2" />
            <text x="120" y="93" fontWeight="bold" fontSize="14" fill="#6c47ff" textAnchor="middle">Prompt: "The sky is"</text>

            <line x1="210" y1="87" x2="250" y2="87" stroke="#6c47ff" strokeWidth="4" />

            {/* Probabilities */}
            <rect x="260" y="30" width="190" height="35" rx="6" fill="#2ecc71" />
            <text x="355" y="52" fill="#fff" fontWeight="bold" fontSize="13" textAnchor="middle">"blue" — 88% ✓</text>

            <rect x="260" y="72" width="140" height="32" rx="6" fill="#e3e7f8" />
            <text x="330" y="93" fill="#1e2448" fontSize="12" textAnchor="middle">"dark" — 8%</text>

            <rect x="260" y="110" width="90" height="32" rx="6" fill="#e3e7f8" />
            <text x="305" y="131" fill="#1e2448" fontSize="12" textAnchor="middle">"falling" — 3%</text>

            <text x="560" y="93" fontSize="13" fontWeight="bold" fill="#1e2448" textAnchor="middle">Generative Model selects highest probability token!</text>
          </svg>
        );

      case 'prompt-formula-blocks':
        return (
          <svg viewBox="0 0 700 180" className="visual-svg" role="img" aria-label={alt}>
            <rect x="40" y="50" width="130" height="80" rx="12" fill="#6c47ff" />
            <text x="105" y="85" fill="#fff" fontWeight="bold" fontSize="16" textAnchor="middle">ROLE</text>
            <text x="105" y="108" fill="#f0edff" fontSize="11" textAnchor="middle">"Science Teacher"</text>

            <text x="185" y="95" fontSize="24" fontWeight="bold" fill="#6c47ff" textAnchor="middle">+</text>

            <rect x="200" y="50" width="130" height="80" rx="12" fill="#22c7d9" />
            <text x="265" y="85" fill="#fff" fontWeight="bold" fontSize="16" textAnchor="middle">TASK</text>
            <text x="265" y="108" fill="#e4f9fc" fontSize="11" textAnchor="middle">"Explain Gravity"</text>

            <text x="345" y="95" fontSize="24" fontWeight="bold" fill="#22c7d9" textAnchor="middle">+</text>

            <rect x="360" y="50" width="140" height="80" rx="12" fill="#ffc436" />
            <text x="430" y="85" fill="#1e2448" fontWeight="bold" fontSize="16" textAnchor="middle">CONTEXT</text>
            <text x="430" y="108" fill="#1e2448" fontSize="11" textAnchor="middle">"For 8-year-olds"</text>

            <text x="515" y="95" fontSize="24" fontWeight="bold" fill="#ffc436" textAnchor="middle">+</text>

            <rect x="530" y="50" width="130" height="80" rx="12" fill="#2ecc71" />
            <text x="595" y="85" fill="#fff" fontWeight="bold" fontSize="16" textAnchor="middle">FORMAT</text>
            <text x="595" y="108" fill="#e9fbf0" fontSize="11" textAnchor="middle">"3 Bullet Points"</text>
          </svg>
        );

      // -----------------------------------------------------------------------
      // Cybersecurity Course Diagrams
      // -----------------------------------------------------------------------
      case 'cia-triad-shield':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            <polygon points="350,20 520,170 180,170" fill="#f0edff" stroke="#6c47ff" strokeWidth="4" />
            <circle cx="350" cy="115" r="40" fill="#6c47ff" />
            <text x="350" y="124" fontSize="28" textAnchor="middle">🛡️</text>

            {/* Corner 1: Confidentiality */}
            <rect x="260" y="5" width="180" height="35" rx="8" fill="#6c47ff" />
            <text x="350" y="27" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">1. Confidentiality (Privacy)</text>

            {/* Corner 2: Integrity */}
            <rect x="470" y="160" width="180" height="35" rx="8" fill="#22c7d9" />
            <text x="560" y="182" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">2. Integrity (Accuracy)</text>

            {/* Corner 3: Availability */}
            <rect x="50" y="160" width="180" height="35" rx="8" fill="#2ecc71" />
            <text x="140" y="182" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">3. Availability (Uptime)</text>
          </svg>
        );

      case 'password-strength-meter':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Weak */}
            <rect x="60" y="40" width="260" height="120" rx="14" fill="#fff" stroke="#ff4d4d" strokeWidth="3" />
            <text x="90" y="75" fontSize="20">❌</text>
            <text x="120" y="75" fontWeight="bold" fontSize="14" fill="#ff4d4d">Weak: "cat123"</text>
            <rect x="80" y="95" width="40" height="12" rx="6" fill="#ff4d4d" />
            <rect x="125" y="95" width="160" height="12" rx="6" fill="#e3e7f8" />
            <text x="80" y="135" fontSize="12" fill="#ff4d4d" fontWeight="bold">Cracked in: 0.0001 seconds</text>

            {/* Strong */}
            <rect x="380" y="40" width="260" height="120" rx="14" fill="#fff" stroke="#2ecc71" strokeWidth="3" />
            <text x="410" y="75" fontSize="20">✅</text>
            <text x="440" y="75" fontWeight="bold" fontSize="13" fill="#2ecc71">"Blue-Rocket-Dance-48!"</text>
            <rect x="400" y="95" width="220" height="12" rx="6" fill="#2ecc71" />
            <text x="400" y="135" fontSize="12" fill="#2ecc71" fontWeight="bold">Cracked in: 2,000+ years!</text>
          </svg>
        );

      case 'two-factor-double-gate':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            <rect x="60" y="40" width="240" height="120" rx="16" fill="#fff" stroke="#6c47ff" strokeWidth="3" />
            <text x="100" y="80" fontSize="28">🔑</text>
            <text x="140" y="75" fontWeight="bold" fontSize="15" fill="#1e2448">Lock 1: Password</text>
            <text x="140" y="100" fontSize="12" fill="#585d82">Something you KNOW</text>
            <text x="80" y="135" fontSize="11" fill="#6c47ff" fontWeight="bold">Secret Passphrase</text>

            <text x="330" y="110" fontSize="28" fontWeight="bold" fill="#6c47ff" textAnchor="middle">+</text>

            <rect x="380" y="40" width="260" height="120" rx="16" fill="#fff" stroke="#22c7d9" strokeWidth="3" />
            <text x="420" y="80" fontSize="28">📱</text>
            <text x="460" y="75" fontWeight="bold" fontSize="15" fill="#1e2448">Lock 2: Phone Code</text>
            <text x="460" y="100" fontSize="12" fill="#585d82">Something you HAVE</text>
            <text x="400" y="135" fontSize="11" fill="#0088aa" fontWeight="bold">One-Time SMS (6 digits)</text>
          </svg>
        );

      // -----------------------------------------------------------------------
      // Web Development Course Diagrams
      // -----------------------------------------------------------------------
      case 'client-server-roundtrip':
        return (
          <svg viewBox="0 0 700 200" className="visual-svg" role="img" aria-label={alt}>
            {/* Client Laptop */}
            <rect x="60" y="40" width="160" height="120" rx="14" fill="#6c47ff" />
            <text x="140" y="90" fontSize="36" textAnchor="middle">💻</text>
            <text x="140" y="125" fill="#fff" fontWeight="bold" fontSize="14" textAnchor="middle">Client (Browser)</text>
            <text x="140" y="145" fill="#f0edff" fontSize="11" textAnchor="middle">Chrome, Safari</text>

            {/* Request Arrow */}
            <line x1="230" y1="80" x2="450" y2="80" stroke="#ffc436" strokeWidth="4" strokeDasharray="6,4" />
            <polygon points="460,80 448,73 448,87" fill="#ffc436" />
            <text x="345" y="70" fontSize="12" fontWeight="bold" fill="#ffc436" textAnchor="middle">1. HTTP GET Request ➔</text>

            {/* Response Arrow */}
            <line x1="450" y1="120" x2="230" y2="120" stroke="#2ecc71" strokeWidth="4" strokeDasharray="6,4" />
            <polygon points="220,120 232,113 232,127" fill="#2ecc71" />
            <text x="345" y="140" fontSize="12" fontWeight="bold" fill="#2ecc71" textAnchor="middle">◀ 2. HTML, CSS, JS Files</text>

            {/* Web Server */}
            <rect x="470" y="40" width="170" height="120" rx="14" fill="#1e2448" />
            <text x="555" y="90" fontSize="36" textAnchor="middle">🖥️</text>
            <text x="555" y="125" fill="#fff" fontWeight="bold" fontSize="14" textAnchor="middle">Web Server</text>
            <text x="555" y="145" fill="#22c7d9" fontSize="11" textAnchor="middle">Runs 24/7 in Cloud</text>
          </svg>
        );

      case 'css-box-model-layers':
        return (
          <svg viewBox="0 0 700 230" className="visual-svg" role="img" aria-label={alt}>
            {/* Margin (Orange) */}
            <rect x="80" y="20" width="540" height="190" rx="14" fill="#fff8e6" stroke="#ffc436" strokeWidth="3" strokeDasharray="6,4" />
            <text x="100" y="42" fill="#b8860b" fontWeight="bold" fontSize="12">MARGIN (Outside spacing)</text>

            {/* Border (Red) */}
            <rect x="120" y="50" width="460" height="135" rx="10" fill="#fff0f0" stroke="#ff6b6b" strokeWidth="3" />
            <text x="140" y="70" fill="#ff6b6b" fontWeight="bold" fontSize="12">BORDER (Perimeter edge)</text>

            {/* Padding (Green) */}
            <rect x="160" y="80" width="380" height="85" rx="8" fill="#e9fbf0" stroke="#2ecc71" strokeWidth="2" strokeDasharray="4,2" />
            <text x="180" y="100" fill="#15803d" fontWeight="bold" fontSize="12">PADDING (Inner cushion)</text>

            {/* Content (Blue) */}
            <rect x="220" y="110" width="260" height="40" rx="6" fill="#22c7d9" />
            <text x="350" y="135" fill="#fff" fontWeight="bold" fontSize="13" textAnchor="middle">CONTENT (Text, Image)</text>
          </svg>
        );

      case 'dom-tree-branches':
        return (
          <svg viewBox="0 0 700 220" className="visual-svg" role="img" aria-label={alt}>
            {/* Root Document */}
            <rect x="290" y="10" width="120" height="35" rx="8" fill="#1e2448" />
            <text x="350" y="32" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">document</text>

            <line x1="350" y1="45" x2="350" y2="70" stroke="#6c47ff" strokeWidth="3" />

            {/* HTML */}
            <rect x="290" y="70" width="120" height="35" rx="8" fill="#6c47ff" />
            <text x="350" y="92" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">&lt;html&gt;</text>

            {/* Branches to Head and Body */}
            <line x1="320" y1="105" x2="200" y2="135" stroke="#6c47ff" strokeWidth="2" />
            <line x1="380" y1="105" x2="500" y2="135" stroke="#6c47ff" strokeWidth="2" />

            {/* Head */}
            <rect x="140" y="135" width="120" height="35" rx="8" fill="#585d82" />
            <text x="200" y="157" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">&lt;head&gt;</text>

            {/* Body */}
            <rect x="440" y="135" width="120" height="35" rx="8" fill="#22c7d9" />
            <text x="500" y="157" fill="#fff" fontWeight="bold" fontSize="12" textAnchor="middle">&lt;body&gt;</text>

            {/* Sub-elements of Body */}
            <line x1="470" y1="170" x2="400" y2="185" stroke="#22c7d9" strokeWidth="2" />
            <line x1="530" y1="170" x2="600" y2="185" stroke="#22c7d9" strokeWidth="2" />

            <rect x="360" y="185" width="80" height="28" rx="6" fill="#ffc436" />
            <text x="400" y="203" fill="#1e2448" fontWeight="bold" fontSize="11" textAnchor="middle">&lt;h1&gt;</text>

            <rect x="560" y="185" width="80" height="28" rx="6" fill="#2ecc71" />
            <text x="600" y="203" fill="#fff" fontWeight="bold" fontSize="11" textAnchor="middle">&lt;button&gt;</text>
          </svg>
        );

      default:
        // Generic fallback diagram with clean iconography
        return (
          <div style={{
            background: 'linear-gradient(135deg, #f5f7fc 0%, #ece7ff 100%)',
            border: '2px solid #e3e7f8',
            borderRadius: '16px',
            padding: '40px 20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>💡</div>
            <h4 style={{ margin: 0, color: 'var(--ink)' }}>{caption}</h4>
          </div>
        );
    }
  };

  return (
    <figure className="lesson-diagram-card" style={{
      margin: '24px 0',
      background: 'var(--card-bg)',
      border: '1px solid var(--border-line)',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }}>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        {renderGraphic()}
      </div>
      <figcaption style={{
        marginTop: '12px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'var(--ink-secondary)',
        fontStyle: 'italic'
      }}>
        📌 {caption}
      </figcaption>
    </figure>
  );
};
