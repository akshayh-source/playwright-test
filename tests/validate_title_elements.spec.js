import { test, expect } from './fixtures.js';

test('validate_title_elements', async ({ home }) => {
  await home.open();

  await expect(home.header).toContainText('PRODUCT STORE');
  await expect(home.navbar).toContainText('Home');
  await expect(home.navbar).toContainText('Contact');
  await expect(home.navbar).toContainText('About us');
  await expect(home.cartLink).toContainText('Cart');
  await expect(home.loginBtn).toContainText('Log in');
  await expect(home.signupBtn).toContainText('Sign up');
  await expect(home.categories).toContainText('CATEGORIES');
  await expect(home.footer).toContainText('About Us');
  await expect(home.footer).toContainText('Get in Touch');
  await expect(home.contentInfo).toContainText('Copyright © Product Store');
});
