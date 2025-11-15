import { expect } from '@playwright/test';
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.openLogin = page.getByRole('link', { name: 'Log in' });
    this.username = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginSubmit = page.locator('button[onclick="logIn()"]');
    this.loggedUser = page.locator('#nameofuser');
    this.logout = page.locator('#logout2');
  }
  async login(username, password) {
    await this.openLogin.click();
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginSubmit.click();
  }
  async expectLoginSuccess(textContains) {
    await expect(this.loggedUser).toContainText(textContains);
  }
  async expectLoginAlert(message) {
    const dialog = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.loginSubmit.click()
    ]).then(v => v[0]);
    expect(dialog.message()).toBe(message);
    await dialog.accept();
  }
  async doLogout() {
    await this.logout.click();
    await expect(this.openLogin).toBeVisible();
  }
}
