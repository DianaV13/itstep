//1. Создайте пустой объект user.
let user = {};

//2. Добавьте свойство name со значением John.
user.name = "Jonh";

//3. Добавьте свойство surname со значением Smith.
user.surname = "Smith";

//4. Измените значение свойства name на Pete.
user.name = "Pete";
console.log(user.name);
//5. Удалите свойство name из объекта.
delete user.name;
console.log(user.name);

//6. Пусть дан объект с зарплатами сотрудников. Найти сумму зарплат с использованием for..in.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sumSalaries = 0;
  for ( let key in salaries){
      sumSalaries += salaries[key]
  };
  console.log (sumSalaries);
 
  // 7. Дан объект. Написать код, который создает его точный клон (новый объект с такой же структурой).
let user1 = {
    name: "Иван",
    age: 30
  }
  let user2 = {};
 for( let key in user1){
     user2[key] = user1[key]
 }
console.log(user2.name, user2.age);
  
  // 8. Дан объект Написать код, который создает его точный клон (новый объект с такой же структурой).
let user3 = {
    name: "Иван",
    sizes: {
      height: 182,
      width: 50
    }
  };
  //let clone = Object.assign({}, user3);
let cloneUser = {};
for(let key in user3){
    if (typeof user3[key] != "object")
    cloneUser[key] = user3[key];
    else{
        cloneUser[key] = {};
        for(let key1 in user3[key]){
            cloneUser[key][key1] = user3[key][key1];
        }
    }
}
//console.log( user3.sizes === clone.sizes ); // true, один и тот же объект
console.log (user3, cloneUser);