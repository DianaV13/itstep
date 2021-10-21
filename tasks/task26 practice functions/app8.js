//8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и -1 - в противном случае.

function fillArray(a,n){
    const min = 1, max = 100;
    for(let i = 0; i < n; i++) {
        a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
    }   
    return a;    
}
function findNumberInArr(a, x){
    for (let i = 0; i < a.length; i++) {
        if(a[i] == x) {
         return i;   
        }      
        
    }
    return -1;
}
let b = [];
fillArray(b, 10);
console.log(b);
let x = 24
console.log(findNumberInArr(b, x));
// +