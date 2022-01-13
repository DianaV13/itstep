function getRandomNumber(min,max) {//функция для получения рандома, кто начинает игру первый
    return Math.floor(Math.random() * (max - min + 1)) + min;//
}

var player = [];//объявление пустого массива
var current = 1;//объявление переменной со значением 1
var field = [[0,0,0],[0,0,0],[0,0,0]];//объявление переменной содержащей трехмерный массив

document.forms.start_form.start_play.onclick = function () {//получение ссылки на кнопку старта и подключение к ней события
    document.forms.start_form.classList.add("d-none");//ссылка на форму с именем класс_форм и добавление к ней класса, который делает ее невидимой
    document.forms.login_form.classList.remove("d-none");//ссылка на другую форму, у которой убирается класс d-none и она появляется вместо предыдущей формы
    return false;//чтобы страница не перезагрузилась
}
//Метод checkValidity() для элементов узла (например, input, select, textarea) возвращает true, если элемент содержит достоверные данные.  
//Форма узлов возвращает true, если все формы, содержат допустимые данные.
// При неверных значениях вызывается обработчик invalid каждого неверно узла.

document.forms.login_form.start_game.onclick = function () {//получаем ссылку на кнопку начать во второй форме и подключаем к ней событие
    document.forms.login_form.classList.add("was-validated");//добавляем к форме класс was-validated
    if(document.forms.login_form.checkValidity())//метод проверки корректности  поля ввода
        {
        document.forms.login_form.classList.remove("was-validated");//
        document.forms.login_form.classList.add("d-none");//
        
        current = getRandomNumber(1,2);//к переменной добавляем функцию рандома, кто будет ходить первым,игрок 1 или игрок2

        if(current == 1){//если выпало 1
            player[1] = document.forms.login_form.player1_name.value;//то имя написанное в первом инпуте первый
            player[2] = document.forms.login_form.player2_name.value;//а имя из второго инпута ходит вторым
        } else{
            player[2] = document.forms.login_form.player1_name.value;//или если выпало 2, то имя написанное вов втором инпуте ходит первым
            player[1] = document.forms.login_form.player2_name.value;//а игрок с именем из первого инпута ходит вторым
        }

        let table = document.createElement("table");//создаем таблицу через document.createElement
        for(let i = 0; i < 3; i++){                 //перебор циклом
            let row = document.createElement("tr");//создаем 3 строки через document.createElement
            
            for(let j = 0; j < 3; j++){//
                let data = document.createElement("td");//создаем столбцы
                row.append(data)//и вставляем их в строки row в конец
                } 
            table.append(row);  //вставляем строки в таблицу
            }
            
        table.addEventListener("click",play, false);//к таблице добавляем обработчик с сылкой на функцию-обработчик play

        document.querySelector(".field").append(table);//получаем ссылку на div с классом field и добавляем к нему таблицу
        document.querySelector(".current").innerHTML = `Ходит игрок <b>${player[current]}</b>`;//получаем ссылку на div с классом current и добавляем текст с тегами  
        document.querySelector(".game_form").classList.remove("d-none");//
        }
    return false;//чтобы страница не перегружалась
г}

function play(event){//

    let td = event.target;//объявляем переменную и устанавливаем как целевой элемент

    if(td.tagName != "TD")//если у целевого элемента имя тега не равно td
        return false;  //то вернуть ошибка

    let x = td.cellIndex; //   ?
    let y = td.parentNode.rowIndex;//?

    if(field[x][y] != 0)//если  х и у переменной field не равны 0
        return false;

    if(current == 1){//если значение переменной равно 1 т.е. первый игрок
        td.classList.add("k");// к перемнной td добавляем класс  k т.е. крестик
        current = 2;//передаем ход второму игроку
        field[x][y] = 1//в поле поставлен крестик
    } else {
        td.classList.add("n");//в ином случае добавляем класс n
        current = 1;// передаем ход второму игроку
        field[x][y] = -1;// в поле поставлен нолик
    }

    let winner = checkWinner();//создаем переменную и присваиваем функцию checkWinner()
    if(winner > 0){//если переменная больше 0
        document.querySelector(".result").innerHTML = `Победил игрок <b>${player[winner]}</b>`;//получаем ссылку на элемент с классом result и добавляем текст
        document.querySelector(".current").innerHTML = ``;//убираем внутренний текст из элемента
        document.querySelector(".field table").removeEventListener("click", play, false);//убираем обработчик с поля
    
    } else if(checkDraw()){//
        document.querySelector(".current").innerHTML = ``;//
        document.querySelector(".field table").removeEventListener("click", play, false);//
        document.querySelector(".result").innerHTML = `Ничья`;//
    } else {
        document.querySelector(".current").innerHTML = `Ходит игрок <b>${player[current]}</b>`;//
    }

    
}

function checkWinner() {//функция проверки победителя
    let result = Array(8).fill(0);//метод fill() позволяет заполнить все элементы массива одним значением 
                                   //... содержащую массив x.fill( 0 );  возвращаемое значение [0, 0, 0, 0, 0,
    //сумма по строкам
    for(let i = 0; i < 3; i++){//
        let sum = 0;//
        for(let j = 0; j < 3; j++){//
            sum += field[i][j];//
        }
        result[i] = sum;//
    }

    //сумма по столбцам
    for(let i = 0; i < 3; i++){//
        let sum = 0;//
        for(let j = 0; j < 3; j++){//
            sum += field[j][i];//
        }
        result[i+3] = sum;//
    }

    //сумма по главной диагонали
    let sum = 0;//
    for(let i = 0; i < 3; i++){//
        sum += field[i][i];//
    }
    result[6] = sum;//
    //сумма по побочной диагонали
    sum = 0;//
    for(let i = 0; i < 3; i++){//
        sum += field[i][2-i];//
    }
    result[7] = sum;//

    let resK = Math.max.apply(null, result);//
    let resN = Math.min.apply(null, result);//

    if(resK == 3)//
        return 1;//

    if(resN == -3)//
        return 2;//

    return 0;
}

function checkDraw(){//
    let count = 0;//
    for(let i = 0; i < 3; i++){//
        for(let j = 0; j < 3; j++){//
            if(field[i][j] == 0)//
                count++;//
        }
    }
    if(count == 0)//
        return true;//
    else
        return false;//
}