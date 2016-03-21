/* router js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


// local
var Owner = require('./components/owner.jsx');
var MenuComponent = require('./components/menu.jsx');
// var Model = require('./models/menu-model');
var menuItems = require('./components/menu.json');




var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'menu': 'menu'
  },

  home: function(){
    ReactDOM.render(
      React.createElement(Owner),
      document.getElementById('content')
    );
  },

  menu: function(){
    ReactDOM.render(
      React.createElement(MenuComponent, {menuItems: menuItems}),
      document.getElementById('content')
    );
  }
});

module.exports = Router;
