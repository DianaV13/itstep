import{Animal}from "./animal.js";


class Vet {

    voidtreatAnimal(animal){
        console.log(this.animal.name + this.animal.food + " и " + this.animal.location)

    }
}
//class Vet{
//    treatAnimal(animal){
//        console.log(`${animal.name} ест ${animal.food} в месте ${animal.location}`);
  //  }
//}

export {Vet};