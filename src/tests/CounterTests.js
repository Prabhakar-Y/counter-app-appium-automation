const CounterPage = require('../pages/CounterPage');

describe('Counter Functional Tests', () => {
    it('should display 0 on app launch', async () => {
      try{
        const counterValue = await CounterPage.getCounterValue();
        expect(counterValue).toEqual('0');
      }catch(error){
        console.error(`An Error occured during getting counter value: ${error}`);
        throw error;
      }
    });

    it('should increment the counter by 1 when +1 button is clicked', async () => {
      try{
        await CounterPage.resetCounter();
        await CounterPage.incrementCounter();
        const counterValue = await CounterPage.getCounterValue();
        expect(counterValue).toEqual('1');
      }catch(error){
        console.error(`An Error occured during incrementing counter: ${error}`);
        throw error;
      }
    });

    it('should reset the counter to 0 when Reset button is clicked', async () => {
      try{
        await CounterPage.incrementCounter();
        await CounterPage.resetCounter();
        const counterValue = await CounterPage.getCounterValue();
        expect(counterValue).toEqual('0');
      }catch(error){
        console.error(`An Error occured during reset operation: ${error}`);
        throw error;
      }
    });
})

describe('Edge Case Tests', () => {
    it('should handle invalid actions gracefully when app is busy', async () => {
      try{
        await CounterPage.incrementCounter();
        expect(await CounterPage.isBusy()).toBe(true);

        // When app is busy, attempt to click the increment button
        await CounterPage.attemptIncrementWhileBusy();
        const counterValue = await CounterPage.getCounterValue();
        expect(counterValue).toEqual('1'); // Ensure the counter value should not change,when the app is in busy state
        expect(await CounterPage.isBusy()).toBe(false); 
      }catch(error){
        console.error(`An Error occured during when app in busy state: ${error}`);
        throw error;
      }
    });
})

