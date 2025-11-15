import { test } from './fixtures.js';
import testData from '../src/data/testData.js';

test('user_login', async ({ home, login }) => {
  await home.open();
  await login.login(testData.validUser.username, testData.validUser.password);
  await login.expectLoginSuccess(`Welcome ${testData.validUser.username}`);
});
