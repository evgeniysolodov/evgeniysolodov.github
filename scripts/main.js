window.onload = function(){
        
    var todoList = [];
    var i = 0;

    if (localStorage.getItem("todo") != undefined) {
        todoList = JSON.parse(localStorage.getItem("todo"));
        out();
    }
     
    document.getElementById('add').onclick = function() {
    
        var inp = document.getElementById('in').value;
        if (inp){
            var temp   = {};
            temp.todo  = inp;
            temp.check = false;
            //var i = todoList.length;
            temp.id = i;
            todoList.push(temp);
            //var i = ;
            console.log(temp);
    
            out();
        
            i++;
            localStorage.setItem('todo', JSON.stringify(todoList) );
            document.getElementById("in").value = "";
            
        }
    }

    document.getElementsByClassName('che').onclick = function(e) {
        console.log('eee', e)
    }

    function out () {
		var out = '';

		for (var key in todoList) {

			if ( todoList[key].check == true ) {
				out += '<input type="checkbox" class="che" checked>'
			} else {
				out += '<input type="checkbox" class="che" >'
			}

			out += todoList[key].todo +'<br>';
		}
		document.getElementById('out').innerHTML = out;
	}

}