const BasePage = require('../utils/BasePage');
const Locators = require('../locators/locators');

class CalendarPage extends BasePage {
    get calendarButton() {
        return $(Locators.CalendarPage.calendarButton); 
    }

    get editPencilIcon(){
      return $(Locators.CalendarPage.editPencilIcon);
    }

    get enterDateField(){
      return $(Locators.CalendarPage.enterDateField);
    }

    get selectedDateDisplay() {
        return $(Locators.CalendarPage.selectedDateDisplay); 
    }

    get calendarOKButton() {
        return $(Locators.CalendarPage.calendarOKButton);
    }

    get snackBar() {
        return $(Locators.CalendarPage.snackBar);
    }

    get cancelCalendarButton() {
        return $(Locators.CalendarPage.cancelCalendarButton);
    }

    async openCalendar() {
        await this.click(this.calendarButton);   
    }

    async selectDate(date) {
        const dateSelector = `~date-${date}`; 
        await this.click($(dateSelector));
    }

    async getSelectedDate() {
        return await this.getText(this.selectedDateDisplay);
    }

    async clickCalendarOKButton() {
        return await this.click(this.calendarOKButton);
    }

    async getSnackBarMessage() {
        return await this.getText(this.snackBar);
    }

    async cancelCalendar() {
      return await this.click(this.cancelCalendarButton);
    }
}

module.exports = new CalendarPage();
