class Services{
    name;
    price;
    time;
    constructor(name, price, time){
        this.name = name;
        this.price = price;
        this.time = time;
    
    }
    getFullPrice(price,time){
        let fullPrice = this.price * this.time;
    }

}
export{Services};