import { test, expect } from './fixtures.js';

test('Validate UI of all product cards', async ({ home }) => {
  await home.open();

  const cards = home.cards;
  const count = await cards.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const card = cards.nth(i);
    await expect(card.locator('img')).toBeVisible();
    await expect(card.locator('h4.card-title a')).not.toBeEmpty();
    await expect(card.locator('h5')).toContainText('$');
  }
});
