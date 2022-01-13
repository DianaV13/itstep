let start = document.querySelector('#start');
let stoped = document.querySelector('#stoped');
let timerId;
start.addEventListener('click', function() {
	let timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stoped.addEventListener('click', function() {
	clearInterval(timerId);
});