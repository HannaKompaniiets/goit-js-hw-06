function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl =  document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', () => {
  let colorValue = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValue;
  colorEl.textContent = colorValue;
});


