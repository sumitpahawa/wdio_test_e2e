import { Given,When, Then} from "@wdio/cucumber-framework";

Given(/^Amazon home page is open$/, async function () {
    await driver.url("https://www.amazon.com.au");
    await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.pause(15000);
  });
  When(/^Scroll to direction$/, async function () {
   driver.execute(()=>{
    window.scrollBy(0,window.innerHeight)

   })
   await browser.pause(5000);

   driver.execute(()=>{
    window.scrollBy(0,-window.innerHeight)

   })

   await browser.pause(5000);

   driver.execute(()=>{
    window.scrollTo(0,document.body.scrollHeight)

   })

   await browser.pause(5000);

   driver.execute(()=>{
    window.scrollTo(0,document.body.scrollTop)

   })
   await browser.pause(5000);

   driver.execute(()=>{
    window.scrollTo(0,-document.body.scrollLeft)

   })
   await browser.pause(25000);

  });