document.querySelector(".parent").onmouseover = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.add("bg-blue")
    }
    if(event.target.classList.contains("child")){
        event.target.classList.add("bg-black")
        event.relatedTarget.classList.add("bg-blue")// возвращаем родителю синий фон при указании на child
    }
}
document.querySelector(".parent").onmouseout = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.remove("bg-blue")
    }
    if(event.target.classList.contains("child")){
        event.target.classList.remove("bg-black")
    }
}