"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ProductRepo = require('../repositories/productRepo');

var ProductActions = {
	init: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.PRODUCT_INIT,
			input: {
				name: "",
				inStock: false
			},
			products: ProductRepo.getAll()
		});
	}
};

module.exports = ProductActions;