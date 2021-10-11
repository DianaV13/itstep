//10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
let str1 = '2025-12-31';
let newArr = str1.split('-');
console.log(newArr);
let arr = newArr.reverse();
console.log(arr);
let newstr = arr.join();
console.log(newstr);
let newDate = newstr.replace(/,/g, '.');
console.log(newDate);

//более короткий способ:
console.log('более короткий способ:');
let string = '2025-12-31';
console.log(string);
let array = string.split('-');
let newString = array[2] + '.' + array[1] + '.'+ array[0];
console.log(newString); //получим строку '31.12.2025'

//Самый короткий способ!
console.log('самый короткий способ:');

let date = '2025-12-31';
let new_date = date.split('-').reverse().join('.');
console.log(new_date);