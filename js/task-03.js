const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryListEl = document.querySelector(".gallery");

const markup = images.map(({url, alt}) => `<li> <img class="gallery-image" src=${url}, alt=${alt}></li>`)
.join("");

galleryListEl.insertAdjacentHTML("afterbegin", markup);










  // images.forEach((image, i )=> {
  //   const newLiEl = document.createElement('li');
  //   const newImage = document.createElement('img');
  //   newImage.classList.add('gallery-image');
  //   newImage.src = images[i].url;
  //   newImage.alt = images[i].alt;

  //   newLiEl.insertAdjacentElement("afterbegin", newImage);
  //   galleryListEl.insertAdjacentElement("beforeend", newLiEl);
  // })

   



