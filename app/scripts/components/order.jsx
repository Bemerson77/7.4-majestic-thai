/* order jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');



// local
var CompleteComponent = require('./complete.jsx');


var OrderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getIntitialState: function(){
    return {
      orderedItems: this.props.order,
      showModal: false
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
  handleClear: function(e){
    e.preventDefault();
    var orderedItems = this.props.order;
    orderedItems.reset();
    this.setState({orderedItems: orderedItems});
  },
  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },
  render: function(){

    var orderedItems = this.state.orderedItems;

    var prices = orderedItems.pluck('price');

    var total = _.reduce(prices, function(a, b){
      return a + b;
    },0).toFixed(2);

    var orderedList = orderedItems.map(function(data){
			var boundItemToClick = this.handleDelete.bind(this, data);

      return (
        <li className="ordered-item" key={data.cid}>
          <h3 className="menu-item-title order-item-title">{data.get('item')}</h3>
          <button className="subscribe-button delete-btn" onClick={boundItemToClick}><i className="fa fa-times-circle" aria-hidden="true"></i>
					</button>
          <span className="order-item-price">{data.get('price').toFixed(2)}</span>
        </li>
      )
    }.bind(this));

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
  					<button className="subscribe-button checkout-btn" onClick={this.handleClear}>Clear</button>
  					<button onClick={this.open} className="subscribe-button checkout-btn">Check Out</button>
          </div>
				</div>
        <CompleteComponent
          orderedList={orderedList}
          total={total}
          close={this.close}
          showModal={this.state.showModal}
          handleClear={this.handleClear}
        />
      </div>
    )
  }
});


module.exports = OrderComponent;
