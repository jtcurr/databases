var Sequelize = require('Sequelize');
var orm =  new Sequelize('chat', 'root', '');

var User = orm.define('User', {
	username: Sequelize.STRING
});


var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});
 
Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();

exports.Message = Message;
exports.User = User;

var mysql = require('mysql');