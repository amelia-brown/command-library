var users = require('./models/usersController');
var commands = require('./models/commandsController');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../../client'));


module.exports = function(app, express) {
  app.get('/', )
  app.get('/users', users.allUsers);
  app.get('/users/:userId', users.findOne);
  app.post('/users', users.newUser);
  app.get('/commands', commands.allCommands);
  app.get('/commands/:title', commands.findOne);
  app.post('/commands', commands.newCommand);
}
