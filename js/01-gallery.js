import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesBlock = galleryItems.map(({ preview, original, description }) => {
    const image = `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
</div>`
    return image;
}).join("");

gallery.insertAdjacentHTML("beforeend", imagesBlock);


gallery.addEventListener('click', handleClick);
let instance;

function handleClick (event){
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    instance = basicLightbox.create(`
		<img width="1400" height="900" src= ${event.target.dataset.source}>
	`);
    instance.show();
    document.addEventListener('keydown', modalClose);
}

function modalClose(ev){
    if(instance.visible() && ev.code === "Escape"){
        instance.close();
    }
    document.removeEventListener('keydown', modalClose);
}

