import Backbone from "backbone";

var Users = Backbone.Collection.extend({
  model: User;
  url: '/user/:id';
})
