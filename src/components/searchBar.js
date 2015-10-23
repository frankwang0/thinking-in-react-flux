"use strict";

var React = require('react');

var SearchBar = React.createClass({
	render: function() {
		return (
            <form>
                <input type="text" placeholder="Search..." />
                <p><input type="checkbox" />{' '}Only show products in stock</p>
            </form>			
		);
	}
});

module.exports = SearchBar;