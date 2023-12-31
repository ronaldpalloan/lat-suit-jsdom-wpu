const buttonWarna = document.getElementById('tombolWarna');
const body = document.querySelector('body');

buttonWarna.addEventListener('click', function () {
	buttonWarna.innerText = 'Activate';
	// body.style.backgroundColor = 'red';
	body.classList.toggle('biru-muda');
})

const buttonAcak = document.createElement('button');
const isiAcak = document.createTextNode('Warna Acak');
buttonAcak.setAttribute('type', 'button');
buttonAcak.setAttribute('id', 'warnaAcak')
buttonAcak.appendChild(isiAcak);
buttonWarna.after(buttonAcak);

buttonAcak.addEventListener('click', function() {
	const r = Math.floor(Math.random() * 255 + 1);
	const g = Math.floor(Math.random() * 255 + 1);
	const b = Math.floor(Math.random() * 255 + 1);
	body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
}) 

const sMerah = document.querySelector('input[name=sMerah');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru');

sMerah.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	console.log(r,g,b);

	body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
})

sHijau.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	console.log(r,g,b);

	body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
})

sBiru.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	console.log(r,g,b);

	body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
})

body.addEventListener('mousemove', function(event) {
	// console.log(event.clientX, window.innerWidth);

	const r = Math.floor((event.clientX / window.innerWidth) * 255);
	const g = Math.floor((event.clientY / window.innerHeight) * 255);
	body.style.backgroundColor = 'rgb(' + r + ',' + g + ',128)';
})

