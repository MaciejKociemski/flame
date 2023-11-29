const h = 80;
const w = 100;
let fire = [];

for (let i = 0; i < h * w; i++) fire[i] = 0;

let intid = setInterval(flame, 50);
let context = document.getElementById("myCanvas").getContext("2d");

function flame() {
  for (i = 0; i < w; i++)
    fire[i + w] = Math.floor(Math.random() * 255);

  for (let y = h; y > 1; y--)
    for (let x = 0; x < w; x++) {
      i = y * w + x;
      fire[i] = Math.floor(
        (fire[(y - 1) * w + ((x - 1 + w) % w)] +
          fire[(y - 1) * w + ((x + w) % w)] +
          fire[(y - 1) * w + ((x + 1 + w) % w)] +
          fire[(y - 2) * w + ((x + w) % w)]) /
          4.04
      );
    }

  for (i = w * 16; i < w * h; i++) {
    color = fire[i].toString(16);
    context.beginPath();
    context.rect(
      (i % w) * 10,
      (h - Math.floor(i / w)) * 10,
      10,
      10
    );
    context.fillStyle = "#" + color + "0000";
    context.fill();
  }
}
