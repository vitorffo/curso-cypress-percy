const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/"
  },
});
