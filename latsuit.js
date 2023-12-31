function getPilihanKomputer() {
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
	const gambarKomputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();

	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}

		gambarKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) {
			i = 0;
		}
	}, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(item) {
	item.addEventListener('click', function() {
	const infoHasil = document.querySelector('.info');
	infoHasil.innerText = '';

	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = item.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

	putar();

	setTimeout(function() {
		const gambarKomputer = document.querySelector('.img-komputer');
		gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

		const infoHasil = document.querySelector('.info');
		infoHasil.innerText = hasil;	
		
		const skorKamu = document.querySelector('.skorKamu');
		const skorKomputer = document.querySelector('.skorKomputer');
		const skorImbang = document.querySelector('.skorImbang');

		if (hasil == 'MENANG') {
			skorKamu.innerText++;
		} else if (hasil == 'SERI') {
			skorImbang.innerText++;
		} else {
			skorKomputer.innerText++;
		}
		}, 1000);


	})
})


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

// 	const gambarKomputer = document.querySelector('.img-komputer');
// 	gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

// 	const infoHasil = document.querySelector('.info');
// 	infoHasil.innerText = hasil;
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

// 	const gambarKomputer = document.querySelector('.img-komputer');
// 	gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

// 	const infoHasil = document.querySelector('.info');
// 	infoHasil.innerText = hasil;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);
// 	console.log(pilihanPlayer, pilihanKomputer);
// 	console.log(hasil);

// 	const gambarKomputer = document.querySelector('.img-komputer');
// 	gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

// 	const infoHasil = document.querySelector('.info');
// 	infoHasil.innerText = hasil;
// })
