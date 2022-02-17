var browserDetails = require('./browserDetails.js');
var testInputs = require('../com.sirius.testData/data.json');
var utilities = require('../com.sirius.reusables/utilities.js');
let launcher = function () {

	this.launchApplication = function () {
		var currentBrowserName = browserDetails.browserName;
		var currentDeviceName = browserDetails.executionName;
		switch (currentBrowserName) {
			case 'chrome':
				browser.driver.manage().window().maximize();
				browser.driver.get(testInputs.baseUrl);
				//browser.waitForAngularEnabled(false);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case 'Safari':
				browser.driver.manage().window().maximize();
				//browser.waitForAngularEnabled(false);
				browser.driver.get(testInputs.baseUrl);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case 'firefox':
				browser.driver.manage().window().maximize();
				//browser.waitForAngularEnabled(false);
				browser.driver.get(testInputs.baseUrl);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case 'edge':
				browser.driver.manage().window().maximize();
				//browser.waitForAngularEnabled(false);
				browser.driver.get(testInputs.baseUrl);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case '':
				if (currentDeviceName == 'iphone') {
					browser.waitForAngularEnabled(false);
					allure.addArgument("Browser Name ", currentDeviceName);
					allure.epic(currentDeviceName);
				} else if (currentDeviceName == 'ipad') {
					utilities.log('iPad Execution');
					browser.waitForAngularEnabled(false);
					allure.addArgument("Browser Name ", currentDeviceName);
					allure.epic(currentDeviceName);
				} else { }
				break;
			case 'android':
				browser.waitForAngularEnabled(false);
				allure.addArgument("Browser Name ", currentDeviceName);
				allure.epic(currentDeviceName);
			default:
				break;
		}
	}
};


module.exports = new launcher();