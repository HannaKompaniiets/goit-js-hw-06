const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputName);


function onInputName (event){
    const emptyInput = "Anonymous";
    const currentValue = event.currentTarget.value;
    if (currentValue !== ""){
        spanEl.textContent = currentValue;
    } else {
        spanEl.textContent = emptyInput;
    }
 };

 
