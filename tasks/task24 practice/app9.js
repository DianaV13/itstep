//9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.
const min = 1, max = 100,n = 10;
let a = []; ;

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min;  
 }   
console.log(a)
//Создаем два флага для сортировки по возрастанию и по убыванию
let isgrow = true, isless = true;
for(let i = 1; i < n;i++){
   if( a[i] > a[i-1]){      //сравниваем текущее значение с предыдущим
    isless = false;
   } 
   if(a[i] < a[i-1]){
       isgrow = false;
   }
}
if(isless){ // равнозначно if(isless = true)
    console.log("Массив упорядочен по убыванию")
}else if(isgrow){
    console.log("Массив упорядочен по возрастанию")
}else{
    console.log("Массив не упорядочен")
}