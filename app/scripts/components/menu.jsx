/* menu jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');



// local





var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getIntitialState: function(){
    return {
      menuItems: this.props.router.menuItems,
      orderedItems: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var menuItems = self.props.router.menuItems;
    self.setState({menuItems: menuItems});
  },
  handleOrderAdd: function(){
    var self = this;
    var order = self.props.router.order;
    console.log(menuItems);
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
        <ul className="menu-items appetizers col-xs-4">
          <h2 className="menu-item-cat">Appetizer</h2>

          <AppetizerComponent appetizers={appetizers}/>

        </ul>
        <ul className="menu-items entree col-xs-4">
          <h2 className="menu-item-cat">Entree</h2>

          <EntreeComponent entree={entree}/>

        </ul>
        <ul className="menu-items dessert col-xs-4">
          <h2 className="menu-item-cat">Dessert</h2>

          <DessertComponent dessert={dessert}/>

        </ul>
      </div>
    )
  }
});


var AppetizerComponent = React.createClass({
  getIntitialState: function(){
    return {
      item: '',
      desrcription: '',
      price: ''
    }
  },
  render: function(){
    var appetizers = this.props.appetizers;

    var appetizerList = appetizers.map(function(data){

      return (
        <li key={data.cid} className="menu-item">
          <h3 className="menu-item-title">{data.get('item')}</h3>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price')}</span>
          <button className="subscribe-button">Add</button>
        </li>
      )
    });


    return (
      <div>
        {appetizerList}
      </div>
    )
  }
});

var EntreeComponent = React.createClass({
  render: function(){


    var entree = this.props.entree;

    var entreeList = entree.map(function(data){

      return (
        <li key={data.cid} className="menu-item">
          <h3 className="menu-item-title">{data.get('item')}</h3>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price')}</span>
          <button className="subscribe-button">Add</button>
        </li>
      )
    });


    return (
      <div>
        {entreeList}
      </div>
    )
  }
});

var DessertComponent = React.createClass({
  render: function(){


    var dessert = this.props.dessert;

    var dessertList = dessert.map(function(data){

      return (
        <li key={data.cid} className="menu-item">
          <h3 className="menu-item-title">{data.get('item')}</h3>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price')}</span>
          <button className="subscribe-button">Add</button>
        </li>
      )
    });


    return (
      <div>
        {dessertList}
      </div>
    )
  }
});






module.exports = MenuComponent;
