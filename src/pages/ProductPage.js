export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCart = page.getByRole('link', { name: 'Add to cart' });
    this.detailTitle = page.locator('.name');
    this.price = page.locator('.price-container');
    this.moreInfo = page.locator('#more-information');
  }
  async addItemToCart() {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.addToCart.click();
    const dialog = await dialogPromise;
    await dialog.accept();
  }
}
