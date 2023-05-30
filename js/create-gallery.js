const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador" width="" height="">
  </a>
</li>
*/

//Función de creación de tarjetas makeGalleryCard(cardInfo)

const galleryEl = document.querySelector(".js-gallery");

const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  // Creacion de  li
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery-item");

  // creacion de  a
  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.href = "#";
  galleryItemEl.append(galleryLinkEl);

  // creacion img

  const galleryImgEl = document.createElement("img");
  galleryImgEl.src = url;
  galleryImgEl.alt = alt;
  galleryImgEl.width = width;
  galleryImgEl.height = height;
  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

// console.log(makeGalleryCard(pictures[2]));

// Iterando array de imágenes usando map

const galleryCards = pictures.map((el) => makeGalleryCard(el));

console.log(galleryCards);

// Insertamos una colección de tarjetas en una página

galleryEl.append(...galleryCards);
