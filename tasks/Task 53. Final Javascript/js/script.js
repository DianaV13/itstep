// 1.  Составить программу, печатающую разложение на простые множители заданного натурального числа n > 0 (другими словами, требуется печатать только простые числа и 

// произведение напечатанных чисел должно быть равно n; если n = 1, печатать ничего не надо)




// 4. Дан массив целых чисел. Найти наибольшую сумму подряд идущих элементов. 
// (Например, [1, 0, -4, 5, 6, -7,-2, 3, 8] -> максимальная сумма: 13)

function getMaxSum(arr){
  let maxSum = 0;
  let intermediateSum = 0;
  for(let item of arr){
      intermediateSum += item;
      maxSum = Math.max(maxSum, intermediateSum);
      if (intermediateSum < 0) intermediateSum = 0;
  }
  console.log("maxSum :", maxSum);
  return maxSum;
};

getMaxSum([1, 0, -4, 5, 6, -7,-2, 3, 8]);


// 5. Дано 2 массива и число K. Найти по 1 числу из каждого массива, которые дадут наиближайшую сумму к числу К.


// 6. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, но их нету в 3 массиве.

//7. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.
let arr = [33,1,4,8,16,12];
let A = 4;
function changeArr(arr, a){
    let b = [];
    let c = [];
    let d =[];
    for(i = 0; i<= arr.length;i++){
        if (arr[i]< a){
            b.push(arr[i]);

        }
        if (arr[i]>a){
            c.push(arr[i]);
        }
        else{
            c.unshift(arr[i]);
        
        }
        return d = b.concat(c);
    }
    
}
console.log(changeArr(arr,A));
 
//8. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.
let n = 12345;
console.log (('' + n).split('').reverse().join(''));

// 9. Дано предложение на русском языке. Определить, является ли оно панграммой.
function pangrams(s) {
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщьъыэюя";
let regex = /\s/g;//Переменная regex — регулярное выражение. Шаблон \s, который здесь используется, ищет все пробелы в строке.
let lowercase = s.toLowerCase().replace(regex, "");

     for(let i = 0; i < alphabet.length; i++){
      if(lowercase.indexOf(alphabet[i]) === -1){
        return "not pangram";
      }
     }
    
    return "pangram";
  }
  
let s1 = 'Вопрос футбольных энциклопедий замещая чушью: эй, где съеден ёж?'
console.log (pangrams(s1));
let s2 = 'Привет Мир, бла бла бла';
console.log (pangrams(s2));

// 10. Дана дата и число K. Определить день недели, который будет через K дней от данной даты.

function getDateNext(date, K) {
  let now = new Date(date);
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  now.setDate(date.getDate() + K);
  
  return days[now.getDay()];
}
let date = new Date(2022, 0, 3)
console.log(getDateNext(date, 4));