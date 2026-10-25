# 📋 CodeQuest — Roadmap & Future Improvements (TODO.md)

This document outlines recommended future enhancements, educational features, and engineering upgrades for CodeQuest.

---

## 🎮 1. Gameplay & Educational Activities
 
- [x] **Multi-level Maze Challenges (Completed in V2 Upgrade)**:
  - Added 10 progressive levels with unique layouts, move constraints, hints, and collision checks.
  - Level unlock progression and duplicate reward prevention.
- [ ] **Collectible Bonus Stars**:
  - Add optional collectible bonus stars on the grid for extra logic challenges and cosmetic unlocks.
- [ ] **Expanded Block Coding Palette**:
  - Add `Turn Left ↩️` and `Turn Right ↪️`.
  - Add conditional logic blocks (`If path blocked, jump`).
  - Add custom loop counters (`Repeat [N] times`).
- [ ] **Interactive AI Vision Mini-Game**:
  - A friendly visual classifier simulation: train a robot to distinguish between drawings of cats vs dogs using simple pixel grid features.
- [ ] **Sound Synthesis Lab**:
  - Teach frequencies and sequencing by letting children program simple musical tunes using code loops.

---

## 🔊 2. Accessibility & Audio-Visual Experience

- [ ] **Voice Narration (Text-to-Speech)**:
  - Add audio read-aloud buttons for questions and explanations to support younger children who are still developing reading fluency in Burmese and English.
- [ ] **High Contrast / Dark Mode**:
  - Add a kid-friendly bedtime reading mode with softer contrast.
- [ ] **Dyslexia-Friendly Font Option**:
  - Support OpenDyslexic or Atkinson Hyperlegible as a toggleable accessibility font.

---

## 🏆 3. Gamification & Achievements

- [ ] **Printable Certificates**:
  - Allow children to generate and download a printable "Junior Coder" PDF certificate when completing all 4 learning path stages.
- [ ] **Avatar Customizer**:
  - Allow kids to unlock robot colors, hats, and accessories using their earned XP.
- [ ] **Daily Coding Streaks**:
  - Friendly daily check-in star calendar (stored locally).

---

## 👨‍👩‍👧 4. Parent & Teacher Portal

- [ ] **Parental Gate**:
  - Add an adult verification question (e.g., simple multiplication problem) before accessing detailed reset or advanced settings.
- [ ] **Printable Activity Worksheets**:
  - Provide offline printable PDF coding sheets (pen-and-paper maze puzzles) for screen-free learning.
- [ ] **Classroom Mode**:
  - Ability to export local progress as a lightweight JSON file or QR code for teachers.

---

## 🔒 5. Architecture & Security Enhancements

- [ ] **Safe API Gateway (Optional Cloud AI)**:
  - If connecting to a live LLM (such as Gemini API) in the future:
    - Never place API keys in client-side frontend code.
    - Implement a secure backend proxy (e.g. Node.js/Cloud Run) with strict content filtering, pre-prompt guardrails, and age-appropriate output sanitization.
- [ ] **PWA (Progressive Web App)**:
  - Add `manifest.json` and a Service Worker for 100% offline access on tablets and Chromebooks in classrooms with limited internet.
- [ ] **Automated Testing Suite**:
  - Add Jest / Vitest unit tests for the maze pathfinding, quiz scoring, and state persistence logic.
