"use strict";

var products = require('./productData').products;

var ProductRepo = {
	getProducts: function() {
		return products;
	}
};

module.exports = ProductRepo;