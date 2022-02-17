var pageConstants = require('../com.sirius.library/pageConstants.js');

let browseByCategory = function () {
    this.searchItemName = element.all(by.xpath('.//*[@data-index="4"]//*[contains(@class,"a-size-mini")]')).first();
    this.searchItemPrice = element.all(by.xpath('.//*[@data-index="4"]//*[contains(@class,"a-size-mini")]//*[@class="a-offscreen"]')).first();
};

module.exports = browseByCategory ;