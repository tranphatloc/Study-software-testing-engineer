const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  console.log(driver);
  try {
    // Mở trang web Google
    await driver.get("http://www.google.com");

    // Tìm kiếm từ khóa "Selenium"
    let searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("Selenium", Key.RETURN);

    // Đợi cho đến khi tiêu đề trang có từ "Selenium"
    await driver.wait(until.titleContains("Selenium"), 10000);

    // Lấy tiêu đề trang và in ra console
    console.log(await driver.getTitle());
  } finally {
    // Đóng trình duyệt
    await driver.quit();
  }
})();
