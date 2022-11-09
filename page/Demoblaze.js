const { By, until, Builder, Key } = require("selenium-webdriver");

const webdriver = require("selenium-webdriver");

const Page = function () {
  this.driver = new webdriver.Builder().forBrowser("chrome").build();

  //Basic functions
  //Visit
  this.visitPage = function (url) {
    return this.driver.get(url);
  };
  //Quit
  this.quit = function () {
    this.driver.quit();
  };
  //BY ID
  this.waitUntilIsPresentByID = async function (elementID, timeout) {
    return await this.driver.wait(
      until.elementLocated(By.id(elementID)),
      timeout
    );
  };
  this.findByID = async function (elementID) {
    return await this.driver.findElement(By.id(elementID));
  };
  //BY Name
  this.waitUntilIsPresentByName = async function (elementName, timeout) {
    return await this.driver.wait(
      until.elementLocated(By.name(elementName)),
      timeout
    );
  };
  this.findByName = async function (elementName) {
    return await this.driver.findElement(By.name(elementName));
  };
  //BY ClassName
  this.waitUntilIsPresentByClassName = async function (
    elementClassName,
    timeout
  ) {
    return await this.driver.wait(
      until.elementLocated(By.className(elementClassName)),
      timeout
    );
  };
  this.findByClassName = async function (elementClassName) {
    return await this.driver.findElement(By.className(elementClassName));
  };
};
module.exports = Page;
