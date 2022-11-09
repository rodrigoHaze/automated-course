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
      constants.signUpModalIDs.signUpDisplayModal,
      30000
    );
    singUpModal.click();
    //Then
    const usernameField = await page.getElement(
      constants.signUpModalIDs.username
    );
    const usernameDisplayed = await usernameField.isDisplayed();
    const passwordField = await page.findByID(
      constants.signUpModalIDs.password
    );
    const passwordDisplayed = await passwordField.isDisplayed();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");
  });
  it("002 User is at Home page , click Sign Up and modal is displayed , user dont fill the fields and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpModalIDs.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(
      constants.signUpModalIDs.username
    );
    const usernameDisplayed = await usernameField.isDisplayed();

    const passwordField = await page.findByID(
      constants.signUpModalIDs.password
    );
    const passwordDisplayed = await passwordField.isDisplayed();

    const signUpButton = await page.findByCSS(
      constants.signUpModalIDs.signUpButtonCSS
    );

    signUpButton.click();

    await page.driver.wait(until.alertIsPresent());

    const alert = await page.driver.switchTo().alert();

    const alertText = await alert.getText();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");

    assert(
      alertText === constants.signUpModalIDs.errorAlertText,
      "Alert not displayed"
    );
  });
});
