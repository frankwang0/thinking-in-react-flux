"use strict";

var Products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var ProductRepo = {
	getAll: function() {
		return Products;
	},

	filter: function(filterText, showInStockOnly) {
		return Products.filter(function(p) {
			var textFiltered = true;

			if (filterText.length > 0) {
				textFiltered = p.name.indexOf(filterText) > -1; 
			}
			
			return textFiltered && ((!showInStockOnly) || (showInStockOnly && p.stocked));				
		});
	}
};


module.exports = ProductRepo;