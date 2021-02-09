// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { loginPage, securePage } from '../pages';

Given('I reach login page', () => {
  loginPage.openLoginPage();
});

When('I login with username as {string} and password as {string}', function (
  username,
  password,
) {
  loginPage.login(username, password);
});

Then(
  'Error Message: {string} should be displayed',
  function (msg) {
    expect(loginPage.getLoginErrorMessage()).to.contain(msg);
  },
);

Then(
  'Success Message: {string} should be displayed',
  function (msg) {
    expect(securePage.getLoginSuccessMessage()).to.contain(msg);
  },
);
