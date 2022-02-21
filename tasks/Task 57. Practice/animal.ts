class Animal{
    name: string;
    food: string;
    location: string;

    constructor(food: string, location: string, name: string){
        this.food = food;
        this.location = location;
        this.name = name;
    }
    makeNoise():void{
        console.log(`${this.name} издает звуки`);
    }

    eat():void{
        console.log(`Ест ${this.food}`);
    }

    sleep():void{
        console.log(`${this.name} спит`);
    }
    
}
 
class Cat extends Animal{
    catchMouse: boolean;

    constructor(food: string, location: string, name: string){
        super(food, location, name);
    }

    makeNoise():void{
        console.log(this.name + " издает звук мяу-мяу");
    }
    eat(){
        console.log(` ${this.name} любит есть ${this.food}`);
    }
}

class Dog extends Animal{

    specialNoise: string = "гав-гав";
  
    constructor(food: string, location: string, name: string){
        super(food, location, name);
    }

    makeNoise():void{
        console.log(this.name + " издает звук ");
    }
    eat(){
        console.log(`Ест cвою ${this.food}`);
    }
}

class Horse extends Animal{
    specialNoise: string = "и-го-го";
  
    constructor(food: string, location: string, name: string){
        super(food, location, name);
    }

    makeNoise():void{
        console.log(this.name + " издает звук " + this.specialNoise);
    }
    eat(){
        console.log(`Ест cвою ${this.food}`);
    }

}
class Vet{
    treatAnimal(animal:Animal):void{
        console.log(`${animal.name} ест ${animal.food} в месте ${animal.location}`);
    }
}
const dog:Dog = new Dog("мясо","будка","Шарик");
const cat:Cat =  new Cat("рыба", "дом", "Барсик");
const horse:Horse = new Horse("овес", "конюшня", "Прима");
const vet:Vet = new Vet();
dog.sleep();
dog.makeNoise();
dog.eat();
console.log(cat);
cat.makeNoise();
cat.eat();
cat.sleep();
let Animals = [];
Animals.push(dog);
Animals.push(cat);
Animals.push(horse);
Animals.forEach(function(item) {
    vet.treatAnimal(item);
});