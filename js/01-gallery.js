import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const itemsMarkUp = galleryItems.map((item) => {
    gallery.insertAdjacentHTML('beforeEnd',
        `<div class="gallery__item">
            <a class="gallery__link" href="">
                <img class="gallery__image"
                src="${item.preview}" 
                data-source="${item.original}"
                alt="${item.description}"/>
            </a>
        </div>`
    )
}
).join(" ");

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">`)
    instance.show();
document.addEventListener('keydown', onEscapeModalClose);

function onEscapeModalClose(event) {
    if (event.code === "Escape") {
        instance.close();
    }
}}