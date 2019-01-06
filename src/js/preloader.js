const preLoader = (() => {
	window.addEventListener('load', () => {
		document.querySelector('#loader-wrapper').classList.add('out');
		localStorage.setItem('isOn', 'yes');
	});
})();