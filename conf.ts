import {Config, browser} from "protractor";
const { Authenticator } = require('authenticator-browser-extension');


exports.config={
   framework:'jasmine2',
    directConnect:true,
       
    specs: ['./src_Files/*.js'],
    baseUrl:'http://the-internet.herokuapp.com/',
    chromeoptions:{
    extensions:[Authenticator.for('admin', 'admin').asBase64()]
    
    },
    onPrepare:function()
    {
        browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
        
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval:9000000,
    },
    allScriptsTimeout:9000000
};