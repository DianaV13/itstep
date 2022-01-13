let inp = document.getElementById('result');

function start() {
	window.setInterval(timer, 1000);
 }

function timer() {
	inp.value = inp.value + inp.value;
 }    