import './mole.js';

class Game {
  constructor() {
    this.score = 0;
    this.gameStarted = false;
    this.elapsedTime = 0;
  }

  start() {
    this.gameStarted = true;

    const mole = new Mole();

    mole.randomPosition();
    mole.show();

    setInterval(() => {
      mole.hide();
      setTimeout(() => {
        mole.randomPosition();
        mole.show();
      }, 500);
    }, 2000);
  }

  stop() {
    this.gameStarted = false;
  }
}