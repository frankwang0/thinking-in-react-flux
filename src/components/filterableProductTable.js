'use strict';

var React = require('react');
var SearchBar = require('./searchBar');

var FilterableProductTable = React.createClass({
	render: function() {
		return (
			<SearchBar />
		);
	}
});

module.exports = FilterableProductTable;