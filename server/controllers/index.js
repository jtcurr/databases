var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(function(err, results){
        if (err) {
          console.log('ERROR in controller');
        }
        else {
          res.JSON(results);
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, (err, data) => {
        if (err) {
          console.log('Error adding post to model');
        }
        console.log('Message sent to model');
        req.send(data);
      });
    } // a function which handles posting a message to the database
  },


  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        if (err) {
          console.log('ERROR in controller');
        }
        else {
          res.JSON(results);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (err, data) => {
        if (err) {
          console.log('Error adding post to model');
        }
        console.log('User names sent to model');
        req.send(data);
      });
    }
  }
};

