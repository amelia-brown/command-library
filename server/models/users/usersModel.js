var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

// Set up a new mongoose Schema for users
var UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  salt: String
});

UserSchema.methods.comparePasswords = function(enteredPassword) {
  var savedPassword = this.password;
  return Q.promise(function (resolve, reject) {
    bcrypt.compare(entered, saved, function(err, isMatch) {
      if (err) {
        return err;
      }
      return callback(null, isMatch);
    });
  });
};

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('users', UserSchema);
