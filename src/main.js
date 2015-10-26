'use strict';

//$ = jQuery = require('jquery');

var React = require('react');
var ProductRepo = require('./api/productRepo');
var FilterableProductTable = require('./components/filterableProductTable');

var products = ProductRepo.getProducts();

React.render(
	<FilterableProductTable />, 
	document.getElementById('app')
);