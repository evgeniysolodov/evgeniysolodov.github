window.onload = function(){
    
    var todoList = [];
    var i = 0;
    
 
    
    
//debugger
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
//debugger
    function deleteTodo (event) {

        todoList.forEach(element => {
            if(event.target.id == element.id) {
                todoList.splice(todoList.indexOf(element), 1)
                out();
                
            }
        })   
    }
    
    function colorChange(arg) {
        console.log('event',arg)
    }
    
    function out () {
        var test;
        console.log(todoList);

    //debugger
        var out = "";
        for (var key in todoList) {
            if (todoList[key].check) {
                
                test = "checked";
            
            } else {
                
                test = "";
               
            }
              out += "<div id=" + 'main_div_' + todoList[key].id + "><input type = 'checkbox' class = 'che' id =" + todoList[key].id + " " + test + ">" + todoList[key].name + '<button class="indusik" id=' + todoList[key].id + '>delete</button><br></div>'
              
         }       

        document.getElementById("out").innerHTML = out;
//debugger
        document.getElementById("out").onclick = function (event) {
            if (event.target.type == 'checkbox') {
                todoList[key].check = !todoList[key].check; 
                
                console.log(todoList[key].check);
                colorChange(event); 

                return;  
            }
            deleteTodo(event);
            
            
        }
    }
}
