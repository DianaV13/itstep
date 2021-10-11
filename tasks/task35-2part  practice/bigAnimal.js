class bigAnimal{
    name;
    weight = 1000;
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
        
    }
    getsize(){
        return this.weight;
    }
}
export{bigAnimal};