//2. Дан массив из n элементов и число k. Вывести все элементы кратные числу k.
const min = 1, max = 100,n = 10;
let a = []; k = 3;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
    if ( a[i] % k == 0){
        console.log (a[i]);
    }

}
 console.log(a);