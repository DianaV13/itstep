class Elips {
    constructor(a,b){
        
        this.a = a;
        this.b = b;
    }
    getSquare(){
     return Math.PI * this.a * this.b;
    }
    
}
let elipse = new Elips (3, 6);
console.log(elipse.getSquare());