var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();
var mongoose = require('mongoose');

//Middle
app.use(bodyParser.json());
app.use(cors());

const posts = require('./public/routes/api/posts');

app.use('/api/posts', posts);

/*mongoose.connect('mongodb://EvgeniySolodov:12solodov34@ds111608.mlab.com:11608/dbfirst',{ useNewUrlParser: true }, function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Conected to DataBase.");
  }
});*/

app.use(express.static('public'));

app.all('/', function (req, res){
  console.log(1);
  debugger;
});


app.listen(5000);