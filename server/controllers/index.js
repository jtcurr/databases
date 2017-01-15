var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(req, res);

    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, (err, data) => {
        if (err) {
          console.log('Error adding post to model');
        }
        console.log('Message sent to model');
      });
    } // a function which handles posting a message to the database
  },


  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      res.send('users');
    }
  }
};

