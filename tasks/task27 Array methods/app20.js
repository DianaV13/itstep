// reduce 20. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
//Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
let b = [1, 2, 3, 0, 4, 5, 6]
let answer = 0;
let result = b.reduce(function(sum,item){
    if (item == 0){
        answer = sum;
    }else{
        return sum + item;
    }
});
if(answer == undefined){ answer = result};

console.log(answer);
