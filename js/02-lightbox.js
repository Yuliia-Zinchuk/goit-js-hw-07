import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const cardsGallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
