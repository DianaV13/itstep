/*let element = document.getElementById("first-element");

let elements = document.getElementsByTagName("div");

console.log(elements.length);

let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];

let sectionDivs = section.getElementsByTagName("div");

console.log(sectionDivs.length);

let divs = document.querySelectorAll(".first-section div");
console.log(divs.length);*/




//1. Элемент: #first-element. 
let sections = document.getElementsByClassName("first-section");//возвращает коллекцию, состоящую из всех элементов содержащих имя класса "first-section"
let section = sections.item(0);//обращаемся именно к нужному элементу массива, т.к.он у нас один, поэтому индекс 0
console.log (sections.length);

//1.1. поменяйте "Я сосед" на "Я хороший сосед"
let neighbors = section.getElementsByClassName("neighbor");
for(let i = 0; i < neighbors.length; i++){
   neighbors.item(i).innerHTML ="Я хороший сосед";
};

//1.2 добавить к каждому соседу его номер, например, "Я хороший сосед №2"
for ( let i =0; i< neighbors.length; i++){
    neighbors.item(i).innerHTML = "Я хороший сосед №" + (i+1);
}
//1.3 оберните текст в элементах с классом "neighbor" в тег span !!!!!!!!!!!!
for ( let i =0; i< neighbors.length; i++){
    x = neighbors.item(i).innerHTML;
    neighbors.item(i).innerHTML = `<span> ${x} </span>`;
}

//1.4 замените теги span на тег b
for ( let i =0; i< neighbors.length; i++){
    let span = neighbors.item(i).getElementsByTagName("span").item(0);
span.outerHTML = `<b> ${span.innerHTML}</b>`;// полностью перезаписываем 
}

//- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"
let fourthNeighbor = section.getElementsByClassName("fourth-neighbor");
let fouth = fourthNeighbor.item(0);
fouth.innerHTML = 'Я последний хороший сосед ';

//2. Элемент: #second-element.



//2.1 добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.

//2.2 каждый четный пункт покрасить в красный цвет
//2.3 каждому нечетному пункту добавить класс odd-element
//2.4 элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

// 3. Элемент: #third-element.

// 3.1 заменить теги b на strong


// 3.2.удалить в тегах strong все теги, т.е. должен остаться только текст
// 3.3.обернуть каждое слово в тег span 

//4. Элемент: #fourth-element
//- Выведите на экран текст из всех тегов div
//- Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст
//- удалить третьего "соседа"
//- добавить "пятого" соседа после четвертого
//- пятому соседу добавить границу, внутренние отступы и фон

// 5.Создать идентичным первому элементу

element5 = document.getElementById("fifth-element");
let div = document.createElement('div');
div.innerHTML = "Я хороший сосед №1";
div.classList.add("first-neighbor", "neighbor");
element5.insertAdjacentElement("beforebegin",div);
element5.classList.add ("my-class", "not-my-class");

let div2 = document.createElement('div');
div2.innerHTML = "Я хороший сосед №2";
div2.classList.add("first-neighbor", "neighbor");
element5.insertAdjacentElement("beforebegin",div);