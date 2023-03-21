function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');

createEl.addEventListener('click', onClick);
destroyEl.addEventListener('click', destroyBoxes);

const initialSize = 30;
const sizeStep = 10;

function destroyBoxes(){
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

function onClick(){
  const inputAmount = Number(inputEl.value);
  createBoxes(inputAmount);
}

function createBoxes(inputAmount) {
    for (let i = 0; i < inputAmount; i += 1) {
      const newBox = document.createElement('div');

      const size = initialSize + sizeStep * i;

      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.marginTop = "15px"
      newBox.style.backgroundColor = getRandomHexColor();

      boxesEl.append(newBox);
  }
 }

