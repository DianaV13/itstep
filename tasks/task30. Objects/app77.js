

let user = { name: "Иван" };

let admin = user;
console.log(admin.name);

admin.name = 'Петя'; // изменено по ссылке из переменной "admin"

console.log(user.name); // 'Петя', изменения видны по ссылке из переменной "user"

let user = {
    name: "Иван",
    age: 30
  };
  
  let clone = {}; // новый пустой объект
  
  // скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // теперь в переменной clone находится абсолютно независимый клон объекта
  clone.name = "Пётр"; // изменим в нём данные
  
  alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.



  let user = {
    name: "Иван",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, один и тот же объект
  
  // user и clone обращаются к одному sizes
  user.sizes.width++;       // меняем свойство в одном объекте
  alert(clone.sizes.width); // 51, видим результат в другом объекте