window.onload = function(){
    
    var todoList = [];
    var i = 0;

document.getElementById('add').onclick = function() {
    
    var inp = document.getElementById('in').value;
        if (inp) {
            var todoBj = {};
            todoBj.name = inp;
            todoBj.check = false;
            todoBj.id = i;
            todoList.push(todoBj);
            i++

            out();
            document.getElementById('in').value = "";
        }
        
    }

function out () {


    console.log(todoList);

//debugger
    var out = "";
    for (var key in todoList) {
        if (todoList[key].check == true) {
            out += "<input type = 'checkbox' id =" + todoList[key].id + " checked>" 
        } else {
            out += "<input type = 'checkbox' id =" + todoList[key].id + " >"
        }
            out += todoList[key].name + "<button id=" + todoList[key].id + ">delete</button><br>";
    }       
         document.getElementById("out").innerHTML = out;
         
}
    debugger
    document.getElementById('out').onclick = function del (event) {
        todoList.forEach(element => {
            if(event.target.id == element.id) {
                todoList.splice(todoList.indexOf(element), 1)
                out();
            }
        })
    }

}
