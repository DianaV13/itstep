import { smallAnimal } from "./smallAnimal.js";
class Goose extends smallAnimal{
    constructor(name,weight){
        super(name,weight);
    }
    getsize(){
        if(this.weight <= 10){
            console.log(this.name + " - Маленькое животное");
        }
    }
}
export{Goose};
