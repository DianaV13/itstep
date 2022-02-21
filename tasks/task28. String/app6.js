//6. Дана переменная str, в которой хранится какой-либо текст. 
//Реализуйте обрезание длинного текста по следующему 
//принципу: если количество символов этого текста больше заданного в переменной n,
//то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
 //В противном случае в переменную result запишем содержимое переменной str.
 
 let str = "Однажды в суденую зимнюю пору, я из лесу вышел, был сильный мороз";
 
 function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }
 

 console.log (truncate(str,20));