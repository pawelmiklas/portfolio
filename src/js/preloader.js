console.log('preoloader');
console.log('preoloader');
console.log('preoloader');
const preLoader = (() => {
	window.addEventListener('load', () => {
		document.querySelector('#loader-wrapper').classList.add('out');
	});
})();