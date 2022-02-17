var pageConstants = require('../com.sirius.library/pageConstants.js');

let login = function () {
    this.firsPage = element(by.xpath('.//*[contains(text(),"Skip sign in")]'));
};
module.exports =  login;