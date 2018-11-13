var express = require('express');
var app = express();

app.use(express.static('public'));

app.all('/', function (req, res){
    res.send('')
});

app.listen(5000);