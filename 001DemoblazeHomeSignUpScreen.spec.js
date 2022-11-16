const assert = require("assert");
const Page = require("./page/mainPages/MainPage");
const constants = require("./page/constants/index");
const SignUp = require("./page/mainPages/SignUp");

describe("SIGN UP SCREEN", function () {
  this.timeout(50000);
  beforeEach(async function () {
    page = new Page();
    signup = new SignUp(page);
    await page.visitPage("http://www.demoblaze.com/");
  });
  afterEach(async function () {
    page.quit();
  });

  it("001 User is at Home page , click Sign Up and modal is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );
  });
  it("002 User is at Home page , click Sign Up and modal is displayed , user dont fill the fields and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    await signup.findAncClickSignUpButtonAtModal();

    const alertText = await signup.getSignUpAlertText();

    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );

    assert(alertText === constants.errorAlertText, "Alert not displayed");
  });
  it("003 User is at Home page , click Sign Up and modal is displayed , user  fill the username field and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    fields.usernameField.sendKeys(constants.existingUserName);

    await signup.findAncClickSignUpButtonAtModal();

    const alertText = await signup.getSignUpAlertText();

    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );

    assert(alertText === constants.errorAlertText, "Alert not displayed");
  });
  it("004 User is at Home page , click Sign Up and modal is displayed , user  fill the password field and click sign up", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    fields.passwordField.sendKeys(constants.existingPassword);

    await signup.findAncClickSignUpButtonAtModal();

    const alertText = await signup.getSignUpAlertText();

    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );

    assert(alertText === constants.errorAlertText, "Alert not displayed");
  });
  it("005 User is at Home page , Sign Up  modal is displayed , user  fill the both fields and click sign up, user exist", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    fields.usernameField.sendKeys(constants.existingUserName);

    fields.passwordField.sendKeys(constants.existingPassword);

    await signup.findAncClickSignUpButtonAtModal();

    const alertText = await signup.getSignUpAlertText();

    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );

    assert(alertText === constants.errorAlertUserText, "Alert not displayed");
  });
  it("006 User is at Home page , Sign Up  modal is displayed , user  fill the both fields and click sign up, user don´t exist so its created", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    const randomN = page.randomNumber();

    fields.usernameField.sendKeys(constants.existingUserName + randomN);
    fields.passwordField.sendKeys(constants.existingPassword);

    await signup.findAncClickSignUpButtonAtModal();

    const alertText = await signup.getSignUpAlertText();

    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );

    assert(alertText === constants.successSingUp, "Alert not displayed");
  });
  it("007 User is at Home page , Sign Up  modal is displayed , user click close", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    const closeButtonDisplayed = await signup.getBooleanFromCloseButton();

    assert(closeButtonDisplayed === false, "Buton is still visible");
    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );
  });
  it("008 User is at Home page , Sign Up  modal is displayed , user click X close", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await signup.waitAndClikSignUpModalButonDisplay();
    //Then
    const fields = await signup.getBooleansFromUsernameAndPasswordField();

    const closeButtonDisplayed = await signup.getBooleanFromCloseButton();

    assert(closeButtonDisplayed === false, "Buton is still visible");
    assert(
      fields.usernameFieldDisplayed === true,
      "Username Field is not displayed"
    );
    assert(
      fields.passwordFieldDisplayed === true,
      "Password Field Field is not displayed"
    );
  });
});
