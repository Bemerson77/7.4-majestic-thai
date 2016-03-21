/* owner jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');


// local





var OwnerComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (

        <div className="about">
            <div className="owner-pic col-xs-4">
              <img src="./images/mj-owner.jpg" alt=""/>
            </div>
            <div className="col-xs-1"></div>
            <div className="owner-descript col-xs-7">
              <h2 className="owner-title">Majestic Thai Owners</h2>
              <p>Lorem Khaled Ipsum is a major key to success. The key to success is to keep your head above the water, never give up. Let’s see what Chef Dee got that they don’t want us to eat. The key to success is to keep your head above the water, never give up. Mogul talk. Look at the sunset, life is amazing, life is beautiful, life is what you make it. Bless up. Another one. You smart, you loyal, you a genius. Mogul talk. Eliptical talk. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key.</p>

                <p>The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Lion! It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing.
              </p>
            </div>
          </div>


    )
  }
});


module.exports = OwnerComponent;
