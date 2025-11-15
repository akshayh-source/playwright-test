import { test as base, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.js';
import { LoginPage } from '../src/pages/LoginPage.js';
import { CartPage } from '../src/pages/CartPage.js';
import { OrderPage } from '../src/pages/OrderPage.js';
import { ProductPage } from '../src/pages/ProductPage.js';

// Shared fixtures providing page objects for tests.
export const test = base.extend({
  home: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cart: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  order: async ({ page }, use) => {
    await use(new OrderPage(page));
  },
  product: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect } from '@playwright/test';

