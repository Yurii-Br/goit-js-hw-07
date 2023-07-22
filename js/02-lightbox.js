import { galleryItems } from './gallery-items.js';
const galeryList = document.querySelector(".gallery");

const galeryElements = galleryItems.map((el) => 
`<li class = "gallery__item"> 
<a class="gallery__link" href="${el.original}"> 
<img class = "gallery__image"  src="${el.preview}" alt="${el.description}"> 
</a> 
</li>`).join('');
galeryList.insertAdjacentHTML("afterbegin",galeryElements);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay: 250,
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      gallery.close();
    }
  });