"use strict";

var React = require('react');

var SearchBar = React.createClass({
	propTypes: {
		input: React.PropTypes.object.isRequired,
		onInputChange: React.PropTypes.func.isRequired
	},

	handleInput: function(e) {
		this.props.onInputChange(
			this.refs.filterText.getDOMNode().value, 
			this.refs.showInStockOnly.getDOMNode().checked
		);
	},

	render: function() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search..." 
					value={this.props.input.name} 
					ref="filterText" 
					onChange={this.handleInput} 
				/>
				<p>
					<input 
						type="checkbox" 
						checked={this.props.input.showInStockOnly} 
						ref="showInStockOnly" 
						onChange={this.handleInput} 
					/>
					{' '}
					Only show products in stock
				</p>
			</form>			
		);
	}
});

module.exports = SearchBar;