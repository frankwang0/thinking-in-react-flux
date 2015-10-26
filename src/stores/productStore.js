
"use strict";

var StoreBase = require('./storeBase');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var _input = {
	name: "",
	inStock: false
};

var _products = [];

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
		case ActionTypes.INITIALIZE:
		_input = action.input;
		_products = action.products;
		break;
	}
});


module.exports = ProductStore;