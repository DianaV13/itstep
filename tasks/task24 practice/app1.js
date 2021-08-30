//1. Дан массив из n элементов и число k<n. Вывести последние k элементов массива.
const min = 1, max = 100,n = 10;
let a = []; ;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;   // пишем a[i], а не i, т.к. i - это индекс массива, а a[i]- само число
 }   

 let k = 5 
 for(let i = n - k; i < n; i++){
        console.log (a[i]);
    }
 console.log(a);