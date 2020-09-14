"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
var path = require('path');
describe('Multiple Tests', function () {
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get(protractor_1.browser.baseUrl);
    });
    it('File Upload', function () {
        var filetoUpload = 'C:\\Users\\manis\\OneDrive\\Desktop\\recovery.txt', absolutePath = path.resolve(__dirname, filetoUpload);
        protractor_1.element(protractor_1.by.linkText("File Upload")).click();
        protractor_1.element(protractor_1.by.id("file-upload")).sendKeys(absolutePath);
        protractor_1.element(protractor_1.by.id("file-submit")).click();
        var text = protractor_1.element(protractor_1.by.tagName("h3")).getText();
        var file_confirm_text = protractor_1.element(protractor_1.by.xpath("//div[@id='uploaded-files']")).getText();
        expect(text).toEqual("File Uploaded!");
        expect(file_confirm_text).toEqual("recovery.txt");
    });
    it('Right Click', function () {
        protractor_1.element(protractor_1.by.linkText("Context Menu")).click();
        var hot_spot = protractor_1.element(protractor_1.by.id("hot-spot"));
        protractor_1.browser.actions().click(hot_spot, ptor_1.protractor.Button.RIGHT).perform();
        protractor_1.browser.switchTo().alert().accept();
    });
    it('Digest Authentication', function () {
        protractor_1.element(protractor_1.by.linkText("Digest Authentication")).click();
    });
    it('Basic Jquery Operations', function () {
        protractor_1.element(protractor_1.by.linkText("JQuery UI Menus")).click();
        var base = protractor_1.element(protractor_1.by.id("ui-id-2"));
        var base1 = protractor_1.element(protractor_1.by.id("ui-id-4"));
        var base2 = protractor_1.element(protractor_1.by.id("ui-id-8"));
        protractor_1.browser.actions().mouseMove(base).mouseMove(base1).mouseMove(base2).click().sendKeys(protractor_1.Key.ESCAPE).perform();
        protractor_1.browser.sleep(5000);
    });
});
