const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qdxer4',
  CYPRESS_RECORD_KEY:'6aa84b42-275a-4325-baab-f452000d543b',
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,	
  viewportWidth: 1280,
  viewportHeight: 720,

  "reporter": "junit",
  "reporterOptions": {
  "host": "https://vaimobe.testrail.io ",
  "username": "nataliia.ostberg@vaimo.com ",
  "password": "helloThereTestr13",
  "project": "Nordics BjornAxen",
  "suiteId": 3848,
  },

  e2e: {
    baseUrl: "https://www.bjornaxen.se",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
