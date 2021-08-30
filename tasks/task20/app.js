let num = 5;// определяем четность чисел
if (num % 2 == 0) {
console.log ("even");  
}else {
    console.log ("odd");
}
//Високосный год
let year = 2020;
if (year % 400 == 0 || year % 4 == 0 && year % 100 !=0 ) {// если при делении на 400 остаток равен 0 ИЛИ (при делении на 4 остаток  равен 0 И при делении на 100 остаток не равен 0)
    console.log ("високосный");
    
} else {
    console.log (" не високосный");
}
//ГРИБЫ

let mushroom = 15;
if(mushroom % 100 > 10  && mushroom % 100 < 20 ||
    mushroom % 10 > 4  && mushroom % 10 < 10 ||
    mushroom % 10 == 0)
    {
   console.log(mushroom + "грибов");
    }
else  if (mushroom % 10 == 1) 
    console.log( mushroom + "гриб");
else 
    console.log(mushroom + "гриба");



    //ДОСТАВКА
let day = 7;
let hour = 9;
if(day < 7 && hour >= 8 && hour < 16)
 console.log( "Доставка сегодня после 16");
else if (day == 7 || day < 7 && hour >16)
 console.log( " Доставка завтра с 8 до 16"); 
 





    
