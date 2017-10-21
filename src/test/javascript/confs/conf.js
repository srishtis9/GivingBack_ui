 
exports.config = {
  
  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
	
	chromeOptions: {
        args: [
            '--start-maximized'
        ]
    }
  },
   params: {
    pledge: {
      piece: 24,
      user: 1020,
	  
    }
  },

  // Framework to use
  framework: 'jasmine',
 // restartBrowserBetweenTests: true,
  

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../specs/pledge_spec.js','../specs/revisit_spec.js'],
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	   showColors : true ,
    defaultTimeoutInterval: 120000
  }
};