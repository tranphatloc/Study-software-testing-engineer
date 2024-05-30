import { Builder, Browser, WebDriver, By } from "selenium-webdriver";
import { expect } from "chai";
import "chromedriver";
/**
 * @param {string} 'chrome'
 * @returns {WebDriver}
 */
describe("Duntan login", function () {
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
    await driver.get("https://duntanstudio.com/vi/login");
    const title = await driver.getTitle();
    expect(title).to.equal("Login | Duntan Studio");
  });

  it("should enter text", async () => {
    let textInput = await driver.findElement(By.id("destination"));
    await textInput.sendKeys("Tran phat Loc");
  });
  it("should enter password", async () => {
    let submitButton = await driver.findElement(
      By.xpath("//button[text()='Đăng nhập']")
    );
    await submitButton.click();
  });
});
