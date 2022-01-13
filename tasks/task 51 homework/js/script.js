var name = document.forms.form.catName.value;
var color = document.forms.form.catColor.value;

document.getElementById("btn").onclick = function(){
let row = document.createElement('tr');
let cell = document.createElement('td');
cell.innerHTML = name;
row.append(cell);
}









/*

let edit = document.createElement("span");//создаем спан
    edit.classList.add("edit");//
    edit.textContent = "✎";//Свойство textContent хранит в себе текстовое содержимое элемента.
    row.append(edit);
    let close = document.createElement("span");
    close.classList.add("close");
    close.textContent = "×";
    row.append(close);
    list.append(li);
    this.task.value = "";
    return false;
}
 */