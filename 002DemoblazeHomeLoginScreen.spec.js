const assert = require("assert");
const Page = require("./page/mainPages/MainPage");
const loginSectionFunctions = require("./page/mainPages/Login");
const otherConstants = require("./page/constants/index");
const homePageConst = require("./page/constants/homepage");
const loginConstants = require("./page/constants/login");
describe("LOGIN SCREEN", function () {
  this.timeout(50000);
  beforeEach(async function () {
    page = new Page();
    await page.visitPage("http://www.demoblaze.com/");
  });
  afterEach(async function () {
    page.quit();
  });

  /* it("009 User is at Home page , clicks  Login  and modal is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
  });
  it("010 User is at Home page , click  Login  and modal is displayed and click Login at modal without credentials", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    await loginSectionFunctions.findAndClickLoginButtonAtModal(page);

    const alertText = await loginSectionFunctions.getBadLoginText(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
    assert(
      alertText === loginConstants.alertTextLogin,
      "Wrong alert or alert is not displayed"
    );
  });
  it("011 User is at Home page , click  Login  and modal is displayed and click Login at modal only with username, validation is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    fields.userField.sendKeys(otherConstants.existingUserName);

    await loginSectionFunctions.findAndClickLoginButtonAtModal(page);

    const alertText = await loginSectionFunctions.getBadLoginText(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
    assert(
      alertText === loginConstants.alertTextLogin,
      "Wrong alert or alert is not displayed"
    );
  });

  it("012 User is at Home page , click  Login  and modal is displayed and click Login  with pass, validation is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    fields.passField.sendKeys(loginConstants.passDontExist);

    await loginSectionFunctions.findAndClickLoginButtonAtModal(page);

    const alertText = await loginSectionFunctions.getBadLoginText(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
    assert(
      alertText === loginConstants.alertTextLogin,
      "Wrong alert or alert is not displayed"
    );
  });
  it("013 User is at Home page , click  Login  and modal is displayed and click Login  with user and pass, user dont exist", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    fields.userField.sendKeys(loginConstants.userDontExist);
    fields.passField.sendKeys(loginConstants.passDontExist);

    await loginSectionFunctions.findAndClickLoginButtonAtModal(page);

    const alertText = await loginSectionFunctions.getBadLoginText(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
    assert(
      alertText === loginConstants.alertLoginUserDontExist,
      "Wrong alert or alert is not displayed"
    );
  });*/
  it("014 User is at Home page , click  Login  and modal is displayed and click Login , login successfully", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    fields.userField.sendKeys(loginConstants.existingUserName);
    fields.passField.sendKeys(loginConstants.existingPassword);

    await loginSectionFunctions.findAndClickLoginButtonAtModal(page);

    await page.waitUntilIsPresentByID(homePageConst.prev, 30000);
    await page.waitUntilIsPresentByID(homePageConst.next, 30000);

    await page.waitUntilIsPresentByLinkText(homePageConst.contactModal, 30000);
    const contact = await page.findByLinkText(homePageConst.contactModal);
    contact.click();
    const welcome = await page.waitUntilIsPresentByID(
      loginConstants.afterLoginText,
      3000
    );
    console.log(welcome + "promise");
    console.log((await welcome.getText()) + "text ");
    const welcomeDisplayed = await welcome.isDisplayed();

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
    assert(welcomeDisplayed === true, "Login is not correct ");
  });
});
