var todoList = [];

if (localStorage.getItem("todo") != undefined) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    out();
}

 function deleteItem(elementId) { // deleteItem func из бататона когда нажимаем кнопку делит, элемент ай ди это индекс массива в туду листе.
    todoList.splice(elementId, 1);
    out();
}

function out () {
    document.getElementById("out").innerHTML = '';
    var test; 
    for (var key in todoList) {
        var out = "";
        test = todoList[key].check ? "checked" : ""; // ? - если чек в тру то чекед иначе пусто 

        out = "<div id='main_div_'" + key + "><input type = 'checkbox' class = 'che' id =" + key + " " + test + ">" + todoList[key].name + "<button type='button' onclick=deleteItem(" + key + ")>delete</button><br></div>"; // onclick=deleteItem функция сверху)

        document.getElementById("out").insertAdjacentHTML('beforeend', out); // advanceHtml вставляет в конец выбранного элемента строку(контент) бефоред  - после конца ( в самый конец)

        document.getElementById(key).onclick = function(event) { // key индекст массива 
            var elementId = event.srcElement.getAttribute('id'); // Эвент событие берем элемент над которым оно произошло (srcElement) и берем его атрибут айди
            
            todoList[elementId].check = !todoList[elementId].check;  
            saveTodo(); // потому что событие самого нажатия ( потому что это событие отраюотает только в данный момент)
            console.log(todoList[elementId].check); 
            colorChange(elementId); // элемент это ключ индекса массива
        };
     }
     saveTodo();     // когда фор закончился 
}

function saveTodo(){
    localStorage.setItem('todo', JSON.stringify(todoList) ); 
}

function colorChange(elementId) {
    //console.log('event',arg)
}

window.onload = function(){    // потому что скрипт запускается после того как загрузилась вся страница
//debugger
    document.getElementById('add').onclick = function() {
        
        var inp = document.getElementById('in').value;
            if (inp) {
                var todoBj = {};
                todoBj.name = inp;
                todoBj.check = false;
                todoList.push(todoBj);
                out();
                document.getElementById('in').value = "";
            }
            
        }
}
