var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var waitTimeout = 200000;

let search = function () {

    this.searchwithDesc = function () {
        var homePagePO = new homePageObj();
        utilities.waitForElement(homePagePO.searchbar,waitTimeout);
        utilities.HighlightElement(homePagePO.searchbar);
        homePagePO.searchbar.sendKeys("65-inch TV");
        utilities.HighlightElement(homePagePO.searchicon);
        utilities.attachScreenshot();
        homePagePO.searchicon.click();
        utilities.attachScreenshot();
        reportInfo.log("65-inch TV is entered in search bar and clicked on search icon");
    }
}
module.exports = new search();