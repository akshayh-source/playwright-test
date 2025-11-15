import { expect } from '@playwright/test';
export class OrderPage {
  constructor(page) {
    this.page = page;
    this.placeOrder = page.getByRole('button', { name: 'Place Order' });
    this.name = page.locator('#name');
    this.country = page.locator('#country');
    this.city = page.locator('#city');
    this.card = page.locator('#card');
    this.month = page.locator('#month');
    this.year = page.locator('#year');
    this.purchase = page.getByRole('button', { name: 'Purchase' });
    this.confirm = page.locator('.sweet-alert.showSweetAlert.visible');
    this.ok = this.confirm.locator('.confirm.btn.btn-primary');
  }
  async checkout(form) {
    await this.placeOrder.click();
    await this.name.fill(form.name);
    await this.country.fill(form.country);
    await this.city.fill(form.city);
    await this.card.fill(form.card);
    await this.month.fill(form.month);
    await this.year.fill(form.year);
    await this.purchase.click();
  }
  async expectSuccess(expectedName) {
    await expect(this.confirm).toBeVisible();
    await expect(this.confirm.locator('h2')).toHaveText('Thank you for your purchase!');
    if (expectedName) {
      await expect(this.confirm.locator('p')).toContainText(expectedName);
    }
    await this.ok.click();
  }
}
