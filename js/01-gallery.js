import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
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

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const handleClick = (evt) => {
    if (evt.key === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}'>`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleClick);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleClick);
      },
    }
  );

  instance.show();
}
