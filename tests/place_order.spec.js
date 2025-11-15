import { test } from './fixtures.js';
import testData from '../src/data/testData.js';

test('Successful place order', async ({ page, home, product, cart, order, login }) => {
  await home.open();
  await login.login(testData.validUser.username, testData.validUser.password);

  // Navigate back to home after login and add first product to cart
  await home.open();
  const title = await home.openProductByIndex(0);
  await product.addItemToCart();

  await home.goCart();
  await cart.expectVisible();
  await cart.expectItemPresent(title);

  await order.checkout(testData.buyer);
  await order.expectSuccess(testData.buyer.name);

  await page.screenshot({ path: `screenshots/order-success-${Date.now()}.png` });
});
