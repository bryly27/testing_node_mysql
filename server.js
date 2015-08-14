var express = require('express');
var app = express();
var mysql = require('mysql');



var connection = mysql.createConnection({
	host: 'localhost', 
	user: 'root', 
	password: 'root',
	database: 'testing123'
});


connection.connect();


	connection.query('select * from products', function(err, results){
		console.log(results);
	});


connection.end();


app.listen(3000, function(){
	console.log('listening on 3000');
})