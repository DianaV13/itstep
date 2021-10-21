import { Client } from "../model/client.js";
import { Request } from "../model/request.js";
import{Review} from "../model/review.js";

class ClientController{
      static createClient(name, login, password){
         let newClient = new Client(name, login, password);
         return newClient;
      }
    static  updateClient(client,name, login, password){
         client.name = name;
         client.login = login;
         client.password = password;
         return client;
      }
       
     static createReview(client, text,date, rate){
        let newReview = new Review (client, text,date, rate);
        return newReview;
     }

     static createRequest(client,pathLength,comfort,hasBabyChair,capacity,comment){
        let newRequest = new Request(client,pathLength,comfort,hasBabyChair,capacity,comment)
        return newRequest;
        }

        delete(client){
           delete client;

        }
        
        
     
}
 