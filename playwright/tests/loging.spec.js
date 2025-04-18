import { test, expect } from "../fixtures/base";

test("user login", async ({ loginPage }) => {
  await loginPage.goToUrl("http://localhost:5000/")
  await loginPage.login("admin","admin123");

  await expect(loginPage.page.getByText('Welcome')).toBeVisible();
});
