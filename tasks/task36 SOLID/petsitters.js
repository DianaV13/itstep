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
    getRating(){
        let rating = this.reviews.reduce(function(sum,review){
           return sum + review.rating;
        },0);
        if(this.reviews.length > 0)
            return Math.round(rating / this.reviews.length);
        else 
            return undefined; 
    }

    checkService(name){
        let service = this.services.find(function(service){
            return service.name == name;
        }); 
        return service;
    }
}

export {Petsitter};