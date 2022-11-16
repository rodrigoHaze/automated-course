const assert = require("assert");
const Page = require("./page/mainPages/MainPage");
const constants = require("./page/constants/index");
const { until } = require("selenium-webdriver");

describe("LOGIN SCREEN", function () {
  this.timeout(50000);
  beforeEach(async function () {
    page = new Page();
    await page.visitPage("http://www.demoblaze.com/");
  });
  afterEach(async function () {
    page.quit();
  });

  it("001 User is at Home page , Login  Up and modal is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const loginModal = await page.waitUntilIsPresentByID(
      constants.loginModal,
      30000
    );
    loginModal.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();
    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");
  });
});
