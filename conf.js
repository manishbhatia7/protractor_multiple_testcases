"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var Authenticator = require('authenticator-browser-extension').Authenticator;
exports.config = {
    framework: 'jasmine2',
    directConnect: true,
    specs: ['./src_Files/*.js'],
    baseUrl: 'http://the-internet.herokuapp.com/',
    chromeoptions: {
        extensions: [Authenticator["for"]('admin', 'admin').asBase64()]
    },
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 9000000
    },
    allScriptsTimeout: 9000000
};
