document.getElementById("button").onclick = function(){
   let a = document.getElementsByTagName("a").item(0).href;
   document.getElementsByTagName("a").item(0).textContent = a;
}