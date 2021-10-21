//sort:13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let a = [3, 4, 1, 2, 7];
a.sort();
console.log(a);

//forEach:14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
let b = [1, 2, 3, 5, 7], c = [];
b.forEach(function(item){
 c.push(item**2);
});
console.log(c);


//15. Дан массив с числами. Найдите сумму этих чисел.
let d = [1, 2, 3, 4, 5], sum = 0;
d.forEach((item) =>{
  sum+=item;

});
console.log(sum);
