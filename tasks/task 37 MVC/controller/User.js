import{Client} from "../model/client.js"

class ClientController{
    static createClient(name, login, password){
        let newClient = new Client(name, login, password);
        return newClient;

    }
    static Delete(client){
        delete client; //
    }
}