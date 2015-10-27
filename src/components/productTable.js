"use strict";

var React = require('react');
var ProductCategoryRow = require('./productCategoryRow');
var ProductRow = require('./productRow');

var ProductTable = React.createClass({
	render: function() {
		var rows = [];
		var lastCategory = null;

		this.props.products.forEach(function(product) {
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
				lastCategory = product.category;
			}

			rows.push(<ProductRow product={product} key={product.name} />);
		});

		return (
			<table className="table-condensed">
				<thead>
					<th>Name</th>
					<th>Price</th>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
});

module.exports = ProductTable;