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
  getIntitialState: function(){
    return {
      orderedItems: this.props.order
    }
  },
  componentWillMount: function(){
    var self = this;
    var orderedItems = self.props.order;
    self.setState({orderedItems: orderedItems});
    orderedItems.on('add', self.update);

  },
  update: function(){
    this.forceUpdate();
  },
  render: function(){
    console.log('orderedState', this.state.orderedItems);
    var orderedItems = this.state.orderedItems;

    var orderedList = orderedItems.map(function(data){

      return (
        <li key={data.cid}>
          <h3 className="menu-item-title order-item-title">{data.get('item')}</h3>
          <span className="menu-item-price">{data.get('price')}</span>
          <button className="subscribe-button">x</button>
        </li>
      )
    });
    return (
      <div>
        <ul className="menu-items appetizers col-xs-3">
          <h2 className="menu-item-cat">Order Cart</h2>

            {orderedList}

        </ul>
      </div>
    )
  }
});


module.exports = OrderComponent;
