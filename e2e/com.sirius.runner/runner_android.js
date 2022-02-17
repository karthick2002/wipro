let date = new Date() + "";
date = date.substr(0, date.indexOf(" GMT"));
let browserStartGlobal;

exports.config = {
  multiCapabilities:
    [
      {
        seleniumAddress: 'http://127.0.0.1:4760/wd/hub',
        browserName: 'android',
        platformName: 'Android',
        platformVersion: '11',
        deviceName: 'Pixel 2',
        udid: 'FA7AC1A05643',
        app: process.cwd() + "/e2e/com.sirius.library/Apps/amazon.apk",
        bundleId: 'com.cutco.rep',
        autoWebviewTimeout: 30000,
        autoWebview: true,
        nativeWebTap: true,
        name: 'android',
        automationName: 'appium',
        nativeWebScreenshot: true,
        noReset: false,
        fullReset: true,
        clearSystemFiles: true,
      }
    ],

  framework: 'jasmine2',
  
    specs : process.cwd() + '/e2e/com.sirius.specs/launchapp.js',

  restartBrowserBetweenTests: true,
  allScriptsTimeout: 40000,
  getPageTimeout: 50000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },

  onPrepare: function () {

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultDir: '../../Cutco_Framework/allure-results/',
    }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  }

};