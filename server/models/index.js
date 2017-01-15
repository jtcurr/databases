var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      //get all messages from messages table
      db.connection.query('SELECT * FROM MESSAGES', (err, data) => {
        if (err) {
          console.log('ERROR retrieving data');
        } else {
          console.log('success getting messages');
          res.end(JSON.stringify(data));
        }
      });
        //returns those to the client
    }, // a function which produces all the messages
    post: function (res) {
      var text = req.message;
      var room = req.roomname;
      var username = req.username;

      db.connection.query('INSERT INTO messages (message_text) VALUES ("' + text + '")');
      db.connection.query('INSERT INTO rooms (room_name) VALUES ("' + room + '")');
      db.connection.query('INSERT INTO users (user_name) VALUES ("' + username + '")');
      //console.log( db.connection.query('SELECT * FROM messages'));
      //gets message from client
        //add message to messages table
      res.end();  
    } // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.

    get: function (callback) {
      var queryStr = 'select * from users';
      db.connection.query(queryStr, function(err, data) {
        if (err) {
          console.log('error');
        }
        else {
         callback(data);
        }
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO users(username) VALUE (?)';
      db.connection.query(queryStr, params, function(err, data) {
        if (err) {
          console.log('error');
        }
        else {
         callback(data);
        }
      });
    }
  }
};

