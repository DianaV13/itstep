class smallAnimal{
    name;
    weight = 10;
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
        
    }
    getsize(){
        return this.weight;
    }
}
export{smallAnimal};