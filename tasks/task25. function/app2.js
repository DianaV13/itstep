function fillArray(a,n){
    const min = 1, max = 100;
    for(let i = 0; i < n; i++) {
        a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;
    }   
    return a;    
}


function deletEvenArrElem (a){
    for(let i = 0; i < a.length; i++){
        if (a[i] % 2 == 0){
            a[i]*2;
        }
        
    }
    return a;
}


function deletArrElem(a,k){
    for(let i = k+1; i <= a.length; i++){
        a[i-1] = a[i];
        
        }
    return a;
}
function uniqElem(a){
    let m = [];j = 0;
    for(let i = 0; i <= a.length; i++){
        if(a[i]!= a[i+1]){
            a[i]=b[0];
            j++;
        }
    }    
    return a;
}


let b = [];
b = fillArray(b,10);
console.log(b);

let even = deletEvenArrElem(b);
console.log(b);

let del = deletArrElem(b,5);
console.log(b);
 
let unic = uniqElem(b);
console.log(b);

