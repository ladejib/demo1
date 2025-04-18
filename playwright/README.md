npm init -y 
npm ini playwright@latest
npx playwright codegen
npx playwright test
npx playwright show report
npx playwright test --headed --reporter=html
###
update config.js to always show reporter

// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
  },
  reporter: 'html',
});
