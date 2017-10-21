var util = require('util');
var home_page = require('../pages/home.po.js');

describe('pledge scenario',function(){
	beforeEach(function(){
		
		browser.driver.manage().deleteAllCookies();
		browser.waitForAngularEnabled(false);
		browser.get("http://source-uat.vmware.com/pledge/Pages/default.aspx");
		browser.driver.sleep(5000);
	});
	
	it('user should login and pledge',function(){
		home_page.singIn();
		browser.driver.sleep(3000);
		//browser.waitForAngularEnabled(true);
		home_page.pledge(); //***************no second pledge*********
		
		
		//expect(home_page.successmsg.getText()).toContain('Thank you for your contribution!');
		//asserting on the checkbox
		expect(home_page.mailChkBox.isPresent()).toBe(true);
	});
	
	xit('checking the mail update checkbox',function(){
		home_page.singIn();
		browser.driver.sleep(3000);
		home_page.checkUpdate();
		//expect(home_page.msg.getText()).toContain('Thank you for your contribution!');
	});
	
	afterEach(function(){
		browser.switchTo().defaultContent();
		home_page.logOut();
	});
});