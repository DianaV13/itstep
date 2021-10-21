// 2. Разработать функцию для заполнения массива случаныйми числами.
function randomNumber (min, max){
    let randNum = Math.floor (min + Math.random ()*(max + 1 - min));
return randNum;   
} 
function fillArray(a, n){
    for (i = 0; i < n; i++){
        a[i] = randomNumber(1, 100);
    }
    return a;
}
let a = [];
a = fillArray(a, 20);
console.log(a);
//+