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
    if (event.target.tagName !== "IMG") {
        return;
    }
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">`, {
        onShow: () => {
            window.addEventListener('keydown', onEscapeModalClose)
        },
        onClose: () => {
            window.removeEventListener('keydown', onEscapeModalClose)
        },
    })
    const onEscapeModalClose = event => {
        if (event.code === "Escape") {
            instance.close();
        }
    }
    instance.show();
}
