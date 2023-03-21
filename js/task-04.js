let  counterValue = 0;
const increaseCounter = document.querySelector('[data-action="increment"]');
const reduceCounter =  document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value')

increaseCounter.addEventListener('click', () => { 
    counterValue += 1
    return counterEl.textContent = counterValue;
});

reduceCounter.addEventListener('click', () => {
    counterValue -= 1;
    return counterEl.textContent = counterValue;
});
