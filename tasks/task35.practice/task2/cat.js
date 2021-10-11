import { Animal } from "./animal.js";

class Cat extends Animal{
    constructor(food, location, name){
        super(food, location, name);
    }

    makeNoise(){
        console.log(this.name + " издает звук " + this.specialNoise);
    }
    eat(){
        console.log(`Ест твою ${this.food}`);
    }
};

let cat = new Cat ("Кошка");

cat.food = "wiskas";
cat.location = "дома";
cat.noise = "мяяяуу";
cat.specialNoise = "мур-мур-мур";
cat.makeNoise();
cat.eat();


export{Cat};
