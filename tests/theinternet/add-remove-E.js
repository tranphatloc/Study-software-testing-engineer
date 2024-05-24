import { Builder, Browser, By } from "selenium-webdriver";
import "chromedriver";
import assert from "assert";

(async function addRemoveE() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");
    let title = await driver.getTitle();
    assert.equal("The Internet", title);
    await driver.manage().setTimeouts({ implicit: 10000 });
    let addButton = await driver.findElement(
      By.xpath("//button[@onclick='addElement()']")
    );
    const actions = driver.actions({ async: true });
    await actions.doubleClick(addButton).perform();
  } catch (e) {
    console.error("error:", e);
  } finally {
    setTimeout(async () => {
      await driver.quit();
    }, 10000);
  }
})();
