const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000', // Matches your Docker app port
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
})