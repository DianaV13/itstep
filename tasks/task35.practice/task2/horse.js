import { Animal } from "./animal.js";
class Horse extends Animal{
    constructor(food, location, name){
        super(food, location, name);
    }

    makeNoise(name){
        console.log(this.name + " грациозное животное");
    }
};

let horse = new Horse ("Лошадь");
horse.food = "сено";
horse.location = "в конюшне";
horse.noise = "Иго-го-го";
horse.special = "Грива";

horse.makeNoise();
horse.eat();
export{Horse};