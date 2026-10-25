# 🚀 CodeQuest — AI & Coding Adventure for Kids

**CodeQuest** is a colorful, responsive, child-safe web learning platform designed to introduce young learners (ages 6–14) to the foundations of programming and Artificial Intelligence through games, puzzles, and interactive activities.

Supports both **မြန်မာ (Burmese)** and **English** with real-time bilingual switching.

---

## 🌟 Key Features

1. **🤖 Robot Maze Adventure (10 Progressive Levels)**:
   - Teach sequence logic and computational thinking across **10 unique layouts**.
   - Progressive difficulty: straight lines, corner turns, zigzag passages, spirals, fork-in-the-road dead ends, fortress gates, and labyrinth hurdles.
   - Dynamic Level Selector with level unlocking and progress tracking (`localStorage`).
   - Move counter with calibrated **Move Limits** to encourage algorithmic efficiency.
   - Interactive **Run ▶**, **Reset ↻**, and **Hint 💡** buttons with live sequence pathing.
   - Collision detection preventing moves through walls with audio-visual shake feedback.
   - Strict duplicate reward prevention so replaying levels reinforces learning without XP farming.
   - Responsive touch buttons and keyboard navigation (Arrow keys + WASD).

2. **🧠 Brain Quiz**:
   - 4 fundamental questions covering algorithms, loops, machine learning training data, and online safety.
   - Immediate feedback with clear explanations of *why* an answer is correct or incorrect.

3. **✨ AI Detective Lab (Simulation)**:
   - Learn the core mechanism of supervised machine learning: identifying patterns from dataset examples.
   - Teaches children that AI is only as good as its training data and emphasizes human supervision.

4. **🧱 Code Builder (Visual Block Sandbox & Animated Stage)**:
   - Visual drag-and-drop or tap-to-add coding blocks (`Move right`, `Jump`, `Repeat ×2`).
   - Real-time animated runner stage where the robot character physically moves and jumps according to the user's program sequence.

5. **💬 AI Tutor (Kid-Safe Transparent Simulation)**:
   - 100% offline and kid-safe: does **not** send private messages or prompts to external cloud servers.
   - Provides clear explanations for key topics like algorithms, loops, AI, bugs, and cyber safety.
   - Explicitly displays that it is a safe local simulation.

6. **🏆 XP, Levels & Badges**:
   - Gamified progress system (Experience points, level advancement every 50 XP, and 5 unlockable badges).
   - Stored locally in the browser (`localStorage`) without requiring account registration or personal data.

7. **👨‍👩‍👧 Parent & Educator Zone**:
   - Transparent overview of competencies practiced.
   - Detailed privacy commitment respecting COPPA / GDPR-K child data standards.

---

## 📂 Project Structure

```text
codequest/
├── index.html              # Semantic HTML5 layout with bilingual data tags
├── style.css               # Clean, responsive CSS with child-friendly color palette
├── maze-data.js            # 10 Progressive maze levels & pure pathfinding collision logic
├── script.js               # Modular JavaScript (state, games, audio synth, i18n, UI)
├── codequest_mvp_v2.html   # Preserved original monolithic MVP file for reference
├── README.md               # Documentation and execution instructions
└── TODO.md                 # Roadmap of future enhancements
```

---

## 💻 How to Run the Project

You do **not** need complex build tools or database setup. CodeQuest runs in any modern web browser.

### Option 1: Direct File Launch
Simply double-click `index.html` (or right-click `index.html` and choose **Open with > Google Chrome / Microsoft Edge / Safari / Firefox**).

### Option 2: Using Python's Built-in Local Server
Open PowerShell or your terminal in the `codequest` folder and run:
```bash
python -m http.server 3000
```
Then open your browser at: `http://localhost:3000`

### Option 3: Using Node.js (npx)
```bash
npx serve .
```

### Option 4: VS Code / Antigravity IDE Live Server
Right-click `index.html` in the file explorer and select **Open with Live Server**.

---

## 🛡️ Child Safety & Privacy Principles

- **No Personal Data Collected**: CodeQuest does not ask children for full names, emails, addresses, school info, photos, or passwords.
- **Zero External Tracking**: No third-party tracking scripts, analytics cookies, or advertisements.
- **Transparent AI**: The AI Tutor clearly specifies that it operates via kid-safe offline simulation, protecting children from unexpected generated content.
- **Local Storage Only**: All XP, level progress, and badges stay on the local device.

---

## 🌐 Language Support

Switch between **မြန်မာစာ (Burmese)** and **English** at any time by clicking the language button in the top navigation bar. Every mission, status message, hint, and button translates smoothly.
