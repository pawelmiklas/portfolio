// import "bootstrap";
// require("../style/main.scss ");
// setTimeout(() => {
//     document.querySelector("#loader-wrapper").classList.add("out");
// }, 1000);

document.addEventListener('DOMContentLoaded', () => {

	console.log('ham');

	const hamburgerIcon = document.querySelector('#nav__hamburger');
	const list = document.querySelector('.nav__list');
	const logo = document.querySelector('.nav__logo');
	hamburgerIcon.addEventListener('click', () => {
		list.classList.toggle('nav__list--active');
		logo.classList.toggle('nav__logo--padding');
	});






	// const hamburgerIcon = document.querySelector('#nav-icon2');
	// const nav = document.querySelector('.nav');
	// const hamburgerMenu = (() => {
	// 	hamburgerIcon.addEventListener('click', () => {
	// 		hamburgerIcon.classList.toggle('open');
	// 		nav.classList.toggle('nav-fixed');
	// 	});
	// });

	const timeChanger = (() => {
		const timeBlock = document.querySelector('.contact__time');
		setInterval(() => {
			let date = new Date();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let minutesWithZero = () => (minutes < 10 ? '0' : '') + minutes;
			timeBlock.innerHTML = `${hours}:${minutesWithZero()}`;
		}, 500);
	})();

	// const slider = (() => {
	// 	const arrowRight = document.querySelector('.fa-angle-right');
	// 	const arrowLeft = document.querySelector('.fa-angle-left');
	// 	const sectionSlides = document.querySelectorAll('.section__slide');
	// 	let rotateValue = 130;
	// 	let valueOfRotate = 0;
	// 	let valueOfRotate2 = 130;

	// 	arrowRight.addEventListener('click', () => {
	// 		if (rotateValue > 390) return;
	// 		sectionSlides.forEach((slide) => {
	// 			slide.style.webkitTransform = `translateX(-${rotateValue - valueOfRotate}%)`;
	// 			valueOfRotate += 130;
	// 		});
	// 		rotateValue += 130;
	// 		valueOfRotate = 0;
	// 	});

	// 	arrowLeft.addEventListener('click', () => {
	// 		if (rotateValue === 130) return;
	// 		rotateValue -= 130;
	// 		sectionSlides.forEach((slide) => {
	// 			slide.style.webkitTransform = `translateX(${-Math.abs(rotateValue) + valueOfRotate2}%)`;
	// 			valueOfRotate2 += 130;
	// 		});
	// 		valueOfRotate2 = 130;
	// 	});
	// })();

	// const slideVertical = (() => {
	// 	const listButton = document.querySelectorAll('.list__button');
	// 	const sectionContent = document.querySelectorAll('.section__content');
	// 	const nameOfContent = ['transform-to-home', 'transform-to-project', 'transform-to-about'];
	// 	listButton.forEach((list, index) => {
	// 		list.addEventListener('click', () => {
	// 			listButton.forEach((btn) => btn.classList.remove('list__button--active'));
	// 			sectionContent.forEach((section) => {
	// 				section.className = 'section__content';
	// 				section.classList.add(nameOfContent[index]);
	// 			});
	// 			list.classList.add('list__button--active');
	// 			if (nav.classList.contains('nav-fixed')) {
	// 				hamburgerIcon.classList.toggle('open');
	// 				nav.classList.toggle('nav-fixed');
	// 			}
	// 		});
	// 	});
	// })();
});
// export { hamburgerMenu };