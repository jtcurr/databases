var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req, res);
      //get all messages from messages table
      db.connection.query('SELECT * FROM MESSAGES', (err, data) => {
        if (err) {
          console.log('ERROR retrieving data');
        } else {
          console.log('success getting messages');
          console.log('data: ' + data);
          res.end(JSON.stringify(data));
        }
      });
        //returns those to the client
    }, // a function which produces all the messages
    post: function (req, res) {
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
    get: function () {},
    post: function () {
      console.log('yes');
    }
  }
};

