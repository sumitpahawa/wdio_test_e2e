import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Wait page is open$/, async function () {
  await browser.url("https://www.google.com/");
  await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await driver.maximizeWindow();
  console.log(JSON.stringify(browser));
  await browser.pause(15000);
});
When(/^Search withs (.*)$/, async function (searchItem) {
  console.log(">>searcbhItem: ${searchItem}");
  console.log(">> searchItem: ${searchItem}");
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
  console.log(JSON.stringify(ele));
  await browser.pause(15000);
});
Then(/^Click on firsts search result$/, async function () {
  let ele = await $("h3");
  ele.click();
});
Then(/^URL should match (.*)$/, async function (exp_url) {
  let act_url = await driver.getUrl();
  await browser.waitUntil(async function() {
      return await browser.getTitle() ==="WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"},
      { timeout: 20000, interval: 5000, timeoutMsg: 'Not found' });
  chai.expect(act_url).to.equal(exp_url);
  await browser.pause(15000);

});
