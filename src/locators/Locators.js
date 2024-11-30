const Locators = {
  CalendarPage:{
    calendarButton: '~Pick a Date',
    editPencilIcon: '//android.widget.Button[@content-desc="Select date Sat, Nov 30 Select year"]/android.widget.Button[1]',
    enterDateField: 'android.widget.EditText',
    selectedDateDisplay: '~30, Saturday, November 30, 2024, Today',
    calendarOKButton: '~OK',
    snackBar: '~Selected',
    cancelCalendarButton: '~Cancel'
  },
  CounterPage: {
    counterDisplay: '~Current Value:',
    incrementButton: '~+1',
    resetButton: '~Reset',
    busyIndicator: 'android.widget.ProgressBar' // NOTE: added a dummy locator for spinner/progress indicator
  }
}
module.exports = Locators;