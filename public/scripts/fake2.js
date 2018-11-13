      var todoList = [];
 
if (localStorage.getItem("todo") != undefined) {
    
    todoList = JSON.parse(localStorage.getItem("todo"));
    
    out();
    listAll(); 
    readyCheck();
    //listCheck ();
  }   
 
function deleteItem(elementId) { // deleteItem func из бататона когда нажимаем кнопку делит, элемент ай ди это индекс массива в туду листе.
    
    todoList.splice(elementId, 1);
    
    out();
    listAll();
    readyCheck();
    //listCheck ();
 }    
 
function out () {
    document.getElementById("out").innerHTML = '';
      var test; 

    for (var key in todoList) {
      
      var out = "";
      
        test = todoList[key].check ? "checked" : "unchecked"; // ? - если чек в тру то чекед иначе пусто 
    
    out = "<div class=" + test + " id=" + 'main_div_' + key + "><input type = 'checkbox' class = 'che' id =" + key + " " + test + ">" + todoList[key].name + "<button type='button' onclick=deleteItem(" + key + ")>&times;</button><br></div>"; // onclick=deleteItem функция сверху)
    
    document.getElementById("out").insertAdjacentHTML('beforeend', out); // advanceHtml вставляет в конец выбранного элемента строку(контент) бефоред - после конца ( в самый конец)
    
    document.getElementById(key).onclick = function(event) { // key индекст массива 
      
        var elementId = event.srcElement.getAttribute('id'); // Эвент событие берем элемент над которым оно произошло (srcElement) и берем его атрибут айди
    
    todoList[elementId].check = !todoList[elementId].check; 
    
       saveTodo(); // потому что событие самого нажатия ( потому что это событие отраюотает только в данный момент)
       console.log(todoList[elementId].check); 
    //colorChange(elementId); // элемент это ключ индекса массива
    };
  }
       saveTodo(); // когда фор закончился 
}
 
function saveTodo(){

      localStorage.setItem('todo', JSON.stringify(todoList) ); 
}
function readyCheck () {
           
    var countOfChecked;

    countOfChecked = document.getElementsByClassName("checked").length;
    document.getElementById("check_list").innerHTML = '<div id="ready">Ready: ' + countOfChecked + '</div>';
}

function listAll () {
    
    document.getElementById("list").innerHTML = '<div id="show_all">All: ' + todoList.length + '</div>';
}

    document.getElementById('out').onclick = function (event) {
         
        if (event.target.type == 'checkbox') { 
            var cheId = event.srcElement.getAttribute('id');
            var divId = document.getElementById('main_div_' + cheId);
            if(todoList[cheId].check) {
                divId.classList.add('checked');
                divId.classList.remove('unchecked'); 
            } else {
                divId.classList.add('unchecked');
                divId.classList.remove('checked'); 
            }
            readyCheck();
        }
       
           
    }
    
    saveTodo();

    
        
       
    
        
  

      
  //}

 
//function colorChange(elementId) {
//console.log('event',arg)
//}
 
    window.onload = function(){ // потому что скрипт запускается после того как загрузилась вся страница
//debugger
    document.getElementById('add').onclick = function() {
 
     var inp = document.getElementById('in').value;
    if (inp) {
     var todoBj = {};
       todoBj.name = inp;
       todoBj.check = false;
       todoList.push(todoBj);
    
       out();
       listAll();
       readyCheck();
       //listCheck ();
    
       document.getElementById('in').value = "";
    }
  }
    }
