import { Builder, Browser, WebDriver, By } from "selenium-webdriver";
import { expect } from "chai";
import "chromedriver";
/**
 * @param {string} 'chrome'
 * @returns {WebDriver}
 */
describe("selenium webform", function () {
  /** @type {WebDriver}  */
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });
  after(async () => {
    setTimeout(async () => {
      await driver.quit();
    }, 10000);
  });
  it("should have the correct title", async () => {
    await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
    const title = await driver.getTitle();
    expect(title).to.equal("Web form");
  });

  it("should enter text", async () => {
    let textInput = await driver.findElement(By.id("my-text-id"));
    await textInput.sendKeys("Tran phat Loc");
  });
  it("should enter password", async () => {
    let password = await driver.findElement(By.name("my-password"));
    await password.sendKeys("Tpl.22062001");
  });
});
