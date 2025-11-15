import { test, expect } from './fixtures.js';

test('Product details page navigation & UI validation', async ({ home, product }) => {
  await home.open();
  const title = await home.openProductByIndex(0);

  await expect(product.detailTitle).toContainText(title);
  await expect(product.price).toBeVisible();
  await expect(product.moreInfo).toBeVisible();
});
