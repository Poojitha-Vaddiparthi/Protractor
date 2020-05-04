let pageObj = require('./BDD.page.js');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

Before(function(){
    browser.ignoreSynchronization = true;
})

Given('User is navigating to sample angular application',{timeout: 4 * 5000}, async () =>{
    await pageObj.getURL();
    await browser.sleep(10000);
});

When('User need to click on Register link', async ()  => {
    await pageObj.register().click();
});

Then('User need to enter firstname as {string} and lastname as {string}', async (firstName,lastName) =>  {
    await pageObj.firstName().sendKeys(firstName);
    await pageObj.lastName().sendKeys(lastName);
});

Then('User need to enter username as {string} and password as {string}', async (userName,password) => {
    await pageObj.userName().sendKeys(userName);
    await pageObj.password().sendKeys(password);
});

Then('User need to click on register button', async () => {
    await pageObj.registerButton().click();
    await browser.sleep(1000);
});

Then('User verifies the {string} on successful registration', async (alertMessage) => {
    let successAlert=await pageObj.successAlert().getText();
    expect(successAlert).to.equal(alertMessage);
});

Then('User need to click on login button', async () => {
    await pageObj.loginButton().click();
    await browser.sleep(2000);
});

Then('User is verifying the title equals with {string}', async (expectedTitle) => {
    let pageTitle=await browser.getTitle();
    expect(pageTitle).to.contain(expectedTitle);
});

Then('User deletes the existing registered user by clicking on Delete button', async () => {
    await pageObj.deleteButton().click();
    await browser.sleep(1500);
});

Then('User need to click on Logout button', async () => {
    await pageObj.logoutButton().click();
});