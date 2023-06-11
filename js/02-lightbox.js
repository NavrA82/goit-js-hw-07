import { galleryItems } from './gallery-items.js';
// Change code below this line
let lightbox = new SimpleLightbox('.gallery', {
  ...galleryItems,
});
const list = document.querySelector('.gallery');
list.addEventListener('click', onClickList);

console.log(createGalleryMarkup(galleryItems));

function onClickList(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  onClickLinkElementGalleryPreventDefault(evt);

  window.addEventListener('keydown', onEscKayPress);

  function onEscKayPress(evt) {
    if (evt.code !== 'Escape') {
      return;
    }

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

// let lightbox = new SimpleLightbox('.gallery', {
//   ...galleryItems,
// });
// console.log(lightbox);
// const list = document.querySelector('.gallery');

// console.log(createGalleryMarkup(galleryItems));

// list.addEventListener('click', onClickList);

// function createGalleryMarkup(galleryItems) {
//   const elementGalleryMarkup = galleryItems
//     .map(({ description, original, preview }) => {
//       return `
//     <li class="gallery__item">
//     <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
//     })
//     .join('');
//   list.insertAdjacentHTML('beforeend', elementGalleryMarkup);
// }

// function onClickList(evt) {
//   if (!evt.target.classList.contains('gallery__image')) {
//     return;
//   }
//   onClickLinkElementGalleryPreventDefault(evt);
//   // const instance = SimpleLightbox.create(
//   //   `<a href="images/image1.jpg">
//   //         <img src="${evt.target.dataset.source}" alt="" title="" />
//   //       </a>`
//   // );
//   // instance.show();
// }

// const linkElementGallery = document.querySelector('.gallery__link');
// linkElementGallery.addEventListener('click', onClickLinkElementGalleryPreventDefault);

// function onClickLinkElementGalleryPreventDefault(evt) {
//   evt.preventDefault();
// }
// // console.log(galleryItems);
