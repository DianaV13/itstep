//11*Разработать рекурсивную функцию для нахождения n-го числа Фибонначи.
function FibonacciNumber(n){
    if (n < 3) {
        return 1;
        
    }else{
        return FibonacciNumber(n-1) + FibonacciNumber(n-2);
    }

}
let n = 6;
console.log(FibonacciNumber(n));
//+!!!УРА