//1. Дана площать квадрата. Найти его периметр.
let s: number = 49;
let u: number;
u = s**0.5;
console.log(u);
let pSq: number = u*4;
console.log(pSq);



//2. Даны длины сторон треугольника - a, b, c. Определить, является ли он разностронним, ранобедренным или равносторонним
let a: number = 6;
let b: number = 8;
let c: number = 6;

if (a == b && b == c && a == c ) {
    console.log( " Треугольник равносторонний!")
    
} else if(a == b || a == c && b != c){
  console.log(" Треугольник равнобедренный!")
    
} else {
    console.log("Треугольник разносторонний!")
}

//3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 

let d:number = 3, f: number = 3, g: number = 6;
 if (d + f == g || d + g == f || f + g == d) {
     console.log(" Треугольник не существует");
     
 } else {
     console.log("Треугольник существует");
 }

 //4. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).

 let age: number = 88;
 if(age <= 17){
     console.log(" Молодой ")
 }else if ( age >= 70){
     console.log("Пожилой")
 } else{
     console.log("Взрослый")
 }

 //5. Вывести в консоль квадраты чисел от 10 до 20.

 let k:number = 10;
    while (k < 20) { 
        console.log( k**2)
        k++;
    }

//6. Найти сумму первых 20 натуральных чисел кратных 5.

let sum: number = 0;
let i: number = 1;
let count: number = 1;
while( count <= 20 ){
    let check = ( i % 5 ) == 0;
    if( check ){
     sum += i;
     count++;
    }
    i++;
   }
    console.log(sum);

    //7. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).
    function fib(n: number):number {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }
      console.log(fib(13));

// 8. Разработать функцию для вычисления НОД 2 натуральных чисел.
         
           function Nod(num1: number, num2: number): number{
              
            while(num1 != 0 && num2 != 0){
                   if (num1 > num2){
                       num1 = num1 - num2;
                   }else{
                       num2 = num2 - num1;
                   }
               }return num1;
           }
         console.log(Nod(80, 100));    

//9. Дано предложение. Вывести последнее слово в предложении.
let str: string = " Привет Мир";
console.log(str.split(" ").pop());

//10. Дан массив. Найти сумму только положительных элементов массива.

function SumOfpositive( arr: number[]):number{
    let sum: number = 0;
    for (i=0; i <= arr.length; i++){
        if(arr[i] > 0){
       sum += arr[i];
       }
    } 
    return sum;
}
let arr = [-2, 0, 3, 4];
console.log(SumOfpositive(arr));

//11. Дано предложение. Преобразуйте первую букву каждого слова строки в верхний регистр.
/*let str2:string = " сново привет мир";
function toUpper(str: string) {
    return str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
  }
  
     console.log(toUpper(str2));
     */

//12. Проверить 2 массива на полное совпадение.



//13. Удалить из предложения все знаки препинания (. , : ; ! ? -).
let str3: string = " Каждый, охотник./; желает....! знать-????";
console.log( str3.replace(/[.,\?!/g," ");


