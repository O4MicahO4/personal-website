/* 
	main.js
	last edited: 7/22/22
*/

window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

var typed = new Typed('#typed', {

	strings: [
    'College Student at KU.',
    'Aspiring Software Developer.',
    'Life Long Learner.',
    'Check Out My Socials!'
    ],

	typeSpeed: 60,
	startDelay: 1250,
	backSpeed: 50,
	loop: true
});

document.querySelector(".banner-close").addEventListener("click", function() {
	this.closest(".banner").style.display = "none";
});
