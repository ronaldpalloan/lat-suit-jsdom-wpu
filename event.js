const p3 = document.querySelector('.p3');
p3.onclick = function () {
	p3.style.backgroundColor = 'lightblue';
}

p3.addEventListener('click', function () {
	p3.style.color = 'red';
})

p3.addEventListener('click', function () {
	p3.style.fontSize = '1.5em';
})

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const listBaru = document.createElement('li');
	listBaru.innerText = 'item baru';
	ul.appendChild(listBaru);
})
