// Случайные элементы массива и сделать массив реверсивный
const min = 1, max = 100,n = 10;
let a = [];// пустой массив объявляется
for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;// пишем a[i], а не i, т.к. i - это индекс массива, а a[i]- само число
}
let reverse = [ ];
for( let k = 0, i = n-1; k < n; k++, i--){
    reverse[k] = a[i];
}
console.log (a, reverse);