'use strict';

var React = require('react');
var SearchBar = require('./searchBar');
var ProductTable = require('./productTable');
var ProductStore = require('../stores/productStore');
var ProductActions = require('../actions/productactions');

var FilterableProductTable = React.createClass({
	getInitialState: function() {
		return this._getState();
	},

	componentWillMount: function() {
		ProductStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ProductStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(this._getState());
	},

	_getState: function() {
		return {
			input: ProductStore.getInput(),
			products: ProductStore.getProducts()
		};
	},

	handleInput: function(filterText, showInStockOnly) {
		ProductActions.filter(filterText, showInStockOnly);
	},

	render: function() {
		return (
			<div>
				<SearchBar input={this.state.input} onInputChange={this.handleInput} />
				<ProductTable products={this.state.products} />
			</div>
		);
	}
});

module.exports = FilterableProductTable;