const min = 1, max = 100, n = 10;
let a = [], summ = 0;
for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;//генерируем случайные числа
}
for(let i = 0; i < n; i++) { //
    summ += a[i];
}
console.log( a  + ' среднеарифметическое '+ summ/n);




