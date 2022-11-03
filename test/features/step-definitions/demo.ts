import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Google page is open$/, async function () {
  console.log("Before Step");
  await browser.url("https://www.google.com/");
  await browser.maximizeWindow();
  await browser.pause(10000);
  console.log("After Step");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(">>searcbhItem: ${searchItem}");
  console.log(">> searchItem: ${searchItem}");
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});
Then(/^Click on first search result$/, async function () {
  let ele = await $("h3");
  ele.click();
});
Then(/^URL should matck (.*)$/, async function (exp_url) {
  let act_url = await driver.getUrl();
    chai.expect(act_url).to.equal(exp_url)
});
