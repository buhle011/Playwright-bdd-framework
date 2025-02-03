const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {

    browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    page = await context.newPage();

});


  Given('User navigates to the Browserstack Homepage', async function () {
    await page.goto("https://www.browserstack.com/");
  });

  When('User clicks on Product Menu', async function () {
    await page.locator('button[aria-label="Products"]').waitFor();

    await page.locator('button[aria-label="Products"]').click();;
  });

  Then('It should show Web Testing Product', async function () {
    await page.locator('div[aria-label="Products"] button[title="Web Testing"]').waitFor();

    expect(await page.locator('div[aria-label="Products"] button[title="Web Testing"] span').isVisible()).toBeTruthy();
  });





  Given('User Navigates to Browserstack Homepage', async function () {
    await page.goto("https://www.browserstack.com/");
  });



  When('User clicks on Pricing Menu', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('It should Display correct Product lists in left Nav', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });