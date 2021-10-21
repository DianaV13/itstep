//1. Дана строка 'js'. Сделайте из нее строку 'JS'.
let str = "js";
let str1 = str.toUpperCase()
console.log(str1);


//2. Дана строка 'JS'. Сделайте из нее строку 'js'.
 let str2 = str1.toLowerCase();
 console.log(str2);

 //3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

 let str3 = " я учу javascript";
 console.log(str3.length);

 // 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
 //substr   str.substr(start [, length])Возвращает часть строки от start длины length.


console.log(str3.substr(0,2));

//substring str.substring(start [, end])Возвращает часть строки между start и end.

console.log(str3.substring(0,3));

//str.slice(start [, end])Возвращает часть строки от start до (не включая) end.

console.log(str3.slice(0,3));


//5. IndexOf Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
//str.indexOf(substr, pos).
//Он ищет подстроку substr в строке str,
 //начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

let str4 = 'Я учу javascript!';

console.log(str4.indexOf('учу'));//2

//

