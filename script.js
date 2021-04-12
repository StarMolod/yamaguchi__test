// Вращаем колесо и накладываем blur эффект
(function () {
	const wheel = document.querySelector('.wheel');
	const startButton = document.querySelector('.button');
	let deg = 0;

	startButton.addEventListener('click', () => {
		// Disable button during spin
		startButton.style.pointerEvents = 'none';
		// Calculate a new rotation between 5000 and 10 000
		deg = Math.floor(5000 + Math.random() * 5000);
		// Set the transition on the wheel
		wheel.style.transition = 'all 10s ease-out';
		// Rotate the wheel
		wheel.style.transform = `rotate(${deg}deg)`;
		// Apply the blur
		wheel.classList.add('blur');
	});

	wheel.addEventListener('transitionend', () => {
		// Remove blur
		wheel.classList.remove('blur');
		// Enable button when spin is over
		startButton.style.pointerEvents = 'auto';
		// Need to set transition to none as we want to rotate instantly
		wheel.style.transition = 'none';
		// Calculate degree on a 360 degree basis to get the "natural" real rotation
		// Important because we want to start the next spin from that one
		// Use modulus to get the rest value from 360
		const actualDeg = deg % 360;
		// Set the real rotation instantly without animation
		wheel.style.transform = `rotate(${actualDeg}deg)`;
	});
})();


/* //тесты
var timeoutID;
function delayWindow() {
	timeoutID = window.setTimeout(slowAlert, 1500);
}
function slowAlert() {
	alert('321');
	window.clearTimeout(timeoutID);
}
*/


//выводим окно с призом по окончании вращения колеса
jQuery(document).ready(function ($) {

	$('.js-anchor').on('click', function (e) {
		e.preventDefault();

		var
			href = $(this).attr('href'),
			timeout = 10500;
		setTimeout(function () {
			//window.open(href, '_self');
			location.href = href;
		}, timeout);
	});
});

//блокируем кнопку после трех призов(нажатий)
let num = 0, button = document.querySelector('[type=button]');
button.onclick = function () {
	num++, num > 2 ? this.disabled = true : '';
};

//выводим случайный приз (1 из 16)
var mas=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg"]; // Все названия картинок
function randomIMG(){
   var r=Math.floor(Math.random()*mas.length);
   document.getElementById("myimg").src=mas[r];
}

