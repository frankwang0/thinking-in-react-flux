"use strict";

var React = require('react');

var ProductRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
});


module.exports = ProductRow;