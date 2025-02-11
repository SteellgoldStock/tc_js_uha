class Mole {
  constructor() {
    this.mole = document.getElementById('mole');
  }

  show() {
    this.mole.style.display = 'block';
  }

  hide() {
    this.mole.style.display = 'none';
  }

  setPosition(x, y) {
    this.mole.style.left = `${x}px`;
    this.mole.style.top = `${y}px`;
  }

  randomPosition() {
    const bodyRect = document.body.getBoundingClientRect();
    const maxX = bodyRect.width - this.mole.offsetWidth;
    const maxY = bodyRect.height - this.mole.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    this.setPosition(randomX, randomY);
  }
}
