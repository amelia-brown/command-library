var Q = require('q');
var User = require('./usersModel');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
var findAllUsers = Q.nbind(User.find, User);

module.exports = {
  allUsers: function(req, res, next) {
    findAllUsers({})
      .then(function(users) {
        res.json(users);
      })
      .fail(function(error) {
        next(error);
      });
  },
  newUser: function(req, res, next) {
    var newUser = {
      username: req.body.username,
      password: req.body.password
    };
    return createUser(newUser)
      .then(function(createdUser) {
        if (createdUser) {
          res.json(createdUser);
        }
      })
      .fail(function(error) {
        next(error);
      });
  },

  findOne: function(req, res, next) {
    findUser({username: req.body.username})
      .then(function(user) {
        res.json(user);
      })
      .fail(function(err) {
        next(err);
      })
  }
}
