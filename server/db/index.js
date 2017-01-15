var Sequelize = require('Sequelize');
var orm =  new Sequelize('chat', 'root', '');

var User = orm.define('User', {
	username: Sequelize.STRING
});

var Message = orm.define('Message', {

});

var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

exports.connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) {
//     throw err;
//   }

//   console.log('The solution is: ', rows[0].solution);
// });