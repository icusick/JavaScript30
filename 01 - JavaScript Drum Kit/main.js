console.log("linked");


function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// console.log(key);
	if (!audio) return; 
	// currentTime rewinds it to start
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	console.log(e);
  	if (e.propertyName !== 'transform') return // Skip it if not transform
  	this.classList.remove('playing');
}

var theKeys = document.querySelectorAll('.key');
theKeys.forEach(key => key.addEventListener('transitionend', removeTransition));
// listen for keydown even and then run the callback function
window.addEventListener('keydown', playSound);