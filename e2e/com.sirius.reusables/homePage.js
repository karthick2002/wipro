var loginPOj = require('../com.sirius.pageObjects/login_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');

let homePage = function () {

    this.homeLogin = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.firsPage);
        utilities.HighlightElement(loginPO.firsPage);
        utilities.attachScreenshot();
        loginPO.firsPage.click();
        utilities.attachScreenshot();
        reportInfo.log("Skip Sign in button is clicked and landed in Home Page");
    }
}
module.exports = new homePage();