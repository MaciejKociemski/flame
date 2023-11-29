const h = 80;
const w = 100;
let fire = [];
let intid;
let context;

function initialize() {
  for (let i = 0; i < h * w; i++) {
    fire[i] = 0;
  }

  intid = setInterval(flame, 50);
  context = document.getElementById("myCanvas").getContext("2d");
}

function generateRandomFire() {
  for (let i = 0; i < w; i++) {
    fire[i + w] = Math.floor(Math.random() * 155);
  }
}

function updateFire() {
  for (let y = h; y > 1; y--) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      fire[i] = Math.floor(
        (fire[(y - 1) * w + ((x - 1 + w) % w)] +
          fire[(y - 1) * w + ((x + w) % w)] +
          fire[(y - 1) * w + ((x + 1 + w) % w)] +
          fire[(y - 2) * w + ((x + w) % w)]) /
          4.04
      );
    }
  }
}

function renderFire() {
  for (let i = w * 16; i < w * h; i++) {
    const color = fire[i].toString(16);
    context.beginPath();
    context.rect((i % w) * 10, (h - Math.floor(i / w)) * 10, 10, 10);
    context.fillStyle = "#" + color + "0000";
    context.fill();
  }
}

function flame() {
  generateRandomFire();
  updateFire();
  renderFire();
}

initialize();
