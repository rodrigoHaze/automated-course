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
  it("002 User is at Home page , click Sign Up and modal is displayed , user dont fill the fields and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();

    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    const signUpButton = await page.findByCSS(constants.signUpButtonCSS);

    signUpButton.click();

    const alertText = await page.getAlertText();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");

    assert(alertText === constants.errorAlertText, "Alert not displayed");
  });
  it("003 User is at Home page , click Sign Up and modal is displayed , user  fill the username field and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();

    usernameField.sendKeys(constants.existingUserName);

    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    const signUpButton = await page.findByCSS(constants.signUpButtonCSS);

    signUpButton.click();

    const alertText = await page.getAlertText();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");

    assert(alertText === constants.errorAlertText, "Alert not displayed");
  });
  it("004 User is at Home page , click Sign Up and modal is displayed , user  fill the password field and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();

    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    passwordField.sendKeys(constants.existingPassword);

    const signUpButton = await page.findByCSS(constants.signUpButtonCSS);

    signUpButton.click();

    const alertText = await page.getAlertText();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");

    assert(alertText === constants.errorAlertText, "Alert not displayed");
  });
  it("005 User is at Home page , Sign Up  modal is displayed , user  fill the both fields and click sign up, user exist", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();

    usernameField.sendKeys(constants.existingUserName);

    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    passwordField.sendKeys(constants.existingPassword);

    const signUpButton = await page.findByCSS(constants.signUpButtonCSS);

    signUpButton.click();

    const alertText = await page.getAlertText();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");

    assert(alertText === constants.errorAlertUserText, "Alert not displayed");
  });
  it("006 User is at Home page , Sign Up  modal is displayed , user  fill the both fields and click sign up, user don´t exist so its created", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();

    const randomN = page.randomNumber();

    usernameField.sendKeys(constants.existingUserName + randomN);

    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    passwordField.sendKeys(constants.existingPassword);

    const signUpButton = await page.findByCSS(constants.signUpButtonCSS);

    signUpButton.click();

    const alertText = await page.getAlertText();

    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");

    assert(alertText === constants.successSingUp, "Alert not displayed");
  });
  it("007 User is at Home page , Sign Up  modal is displayed , user click close", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();
    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    const closeButton = await page.findByCSS(constants.closeButton);

    closeButton.click();

    const closeButtonDisplayed = await closeButton.isDisplayed();

    assert(closeButtonDisplayed === false, "Buton is still visible");
    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");
  });
  it("008 User is at Home page , Sign Up  modal is displayed , user click X close", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    const singUpModalDisplayButton = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    singUpModalDisplayButton.click();
    //Then
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();
    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    const closeButton = await page.findByClassName(constants.closeXbutton);

    closeButton.click();

    const closeButtonDisplayed = await closeButton.isDisplayed();

    assert(closeButtonDisplayed === false, "Buton is still visible");
    assert(usernameDisplayed === true, "Username Field is not displayed");
    assert(passwordDisplayed === true, "Password Field Field is not displayed");
  });
});
