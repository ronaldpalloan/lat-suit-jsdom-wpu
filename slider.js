const gambarBesar = document.querySelector('.jumbo');
const gambarKecil = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

// gambarKecil.forEach(function(item) {
// 	item.addEventListener('click', function(e) {
// 		const gambarPilih = e.target.getAttribute('src');
// 		gambarBesar.setAttribute('src', gambarPilih);
// 	})
// })

container.addEventListener('click', function(e) {
	if (e.target.className == 'thumb') {
		gambarBesar.src = e.target.src;
		gambarBesar.classList.add('fade');

		setTimeout(function() {   
			gambarBesar.classList.remove('fade');
		}, 500)
		
		gambarKecil.forEach(function(item) {
			item.className = 'thumb';
		})
		
		e.target.classList.add('active');
	}
})