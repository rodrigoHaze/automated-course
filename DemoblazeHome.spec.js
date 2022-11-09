const { until, By, Key } = require("selenium-webdriver");
const Page = require("./page/Demoblaze");

describe("DEMOBLAZE TESTING HOME PAGE", function () {
  this.timeout(50000);
  beforeEach(async function () {
    page = new Page();
  });
  afterEach(async function () {
    page.quit();
  });

  it("Test 001", async function () {
    await page.visitPage("http://www.demoblaze.com/");
  });
});
