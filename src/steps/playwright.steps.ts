import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

//Common Step(s) to be Used
Given('Go to Betsson website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
})

//1st UI Test Steps
When('Search for the article', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator("[test-id='menu.product.blog']").click();
  await page.locator("input[name='s']").fill("erlebe");
  await page.locator("[type='submit'] .fa-search").click();
  await page.locator("article:nth-of-type(1) > .post-wrap").click();
});

Then('We find correct article', async function (this: ICustomWorld) {
  const page = this.page!;
  const head_1 = await page.locator(".entry-title");
  await expect(head_1).toContainText("Erlebe Jurassic Park: Gold und gewinne das bis zu 8.000-Fache deines Einsatzes");
});

// 2nd UI Test
When('Proceed to register screen', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator("[test-id='header-open-account-button']").click()
  await page.locator("[test-id='email']").fill("abc@testmail.com")
  await page.locator("[test-id='password']").fill("abcPassword-123")
  await page.locator("[test-id='first-name']").fill("abc")
  await page.locator("[test-id='last-name']").fill("xyz")
  await page.locator("[test-id='registration-street']").fill("Besiktas")
  await page.locator("[test-id='registration-city']").fill("Istanbul")
  await page.locator("[test-id='registration-zipcode']").fill("12345")

  
  await page.locator("[test-id='registration-country']").click()
  await page.locator("div[role='listbox'] > mat-option:nth-of-type(2)").click()

  await page.locator("[test-id='registration-currency']").click()
  await page.locator("div[role='listbox'] > mat-option:nth-of-type(6)").click()
  
  await page.locator("[test-id='registration-phone-extension']").click()
  await page.locator("div[role='listbox'] > mat-option:nth-of-type(7)").click()
  
  await page.locator("[test-id='registration-phonenumber']").fill("91234567")
  
  await page.locator("[test-id='date-day']").click()
  await page.locator("mat-option:nth-of-type(1) > .mat-option-text").click()

  await page.locator("[test-id='date-month']").click()
  await page.locator("mat-option:nth-of-type(1) > .mat-option-text").click()

  await page.locator("[test-id='date-year']").click()
  await page.locator("[id] [tabindex='0']:nth-of-type(15) .mat-option-text").click()  
  
  await page.locator("[test-id='male']").click()
  await page.locator("[for='mat-checkbox-1-input'] .mat-checkbox-inner-container").click()
  await page.locator("[test-id='registration-create-account-btn']").click()

});

Then('Receive error message for invalid email', async function (this: ICustomWorld) {
  const page = this.page!;
  const error_message = await page.locator("[test-id='generic-error']");
  await expect(error_message).toContainText("Die angegebene E-Mail Adresse ist ungültig.");
});

//3rd UI Test Steps
When('Proceeded to login with invalid email input', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator("[test-id='header-login-button']").click();
  await page.locator("[test-id='login-username']").fill("12345");
  await page.locator("[test-id='login-password']").fill("someRandomPassword");
  await page.locator("[test-id='login-submit']").click();
});

Then('Expect to get fail message', async function (this: ICustomWorld) {
  const page = this.page!;
  const msg = await page.locator("[test-id='login-e-sessions-login-invalidcredentials']");
  await expect(msg).toContainText("Der angegebene Benutzername oder das Passwort sind ungültig.");
});