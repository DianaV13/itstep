import{Driver} from "../model/driver.js"

class DriverController{
    static createDriver(name, login, password){
        let newDriver = new Driver(name, login, password);
        return newDriver;

    }
    static Delete(driver){
        delete driver; // удаляет объект из памяти навсегда
    }
}