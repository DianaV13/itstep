import{Users}from "./users";
import{Pets} from "./pets";
class Clients extends Users{
    pets;
    constructor(name,login,password, pets){
        super(name, login, password);
        this.pets = new Pets;
    }
    addPets(pet){
        this.pets.push(pet);
    }
    checkPet(name){
        let pet = this.pets.find (function(pet){
               return pet.name == name;
        });
        return pet;
        }

    
}
export{Clients};