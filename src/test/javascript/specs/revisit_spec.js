var util = require('util');
var home_page = require('../pages/home.po.js');

describe('scenario on subsequent visits',function(){
	
	beforeEach(function(){
		
		browser.driver.manage().deleteAllCookies();
		browser.waitForAngularEnabled(false);
		browser.get("http://source-uat.vmware.com/pledge/Pages/default.aspx");
		browser.driver.sleep(5000);
	});
	
	it('checking the mail update checkbox',function(){
		//home_page.singIn();
		browser.driver.sleep(3000);
		home_page.checkUpdate();
		//expect(home_page.msg.getText()).toContain('Thank you for your contribution!');
		expect(home_page.popmsg.getText()).toContain('Success');
	});
	
	afterEach(function(){
		browser.switchTo().defaultContent();
		home_page.logOut();
	});
});