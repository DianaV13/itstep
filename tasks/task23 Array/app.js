// генерировать массив со случайными числами и вывести только четные в консоль.

const min = 1, max = 100,n = 10;
let a = [];// пустой массив объявляется
for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;// пишем a[i], а не i, т.к. i - это индекс массива, а a[i]- само число
    if (a[i] % 2 == 0){
        console.log (a[i]);// вывело рандомные четные числа массива
    }

}
//Math.floor( Math.random ()*(max - min + 1)) + min - ЭТО ФОРМУЛА ГЕНЕРАЦИИ СЛУЧАЙНОГО ЧИСЛА

//Массив из случайных чисел, найти в нем максимальный
let b = [];
for (let j = 0; j < n; j++) {
    b[j] = Math.floor( Math.random ()*(max - min + 1)) + min;
  console.log(b[j]);  
}

let maxNum = b[0];
for(let j = 1; j < n; j++){
    if (b[j] > maxNum);
    maxNum = b[j];

}
console.log(" максимальный элемент равен" + maxNum);
