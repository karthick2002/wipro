var launcher = require('../com.sirius.reusables/launcher.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('Verify whether the user is able to add TV to cart', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    homePage.homeLogin();
    searchPage.searchwithDesc();
    browseByCategory.selectCategoryAddPdp();
    reportInfo.log('Script Completed');
    testInputs.scriptTimeOut});