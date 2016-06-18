var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	res.render('index', {
		title : 'Home'
	});

});

app.post('/successful', function(req, res) {

	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	res.render('successful', {
		title : 'Success'
	});
});

var exec = require("child_process").exec;
app.get('/onScript', function(req, res) {
	exec("php views/onScript.php", function(error, stdout, stderr) {
		res.send(stdout);
	});
	
});

var exec = require("child_process").exec;
app.get('/offScript', function(req, res) {
	exec("php views/offScript.php", function(error, stdout, stderr) {
		res.send(stdout);
	});
	
});

var server = app.listen(8081, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)

})
