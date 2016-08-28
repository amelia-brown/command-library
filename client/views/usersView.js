var UsersView = Backbone.View.extend({
  template: //TODO template,
  
  events: {
    
  }
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
