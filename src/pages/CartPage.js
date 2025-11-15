import { expect } from '@playwright/test';
export class CartPage {
  constructor(page) {
    this.page = page;
    this.table = page.locator('#tbodyid');
  }
  async expectVisible() {
    await expect(this.table).toBeVisible();
  }
  async expectItemPresent(title) {
    await expect(this.page.locator(`#tbodyid td:has-text("${title}")`)).toBeVisible();
  }
  async deleteItem(title) {
    const rowCell = this.page.locator(`#tbodyid td:has-text("${title}")`);
    await rowCell.locator('xpath=../td[last()]/a[text()="Delete"]').click();
    await expect(rowCell).toHaveCount(0);
  }
  async expectEmpty() {
    await expect(this.page.locator('#tbodyid td')).toHaveCount(0);
  }
}
