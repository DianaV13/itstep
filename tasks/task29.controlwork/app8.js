//8. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов.
let a = [1,3,6,4,3,3,5,6];
a.splice(0,2);
console.log(a);