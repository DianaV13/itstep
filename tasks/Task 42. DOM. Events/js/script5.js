document.getElementById("button").onclick = function(){
    let x = +document.getElementById("num").value;
    if(isNaN(x)){                         // проверяем, если х is NaN, то ...
      document.getElementById("result").innerHTML = "Это не число";
    }else{
        document.getElementById("result").innerHTML = "Это  число";
    }
}