/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryEl = document.querySelector('.js-gallery');

//Creaacion de  li
const galleryItemEl = document.createElement('li');
galleryItemEl.classList.add('gallery-item');

// creacion de  a
const galleryLinkEl = document.createElement('a');
galleryLinkEl.href = '#';
galleryItemEl.append(galleryLinkEl);

// creacion de  img

const galleryImgEl = document.createElement('img');
galleryImgEl.src = 'https://picsum.photos/id/237/200/300';
galleryImgEl.alt = 'Labrador';
galleryLinkEl.append(galleryImgEl);

// insertamos los elementos

galleryEl.append(galleryItemEl);
