const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onEnterPassword);
const passwordLength = Number(inputEl.dataset.length);
function onEnterPassword(event){
    if (event.currentTarget.value.length === passwordLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
     