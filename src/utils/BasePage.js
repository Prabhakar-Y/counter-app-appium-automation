class BasePage {
  async click(element) {
      await element.click();
  }

  async setValue(element, value) {
      await element.setValue(value);
  }

  async getText(element) {
      return await element.getText();
  }

  async isDisplayed(element) {
      return await element.isDisplayed();
  }
}

module.exports = BasePage;
