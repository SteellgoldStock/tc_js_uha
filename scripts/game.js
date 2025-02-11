class Game {
  constructor() {
    this.score = 0;
    this.gameStarted = false;

    this.elapsedTime = 60;
    this.spawnInterval = 2000;
  }

  start(
    baseSpeed = 2000,
    time = 60
  ) {
    this.gameStarted = true;
    this.elapsedTime = time || 60;
    this.spawnInterval = baseSpeed || 2000;

    const scoreSpan = document.getElementById('score-value');
    const timerSpan = document.getElementById('timer-value');
    const speedSpan = document.getElementById('speed-value');
    
    const gameOnboard = document.getElementById("game-onboard");
    const gameAreaContainer = document.getElementById("game-area");
    const gameInfoContainer = document.getElementById("info-container");
    gameOnboard.style.display = 'none';
    gameAreaContainer.style.display = 'block';
    gameInfoContainer.style.display = 'block';

    const startButton = document.getElementById('start-button');
    startButton.style.display = 'none';

    timerSpan.innerHTML = parseTimer(this.elapsedTime);

    const moleElement = document.getElementById('mole');

    let interval;

    const timerInterval = setInterval(() => {
      if (this.gameStarted) {
        --this.elapsedTime;
        timerSpan.innerHTML = parseTimer(this.elapsedTime);

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

      adjustInterval();

      moleElement.classList.add('hit');
      setTimeout(() => {
        mole.hide();
      }, 100);
    });

    const adjustInterval = () => {
      this.spawnInterval = this.spawnInterval * 0.98;
    }

    const speedInterval = () => {
      clearInterval(interval);

      mole.hide();
      setTimeout(() => {
        mole.randomPosition();
        mole.show();
      }, 500);

      interval = setInterval(speedInterval, this.spawnInterval)

      speedSpan.innerHTML = this.spawnInterval;
    }

    speedInterval(speedInterval, this.spawnInterval);
  }

  stop() {
    this.gameStarted = false;
  }
}
