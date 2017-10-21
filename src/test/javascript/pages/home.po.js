//var robot = require("robotjs");
var homePage = function(){
	
	var params = browser.params;
	//locators
	this.signInBtn = element(by.id('ctl00_ctl46_ExplicitLogin'));
	
	//locators for pledging
	
	this.pledgePiece = element(by.id('polygon_292'));
	
	
	this.takeActionBtn = element(by.css('a[class="btn btn-primary btn-round btn-block"]'));
	this.pledgeType = element(by.css('small[class="custom-control-description"]'));
	
	this.commitBtn = element(by.linkText('I commit to spread generosity'));
	
	//this.successmsg = element(by.css('app-component-pledgefinalsharecard div div h6 small["font-weight-bold"]'));
	
	this.successmsg = element(by.xpath('html/body/app-root/app-component-body/div[2]/div/div[2]/app-component-pledgefinalsharecard/div/div[1]/h6[1]/small'));
	
	//log out locators
	this.logoutMenu = element(by.css('span[id="zz5_Menu_t"]'));
	this.signOutLink = element(by.css('div[id="zz4_ID_Logout"]'));
	
	/// locators for metrics
	
	this.totalActions = element(by.xpath('html/body/app-root/app-component-body/div[1]/div/div[1]/app-component-pledgeinfocard/div/div/div[2]/div[2]/p[2]'));
	this.fund = element(by.xpath('html/body/app-root/app-component-body/div[1]/div/div[1]/app-component-pledgeinfocard/div/div/div[2]/div[4]/p[2]'));
	
	this.menulist = element(by.css('span[id="zz5_Menu_t"]'));
	///locators for email update options
	
	this.mailChkBox = element(by.css('app-component-pledgefinalsharecard div[class="card contain"] div[class="card-body card-body-padding-fix"] label[class="custom-control custom-checkbox"]'));
	//this.msg = element(by.xpath('html/body/app-root/app-component-body/div[2]/div/div[2]/app-component-pledgefinalsharecard/div/div[1]/h6[1]/small'));
	this.popmsg = element(by.css('ngb-modal-window div div app-modal-component div h4.modal-title'));
	//functions
	
	this.singIn = function(){
		this.signInBtn.click();
		
	};
	
	this.pledge = function(){
		//this.pledgePiece.click();
		browser.switchTo().frame('MSOPageViewerWebPart_WebPartWPQ1');
    //browser.findElement(by.id('30_0_80')).click();
		this.pledgePiece.click();
		
		browser.driver.sleep(5000);
		
		this.takeActionBtn.click();
		this.pledgeType.click();
		this.commitBtn.click();
		
		
	};
	
	this.checkUpdate = function(){
		browser.switchTo().frame('MSOPageViewerWebPart_WebPartWPQ1');
		this.mailChkBox.click();
		browser.driver.sleep(3000);
	};
	
	this.logOut = function(){
		browser.switchTo().defaultContent();
		this.logoutMenu.click();
		this.signOutLink.click();
	};
	
};

module.exports = new homePage();