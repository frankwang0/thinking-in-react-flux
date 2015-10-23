'use strict';

//$ = jQuery = require('jquery');

var React = require('react');
var FilterableProductTable = require('./components/filterableProductTable');

React.render(
	<FilterableProductTable />, 
	document.getElementById('app')
);