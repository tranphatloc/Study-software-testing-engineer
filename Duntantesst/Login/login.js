import { Builder, Browser, WebDriver, By, until } from "selenium-webdriver";
import { assert, expect } from "chai";
import "chromedriver";
/**
 * @param {string} 'chrome'
 * @returns {WebDriver}
 */
describe("Duntan login", function () {
  /** @type {WebDriver}  */
  let driver;
  // function delay(time) {
  //   return new Promise((resolve) => setTimeout(resolve, time));
  // }
  // afterEach(async function () {
  //   try {
  //     await delay(5000);
  //   } catch (error) {
  //     console.error("Error in afterEach hook:", error);
  //   }
  // });
  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    this.timeout(5000);
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

  it("should enter a valid email", async () => {
    await driver.get("https://duntanstudio.com/en/login");
    let emailInput = await driver.findElement(By.id("destination"));
    await emailInput.sendKeys("tranphatloc2206@gmail.com");
    await driver
      .findElement(By.xpath("//button[text()='Đăng nhập' or text()='Login']"))
      .click();
    let notification = await driver
      .wait(
        until.elementLocated(
          By.xpath(
            "//p[contains(@class, 'text-sm') and contains(@class, 'text-green-700') and contains(@class, 'leading-tight')]"
          )
        ),
        10000
      )
      .getText();
    assert(
      notification ===
        "Một liên kết đã được gửi đến email của bạn, vui lòng kiểm tra email của bạn" ||
        notification ===
          "A link has been sent to your email address. Please check your email to login"
    );
    // assert.strictEqual(
    //   notification,
    //   "Một liên kết đã được gửi đến email của bạn, vui lòng kiểm tra email của bạn"
    // );
    // assert.strictEqual(
    //   notification,
    //   "A link has been sent to your email address. Please check your email to login"
    // );
  });
  it("should enter a malformed Email", async () => {
    await driver.get("https://duntanstudio.com/vi/login");
    let emailInput = await driver.findElement(By.id("destination"));
    await emailInput.sendKeys("tranphatloc2206");
    await driver
      .findElement(By.xpath("//button[text()='Đăng nhập' or text()='Login']"))
      .click();
  });
  it("should click on the login button", async () => {
    await driver.get("https://duntanstudio.com/vi/login");
    await driver
      .findElement(By.xpath("//button[text()='Đăng nhập' or text()='Login']"))
      .click();
  });
});
