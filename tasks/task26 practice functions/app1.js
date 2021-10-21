// 1. Разрабоать функцию для генерации случаного целого числа от min до max.

function randomNumber (min, max){
    let randNum = Math.floor (min + Math.random ()*(max + 1 - min));
return randNum;   
} 
console.log(randomNumber(1,100));