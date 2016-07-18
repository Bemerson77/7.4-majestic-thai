/* router js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


// local
var Owner = require('./components/owner.jsx');
var MenuComponent = require('./components/menu.jsx');
var data = require('./components/menu.json');
var menuData = require('./models/menu-model.js');
var orderData = require('./models/order.js');


var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'menu': 'menu'
  },
  initialize: function(){
    this.menuItems = new menuData.MenuCollection(data);
    this.order = new orderData.OrderCollection();
  },
  home: function(){
    ReactDOM.unmountComponentAtNode(document.getElementById('content'));

    ReactDOM.render(
      React.createElement(Owner),
      document.getElementById('content')
    );
  },

  menu: function(){
    var self = this;
    ReactDOM.unmountComponentAtNode(document.getElementById('content'));

    ReactDOM.render(
      React.createElement(MenuComponent, {router: self}),
      document.getElementById('content')
    );
  }
});

module.exports = Router;
