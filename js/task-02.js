const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = ingredients.map((position, i) => {
  const newLiEl = document.createElement('li');
  newLiEl.textContent = ingredients[i];
  newLiEl.classList.add('.item');
  return newLiEl;
});

const listEl = document.querySelector('#ingredients');
listEl.append(...ingredientsListElement);
