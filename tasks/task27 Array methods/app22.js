//22. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
let a = [1, 4, 5, 1, 7, 16];
let num = 1;
let result = a.reduce(function(sum, elem) {
	if (sum > 10) {
		console.log(num);
		return;
	} else {
		num++;
		return sum + elem;
	}
}); 

//23. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти. 

let b = [1, 4, 5, 1, 7, 16, 3, 4, 5];
let numb = 1;
let result2 = b.reduceRight(function(sum, elem) {
	if (sum > 10) {
		console.log(numb);
		return;
	} else {
		numb++;
		return sum + elem;
	}
}); 