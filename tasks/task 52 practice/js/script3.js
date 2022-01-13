//10
function friendlyNum(a,b){
    let sumA = 0;
    let sumB = 0;
    for(let i = 0; i<=a; i++){
        if(a % i == 0){
        sumA =+i;
        return sumA;
        }
     }
     for( let j = 0; j<=b; j++){
         if( b % j == 0){
            sumB =+j;
        }
     }   
        console.log(sumA, sumB);
}
console.log(friendlyNum(6, 8));