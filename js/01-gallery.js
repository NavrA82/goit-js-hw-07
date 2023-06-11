import { galleryItems } from './gallery-items.js';
const list = document.querySelector('.gallery');
list.addEventListener('click', onClickList);

console.log(createGalleryMarkup(galleryItems));

function onClickList(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(
    `<img class="gallery__image-click-on" src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  onClickLinkElementGalleryPreventDefault(evt);

  window.addEventListener('keydown', onEscKayPress);
  // window.addEventListener('keydown', onEscKayPress, { once: true });

  function onEscKayPress(evt) {
    if (evt.code !== 'Escape') {
      return;
    }
    instance.close();
    window.removeEventListener('keydown', onEscKayPress);
  }
}

function createGalleryMarkup(galleryItems) {
  const elementGalleryMarkup = galleryItems
    .map(({ description, original, preview }) => {
      return `
    <li class="gallery__item">
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
linkElementGallery.addEventListener('click', onClickLinkElementGalleryPreventDefault);

function onClickLinkElementGalleryPreventDefault(evt) {
  evt.preventDefault();
}
