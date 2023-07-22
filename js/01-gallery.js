import { galleryItems } from './gallery-items.js';

const galeryList = document.querySelector(".gallery");

const galeryElements = galleryItems.map((el) => 
`<li class = "gallery__item"> 
<a class="gallery__link" href="${el.original}"> 
<img class = "gallery__image" data-source="${el.original}" src="${el.preview}" alt="${el.description}"> 
</a> 
</li>`).join('');
galeryList.insertAdjacentHTML("afterbegin",galeryElements);

let selectElement;
let originalUrl;


galeryList.addEventListener("click", (event) => {
    selectElement = event.target;
    event.preventDefault();
    originalUrl = selectElement.getAttribute("data-source");
    openModal(originalUrl,selectElement.alt);
});

let instance;

function openModal( url ,elem ) {
    instance = basicLightbox.create(`<img class = "gallery__image" data-source="${url}"
     src="${url}" alt="${elem}">`);
     instance.show();
     window.addEventListener("keydown", closeModalOnEsc);
}

function closeModalOnEsc(event) {
    if (event.key === "Escape") {
        instance.close();
        window.removeEventListener("keydown", closeModalOnEsc);
    }
}









