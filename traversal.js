// // const card = document.querySelector('.card');
// // const close = document.querySelector('.close');

// // close.addEventListener('click', function() {
// // 	card.style.display = 'none';
// // })

// const close = document.querySelectorAll('.close');

// // for (let i = 0; i < close.length; i++) {
// // 	close[i].addEventListener('click', function(e) {
// // 		// console.log(e)
// // 		e.target.parentElement.style.display = 'none';
// // 	})
// // }

// close.forEach(function(item) {
// 	item.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault();
// 		e.stopPropagation();
// 	})
// })

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
// 	card.addEventListener('click', function(e) {
// 		alert('halo');
// 	})
// })

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
	} else {
		alert('halo');
	}
})

