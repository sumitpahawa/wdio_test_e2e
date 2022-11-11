import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import { classicNameResolver } from "typescript";
Given(/^Google page is open$/, async function () {
  console.log("Before Step");
  await browser.url("https://www.google.com/");
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
  // await browser.url("/inputs");
  // let number = 12345;
  // let str = number.toString();
  // let element = $("[type=number]");
  // // await element.scrollIntoView();
  // await (await element).click();
  // // await element.setValue(str);
  // for (let i = 0; i < 5; i++) {
  //   let charStr = str.charAt(i);
  //   await browser.pause(1000);
  //   await browser.keys(charStr);
  // }
  // await browser.pause(8000);

  // /**
  // Drop
  // 1.Comfirm default option is selected
  // 2.Select by value , index and text
  // 3.Get a list of options

  // **/

  // await browser.url("/dropdown");
  // let elementDefault = await $("//select/option[@selected='selected']");
  // let text = await elementDefault.getText();
  // chai.expect(text).to.equal("Please select an option");
  // await browser.pause(5000);

  // let dd = await $("#dropdown");
  // await dd.selectByVisibleText("Option 2");
  // await browser.pause(5000);
  // await dd.selectByAttribute("value", "1");
  // await browser.pause(5000);
  // await dd.selectByIndex(2);
  // await browser.pause(5000);

  // let elementsArr = await $$("select>option");
  // let array2 = [];
  // for (let i = 0; i < elementsArr.length; i++) {
  //   let ele = elementsArr[i];
  //   let value = await ele.getText();
  //   array2.push(value);
  //   console.log(value.toString);
  // }

  // console.log(">> Array Option: ${array2}");
  // await browser.pause(5000);
  // await browser.url("/checkboxes");
  // await browser.pause(5000);
  // let checkboxes = await $$("//*[@id='checkboxes']/input");
  // for (let i = 0; i < checkboxes.length; i++) {
  //   let ele = checkboxes[i];
  //   if (await ele.isSelected()) {
  //     ele.click();
  //   }
  // }
  // console.log("Checkbox2 already checked");
  // await browser.pause(1000);

  // await browser.url("/windows");
  // await browser.pause(5000);
  // let wndowHandle = await driver.getWindowHandle();
  // let link = await $("#content > div > a");
  // link.click();
  // let wndowHandles = await driver.getWindowHandles();
  // console.log(wndowHandles);
  // for (let i = 0; i < wndowHandles.length; i++) {
  //   let currentWindow = wndowHandles[i];
  //   if (wndowHandle != currentWindow) {
  //     await driver.switchToWindow(currentWindow);
  //     console.log(await driver.getTitle());
  //     await driver.getTitle();
  //     await driver.closeWindow();
  //     break;
  //   }
  // }

  // await driver.switchToWindow(wndowHandle);
  // let title = await driver.getTitle();
  // console.log(title);
  // await browser.pause(5000);

  // await browser.url("/javascript_alerts");
  // await browser.pause(5000);
  // await $("button=Click for JS Alert").click();
  // if (await browser.isAlertOpen()) {
  //   await browser.acceptAlert();
  //   await browser.pause(5000);
  // }
  // await browser.pause(5000);

  // await browser.url("/javascript_alerts");
  // await browser.pause(5000);
  // await $("button=Click for JS Confirm").click();
  // if (await browser.isAlertOpen()) {
  //   let alretText = await browser.getAlertText();
  //   console.log(alretText);
  //   await browser.dismissAlert();
  //   await browser.pause(5000);
  // }
  // await browser.url("/upload"); 
  // await $('#file-upload').addValue(process.cwd()+"/data/dummyData/dummy.txt")
  // await $("#file-submit").click()
  // await browser.pause(5000);
  // await browser.url("/frames"); 
  // await $("=iFrame").click()
  // let iframeele = await $("#mce_0_ifr")
  // await driver.switchToFrame(iframeele)
  // await $("#tinymce").setValue("bnn,scmnnxnxzn")
  // await browser.switchToParentFrame()
  await browser.pause(5000);

  await browser.url("https://www.amazon.in/"); 
  await browser.pause(10000);
  await $("span=Shop by Category").scrollIntoView();
  await browser.pause(5000);

});
