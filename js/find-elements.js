//* Objeto window і document

// alert('dawdasd');

// console.dir(window);

//* métodos antiguos de encontrar elementos (getElementBy...)

// const titleEl = document.getElementsByClassName('main-title');
// const listItemEl = document.getElementsByTagName('li');

// console.log(listItemEl);

// titleEl.textContent = 'New Title';

//* métodos modernos de encontrar elementos (querySelector, querySelectorAll)

// const titleEl = document.querySelector('.container > #title');

// console.log(titleEl);
//* Navegar en DOM

const listEl = document.querySelector(".js-list");

console.log(listEl);
