//3. Дан массив из n элементов. Вывести сумму максимального и минимального элемента.const min = 1, max = 100,n = 10;
const min = 1, max = 100,n = 10;
let a = []; 

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
     console.log (a[i]);
}

let maxNum = a[0];
for( let i = 1; i < n; i++){
    if (a[i] > maxNum){
    maxNum = a[i];
}
}
/*
1 итерация
i = 1;
1 < n;
если a[1] > a[0], то a[1] = maxNum;
i++

2 итерация
i = 2;
i < n;
если a[2] > a[1], то a[1] = maxNum;
i++
.......
*/
let minNum = a[0];
for(let i = 1; i < n; i++){
    if(a[i] < minNum){          
    minNum = a[i];
}
}
 console.log( "Сумма максимального и минимального чисел " + (maxNum + minNum));