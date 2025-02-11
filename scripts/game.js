class Game {
  constructor() {
    this.score = 0;
    this.gameStarted = false;
    this.elapsedTime = 60;
    this.spawnInterval = 2000;
  }

  start() {
    this.gameStarted = true;

    const scoreSpan = document.getElementById('score-value');
    const timerSpan = document.getElementById('timer-value');

    const startButton = document.getElementById('start-button');
    startButton.style.display = 'none';

    timerSpan.innerHTML = this.elapsedTime;

    const moleElement = document.getElementById('mole');

    const timerInterval = setInterval(() => {
      if (this.gameStarted) {
        --this.elapsedTime;
        timerSpan.innerHTML = this.elapsedTime;

        if (this.elapsedTime <= 0) {
          this.stop();
          clearInterval(timerInterval);
        }
      }
    }, 1000);

    const mole = new Mole();

    moleElement.addEventListener('click', () => {
      if (mole.isClicked()) return;
      mole.click();

      this.score++;
      scoreSpan.innerHTML = this.score;
      moleElement.classList.add('hit');
      setTimeout(() => {
        mole.hide();
      }, 100);
    });

    setInterval(() => {
      mole.hide();
      setTimeout(() => {
        mole.randomPosition();
        mole.show();
      }, 500);
    }, this.spawnInterval);
  }

  // https://chat.mistral.ai/chat/bd0c6dbc-e6dd-4f96-a465-ae0bdcad5d90
  calcSpeed (N, I, A) {
    const max = Math.ceil(N / A);
    const speed = N / (I * max);
    return speed;
  }

  stop() {
    this.gameStarted = false;
  }
}
