const listCategory = document.querySelector('#categories')
const categoryElements = listCategory.children; 
console.log(`Number of categories: ${categoryElements.length}`);




Array.from(categoryElements).forEach( el => {
    const itemCategory = el.firstElementChild;
    console.log(itemCategory.textContent);

    const listItemsAll = el.lastElementChild;
    const listItems = listItemsAll.children
    console.log(listItems.length);
});











// const categoryElements = document.querySelectorAll('.item'); 
// console.log(`Number of categories: ${categoryElements.length}`);

// categoryElements.forEach( el => {
//     const headerEl = el.querySelector('h2');
//     console.log(`Category :${headerEl.textContent}`);
    
//     const listItems = el.querySelectorAll("li");
//     console.log(`Elements: ${listItems.length}`);
// });