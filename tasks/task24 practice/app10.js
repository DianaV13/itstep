//10. Дан массив из n элементов. Удалить все повторяющие элементы (удалить и сдвинуть следующие за ним).

const min = 1, max = 100;
let a = []; n = 10; 

for(let i = 0; i < n; i++) {
    a[i] = Math.floor( Math.random ()*(max - min + 1)) + min; 
 }   
console.log(a);

for(let i = 0; i < n-1; i++){  //первый цикл фиксирует элементы
    
    let x = a[i];

        for(let j = i+1; j < n; j++){   //второй циклначинает сравнивать элементы
            
            if(a[j] == x){

                for(let k = j+1; k < n; k++){  //третий цикл сдвигает элементы на единицу назад  

                    a[k-1] = a[k];
                }
                n--;
                j--;  //уменьшаем на единицу т.к.удаляется предыдущий элемент
            }
        }
}
console.log(a);