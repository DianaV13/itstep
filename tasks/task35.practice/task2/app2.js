//Задача 2.
/*
1) Создать класс Animal и расширяющие его классы Dog, Cat, Horse. 
2) Класс Animal содержит переменные food, location и методы makeNoise, eat, sleep.
 Метод makeNoise, например, может выводить на консоль "Такое-то животное спит".
3) Dog, Cat, Horse переопределяют методы makeNoise, eat. 
4) Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. 
5) Создайте класс Ветеринар, в котором определите метод void treatAnimal(Animal animal). 
Пусть этот метод распечатывает food и location пришедшего на прием животного. 
6) В главном файле app.js создайте массив типа Animal, в который запишите животных всех имеющихся у вас типов.
 В цикле отправляйте их на прием к ветеринару.
 */
 import {Animal} from "./animal.js";
 import {Dog} from "./dog.js";
 import {Cat} from "./cat.js";
 import {Horse} from "./horse.js";
 import {Vet} from "./vet.js";
 
 let dog = new Dog("Bone","Street","Rex");
 let cat = new Cat("Meat","Home","Barsik");
 let vet = new Vet();
 dog.sleep();
 dog.makeNoise();
 dog.eat();
 
 let Animals = [];
 Animals.push(dog);
 Animals.push(cat);
 Animals.forEach(function(item) {
     vet.treatAnimal(item);
 })
 
