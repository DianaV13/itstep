//3. Разработать функцию для нахождения максимального элемента в массиве.

function randomNumber (min, max){
    let randNum = Math.floor (min + Math.random ()*(max + 1 - min));
return randNum;   
} 

function fillArray(a, n){
    for (i = 0; i < n; i++){
        a[i] = randomNumber(1, 100);
    }
    return a;
}



function maxNumberInArray(a){
    let maxNum = a[0], n = 20;
    for(i = 1; i < n; i++){
        if (a[i] > maxNum){
            maxNum = a[i];   
        }  
    }
    return maxNum;  
}
let a = [];
a = fillArray(a, 20);
console.log(a);

console.log(maxNumberInArray (a));
