import{Users}from "./users";
class PetSitters extends Users{
    services;
    reviews;
    constructor(name,login,password){
        super(name, login, password);
        this.services = [];
        this.reviews = [];
    }

    addServices(service){
        this.services.push(service);
    }

    addReviews(review){
        this.reviews.push(review);
    }
    checkServices(service){
        if(this.service = service){
            return service;
        }
    }
    getRating(rating,)//???????????????
    
}
export{PetSitters};
