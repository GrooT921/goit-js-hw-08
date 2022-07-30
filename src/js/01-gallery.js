// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line
const galleryImg = document.querySelector('.gallery');


const items = galleryItems.map(({preview , original, description})=>{
    return `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    `;
}).join('');
galleryImg.insertAdjacentHTML('beforeend', items);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// console.log(galleryItems);
