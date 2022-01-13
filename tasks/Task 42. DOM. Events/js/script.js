document.getElementById ("button").onclick = function(){
    let zero = +document.getElementById ("zero").textContent;
    zero++;
    document.getElementById ("zero").textContent = zero;
  
}