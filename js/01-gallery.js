import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);
const cardsGallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
      <img src='${event.target.dataset.source}' >
  `);

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
