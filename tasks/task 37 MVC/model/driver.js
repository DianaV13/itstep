import{User}from "./user";
class Driver extends User{
car;
reviews;

    constructor(name, login, password){
        super(name, login, password);
        this.car = car;
        this.reviews = [];
    }

    
}
export{Driver};