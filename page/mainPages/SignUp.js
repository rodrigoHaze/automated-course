const constants = require("../constants/index");
const SignUp = function (page) {
  this.waitAndClikSignUpModalButonDisplay = async function () {
    const singUpModal = await page.waitUntilIsPresentByID(
      constants.signUpDisplayModal,
      30000
    );
    return singUpModal.click();
  };
  this.getBooleansFromUsernameAndPasswordField = async function () {
    const usernameField = await page.getElement(constants.username);
    const usernameDisplayed = await usernameField.isDisplayed();
    const passwordField = await page.findByID(constants.password);
    const passwordDisplayed = await passwordField.isDisplayed();

    return {
      usernameField: usernameField,
      passwordField: passwordField,
      usernameFieldDisplayed: usernameDisplayed,
      passwordFieldDisplayed: passwordDisplayed,
    };
  };
  this.findAncClickSignUpButtonAtModal = async function () {
    const signUpButton = await page.findByCSS(constants.signUpButtonCSS);

    return signUpButton.click();
  };

  this.getSignUpAlertText = async function () {
    const text = await page.getAlertText();
    return text;
  };

  this.getBooleanFromCloseButton = async function () {
    const closeButton = await page.findByCSS(constants.closeButton);

    closeButton.click();

    const closeButtonDisplayed = await closeButton.isDisplayed();

    return closeButtonDisplayed;
  };
};

module.exports = SignUp;
