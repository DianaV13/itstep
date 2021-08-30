//4. Дан массив из n элементов. Поменять максимальный и минимальный элементы местами.
const min = 1, max = 100,n = 10;
let a = []; 

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
     console.log (a);
}

let maxNum = a[0], maxInd;
for( let i = 1; i < n; i++){
    if (a[i] > maxNum){
    maxNum = a[i];
    maxInd = i;

}
}
let minNum = a[0], minInd;
for(let i = 1; i < n; i++){
    if(a[i] < minNum){          
    minNum = a[i];
    minInd = i;
}
}
a[maxInd] = minNum;
a[minInd] = maxNum;
 console.log(a);