/* ORDER MODEL */

// 3rd party
var Backbone = require('backbone');
var $ = require('jquery');


var OrderModel = Backbone.Model.extend({
  idAttribute: 'cid'
});

var OrderCollection = Backbone.Collection.extend({
  model: OrderModel
  // url: 'http://tiny-lasagna-server.herokuapp.com/collections/brandonmenu'
});



module.exports = {
  OrderModel: OrderModel,
  OrderCollection: OrderCollection
};
