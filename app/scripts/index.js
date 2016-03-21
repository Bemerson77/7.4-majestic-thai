/* main js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone')
var React = require('react');
var ReactDOM = require('react-dom');


// local
var Router = require('./router');
var Nav = require('./components/nav.jsx');

var router = new Router();

ReactDOM.render(
  React.createElement(Nav),
  document.getElementById('nav')
);


$(function(){
  Backbone.history.start();
});
