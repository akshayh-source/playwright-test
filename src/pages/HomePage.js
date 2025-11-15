export class HomePage {
  constructor(page) {
    this.page = page;
    this.cards = page.locator('.col-lg-4.col-md-6.mb-4');
    this.cartLink = page.locator('#cartur');
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.phones = page.getByRole('link', { name: 'Phones' });
    this.laptops = page.getByRole('link', { name: 'Laptops' });
    this.monitors = page.getByRole('link', { name: 'Monitors' });
    this.header = page.locator('#nava');
    this.navbar = page.locator('#navbarExample');
    this.loginBtn = page.locator('#login2');
    this.signupBtn = page.locator('#signin2');
    this.categories = page.locator('#cat');
    this.footer = page.locator('#fotcont');
    this.contentInfo = page.getByRole('contentinfo');
  }
  async open(path = '/') {
    await this.page.goto(path);
    await this.page.waitForSelector('.col-lg-4.col-md-6.mb-4');
  }
  async openProductByIndex(i) {
    const card = this.cards.nth(i);
    const title = await card.locator('h4.card-title a').innerText();
    await card.locator('h4.card-title a').click();
    return title;
  }
  async goCart() {
    await this.cartLink.click();
    await this.page.waitForURL('**/cart.html');
  }
  async goHome() {
    await this.homeLink.click();
    await this.page.waitForSelector('.col-lg-4.col-md-6.mb-4');
  }
  async selectPhones() { await this.phones.click(); }
  async selectLaptops() { await this.laptops.click(); }
  async selectMonitors() { await this.monitors.click(); }
}
