var mongoose = require('mongoose');
var User = require('./users');

var CommandSchema = mongoose.Schema({
  command: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  likes: {
    type: Integer,
  }
  userId: {
    type: String,
    ref: User
  }
});

module.exports = mongoose.model('commands', CommandSchema);
