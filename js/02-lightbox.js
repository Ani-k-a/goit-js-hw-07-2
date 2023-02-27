import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector('.gallery');

const imagesBlock = galleryItems.map(({ preview, original, description }) => {
    const image = `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
    return image;
}).join("");

galleryImg.insertAdjacentHTML("beforeend", imagesBlock);

galleryImg.addEventListener('click', handleClick);

function handleClick (event){
  event.preventDefault();
  new SimpleLightbox('.gallery a', {captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250});
} 
