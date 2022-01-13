let element = document.getElementById("first-element");
console.log(element);
//- Добавьте ему класс www.

element.classList.add("www");
console.log(element);
 
//- Удалите у него класс www.
element.classList.remove ("www");

// - Проверьте наличие у него класса www.
console.log(element.classList);//или (element.classList.contains("www"); если есть,то true)

 //- Добавьте ему класс www, если его нет и удалите - если есть.
 element.classList.toggle("www",true);//если после параметра стоит false, то при наличии параметра удаляет его
 console.log(element);

 //- Узнайте количество его классов.
console.log(element.classList.length);

 //- Выведите последовательно через console.log его классы.
 console.log(element.classList.item(0));
 console.log(element.classList.item(1));
 console.log(element.classList.item(2));


 //- Сделайте его красного цвета, размером 30px, добавьте ему границу
 element.style.cssText ='color : red; font-size : 30px; border : 5px solid black;';


 //Выведите название его тега в нижнем регистре
 console.log(element.tagName.toLowerCase());


 //Вставьте ему в конец span с текстом 'мой любимый спан'
 let newSpan = document.createElement("span");
 newSpan.innerHTML="<span> Мой любимый спан </span>";
 element.appendChild(newSpan);
 console.log(element);
 

 //Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
 let elements = ["createElement", "appendChild", "insertBefore"];

 let out = "<ul>";
 elements.forEach(function(item){
     out += `<li>${item}</li>`;
 });
 
 out += "</ul>";
 element.innerHTML += out;
 
 //не универсальный способ
 /*let newUl = document.createElement("ul");
 newUl.innerHTML = "<ul> <li>createElement</li> <li>appendChild</li> <li> insertBefore</li></ul> ";
 element.appendChild (newUl);
*/
 //Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
 let newDiv = document.createElement("div");
 newDiv.classList.add("neighbor");
 newDiv.innerHTML = "еще один сосед";
 let parentDiv = element.parentNode;//Получаем ссылку на родителя element
 parentDiv.insertBefore(newDiv, element);



//2. Элемент: #second-element.
let element2 = document.getElementById("second-element");
console.log(element2);

 //- Вставьте перед ним span с текстом '!!!'.
 let newSpan2 = document.createElement("span");
 newSpan2.innerHTML = "<span> !!! </span>";
 let parentDiv2 = element2.parentNode;
 parentDiv2.insertBefore(newSpan2, element2);


 //- Вставьте после него span с текстом '!!!'.
 element2.insertAdjacentHTML('afterEnd', '<span>!!!</span>');

 //- Вставьте ему в начало span с текстом '!!!'.
 element2.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
 
 //- Вставьте ему в конец span с текстом '!!!'.
let newSpan2Past = document.createElement("span");
newSpan2Past.innerHTML = "<span> !!! </span>";
element2.appendChild (newSpan2Past);


//3. Элемент: #third-element.
let element3 = document.getElementById("third-element");
console.log(element3);

 //- Найдите первого потомка этого элемента и сделайте его текст красного цвета.
console.log(element3.firstElementChild);
element3.firstElementChild.style.cssText ='color : red;';

 //- Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
 element3.lastElementChild.style.cssText = 'color : red;';

 //- Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
 console.log (element3.children);//находим и выводим всех потомков элемента 3
 let elems = element3.children;
 for(let elem of elems){
     elem.insertAdjacentHTML("beforeend","!")//каждому из потомков добавляем ! в конец
 };

 //4.Элемент: #fourth-element

 let element4 = document.getElementById("fourth-element");

 //- Найдите его соседа сверху и добавьте ему в конец текст '!'.
 console.log(element4.previousElementSibling.insertAdjacentHTML("beforeend","!"));
 //- Найдите его соседа снизу и добавьте ему в конец текст '!'.
 console.log(element4.nextElementSibling.insertAdjacentHTML("beforeend","!"));
 //- Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 
 let nextelem = element4.nextElementSibling;
 nextelem.nextElementSibling.insertAdjacentHTML("beforeend","!");


 //5. Элемент: #fifth-element
 let element5 = document.getElementById("fifth-element");
 

// - Найдите его родителя и покрасьте его в синий цвет.
element5.parentNode.style.cssText = 'color: blue;';
 //- Найдите родителя его родителя и покрасьте его в желтый цвет.
element5.parentNode.parentNode.style.cssText = 'background: yellow;';

