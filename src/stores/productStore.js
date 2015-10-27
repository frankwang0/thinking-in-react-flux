
"use strict";

var StoreBase = require('./storeBase');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var _input = null;
var _products = null;

var ProductStore = assign(StoreBase, EventEmitter.prototype, {
	getInput: function() {
		return _input;
	},

	getProducts: function() {
		return _products;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		
		case ActionTypes.PRODUCTS_INIT:
			_input = action.input;
			_products = action.products;
			break;

		case ActionTypes.PRODUCTS_FILTERED:
			_input = action.input;
			_products = action.products;
			break;

		default:
			return;
	}

	ProductStore.emitChange();
});

module.exports = ProductStore;