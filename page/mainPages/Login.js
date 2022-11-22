const loginConstants = require("./page/constants/login");

const waitAndClickToLogin = async function (page, timeout) {
  const loginModal = await page.waitUntilIsPresentByID(
    loginConstants.loginModal,
    30000
  );
  return loginModal.click();
};

const getBooleanFromLoginFields = async function (page) {
  const usernameField = await page.getElement(loginConstants.loginUsername);
  const usernameDisplayed = await usernameField.isDisplayed();
  const passwordField = await page.findByID(loginConstants.loginPassword);
  const passwordDisplayed = await passwordField.isDisplayed();

  return {
    user: usernameDisplayed,
    pass: passwordDisplayed,
  };
};

module.exports = {
  waitAndClickToLogin,
  getBooleanFromLoginFields,
};
