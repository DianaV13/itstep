//10. Удалить из предложения все знаки препинания (. , : ; ! ? -).
let str = " Delete;.? all ,! punctuation!!-";
let str2 = str.replace(/?;:.?!,-?g, " ");
console.log(str2);
