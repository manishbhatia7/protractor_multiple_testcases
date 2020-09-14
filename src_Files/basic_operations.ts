import { browser, element,by, Key } from "protractor"
import { protractor } from "protractor/built/ptor";
var path=require('path');

describe('Multiple Tests',()=>{
    beforeEach(()=>
{
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);

})
it('File Upload',()=>{
    var filetoUpload='C:\\Users\\manis\\OneDrive\\Desktop\\recovery.txt',
    absolutePath=path.resolve(__dirname,filetoUpload);
    element(by.linkText("File Upload")).click();
    element(by.id("file-upload")).sendKeys(absolutePath);
    element(by.id("file-submit")).click();
    var text=element(by.tagName("h3")).getText();
    var file_confirm_text=element(by.xpath("//div[@id='uploaded-files']")).getText();
    expect(text).toEqual("File Uploaded!");
    expect(file_confirm_text).toEqual("recovery.txt");    

})
it('Right Click',()=>{
    element(by.linkText("Context Menu")).click();
    var hot_spot=element(by.id("hot-spot"));
    browser.actions().click(hot_spot,protractor.Button.RIGHT).perform();
    browser.switchTo().alert().accept();
    })
it('Digest Authentication',()=>{
    element(by.linkText("Digest Authentication")).click();

})
it('Basic Jquery Operations',()=>{
    element(by.linkText("JQuery UI Menus")).click();
    var base=element(by.id("ui-id-2"));
    var base1=element(by.id("ui-id-4"));
    var base2=element(by.id("ui-id-8"));
    browser.actions().mouseMove(base).mouseMove(base1).mouseMove(base2).click().sendKeys(Key.ESCAPE).perform();
    
    browser.sleep(5000);
})
})

