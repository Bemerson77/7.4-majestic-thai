/* menu jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');



// local
var OrderComponent = require('./order.jsx');




var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getIntitialState: function(){
    return {
      menuItems: this.props.router.menuItems,
    }
  },
  componentWillMount: function(){
    var self = this;
    var menuItems = self.props.router.menuItems;
    self.setState({menuItems: menuItems});

  },
  handleClick: function(data){
    var self = this;
    self.props.router.order.add(data);
  },
  render: function(){
    var menuItems = this.state.menuItems;

    var categories = menuItems.groupBy(function(data){
      return data.get('category');
    });

    var appetizers = categories.appetizers;
    var entree = categories.entree;
    var dessert = categories.dessert;

    return (
      <div>
        <div className="menu-title text-center">
          <h1>Menu</h1>
        </div>
				<div className="row-fluid">
					<div className="col-md-8">
						<div className="row">
							<div className="menu-wrapper">
								<ul className="menu-items appetizers col-md-4">
									<h2 className="menu-item-cat">Appetizer</h2>

									<AppetizerComponent appetizers={appetizers} onClick={this.handleClick}/>

								</ul>
								<ul className="menu-items entree col-md-4">
									<h2 className="menu-item-cat">Entree</h2>

									<EntreeComponent entree={entree} onClick={this.handleClick}/>

								</ul>
								<ul className="menu-items dessert col-md-4">
									<h2 className="menu-item-cat">Dessert</h2>

									<DessertComponent dessert={dessert} onClick={this.handleClick}/>

								</ul>
							</div>
						</div>
					</div>

				<div className="col-md-4">
          <OrderComponent order={this.props.router.order}/>
				</div>
				</div>
      </div>
    )
  }
});


var AppetizerComponent = React.createClass({
  handleClick: function(data, e){
    e.preventDefault();
    this.props.onClick(data.attributes);

  },
  render: function(){
    var appetizers = this.props.appetizers;

    var appetizerList = appetizers.map(function(data){
      var bindDataToClick = this.handleClick.bind(this, data);

      return (
        <li key={data.cid} className="menu-item">
          <div>
            <h3 className="menu-item-title">{data.get('item')}</h3>
            <button className="menu-add-btn subscribe-button" onClick={bindDataToClick}>Add</button>
          </div>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price').toFixed(2)}</span>

        </li>
      )
    }.bind(this));


    return (
      <div>
        {appetizerList}
      </div>
    )
  }
});

var EntreeComponent = React.createClass({
  handleClick: function(data, e){
    e.preventDefault();
    this.props.onClick(data.attributes);

  },
  render: function(){


    var entree = this.props.entree;

    var entreeList = entree.map(function(data){
      var bindDataToClick = this.handleClick.bind(this, data);

      return (
        <li key={data.cid} className="menu-item">
          <div>
            <h3 className="menu-item-title">{data.get('item')}</h3>
            <button className="menu-add-btn subscribe-button" onClick={bindDataToClick}>Add</button>
          </div>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price').toFixed(2)}</span>

        </li>
      )
    }.bind(this));


    return (
      <div>
        {entreeList}
      </div>
    )
  }
});

var DessertComponent = React.createClass({
  handleClick: function(data, e){
    e.preventDefault();
    this.props.onClick(data.attributes);

  },
  render: function(){


    var dessert = this.props.dessert;

    var dessertList = dessert.map(function(data){
      var bindDataToClick = this.handleClick.bind(this, data);

      return (
        <li key={data.cid} className="menu-item">
          <div>
            <h3 className="menu-item-title">{data.get('item')}</h3>
            <button className="menu-add-btn subscribe-button" onClick={bindDataToClick}>Add</button>
          </div>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price').toFixed(2)}</span>

        </li>
      )
    }.bind(this));


    return (
      <div>
        {dessertList}
      </div>
    )
  }
});






module.exports = MenuComponent;
