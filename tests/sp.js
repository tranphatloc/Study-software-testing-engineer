// const { By, Builder, Browser, Key, until } = require("selenium-webdriver");
// require("chromedriver");

// (async function spTest() {
//   let driver;
//   try {
//     driver = await new Builder().forBrowser(Browser.CHROME).build();
//     console.log(driver);
//     await driver.get("http://www.google.com");
//     let searchBox = await driver.findElement(By.name("q"));
//     await searchBox.sendKeys("Shoppee", Key.RETURN);

//     await driver.wait(until.titleContains("Shoppe"), 10000);

//     let firstResult = await driver.findElement(By.css(".g a"));
//     await firstResult.click();
//   } finally {
//     await driver.quit();
//   }
// });
const { By, Builder, Browser, Key, until } = require("selenium-webdriver");
require("chromedriver");

(async function spTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("http://www.google.com");
    let searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("shopee", Key.RETURN);

    // await driver.wait(until.titleContains("shopee.vn"), 10000);

    let firstResult = await driver.findElement(By.css(".g a")); // Sửa selector
    await firstResult.click();
  } finally {
    await driver.quit(); // Thêm từ khóa await
  }
})();
