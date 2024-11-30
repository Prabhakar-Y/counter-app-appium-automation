const BasePage = require('../utils/BasePage');
const Locators = require('../locators/locators');

class CounterPage extends BasePage {
    get counterDisplay() {
        return $(Locators.CounterPage.counterDisplay); 
    }

    get incrementButton() {
        return $(Locators.CounterPage.incrementButton); 
    }

    get resetButton() {
        return $(Locators.CounterPage.resetButton); 
    }

    get busyIndicator() { 
      return $(Locators.CounterPage.busyIndicator);  
    }

    async getCounterValue() {
        return await this.getText(this.counterDisplay);
    }

    async incrementCounter() {
        await this.click(this.incrementButton);
    }

    async resetCounter() {
        await this.click(this.resetButton);
    }

    async isBusy() {
      return await this.isDisplayed(this.busyIndicator);
    }

    async attemptIncrementActionWhileBusy() {
      await this.click(this.incrementButton);
    }
}

module.exports = new CounterPage();
