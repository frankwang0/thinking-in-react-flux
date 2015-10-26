"use strict";

var React = require('react');

var SearchBar = React.createClass({
	propTypes: {
		input: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.input.name} />
                <p><input type="checkbox" value={this.props.input.inStock} />{' '}Only show products in stock</p>
            </form>			
		);
	}
});

module.exports = SearchBar;