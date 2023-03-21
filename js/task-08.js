const formEl = document.querySelector('.login-form');
const inputs = formEl.elements;
const emailEl = inputs[0];
const passwordEl = inputs[1];
const btnEl = document.querySelector('button');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const formInformation = {};

    const emailValue = emailEl.value;
    const passwordValue = passwordEl.value;

    if (emailValue === '' || passwordValue === '') {
        alert("Заповніть всі поля")
    } else {
        formInformation[emailEl.name] = emailValue;
        formInformation[passwordEl.name] = passwordValue;
        
        console.log(formInformation);
        
        formEl.reset();
    }
}
    


    
