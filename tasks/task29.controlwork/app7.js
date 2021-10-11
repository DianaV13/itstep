//7. Дан массив [1,3,6,4,3,3,5,6]. Получить из него массив, состоящий из элементов без повторений.
let arr = [1, 3, 6, 4, 3, 3, 5, 6];
let uniqueArr = arr.filter( (item, i, ar) => ar.indexOf(item)===i);

console.log(uniqueArr);