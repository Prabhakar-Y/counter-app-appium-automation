# **Counter App Test Automation**

This project automates the testing of a Counter app using the **Page Object Model (POM)** design pattern.
It includes functional and edge case test scenarios to validate the app's behavior.

---

## **Table of Contents**
- [Project Overview](#project-overview)
- [Test Scenarios](#test-scenarios)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)

---

## **Project Overview**

This automation suite is designed to validate the following:
- **Functional behavior** of the counter app, including increment and reset actions.
- **Handling of edge cases**, such as app busy states or invalid actions.

### **Technologies Used**
- **Appium**: Mobile test automation framework.
  - version: 2.12.2
- **Node.js**: Runtime environment.
  - version: v20.9.0
- **Mocha/Chai**: Test execution and assertion libraries.
    -version: 10.8.2 & 5.1.2
- **Page Object Model (POM)**: Design pattern for maintainable and reusable test code.

---

## **Test Scenarios**

### **Functional Test Cases**
1. Verify that the counter displays `0` on app launch.
2. Verify that clicking the `+1` button increments the counter by 1.
3. Verify that clicking the `Reset` button resets the counter to `0`.

### **Edge Case Tests**
1. Verify the app's behavior when no date is selected from the calendar (Example, pressing cancel).
2. Verify that the app handles invalid actions gracefully (Ex. tapping buttons when the app is busy).

---

# Project Directory Structure

```plaintext
project-root/
│
├── build/                      
│   └── .apk                    # APK file for the Android app under test
│
├── src/
│   ├── locators/               # Locators file
│   │   └── Locators.js  
│   │
│   ├── pages/                  # Page Object Model (POM) files
│   │   ├── CalendarPage.js      
│   │   └── CounterPage.js       
│   │
│   ├── tests/                  # Test files
│   │   ├── CalendarTests.js  
│   │   └── CounterTests.js   
│   │
│   └── utils/                  # Utility functions and base classes
│       └── BasePage.js         
│
├── package.json                # Project dependencies, scripts, and configurations
├── README.md                   
├── .gitignore                  
└── wdio.android.conf           # WebDriverIO configuration for Android (desired capabilities)



## **Setup Instructions**

### Prerequisites
1. **Node.js** installed on your system.
2. **Appium server** set up and running.
3. An **Android emulator** up and running 

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Prabhakar-Y/counter-app-tests.git
   ```

2. Navigate to the project directory:
  ```
  cd counter-app-tests
  ```
3. Install dependencies:
  ```
  npm install
  ```
## Running the Tests
  The test scripts are configured in the `package.json` file. Using the following commands to execute tests.
  

```bash
npm test

npm run test:functional

npm run test:edge
```