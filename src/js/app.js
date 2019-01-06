document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.hasOwnProperty('isOn') && (location.pathname === '/index.html' || location.pathname === '/')) {
		const loader = document.querySelector('#loader-wrapper');
		loader.classList.add('display-none');
	}
	const hamburgerIcon = document.querySelector('#nav__hamburger');
	const list = document.querySelector('.nav__list');
	const logo = document.querySelector('.nav__logo');
	hamburgerIcon.addEventListener('click', () => {
		list.classList.toggle('nav__list--active');
		logo.classList.toggle('nav__logo--padding');
	});
});