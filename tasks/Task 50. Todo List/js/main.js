let task = document.querySelector("#task");
let checklist = document.querySelector("#list");
let button = document.getElementsByClassName("btn");

document.forms.todo_form.onsubmit = function (){
    let item = this.task.value;
    if(item.trim() == " ")
    return false;

    let li = document.createElement("li");
    li.textContent = item.trim();
    let close = document.createElement("span");
    close.classList.add("close");
    close.textContent = "x";
    li.append(close);
    list.append (li);
    this.task.value = " ";
    return false;

}
//2
document.querySelector("ul").onclick = function(event){
    let current = event.target;
    if (current.tagName != "LI")
    return false;
    current.classList.toggle ("checked");
    return false;
}
//3
document.querySelector ("ul").addEventListener("click", function(event){
    let current = event.target;
    if (current.tagName != "SPAN")
    return false;
    current.parentElement.remove();
    return false;
});

//4
document.querySelector("ul").addEventListener("dblclick", function (){
    
    let input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);

        
});
