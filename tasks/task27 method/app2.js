//splice:
//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let a = [1, 2, 3, 4, 5];
a.splice(1, 2);// начиная с 1, удаляем 2 элемента: 2 и 3
console.log(a);

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let b = [1, 2, 3, 4, 5];
let c = b.splice(1, 3);// 
console.log(c);

//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let d = [1, 2, 3, 4, 5];
d.splice(3, 0, 'a', 'b', 'c');
console.log(d);
//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 let e = [1, 2, 3, 4, 5]
 e.splice(1, 8 ,'a', 'b', 2, 3, 4, 'c', 5, 'e' );
 console.log(e);