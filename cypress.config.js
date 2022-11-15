const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petgram-front-joel-suarez-joelsuarez1101.vercel.app/",
    chromeWebSecurity: false,
    viewportWith: 500,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})