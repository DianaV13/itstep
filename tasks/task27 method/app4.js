//map:  16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

let a = [1, 2, 3], c = [];
c = a.map(function(item){
    return item**2;
});
console.log(c);

//every: 17. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let b = [1, 2, 3, 8, 15];

console.log(b.every( item => item > 0));
console.log([1, 0, -1].every( item => item > 0));

// some: 18. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
let d = [15, 42, 84, 32, -15];
let nagative = (item) => item < 0;
console.log(d.some(nagative));
console.log([15, 25, 30].some(nagative));
console.log([0, 1, 0].some(nagative));