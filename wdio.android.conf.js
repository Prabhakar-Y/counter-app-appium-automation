exports.config = {
  runner: 'local',
  specs: ['./test/specs/*.js'], 
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel 8 API 33', 
      'appium:platformVersion': '13',         
      'appium:automationName': 'UiAutomator2', 
      'appium:appPackage': 'com.example.testapp',
      'appium:appActivity': 'com.example.testapp.MainActivity', 
      //'appium:app': '/Users/prabhakary/Downloads/Prabhakar_Automation_Task/app-release.apk',
      'appium:app':'build/app-release.apk',
      'appium:noReset': true, 
    },
  ],
  reporters: [
    'dot', 
    ['mochawesome', {
      outputDir: './mochawesome-report',
      outputFileFormat: function(opts) {
        return `results-${opts.cid}.json`; 
      },
      combine: true, // Merge multiple JSON files into a single report
      quiet: true, 
    }]
  ],
  services: ['appium'],  
  framework: 'mocha',    
  mochaOpts: {
    timeout: 60000,  
  },
};
