/* ORDER MODEL */

// 3rd party
var Backbone = require('backbone');
var $ = require('jquery');


var OrderModel = Backbone.Model.extend({
  idAttribute: 'cid',
  defaults: {
		title: '',
		price: ''
	}
});

var OrderCollection = Backbone.Collection.extend({
  model: OrderModel

});



module.exports = {
  OrderModel: OrderModel,
  OrderCollection: OrderCollection
};
