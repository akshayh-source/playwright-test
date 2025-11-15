import { test } from './fixtures.js';


test('Remove item from cart and validate cart update', async ({ page, home, product, cart }) => {
  await home.open();
  const title = await home.openProductByIndex(0);
  await product.addItemToCart();

  await home.goCart();
  await cart.expectVisible();
  await cart.expectItemPresent(title);

  await cart.deleteItem(title);
  await cart.expectEmpty();

  await page.screenshot({ path: `screenshots/remove-item-${Date.now()}.png` });
});
