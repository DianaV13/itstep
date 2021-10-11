//1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив этим значением.
let value = 5, n = 5;

let b = Array(n).fill(value, 0, n);
console.log(b);



//2. Найти сумму только положительных элементов массива.
let arr = [1, 2, 3, 4, 5], sum = 0;
arr.forEach(function (item){
     if (item % 2 == 0)
        sum += item;
    
});
console.log(sum);

//3. Посчитать количество слов в строке.
let str = "Hello my friend";
console.log(str);
let countWords = str.split(" ");
console.log(countWords);
console.log(countWords.length);

//4. Вывести последнее слово в предложении.
let str2 = "Вывести последнее слово";
let str3 = str2.split(' ').slice(2,4).join();
console.log(str3);
