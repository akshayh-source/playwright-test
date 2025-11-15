import { test } from './fixtures.js';


test('Add multiple items to cart and verify', async ({ page, home, product, cart }) => {
  await home.open();

  const titles = [];
  for (let i = 0; i < 2; i++) {
    const title = await home.openProductByIndex(i);
    titles.push(title);
    await product.addItemToCart();
    await home.goHome();
  }

  await home.goCart();
  await cart.expectVisible();
  for (const t of titles) {
    await cart.expectItemPresent(t);
  }

  await page.screenshot({ path: `screenshots/multiple-cart-${Date.now()}.png` });
});
