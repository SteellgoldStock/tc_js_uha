class Game {
  constructor() {
    this.score = 0;
    this.gameStarted = false;
    this.elapsedTime = 60;
  }

  start() {
    const timerSpan = document.getElementById('timer-value');
    timerSpan.innerHTML = this.elapsedTime;

    this.gameStarted = true;

    setInterval(() => {
      if (this.gameStarted) {
        --this.elapsedTime;
        timerSpan.innerHTML = this.elapsedTime;
      }
    }, 1000);

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

  // parseTime() {
  //   const minutes = Math.floor(this.elapsedTime / 60);
  //   const seconds = this.elapsedTime % 60;

  //   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  // }

  stop() {
    this.gameStarted = false;
  }
}