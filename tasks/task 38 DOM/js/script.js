/*let out = "<div class = 'box'>"
for(i = 1; i <= 30; i++){
    out += `<span>${i}</span><br>`;
}
document.write(out);

let chess ;
document.write("<table width='800' height='800'>");// выводит таблицу 800пикселей на 800
    for(var i=1; i<=8; i++)// цикл для формирования строк
    {
    document.write("<tr>");// тег <td> -это контейнер для создания строки
    for(var j=1; j<=8; j++)//цикл для создания столбцов
    {
    if((i+j)%2!=0)
    {
    document.write("<td bgcolor='white'></td>");//выводит ячейки с бэкграундом белый, если (i+j)%2!=0
    }
    else
    {
    document.write("<td bgcolor='black'></td>");
    }
    }
    document.write("</tr>");//закрываем тег
    }
    document.write("</table>");*/

    let fruits = ["apple", "lemon", "lime"];
    out = "<ul>";
    for (i = 1; i<fruits.length, i++ ){
       out +=`<li>${fruits[i]}</li>`;
    }
    out += "</ul>"; 
    document.write (out);