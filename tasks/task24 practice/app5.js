//5. Дан массив из n элементов. Создать 2 новых массива. В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.
const min = 1, max = 100,n = 10;
let a = []; ;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;   
 }   

 let odd = [], even = [], j = 0, l = 0;
 for( let i = 0; i < n; i++){
     if( i % 2 == 0){
          even[j] = a[i];
          j++;
     }
     else{
     odd[l] = a[i];
     l++
     }
 }
 console.log(a, odd, even)
 /*
 i = 0
 1 итерация
 0 < 10;
 0/2 = 0;
 even[0] = a[0];
 i++
2 итерация
i = 1
1 < 10;
1 % 2 !=0
odd[0] = a[0];
 i++

 3 итерация
 2 < 10;
 2 % 2 = 0;
 even[1] = a[2];
 i++

 4 итерация
 3 < 10;
 3 % 2 != 0;
 odd[1] = a[3];
 i++

 */