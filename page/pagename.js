const { By, until, Builder, Key } = require("selenium-webdriver");

const webdriver = require("selenium-webdriver");

const Page = function () {
  this.driver = new webdriver.Builder().forBrowser("chrome").build();

  //Basic functions
  //BY ID
  this.waitUntilIsPresentByID = async function (elementID, timeout) {
    await this.driver.wait(until.elementLocated(By.id(elementID)), timeout);
  };
  this.findByID = async function (elementID) {
    await this.driver.findElement(By.id(elementID));
  };
  //BY Name
  this.waitUntilIsPresentByName = async function (elementName, timeout) {
    await this.driver.wait(until.elementLocated(By.name(elementName)), timeout);
  };
  this.findByName = async function (elementName) {
    await this.driver.findElement(By.name(elementName));
  };
  //BY ClassName
  this.waitUntilIsPresentByClassName = async function (
    elementClassName,
    timeout
  ) {
    await this.driver.wait(
      until.elementLocated(By.className(elementName)),
      timeout
    );
  };
  this.findByClassName = async function (elementClassName) {
    await this.driver.findElement(By.className(elementName));
  };
};
module.exports = Page;
