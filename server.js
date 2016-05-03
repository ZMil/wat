// var express = require('express');
// var http = require('http');
// var app = express();

// app.set('port', process.env.PORT || 8000);


// app.listen(app.get('port'), () => {
//   console.log('Express application started on http://localhost:' +
//               app.get('port') + '; press Ctrl-C to terminate');
// });

// app.get('/', function (req, res) {
//   res.render('index.html', {});
// });

var util = require('util');
var http = require('http');
var express = require("express");
var app = express();

//some variables
var port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var nodeEnv = process.env.NODE_ENV || 'unknown';

//set up the static directory
app.use(express.static(__dirname + '/public'));

app.get("/:m", function(req, res) {
	res.redirect('/');
});

//start up server
app.listen(port, ip, function() {
	console.log("Server listening on " + port);
});



