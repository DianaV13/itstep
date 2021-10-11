import { bigAnimal } from "./bigAnimal.js";
class Dragon extends bigAnimal{
    constructor(name, weight){
        super(name, weight);
    }
    getsize(){
        if(this.weight >= 1000){
            console.log(this.name + " - Огромное животное");
        }
    }
}
export{Dragon};
