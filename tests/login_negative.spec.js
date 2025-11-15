import { test } from './fixtures.js';
import testData from '../src/data/testData.js';

test('user_login_negative', async ({ home, login }) => {
  await home.open();
  await login.login(testData.invalidUser.username, testData.invalidUser.password);
  await login.expectLoginAlert('Wrong password.');
});
