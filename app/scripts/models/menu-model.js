/* MENU MODEL */

// 3rd party
var Backbone = require('backbone');
var $ = require('jquery');


var MenuModel = Backbone.Model.extend({
  idAttribute: 'cid'
});

var MenuCollection = Backbone.Collection.extend({
  model: MenuModel
  // url: 'http://tiny-lasagna-server.herokuapp.com/collections/brandonmenu';
});



module.exports = {
  MenuModel: MenuModel,
  MenuCollection: MenuCollection
};
