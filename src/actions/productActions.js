"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ProductRepo = require('../repositories/productRepo');

var ProductActions = {
	init: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.PRODUCTS_INIT,
			input: {
				filterText: "",
				inStock: false
			},
			products: ProductRepo.getAll()
		});
	},

	filter: function(filterText, inStock) {
		var products = ProductRepo.filter(filterText, inStock);
		Dispatcher.dispatch({
			actionType: ActionTypes.PRODUCTS_FILTERED,
			input: {filterText: filterText, inStock: inStock},
			products: products
		});
	}
};

module.exports = ProductActions;