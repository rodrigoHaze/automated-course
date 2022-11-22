const assert = require("assert");
const Page = require("./page/mainPages/MainPage");
const loginSectionFunctions = require("./page/mainPages/Login");
describe("LOGIN SCREEN", function () {
  this.timeout(50000);
  beforeEach(async function () {
    page = new Page();
    await page.visitPage("http://www.demoblaze.com/");
  });
  afterEach(async function () {
    page.quit();
  });

  it("009 User is at Home page , Login  Up and modal is displayed", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
  });
  it("010 User is at Home page , Login  Up and modal is displayed and click Login", async function () {
    //Given
    //this is already covered with { page.visitPage("http://www.demoblaze.com/") };

    //When
    await loginSectionFunctions.waitAndClickToLogin(page, 3000);
    //Then
    const fields = await loginSectionFunctions.getBooleanFromLoginFields(page);

    assert(fields.user === true, "Username Field is not displayed");
    assert(fields.pass === true, "Password Field Field is not displayed");
  });
});
