const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout : 500000,
  defaultCommandTimeout : 500000,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
