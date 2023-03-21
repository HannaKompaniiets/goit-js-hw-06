
const categoryElements = document.querySelectorAll('.item'); 
console.log(`Number of categories: ${categoryElements.length}`);

categoryElements.forEach( el => {
    const headerEl = el.querySelector('h2');
    console.log(`Category :${headerEl.textContent}`);
    
    const listItems = el.querySelectorAll("li");
    console.log(`Elements: ${listItems.length}`);
});




