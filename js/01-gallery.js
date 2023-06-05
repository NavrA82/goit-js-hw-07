import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

console.log(createGalleryMarkup(galleryItems));

list.addEventListener('click', onClickList);

function onClickList(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  onClickLinkElementGalleryPreventDefault(evt);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
}

function createGalleryMarkup(galleryItems) {
  const elementGalleryMarkup = galleryItems
    .map(({ description, original, preview }) => {
      return `
    <li class=v>
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', elementGalleryMarkup);
}

const linkElementGallery = document.querySelector('.gallery__link');
const imageElementGallery = document.querySelectorAll('.gallery__image');
linkElementGallery.addEventListener('click', onClickLinkElementGalleryPreventDefault);

function onClickLinkElementGalleryPreventDefault(evt) {
  evt.preventDefault();
}
