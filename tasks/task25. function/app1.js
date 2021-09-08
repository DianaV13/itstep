function fillArray(a,n){
    const min = 1, max = 100;
    for(let i = 0; i < n; i++) {
        a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
    }   
    return a;    
}
//находим сумму элементов массива
function ArrElementSum (a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}
let b = [];
b = fillArray(b,40);

let sum = ArrElementSum(b);
console.log(b, "сумма элементов массива " + sum);