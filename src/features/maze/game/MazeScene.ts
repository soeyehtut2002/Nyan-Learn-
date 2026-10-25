import Phaser from 'phaser';
import { MazeLevel } from '../../../types/maze.types';

export class MazeScene extends Phaser.Scene {
  private level!: MazeLevel;
  private robotSprite!: Phaser.GameObjects.Text;
  private goalSprite!: Phaser.GameObjects.Text;
  private tileObjects: Phaser.GameObjects.GameObject[] = [];
  private gridOffset = 20;

  constructor() {
    super({ key: 'MazeScene' });
  }

  init(data: { level: MazeLevel }) {
    this.level = data.level;
  }

  create() {
    this.drawBoard();
  }

  public updateLevel(level: MazeLevel) {
    this.level = level;
    this.drawBoard();
  }

  private drawBoard() {
    // Clean up existing tile objects
    this.tileObjects.forEach(obj => obj.destroy());
    this.tileObjects = [];

    const size = 5;
    const padding = 6;
    const tileWidth = 64;

    for (let i = 0; i < 25; i++) {
      const col = i % size;
      const row = Math.floor(i / size);
      const x = this.gridOffset + col * (tileWidth + padding) + tileWidth / 2;
      const y = this.gridOffset + row * (tileWidth + padding) + tileWidth / 2;

      const isWall = this.level.walls.includes(i);
      const isGoal = i === this.level.goal;

      // Draw background tile
      const bg = this.add.graphics();
      if (isWall) {
        bg.fillStyle(0xb5c6e8, 1);
        bg.fillRoundedRect(x - tileWidth / 2, y - tileWidth / 2, tileWidth, tileWidth, 10);
        bg.lineStyle(2, 0x9cb1da, 1);
        bg.strokeRoundedRect(x - tileWidth / 2, y - tileWidth / 2, tileWidth, tileWidth, 10);
        const wallText = this.add.text(x, y, '🪨', { fontSize: '26px' }).setOrigin(0.5);
        this.tileObjects.push(wallText);
      } else if (isGoal) {
        bg.fillStyle(0xd8fde6, 1);
        bg.fillRoundedRect(x - tileWidth / 2, y - tileWidth / 2, tileWidth, tileWidth, 10);
        bg.lineStyle(2, 0x6ce19b, 1);
        bg.strokeRoundedRect(x - tileWidth / 2, y - tileWidth / 2, tileWidth, tileWidth, 10);
      } else {
        bg.fillStyle(0xffffff, 1);
        bg.fillRoundedRect(x - tileWidth / 2, y - tileWidth / 2, tileWidth, tileWidth, 10);
        bg.lineStyle(2, 0xd9e9f5, 1);
        bg.strokeRoundedRect(x - tileWidth / 2, y - tileWidth / 2, tileWidth, tileWidth, 10);
      }

      this.tileObjects.push(bg);
    }

    // Draw Goal Star with gentle float tween
    const goalCol = this.level.goal % size;
    const goalRow = Math.floor(this.level.goal / size);
    const goalX = this.gridOffset + goalCol * (tileWidth + padding) + tileWidth / 2;
    const goalY = this.gridOffset + goalRow * (tileWidth + padding) + tileWidth / 2;

    this.goalSprite = this.add.text(goalX, goalY, '⭐', { fontSize: '32px' }).setOrigin(0.5);
    this.tweens.add({
      targets: this.goalSprite,
      scale: 1.15,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
    this.tileObjects.push(this.goalSprite);

    // Draw Robot Sprite at start position
    const startCol = this.level.start % size;
    const startRow = Math.floor(this.level.start / size);
    const startX = this.gridOffset + startCol * (tileWidth + padding) + tileWidth / 2;
    const startY = this.gridOffset + startRow * (tileWidth + padding) + tileWidth / 2;

    this.robotSprite = this.add.text(startX, startY, '🤖', { fontSize: '34px' }).setOrigin(0.5);
    this.robotSprite.setDepth(10);
    this.tileObjects.push(this.robotSprite);
  }

  public animateMove(targetPos: number, callback?: () => void) {
    if (!this.robotSprite) return;

    const size = 5;
    const padding = 6;
    const tileWidth = 64;

    const col = targetPos % size;
    const row = Math.floor(targetPos / size);
    const targetX = this.gridOffset + col * (tileWidth + padding) + tileWidth / 2;
    const targetY = this.gridOffset + row * (tileWidth + padding) + tileWidth / 2;

    this.tweens.add({
      targets: this.robotSprite,
      x: targetX,
      y: targetY,
      duration: 180,
      ease: 'Cubic.easeOut',
      onComplete: () => {
        if (callback) callback();
      }
    });
  }

  public shakeRobot() {
    if (!this.robotSprite) return;
    const originalX = this.robotSprite.x;
    this.tweens.add({
      targets: this.robotSprite,
      x: originalX + 6,
      duration: 50,
      yoyo: true,
      repeat: 3,
      onComplete: () => {
        if (this.robotSprite) this.robotSprite.x = originalX;
      }
    });
  }

  public celebrateGoal() {
    if (!this.goalSprite || !this.robotSprite) return;
    this.tweens.add({
      targets: [this.robotSprite, this.goalSprite],
      scale: 1.35,
      duration: 350,
      yoyo: true,
      repeat: 1,
      ease: 'Back.easeOut'
    });
  }

  public resetPosition(startPos: number) {
    if (!this.robotSprite) return;
    const size = 5;
    const padding = 6;
    const tileWidth = 64;
    const col = startPos % size;
    const row = Math.floor(startPos / size);
    this.robotSprite.x = this.gridOffset + col * (tileWidth + padding) + tileWidth / 2;
    this.robotSprite.y = this.gridOffset + row * (tileWidth + padding) + tileWidth / 2;
    this.robotSprite.setScale(1);
  }
}
