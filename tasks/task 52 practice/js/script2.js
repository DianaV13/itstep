//8. Создать массив на 100 элементов и заполнить его случайными числами. Найти разницу между максимальным и мнимальными элементами.
//let arr = new Array(100);
const min = 1, max = 100; n = 100;
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
  console.log(arr[i]);  
}
let minNum = Math.min.apply(null, arr);
let maxNum = Math.max.apply(null, arr);

let dif = maxNum - minNum; 

/*let maxNum = arr[0];
for(let i = 1; i < arr.length; i++){
    if (arr[i] > maxNum);
    maxNum = arr[i];

}
let minNum = arr[0];
for(let i = 1; i < arr.length;i++){
    if( arr[i] < minNum);
    minNum = arr[i];
}*/
console.log(maxNum, minNum, dif);
 

//9. Сделать туже самую задачу из предыдущего пункта для двумерного массива 10х10.

let matrix = [];
for(let j = 0; j < 5; j++){
    for(let k = 0; k < 5; k++){
        matrix [j][k] = Math.floor( Math.random ()*(max - min + 1)) + min;
    }
}
console.log(matrix);