var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll( { include: [User] } ).complete(function(error, results) {
        if(error) {
          throw error;
        } else {
        res.JSON(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.findOrCreate( {username: req.body[username] } ).complete(function (err, user) {
        if (error) {
          throw error;
        }
      var params = {
        text: req.body[text],
        userid: user.id,
        roomname: req.body[roomname]
      }
      Message.create(params).complete(function (error, reults){
        if (error) {
          throw error;
        }
        else {
          req.sendStatus(201);
        }
      });
    });
    } // a function which handles posting a message to the database
  },


  users: {
    // Ditto as above
    get: function (req, res) {
       User.findAll().complete(function(error, results) {
        if(error) {
          throw error;
        } else {
        res.JSON(results);
        }
      });
    },
    post: function (req, res) {
     User.Create( {username: req.body[username] } )
     .complete(function (err, results) {
       res.JSON(201);
  } 
};

