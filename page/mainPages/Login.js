const loginConstants = require("../constants/login");

const waitAndClickToLogin = async function (page) {
  const loginModal = await page.waitUntilIsPresentByID(
    loginConstants.loginModal,
    30000
  );
  return loginModal.click();
};
const waitnavBar = async function (page) {
  const loginModal = await page.waitUntilIsPresentByID(
    loginConstants.navBar,
    30000
  );
};

const getBooleanFromLoginFields = async function (page) {
  const usernameField = await page.getElement(loginConstants.loginUsername);
  const usernameDisplayed = await usernameField.isDisplayed();
  const passwordField = await page.findByID(loginConstants.loginPassword);
  const passwordDisplayed = await passwordField.isDisplayed();

  return {
    user: usernameDisplayed,
    pass: passwordDisplayed,
    userField: usernameField,
    passField: passwordField,
  };
};

const findAndClickLoginButtonAtModal = async function (page) {
  const loginButton = await page.findByCSS(loginConstants.loginButtonCSS);

  return loginButton.click();
};
const getBadLoginText = async function (page) {
  const text = await page.getAlertText();
  return text;
};

module.exports = {
  waitAndClickToLogin,
  getBooleanFromLoginFields,
  findAndClickLoginButtonAtModal,
  getBadLoginText,
  waitnavBar,
};
