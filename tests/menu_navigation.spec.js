import { test, expect } from './fixtures.js';

test('menu_functionality', async ({ home }) => {
  await home.open();

  await expect(home.categories).toContainText('CATEGORIES');
  await home.selectPhones();
  await home.selectLaptops();
  await home.selectMonitors();
});
