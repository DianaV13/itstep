//5. Разработать функцию, которая выводит элементы массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)
function ArrayStrite(a){
    let str = '';
        str += a[0];
    
    for(let i = 1; i < a.length; i++){
        str += ","+a[i];
        
    }
    return str;
}
let b = [1,2,3,4,5];
console.log(ArrayStrite(b));

//+

