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
      menuItems: this.props.router.menuItems
    }
  },
  componentWillMount: function(){
    var self = this;
    var menuItems = self.props.router.menuItems;
    self.setState({menuItems: menuItems});
  },
  render: function(){
    var menuItems = this.state.menuItems;

    return (
      <div>
        <div className="menu-title text-center">
          <h1>Menu</h1>
        </div>
        <ul className="menu-items appetizers col-xs-4">
          <h2 className="menu-item-cat">Appetizer</h2>

          <AppetizerComponent menuItems={menuItems}/>

        </ul>
        <ul className="menu-items entree col-xs-4">
          <h2 className="menu-item-cat">Entree</h2>

          <EntreeComponent menuItems={menuItems}/>

        </ul>
        <ul className="menu-items dessert col-xs-4">
          <h2 className="menu-item-cat">Dessert</h2>

          <DessertComponent menuItems={menuItems}/>

        </ul>
      </div>
    )
  }
});


var AppetizerComponent = React.createClass({
  render: function(){
    var menuItems = this.props.menuItems;

    var categories = menuItems.groupBy(function(data){
      return data.get('category');
    });

    var appetizers = categories.appetizers;
    console.log(categories);
    var appetizerList = appetizers.map(function(data){
      console.log(data);
      return (
        <li key={data.cid} className="menu-item">
          <h3 className="menu-item-title">{data.get('item')}</h3>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price')}</span>
          <input className="subscribe-button" type="submit" name="item" value="Add"/>
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
    var menuItems = this.props.menuItems;

    var categories = menuItems.groupBy(function(data){
      return data.get('category');
    });

    var entree = categories.entree;

    var entreeList = entree.map(function(data){

      return (
        <li key={data.cid} className="menu-item">
          <h3 className="menu-item-title">{data.get('item')}</h3>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price')}</span>
          <input className="subscribe-button" type="submit" name="item" value="Add"/>
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
    var menuItems = this.props.menuItems;

    var categories = menuItems.groupBy(function(data){
      return data.get('category');
    });

    var dessert = categories.dessert;

    var dessertList = dessert.map(function(data){

      return (
        <li key={data.cid} className="menu-item">
          <h3 className="menu-item-title">{data.get('item')}</h3>
          <p className="menu-item-descript">{data.get('description')}</p>
          <span className="menu-item-price">{data.get('price')}</span>
          <input className="subscribe-button" type="submit" name="item" value="Add"/>
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
