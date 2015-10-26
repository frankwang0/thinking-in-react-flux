'use strict';

var React = require('react');
var SearchBar = require('./searchBar');
var ProductTable = require('./productTable');

var ProductStore = require('../stores/productStore');

var FilterableProductTable = React.createClass({
	getInitialState: function() {
		return {
			input: ProductStore.getInput(),
			products: ProductStore.getProducts()
		};
	},

	render: function() {
		return (
			<div>
				<SearchBar input={this.state.input} />
				<ProductTable products={this.state.products} />
			</div>
		);
	}
});

module.exports = FilterableProductTable;