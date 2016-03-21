/* header jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');


// local





var NavComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <li className="page-nav-link">
          <a href="#">Home</a>
        </li>
        <li onClick={this.handleClick} className="page-nav-link">
          <a href="#">Menu</a>
        </li>
        <li className="page-nav-link">
          <a href="#">Location</a>
        </li>
      </div>
    )
  }
});


module.exports = NavComponent;
