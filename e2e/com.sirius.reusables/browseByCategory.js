var browseObj = require('../com.sirius.pageObjects/browseByCategory_po');
var utilities = require('../com.sirius.reusables/utilities.js');
var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

var store;
var price;
var waitTimeout = 1000000;

let browseByCategory = function () {

    this.selectCategoryAddPdp = function () {
        var browsePO = new browseObj();
        utilities.waitForElement(browsePO.searchItemName, waitTimeout);
        utilities.scrollTo(browsePO.searchItemName);
        utilities.HighlightElement(browsePO.searchItemName);
        store = browsePO.searchItemName.getText();
        price = browsePO.searchItemPrice.getText();
        utilities.HighlightElement(browsePO.searchItemName);
        utilities.HighlightElement(browsePO.searchItemPrice);
        utilities.attachScreenshot();
        reportInfo.log("Product name and price are highlighted");
        browsePO.searchItemName.click();
        utilities.waitForElement(pdpPO.productdescription, waitTimeout);
        utilities.HighlightElement(pdpPO.productdescription);
        utilities.attachScreenshot();
        expect(pdpPO.productdescription.getText()).toContain(store);
        reportInfo.log("Verified the Product description from Category with PDP");
        utilities.scrollTo(pdpPO.productPrice);
        utilities.HighlightElement(pdpPO.productPrice);
        expect(pdpPO.productPrice.getText()).toContain(price);
        reportInfo.log("Verified the Product price from Category with PDP");
        utilities.attachScreenshot();
        utilities.HighlightElement(pdpPO.addToCartButton);
        utilities.click(pdpPO.addToCartButton);
        utilities.attachScreenshot();
        reportInfo.log("Add to cart button is clicked in PDP page");
        utilities.waitForElement(pdpPO.proceedCheckout);
        utilities.HighlightElement(pdpPO.proceedCheckout);
}
module.exports = new browseByCategory();