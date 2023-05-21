
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalId;

buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);

function onStartClick(e) {
    intervalId = setInterval(setRandomBodyColor, 1000, 1000);
    buttonStart.setAttribute('disabled', 'true');
    buttonStop.removeAttribute('disabled');
}

function onStopClick(e) {
    clearInterval(intervalId);
    buttonStop.setAttribute('disabled', 'true');
    buttonStart.removeAttribute('disabled');
}

function setRandomBodyColor() {
    const colorHex = getRandomHexColor();
    document.querySelector('body').setAttribute('style', `background-color: ${colorHex};`)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
