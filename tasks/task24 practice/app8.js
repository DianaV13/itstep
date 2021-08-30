//8. Дан массив из n элементов и число k<n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.
const min = 1, max = 100,n = 10;
let a = []; ;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;   // пишем a[i], а не i, т.к. i - это индекс массива, а a[i]- само число
 }   
console.log(a)
 let k = 5 
 for(let i = k; i < n; i++){
     a[i] = a[i+1];
     
     }
/*
i = 5;
5 < 10;
a[5] = a[5+1], т.е. = a[6]
...
a[9] будет undefinde.

*/ 
 console.log(a);