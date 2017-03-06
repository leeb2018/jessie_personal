var express = require('express');
var app = express();
var path = require("path");

var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
	res.render("main");
})

app.listen(port, function () {
  console.log('App listening on port port!');
})
