function getPilihanComp() {
	const comp = Math.random();

	if (comp <= 0.33) return 'gajah';
	if (comp > 0.33 && comp <= 0.67) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if (player == comp) return 'SERI';
	if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
	if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
	if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}

function putar() {
	const gambarComp = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();


	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		
		gambarComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) i = 0;
	}, 100)
}

const pil = document.querySelectorAll('li img');
pil.forEach(function(item) {
	item.addEventListener('click', function() {
		const infoHasil = document.querySelector('.info');
		infoHasil.innerText = '';

		const pilComp = getPilihanComp();
		const pilPlayer = item.className;
		const hasil = getHasil(pilComp, pilPlayer);
		console.log(pilPlayer, pilComp, hasil);

		putar();
		
		setTimeout(function() {
			const gambarComp = document.querySelector('.img-komputer');
			gambarComp.setAttribute('src', 'img/' + pilComp + '.png');

			const infoHasil = document.querySelector('.info');
			infoHasil.innerText = hasil;
		}, 1000)
	})
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilComp = getPilihanComp();
// 	const pilPlayer = pGajah.className;
// 	const hasil = getHasil(pilComp, pilPlayer);
// 	console.log(pilPlayer, pilComp, hasil);

// 	const gambarComp = document.querySelector('.img-komputer');
// 	gambarComp.setAttribute('src', 'img/' + pilComp + '.png');

// 	const infoHasil = document.querySelector('.info');
// 	infoHasil.innerText = hasil;
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilComp = getPilihanComp();
// 	const pilPlayer = pOrang.className;
// 	const hasil = getHasil(pilComp, pilPlayer);
// 	console.log(pilPlayer, pilComp, hasil);

// 	const gambarComp = document.querySelector('.img-komputer');
// 	gambarComp.setAttribute('src', 'img/' + pilComp + '.png');

// 	const infoHasil = document.querySelector('.info');
// 	infoHasil.innerText = hasil;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilComp = getPilihanComp();
// 	const pilPlayer = pSemut.className;
// 	const hasil = getHasil(pilComp, pilPlayer);
// 	console.log(pilPlayer, pilComp, hasil);

// 	const gambarComp = document.querySelector('.img-komputer');
// 	gambarComp.setAttribute('src', 'img/' + pilComp + '.png');

// 	const infoHasil = document.querySelector('.info');
// 	infoHasil.innerText = hasil;
// })

