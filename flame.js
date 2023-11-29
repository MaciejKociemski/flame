const wysokosc = 80;
const szerokosc = 100;
let fire = [];

for (let i = 0; i < wysokosc * szerokosc; i++) fire[i] = 0;

let intid = setInterval(flame, 50);
let context = document.getElementById("myCanvas").getContext("2d");

function flame() {
  for (i = 0; i < szerokosc; i++)
    fire[i + szerokosc] = Math.floor(Math.random() * 255);

  for (let y = wysokosc; y > 1; y--)
    for (let x = 0; x < szerokosc; x++) {
      i = y * szerokosc + x;
      fire[i] = Math.floor(
        (fire[(y - 1) * szerokosc + ((x - 1 + szerokosc) % szerokosc)] +
          fire[(y - 1) * szerokosc + ((x + szerokosc) % szerokosc)] +
          fire[(y - 1) * szerokosc + ((x + 1 + szerokosc) % szerokosc)] +
          fire[(y - 2) * szerokosc + ((x + szerokosc) % szerokosc)]) /
          4.04
      );
    }

  for (i = szerokosc * 16; i < szerokosc * wysokosc; i++) {
    color = fire[i].toString(16);
    context.beginPath();
    context.rect(
      (i % szerokosc) * 10,
      (wysokosc - Math.floor(i / szerokosc)) * 10,
      10,
      10
    );
    context.fillStyle = "#" + color + "0000";
    context.fill();
  }
}
