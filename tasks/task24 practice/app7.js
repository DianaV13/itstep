//7. Дан массив из n элементов и некоторое число x. Проверить наличие числа x в массиве.
const min = 1, max = 100,n = 10;
let a = []; x = 25;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;   
 } console.log(a);
 
 for(let i = 0; i < n; i++){
 if( a[i] == x){
     console.log(x +"  находится в массиве");
 }
}

