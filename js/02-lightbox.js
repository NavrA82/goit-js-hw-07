import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
list.addEventListener('click', onClickList);

console.log(createGalleryMarkup(galleryItems));

console.log(list);
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function onClickList(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
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
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', elementGalleryMarkup);
}
