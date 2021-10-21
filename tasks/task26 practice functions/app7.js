//7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.
function fillArray(a,n){
    const min = 1, max = 100;
    for(let i = 0; i < n; i++) {
        a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
    }   
    return a;    
}


function checkNumber (a, x){
    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            console.log(x + " находится в массиве"); 
            return true; 
         }
    }
    
    console.log(x + " нет в массиве");
    return false;
}

let b = [];
fillArray(b,20);
console.log(b);
checkNumber(b,15);

// работает!!!!!!

