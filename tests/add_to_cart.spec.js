import { test } from './fixtures.js';


test('Add item to cart from product details and verify in cart', async ({ page, home, product, cart }) => {
  await home.open();
  const title = await home.openProductByIndex(0);
  await product.addItemToCart();

  await home.goCart();
  await cart.expectVisible();
  await cart.expectItemPresent(title);

  await page.screenshot({ path: `screenshots/cart-validation-${Date.now()}.png` });
});
