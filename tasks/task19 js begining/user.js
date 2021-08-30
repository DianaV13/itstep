var userName = " Вася " ;
const userLastName = " Пупкин " ;
var height , weightInCentner ; 
height = 180 , weightInCentner = 0.89 ;
oldWeight = weightInCentner;
console.log("Меня зовут" + userName + userLastName+ ". Я вешу " + weightInCentner+ "  ц.  Мой рост - " + height + " см."); 

height = 180 - 2;
weightInCentner = weightInCentner + 10/100;
console.log( userName + userLastName + " потолстел и стоптался.");

userName = "Петя";
weightInCentner *= 2;
console.log( "Теперь я " + userName + userLastName +  " и вешу в " + (weightInCentner/oldWeight) + " больше, чем в молодости.");
