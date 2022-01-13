//Давайте теперь сделаем кнопку, по нажатию на которую будет запускаться наш таймер:
//Напишем соответствующий JavaScript:

let start = document.querySelector('#start');

start.addEventListener('click', function func() {
	let i = 0;
	
	setInterval(function() {
		console.log(++i);
	}, 1000);
    this.removeEventListener('click', func); // отвязываем обработчик
});


//Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
let reverce = document.querySelector("#reverce");
reverce.addEventListener('click', function func() {
	let i = 100;
	
	setInterval(function() {
		console.log(i--);
	}, 1000);

    this.removeEventListener('click', func);
  
});