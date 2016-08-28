var Q = require('q');
var Command = require('./commandsModel');

var findCommand = Q.nbind(Command.findOne, Command);
var createCommand = Q.nbind(Command.create, Command);
var findAllCommands = Q.nbind(Command.find, Command);
var findByUserId = Q.nbind(Command.find, Command);

module.exports = {
  allCommands: function(req, res, next) {
    findAllCommands({})
      .then(function(commands) {
        res.json(commands);
      })
      .fail(function(error) {
        next(error)
      });
  },

  newCommand: function(req, res, next) {
    var newComand = {
      title: req.body.title,
      likes: 0,
      text: req.body.text
    };
    return createCommand(newCommand)
      .then(function (createdCommand) {
        if (createdCommand) {
          res.json(createdCommand);
        }
      })
      .fail(function(error) {
        next(error);
      });
  },

  findOne: function(req, res, next) {
    findCommand({title: req.body.title})
      .then(function(command) {
        res.json(command);
      })
      .fail(function(error) {
        next(error)
      });
  },

  findByUserId: function(req, res, next) {
    findAllCommands({userId: req.params.userId})
      .then(function(commands) {
        res.json(commands);
      })
      .fail(function(error) {
        next(error)
      });
  },
};
