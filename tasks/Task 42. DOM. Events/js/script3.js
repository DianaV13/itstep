document.getElementById("button").onclick = function(){
   let classes = document.getElementsByTagName("div").item(0).classList // получили список классовб находящихся в div
   let ol = document.createElement("ol");//  создаем <ol></ol>

   for(let i = 0; i< classes.length; i++){//  перебираем элементы в коллекции classes
       let li = document.createElement("li");// создаем <li> </li>
       li.textContent = classes[i]; //помещаем внутри тега <li> контент элемент коллекции
       ol.appendChild(li);//<li>-шку помещаем в <ol>
   }
   document.getElementsByTagName("div").item(0).append(ol);//весь <ol> вместе со всеми <li> помещаем в <div>
   
}
