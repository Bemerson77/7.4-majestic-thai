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
  componentWillUnmount: function(){
    var self = this;
    self.state.orderedItems.off('add', self.update);
  },
  update: function(){
    this.forceUpdate();
  },
	handleDelete: function(data, e){
  	e.preventDefault();
		var orderedItems = this.props.order;
		orderedItems.remove(data);
		this.setState({orderedItems: orderedItems});


	},
  render: function(){
    console.log('orderedState', this.state.orderedItems);
    var orderedItems = this.state.orderedItems;

    var orderedList = orderedItems.map(function(data){
			var boundItemToClick = this.handleDelete.bind(this, data);

      return (
        <li key={data.cid}>
          <h3 className="menu-item-title order-item-title">{data.get('item')}</h3>
          <span className="menu-item-price">{data.get('price')}</span>
          <button className="subscribe-button" onClick={boundItemToClick}><i className="fa fa-times-circle" aria-hidden="true"></i>
					</button>
        </li>
      )
    }.bind(this));
    return (
      <div className="row order-outer">
				<h2 className="text-center">Order Cart</h2>
        <ul className="menu-items appetizers col-xs-12">

					{orderedList}

        </ul>
				<div className="checkout-wrapper">
					<button className="subscribe-button checkout-btn">Cancel</button>
					<button className="subscribe-button checkout-btn">Check Out</button>
				</div>
      </div>
    )
  }
});


module.exports = OrderComponent;
