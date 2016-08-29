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

    var orderedItems = this.state.orderedItems;

    var prices = orderedItems.pluck('price');

    var orderedList = orderedItems.map(function(data){
			var boundItemToClick = this.handleDelete.bind(this, data);

      return (
        <li className="ordered-item" key={data.cid}>
          <h3 className="menu-item-title order-item-title">{data.get('item')}</h3>
          <button className="subscribe-button delete-btn" onClick={boundItemToClick}><i className="fa fa-times-circle" aria-hidden="true"></i>
					</button>
          <span className="order-item-price">{data.get('price')}</span>
        </li>
      )
    }.bind(this));

    var total = _.reduce(prices, function(a, b){
      console.log('a', a);
      console.log('b', b);
      return a + b;
    },0).toFixed(2);

    return (
      <div className="row order-outer">
				<h2 className="text-center">Order Cart</h2>
        <ul className="ordered-items-wrapper col-xs-12">

					{orderedList}

        </ul>
				<div className="checkout-wrapper">
          <span className="checkout-total-wrapper">
            <span className="checkout-total-label">total&#58; $ </span>
            <span className="checkout-total">{total}</span>
          </span>
          <div className="checkout-btn-wrapper">
  					<button className="subscribe-button checkout-btn">Cancel</button>
  					<button className="subscribe-button checkout-btn">Check Out</button>
          </div>
				</div>
      </div>
    )
  }
});


module.exports = OrderComponent;
