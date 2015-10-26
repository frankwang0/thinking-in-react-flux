'use strict';

var React = require('react');
var SearchBar = require('./searchBar');
var ProductTable = require('./productTable');

var ProductRepo = require('../api/productRepo');
var products = ProductRepo.getProducts();

var FilterableProductTable = React.createClass({
	render: function() {
		return (
			<div>
				<SearchBar />
				<ProductTable products={products} />
			</div>
		);
	}
});

module.exports = FilterableProductTable;