import { expect } from 'chai';
const { driver } = require("webdriverio");
//const driver = require('../wdio.conf');

describe('Enhanced Counter App Tests', function () {
  this.timeout(30000);

 xit('should display 0 on app launch', async function () {
    const currentValueLabel = await $('//android.view.View[@content-desc="Current Value:"]');
    const text = await currentValueLabel.getText();
    console.log("Result",text);
  });

  xit('should increment the counter by 1 when +1 button is pressed', async function () {
    
    const incrementButton = await $('~+1');
    await incrementButton.click();

    const currentValueLabel = await $('~Current Value:');
    const element = await driver.$('android=uiautomator: new UiSelector().description("1")');

    //const dynamicValue = await $('//android.view.View[@content-desc="1"])');
    //const dynamicValue = await currentValueLabel.$('//following-sibling::android.view.View[@content-desc]');
    // const dynamicValue = await $(`android.view.View[@index="2"]`); 
    // await dynamicValue.waitForDisplayed({ timeout: 5000 });
    // const updatedValue = await dynamicValue.getText();
    // console.log(`Updated value: ${updatedValue}`);


  })

  xit('should clicking the Reset button resets the counter to 0', async function () {
    const incrementButton = await $('~+1');
    await incrementButton.click();
    
    const resetButton = await $('~Reset');
    await resetButton.click();
  }) 

  xit('should select a date from the calendar & verify the selected in a SnackBar', async function () {
    
    const pickDate = await $('~Pick a Date');
    await pickDate.click();

    const dynamicDate = '30, Saturday, November 30, 2024, Today'; 
    const dateButton = await $(`//android.widget.Button[@content-desc="${dynamicDate}"]`);
    await dateButton.waitForDisplayed({ timeout: 5000 });
    await dateButton.click();

    const calendarOKbutton = await $('~OK');
    await calendarOKbutton.click();
   

    const snackbar = await driver.$('(//android.view.View[@content-desc="Selected"])[2]');
    await snackbar.waitForDisplayed({ timeout: 5000 });
    
    const snackbarText = await snackbar.getText();
    console.log('Snackbar Text:', snackbarText);
    
    if (snackbarText === 'Selected') {
      console.log('Snackbar displayed with the correct message.');
      } else {
      console.log('Snackbar message is incorrect.');
    }


  })



  
});
