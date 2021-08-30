// Найти сумму  четных чисел от 2 до 100
let sum = 0;   // если внутри цикла, то переменная видна только внутри цикла
for (let i = 2; i<= 100; i++){
    if( i % 2 == 0){
       sum += i;  
    }
   
}
console.log (sum);

let Sum = 0, j = 2;
while (j <= 100){
    Sum += j;
    j+=2
}
console.log(Sum);

//Гипотиза Сиракуз
let n = 1_000_000, count = 0;
while (n!=1) {
    if (n % 2 == 0){
        n/=2;
    }
    else{
        n = ( n * 3 + 1) / 2;
    }

    count ++
}
console.log(count);



// Найти 51-е число, начиная с единицы, кот. делится на 7, но не делится на 5
 let d = 1,counter = 0;
do {
    d++;
    if(d % 7 == 0 && d % 5 != 0){
        counter ++;

    }

    
} while (counter !=51);
 console.log (d);



 let b = 100, numb = 0;
do{
    
    if(b % 21 == 0 || b % 14 !=0 ){
    numb++; 
    console.log (b);
    }
    b++;
    
} while (numb != 10);
 
