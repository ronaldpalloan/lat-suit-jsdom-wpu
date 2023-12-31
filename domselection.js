// // getelementbyid
// const judul = document.getElementById('judul');
// judul.style.color = 'green';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Ronald P';

// // getElementsByTagName()
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

// const par = document.getElementsByTagName('p')[0];
// par.style.color = 'red';

// // getElementsByClassName()
// const p2 = document.getElementsByClassName('p2');
// p2[0].innerText = 'Udah diganti';

// querySelector()
// const par4 = document.querySelector('#b p');
// par4.style.color = 'blue';
// par4.style.fontSize = '30px';

// const li3 = document.querySelector('section#b ul li:nth-child(3)');
// li3.innerText = 'Tulisan baru';

// // querySelectorAll()
// const p = document.querySelectorAll('p');
// p[0].innerText = 'Diubah javascript';

// Ubah root
const secB = document.getElementById('b');
const ul = secB.querySelector('ul');
const li2 = ul.querySelector('li:nth-child(2)');

li2.style.backgroundColor = 'lightblue';
