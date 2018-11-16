var q = new XMLHttpRequest();
q.open("GET", "mongodb://localhost:5000/api/posts");
q.onreadystatechange = function () {
  if(q.readyState == 4 && q.status == 200){ 
     console.log(q.responseText);
   }
}
q.send();
