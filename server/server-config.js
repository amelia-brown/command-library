var express = require('express');

var app = express();
var users = require('./models/users/usersController');
var commands = require('./models/commands/commandsController');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


//app.get('/', )
app.get('/users', users.allUsers);
app.get('/users/:userId', users.findOne);
app.post('/users', users.newUser);
app.get('/commands', commands.allCommands);
app.get('/commands/:title', commands.findOne);
app.post('/commands', commands.newCommand);

app.get('/', function(req, res) {
  res.send('hello world');
});

module.exports = app;
