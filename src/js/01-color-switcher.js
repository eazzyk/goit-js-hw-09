const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', onClickStart);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let colorInterval = null;

function onClickStart() {
  start.disabled = true;
  stop.disabled = false;
  colorInterval = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
}

stop.addEventListener('click', onClickStop);

function onClickStop() {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(colorInterval);
}
