//11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

let array = ['я', 'учу', 'javascript', '!'];
let string = array.join();
console.log(string);
//let newstr = string.replace(/,/g, '+'); 
//или другой метод split/join:
let newstr = string.split(',').join('+');

console.log(newstr);