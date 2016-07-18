/* order jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');



// local



var OrderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <ul className="menu-items appetizers col-xs-3">
          <h2 className="menu-item-cat">Order Cart</h2>



        </ul>
      </div>
    )
  }
});


module.exports = OrderComponent;
