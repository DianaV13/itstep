//12. Преобразуйте первую букву строки в верхний регистр.
let str = ' мир прекрасен!';
let newStr = str[1].toUpperCase() + str.slice(2);
console.log(newStr);


//13. Преобразуйте первую букву каждого слова строки в верхний регистр.
let str2 = "hello world!"
console.log(str2.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" "));


/*
String.prototype.toUpperCaseWords = function () {
    return this.replace(/\w+/g, function(a){ 
      return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    })
  }

console.log(str2.toUpperCaseWords());*/



//14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
let str = 'var_test_text';
