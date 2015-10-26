"use strict";

var React = require('react');

var ProductCategoryRow = React.createClass({
	render: function() {
		return (
			<tr><td colSpan="2">{this.props.category}</td></tr>
		);
	}
});

module.exports = ProductCategoryRow;