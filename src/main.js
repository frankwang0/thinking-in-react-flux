'use strict';

//$ = jQuery = require('jquery');

var React = require('react');
var FilterableProductTable = require('./components/filterableProductTable');
var ProductActions = require('./actions/ProductActions');

ProductActions.init();

React.render(
	<FilterableProductTable />, 
	document.getElementById('app')
);