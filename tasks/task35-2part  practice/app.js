import{Phone} from "./phone.js";

let phone1 = new Phone()
phone1.model = "S12";
phone1.number = 1261584; 
phone1.weight =  200; 
   

console.log (phone1.model);
console.log (phone1.number);
console.log ("Вес телефона  " + phone1.weight + " грамм");
phone1.receiveCall("Вася");
console.log ("Номер телефона  " + phone1.getNumber());

let phone2 = new Phone()
phone2.model = "S252";
phone2.number = 1261444; 
phone2.weight =  2000; 
   

console.log (phone2.model);
console.log (phone2.number);
console.log ("Вес телефона  " + phone2.weight + " грамм");
phone2.receiveCall("Петя");
console.log ("Номер телефона  " + phone2.getNumber());

