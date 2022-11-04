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
  chai.expect(act_url).to.equal(exp_url);
});

Given(/^A web page is opened$/, async function () {
  await browser.url("");
  await browser.maximizeWindow();
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

When(/^Perform web Interactions.$/, async function () {
  /**
  Inputbox
  1.Type into input box
  2.Clear the field and type or just add the field
  3.click and type
  4.Slow typing

  **/
  await browser.url("/inputs");
  let number = 12345;
  let str = number.toString();
  let element = $("[type=number]");
  // await element.scrollIntoView();
  await (await element).click();
  // await element.setValue(str);
  for (let i = 0; i < 5; i++) {
    let charStr = str.charAt(i);
    await browser.pause(1000);
    await browser.keys(charStr);
  }
  await browser.pause(8000);

    /**
  Inputbox
  1.Type into input box
  2.Clear the field and type or just add the field
  3.click and type
  4.Slow typing

  **/
});
