/* menu jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local





var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <div className="menu-title text-center">
          <h1>Menu</h1>
        </div>
        <ul className="menu-items appetizers col-xs-4">
          <h2 className="menu-item-cat">Appetizer</h2>
          <li className="menu-item">
            <h3 className="menu-item-title">Spring Rolls</h3>
            <p className="menu-item-descript">Spring Rolls are very very gud.</p>
            <span className="menu-item-price">5.00</span>
            <input className="subscribe-button" type="submit" name="item" value="Add"/>
          </li>
        </ul>
        <ul className="menu-items entree col-xs-4">
          <h2 className="menu-item-cat">Entree</h2>
          <li className="menu-item">
            <h3 className="menu-item-title">Spring Rolls</h3>
            <p className="menu-item-descript">Spring Rolls are very very gud.</p>
            <span className="menu-item-price">5.00</span>
            <input className="subscribe-button" type="submit" name="item" value="Add"/>
          </li>
        </ul>
        <ul className="menu-items dessert col-xs-4">
          <h2 className="menu-item-cat">Dessert</h2>
          <li className="menu-item">
            <h3 className="menu-item-title">Spring Rolls</h3>
            <p className="menu-item-descript">Spring Rolls are very very gud.</p>
            <span className="menu-item-price">5.00</span>
            <input className="subscribe-button" type="submit" name="item" value="Add"/>
          </li>
        </ul>
      </div>
    )
  }
});






module.exports = MenuComponent;
