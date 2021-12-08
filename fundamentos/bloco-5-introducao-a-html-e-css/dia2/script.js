let body = document.querySelector('body');
let title = document.createElement('h1');
let main = document.createElement('main');
main.classList.add('main-content');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
let section = document.createElement('section');
section.classList.add('center-content');

let section2 = document.createElement('section');
section2.classList.add('left-content');

let section3 = document.createElement('section');
section3.classList.add('right-content');

let p = document.createElement('p');
p.innerText = 'Bazinga hahahahaha'

let img = document.createElement('img');
img.classList.add('small-image');
img.src = 'https://picsum.photos/200';

let list = document.createElement('ul');
let listE = document.createElement('li');
listE.innerText = 'um';

body.appendChild(main);
body.appendChild(title);
main.appendChild(section)
main.appendChild(section2)
main.appendChild(section3)
section.appendChild(p);
section2.appendChild(img);
section3.appendChild(list);
list.appendChild(listE);