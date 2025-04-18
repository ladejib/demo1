import { test as base } from '@playwright/test';
import { LoginPage } from '../pom/login';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});

export { expect } from '@playwright/test';
