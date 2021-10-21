import{Car} from "./car.js";
class Engine extends Car{
    power;
    company;
    constructor(power, company){
        this.power = power;
        this.company = company;
    }
    toString(){

    }

}
export{Engine};