//4. Разработать функцию для нахождения индекса максимального элемента в массиве.
function fillArray(a,n){
    const min = 1, max = 100;
    for(let i = 0; i < n; i++) {
        a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
    }   
    return a;    
}

function maxIndexInArray(a){
    let maxNum = a[0], maxIndex = 0;
    for (let i = 1; i < a.length; i++){
        if (a[i] > maxNum){
            maxIndex = i;
            maxNum = a[i];
        }
        
    }

 return maxIndex;
}
let a = [];
a = fillArray(a,8);
console.log(a);
console.log(maxIndexInArray(a));
//works good