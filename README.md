# 🚀 CodeQuest (Nyan Learn) — AI & Coding Adventure for Kids

**CodeQuest** is a colorful, responsive, child-safe web learning platform designed to introduce young learners (ages 5 through adults) to the foundations of programming and Artificial Intelligence through games, puzzles, and interactive activities.

Supports both **မြန်မာ (Burmese)** and **English** with real-time bilingual switching.

---

## 🌟 Modern Architecture & Key Technologies

Upgraded to an enterprise-grade, scalable modern frontend architecture:

- **⚛️ React 18 & TypeScript**: Strongly-typed component architecture with strict null checks and clean state separation.
- **⚡ Vite 5**: Ultra-fast hot module reloading, instant dev server, and optimized production bundling.
- **🎮 Phaser 3 (Interactive 2D Game Engine)**: Powers the dynamic 2D Robot Maze game with rich animations, star float tweens, and smooth transitions alongside accessible DOM fallback rendering.
- **🧩 Google Blockly (`^11.1.1`)**: Industry-standard visual programming workspace with custom child-friendly blocks, drag-and-drop workspace, and live JavaScript code generation.
- **🔊 Web Audio API Synthesizer**: Zero-dependency procedural sound generator for footsteps, jump leaps, star collection chimes, and success chords with a gentle sound toggle.
- **🧪 Vitest 2**: Automated unit testing verifying pure collision engines, BFS pathfinding, and all 10 maze levels.
- **💾 Safe Local Storage & Migration**: Seamless schema migration maintaining backward compatibility with legacy `localStorage` data.
- **🛡️ 100% Child-Safe (COPPA / GDPR-K)**: Zero external tracking, zero advertisements, and zero third-party data collection.

---

## 🎮 Features Overview

1. **🤖 Robot Maze Adventure (10 Progressive Levels)**:
   - 10 unique maze layouts from straight corridors to winding labyrinths.
   - Dual engine: Phaser 3 Canvas/WebGL mode + accessible DOM Grid mode.
   - Move counter with calibrated **Move Limits** to encourage algorithmic efficiency.
   - Keyboard navigation (Arrow keys + WASD) and touch directional controls.
   - Run ▶, Reset ↻, and BFS-powered Hint 💡 pathfinder.
   - Anti-farming XP protection: rewards awarded on first completion only.

2. **🧠 Brain Quiz**:
   - 4 foundational concepts covering algorithms, loops, machine learning training data, and online safety.
   - Instant bilingual explanations for right and wrong choices.

3. **✨ AI Detective Lab (Simulation)**:
   - Supervised classification dataset simulation (Fruit, Vehicle, Animal).
   - Teaches how AI models spot patterns from labelled training data.

4. **🧱 Code Builder (Google Blockly Sandbox & Animated Stage)**:
   - Visual drag-and-drop programming blocks with live JavaScript generation.
   - Animated runner stage where the robot character physically executes user commands.

5. **💬 AI Tutor (Kid-Safe Simulation)**:
   - 100% local, curated educational knowledge base (Algorithms, Loops, AI, Bugs, Cyber Safety).
   - Privacy-first: no child queries are sent to external cloud LLM servers.

6. **🏆 XP, Levels & Badges**:
   - Gamified mastery ranking (Levels every 50 XP) and 5 unlockable badges.

7. **🗺️ Learning Path**:
   - 4-step progressive curriculum guiding students from beginner to builder.

8. **👨‍👩‍👧 Parent & Educator Zone**:
   - Real-time learner progress dashboard, digital competency tracking, and safety commitments.

---

## 📂 Project Structure

```text
codequest/
├── src/
│   ├── components/         # Shared UI components
│   ├── context/            # React Contexts (ProgressContext, LanguageContext)
│   ├── features/
│   │   ├── ai-detective/   # Pattern recognition & classification lab
│   │   ├── blockly-builder/# Google Blockly visual workspace & runner stage
│   │   ├── home/           # Landing hero, stats, and missions showcase
│   │   ├── maze/           # Phaser 3 + DOM Robot Maze, BFS solver, 10 levels
│   │   ├── parent/         # Parent & educator dashboard
│   │   ├── path/           # 4-stage guided learning path
│   │   ├── quiz/           # Interactive bilingual quiz engine
│   │   ├── rewards/        # Badge showcase & achievement rank
│   │   └── tutor/          # Kid-safe simulated AI tutor
│   ├── i18n/               # Burmese & English translation dictionaries
│   ├── services/           # StorageService & AudioService Web Audio synth
│   ├── types/              # TypeScript interfaces and domain models
│   ├── App.tsx             # Root layout & view coordinator
│   └── main.tsx            # Application entry point
├── tests/                  # Vitest automated test suite
├── backup_v2/              # Preserved original HTML/JS/CSS prototype
├── index.html              # Modern Vite HTML entry point
├── style.css               # Design tokens & responsive styles
├── vite.config.ts          # Vite build & Vitest configuration
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/soeyehtut2002/Nyan-Learn-.git
cd Nyan-Learn-

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Running Unit Tests
```bash
# Run Vitest tests
npm test
```

### Building for Production
```bash
# TypeScript typecheck + production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License
This educational project is free and open-source under the MIT License.
