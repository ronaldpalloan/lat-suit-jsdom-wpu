const pBaru = document.createElement('p');
pBaru.innerText = 'paragraf 4';

const secA = document.getElementById('a');

const listBaru = document.createElement('li');
listBaru.innerText = 'item 1.5';

const naruhList = document.querySelector('section#b ul'); 
const sebelum = document.querySelector('ul .li3');

const link = document.getElementsByTagName('a')[0];
secA.removeChild(link);

const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const judulBaru = document.createElement('h2');
judulBaru.innerText = 'Judul Baru';

secB.replaceChild(judulBaru, p4);