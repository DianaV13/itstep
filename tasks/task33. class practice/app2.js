

class Clothes {
    matirial = "cotton";
    size = 178;
    color = "black";
    constructor(matirial, size, color){
        this.matirial = matirial;
        this.size = size;
        this.color = color;
    }
};
let pants = new Clothes ("cotton", 178,"black");
pants.belt = "leather";
   

 console.log("Pants is "+ pants.matirial + " and " + pants.color + " It's  "+ pants.size +"size");

let shirt = new Clothes ("cotton", 164, "red");
shirt.collarGirth = 40;

shirt.matirial = "silk";
shirt.color = "white"
console.log( "shirt is " + shirt.matirial + " and "+ shirt.color);
console.log(shirt.collarGirth);
