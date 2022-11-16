const assert = require("assert");
const Page = require("./page/mainPages/Demoblaze");
const constants = require("./page/constants/index");
const { until } = require("selenium-webdriver");

describe("SIGN UP SCREEN", function () {
  this.timeout(50000);
  beforeEach(async function () {
    page = new Page();
    await page.visitPage("http://www.demoblaze.com/");
  });
  afterEach(async function () {
    page.quit();
  });

  it("001 User is at Home page , click Sign Up and modal is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModal = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModal.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();
    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");
  });
});
