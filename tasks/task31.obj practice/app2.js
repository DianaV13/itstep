// Фунцкция Калькулятор, и посчитать выражение (x-y*2)/(y+x) 

function Calculator(){
    this.add = function(a, b){
       return a + b;
    },
    this.sub = function (a, b){
        return a - b;
    },
    this.mul = function(a, b){
        return a * b;
    },
    this.div = function(a, b){
        return a / b;
    };

}
let x = 4, y = 5;
let calc = new Calculator;
/*
let result = calc.div( calc.sub(x,  calc.mul(y, 2) ), calc.add(x, y) );
*/
let o1 = calc.mul(y, 2)
let o2 = calc.sub(x, o1)
let o3 = calc.add(y, x)
let o4 = calc.div(o2, o3)
let result = o4


console.log (result)
