let parent = document.getElementById("parent");
parent.onmouseenter = function(event){
    let target = event.target;
    target.style.background = 'blue';
};
parent.onmouseleave = function (event){
    let target = event.target;
  target.style.background = '';
};
let child = document.getElementById("child");
child.onmouseenter = function(event){
    let target = event.target;
    target.style.background = 'black';
};
child.onmouseleave = function (event){
    let target = event.target;
  target.style.background = '';
};