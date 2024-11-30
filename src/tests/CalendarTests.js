const CalendarPage = require('../pages/CalendarPage');

describe('Calendar Functional Tests', () => {
    it('should update the selected date and display it in the SnackBar', async () => {
      try{
        await CalendarPage.openCalendar();
        await CalendarPage.editPencilIcon().click();
        await CalendarPage.enterDateField().clear();
        await CalendarPage.enterDateField().setValue('2024-12-01');
        await CalendarPage.clickCalendarOKButton();
        const snackBarMessage = await CalendarPage.getSnackBarMessage();
        expect(snackBarMessage).toContain('Selected');
      }catch(error){
        console.error(`An Error occured during selecting date: ${error}`);
        throw error;
      }
    });

    it('should handle cancel action gracefully when no date is selected', async () => {
      try{
        await CalendarPage.openCalendar();
        await CalendarPage.cancelCalendar();  
      }catch(error){
        console.error(`An Error occured during canceling date: ${error}`);
        throw error;
      }
    });
});
