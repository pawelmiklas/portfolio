document.addEventListener('DOMContentLoaded', () => {
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
});