//9. Разработать функцию для вычисления НОД 2 натуральных чисел.HOD - наибольший общий делитель
function NOD(a, b){
    for(let i = b; i > 0; i--){
        if(a % i == 0 &&
            b % i == 0){
                return i;
            }
    }
}
let k = NOD(28, 70);
console.log( "Наибольший общий делитель " + k);
//+
//Другой способ:
/* 

function NOD(a,b){
    while(a != b){
        if (a > b){
            a = a - b;
        }else{
            b = b - a;
        }
    }
    return a;

*/