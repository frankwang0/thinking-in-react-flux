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
				showInStockOnly: false
			},
			products: ProductRepo.getAll()
		});
	},

	filter: function(filterText, showInStockOnly) {
		var products = ProductRepo.filter(filterText, showInStockOnly);
		Dispatcher.dispatch({
			actionType: ActionTypes.PRODUCTS_FILTERED,
			input: {filterText: filterText, showInStockOnly: showInStockOnly},
			products: products
		});
	}
};

module.exports = ProductActions;