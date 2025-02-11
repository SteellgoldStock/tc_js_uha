class Game {
  constructor() {
    this.score = 0;
    this.gameStarted = false;

    this.elapsedTime = 20;
    this.defaultTime = 20;

    this.spawnInterval = 2000;
  }

  start(
    baseSpeed = 2000,
    time = 20
  ) {
    this.gameStarted = true;
    this.score = 0;

    this.elapsedTime = time || 20;
    this.defaultTime = time || 20;

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

      speedSpan.innerHTML = Math.floor(this.spawnInterval) + 'ms';
    }

    speedInterval(speedInterval, this.spawnInterval);
  }

  stop() {
    this.gameStarted = false;

    const gameAreaContainer = document.getElementById("game-area");
    const gameInfoContainer = document.getElementById("info-container");
    gameAreaContainer.style.display = 'none';
    gameInfoContainer.style.display = 'none';

    const message = document.getElementById('end-message');
    message.style.display = 'block';

    const moleHits = document.getElementById('mole-hits');
    moleHits.innerHTML = this.score;

    const gameTime = document.getElementById('game-time');
    gameTime.innerHTML = this.defaultTime;

    const finalSpeed = document.getElementById('final-speed');
    finalSpeed.innerHTML = Math.floor(this.spawnInterval) + 'ms';
  }
}
