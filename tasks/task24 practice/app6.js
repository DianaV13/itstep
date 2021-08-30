//6. Дан массив из n элементов. Увеличить все нечетные элементы на 1 и уменьшить все четные в 2 раза.const min = 1, max = 100,n = 10;
const min = 1, max = 100,n = 10;
let a = []; ;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;   
 }  
 console.log(a); 
 for( let i = 0; i < n; i++){
     if( a[i] % 2 != 0){
         a[i]++;
     }
     else{
    a[i] = a[i]/2;
     }
 }
 console.log(a)