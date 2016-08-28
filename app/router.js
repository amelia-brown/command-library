import Backbone from "backbone";

var Router = Backbone.Router.extend({
  routes: {
    '/users': 'getUsers', // /#/users
    '/users/:id': 'getUser', // /#/users/1
    '/commands/:': 'getCommands', // /#/commands
    '/commands/:id': 'getCommand',
  }
})
