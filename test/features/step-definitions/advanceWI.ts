import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login in to inventory web page$/, async function () {
  await driver.url("https://www.saucedemo.com");
  await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
  try {
    await $("#user-name").setValue("standard_user");
    await $("#passwor").setValue("secret_sauce");
    await $("#login-button").click();
  } catch (err) {
    await browser.pause(5000);
    await console.log("Error in first login");
    await browser.refresh()
    await browser.pause(5000);
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();
    await browser.back()
    await browser.pause(5000);
    await browser.forward()

  }
  await browser.pause(5000);
  // await driver.url("https://www.saucedemo.com");
  // await driver.maximizeWindow();
  // await $("#user-name").setValue("problem_user");
  // await $("#password").setValue("secret_sauce");
  // await $("#login-button").click();
});

When(/^Inventory Page should list (.*)$/, async function (list) {
  let lenght = await $$(".inventory_item_label").length;
  chai.expect(lenght).to.equal(Number.parseInt(list));
});
Then(/^Validate all the product have valid price$/, async function () {
  let prices = await $$(".inventory_item_price");
  let priceArr = [];
  for (let i = 0; i < prices.length; i++) {
    let priceString = await prices[i].getText();
    priceArr.push(priceString);
  }
  console.log(priceArr);
  let priceNumber = priceArr.map((ele) => ele.replace("$", ""));
  console.log(priceNumber);
  let invalidPriceArr = priceNumber.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);

  await browser.pause(5000);
  await browser.url("/tables");
  let rows = await $$("#table1 > tbody > tr");
  let cols = await $$("#table1 > thead > tr > th");
  let arr = [];
  for (let i = 0; i < rows.length; i++) {
    let person = {
      lastname: "",
      firstname: "",
      email: "",
      due: "",
      web: "",
    };
    for (let j = 0; j < cols.length; j++) {
      let text = await $(
        "#table1 > tbody > tr:nth-child(" +
          (i + 1) +
          ") > td:nth-child(" +
          (j + 1) +
          ")"
      ).getText();
      let firstName = await $(
        "#table1 > tbody > tr:nth-child(" + (i + 1) + ") > td:nth-child(1)"
      ).getText();
      if (firstName === "Bach") {
        if (j === 0) person.lastname = text;
        if (j === 1) person.firstname = text;
        if (j === 2) person.email = text;
        if (j === 3) person.due = text;
        if (j === 4) person.web = text;
        console.log(text);
      }
    }
    
    Given(/^Login in to inventory web page$/, async function () {
      await driver.url("https://www.saucedemo.com");
      await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
      await driver.maximizeWindow();
      await $("#user-name").setValue("standard_user");
      await $("#password").setValue("secret_sauce");
      await $("#login-button").click();
      await browser.pause(5000);
    });
    
    When(/^Inventory Page should list (.*)$/, async function (list) {
      let lenght = await $$(".inventory_item_label").length;
      chai.expect(lenght).to.equal(Number.parseInt(list));
    });
    Then(/^Validate all the product have valid price$/, async function () {
      let prices = await $$(".inventory_item_price");
      let priceArr = [];
      for (let i = 0; i < prices.length; i++) {
        let priceString = await prices[i].getText();
        priceArr.push(priceString);
      }
      console.log(priceArr);
      let priceNumber = priceArr.map((ele) => ele.replace("$", ""));
      console.log(priceNumber);
      let invalidPriceArr = priceNumber.filter((ele) => ele <= 0);
      chai.expect(invalidPriceArr.length).to.equal(0);
    
      await browser.pause(5000);
      await browser.url("/tables");
      let rows = await $$("#table1 > tbody > tr");
      let cols = await $$("#table1 > thead > tr > th");
      let arr = [];
      for (let i = 0; i < rows.length; i++) {
        let person = {
          lastname: "",
          firstname: "",
          email: "",
          due: "",
          web: "",
        };
        for (let j = 0; j < cols.length; j++) {
          let text = await $(
            "#table1 > tbody > tr:nth-child(" +
              (i + 1) +
              ") > td:nth-child(" +
              (j + 1) +
              ")"
          ).getText();
          let firstName = await $(
            "#table1 > tbody > tr:nth-child(" + (i + 1) + ") > td:nth-child(1)"
          ).getText();
          if (firstName === "Bach") {
            if (j === 0) person.lastname = text;
            if (j === 1) person.firstname = text;
            if (j === 2) person.email = text;
            if (j === 3) person.due = text;
            if (j === 4) person.web = text;
            console.log(text);
          }
        }
        if (person.firstname) arr.push(person);
      }
      console.log(JSON.stringify(arr));
      
    });
    
    if (person.firstname) arr.push(person);
  }
  console.log(JSON.stringify(arr));
  let arramount=[]
for(let i=0;i<rows.length;i++){
  let amount = await $(
    "#table1 > tbody > tr:nth-child(" + (i + 1) + ") > td:nth-child(4)"
  ).getText();
  console.log(amount)
  arramount.push(amount)

}
console.log(JSON.stringify(arramount))

let priceArr1 = []

for(let i=0;i<rows.length;i++){
  let price = await $(
    "#table1 > tbody > tr:nth-child(" + (i + 1) + ") > td:nth-child(4)"
  ).getText();

  if(+(price.replace("$",""))>50){
    console.log(price+"PPPPPPPPPPPPPPPPPP")
    priceArr1.push(price)

  }


}
console.log(JSON.stringify(priceArr1))


});
