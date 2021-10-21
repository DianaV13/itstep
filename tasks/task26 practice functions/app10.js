//10. Раразботать функцию для вычисления НОД элементов массива.
//Сначала пишем фуекцию НОД
function NOD(a,b){
    while(a != b){
        if (a > b){
            a = a - b;
        }else{
            b = b - a;
        }
    }
    return a;
}
function ArrayNOD (a){ 
    if(a.length < 2){
        return null;
    }
    let nod = NOD (a[0], a[1]);

    for (i = 2; i < a.length; i++){
        nod = NOD(nod, a[i]);
    }

    return nod;
}
let m = [25, 45, 10, 95];
console.log(ArrayNOD (m));
let n = [14,24,32,16,92];
console.log(ArrayNOD (n));

//+++