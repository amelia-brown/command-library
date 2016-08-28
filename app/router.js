import Backbone from "backbone";

Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  }
  routes: {
    '/users': 'getUsers', // /#/users
    '/users/:id': 'getUser', // /#/users/1
    '/commands/:': 'getCommands', // /#/commands
    '/commands/:id': 'getCommand',
  },
  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  getUsers: function() {
    var users = new Users();
    var usersView = new UsersView({collection: links});
    this.swapView(usersView);
  },
  getUser: function() {
    var user = new User();
    var userView = new UserView({model: user});
    this.swapView(userView);
  },
   getCommands: function() {
    var commands = new Commands();
    var commandsView = new CommandsView({collection: links});
    this.swapView(commandsView);
  },
  getCommand: function() {
    var command = new Command();
    var commandView = new CommandView({model: command});
    this.swapView(commandView);
  },

})
