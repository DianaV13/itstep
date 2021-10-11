// написать функцию, которая проверяет пустой ли объект или нет.
let obj ={
    name: "Jonh",
    age: 30,
};
function EmptyObject (obj) {
for (let key in obj){
    return false;    
    }
return true;
}

console.log(EmptyObject(obj));