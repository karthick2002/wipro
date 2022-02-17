const { element } = require('protractor');
var pageConstants = require('../com.sirius.library/pageConstants.js');

let Homepage = function () {
  	this.searchbar = element(by.css('.nav-search-field>input'));
    this.searchicon = element(by.css('.nav-search-submit .nav-input'));
module.exports =  Homepage;