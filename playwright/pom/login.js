
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameTexbox = page.getByRole("textbox", { name: "Username" });
    this.passwordTextbox = page.getByRole("textbox", { name: "Password" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
  }
  async goToUrl(url) {
    await this.page.goto(url);
  }
  async login(username, password) {
    await this.usernameTexbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.signInButton.click();
  }
};
