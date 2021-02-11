// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { loginPage, securePage } from '../pages';
import { tablesPage } from '../pages/tables';
import { doGet } from '../util/request';

Given('I reach login page', () => {
  loginPage.openLoginPage();
});

Given('I reach tables page', () => {
  tablesPage.openTablesPage();
});

Given('URI of request is {string}', function (url) {
  this.uri = url;
});

When('I get list of bookings', function () {
  this.response = doGet(this.uri);
});

Then('request should be successful', function () {
  expect(this.response.statusCode).to.equal(200);
});

When('I login with username as {string} and password as {string}', function (
  username,
  password,
) {
  loginPage.login(username, password);
});

When('I click on last name column header in table 2', function () {
  tablesPage.clickLastNameColumn();
});

Then('Last name column should be sorted alphabetically', function () {
  expect(tablesPage.getLastNames()).to.eql(tablesPage.getLastNames().sort());
});

Then('Error Message: {string} should be displayed', function (msg) {
  expect(loginPage.getLoginErrorMessage()).to.contain(msg);
});

Then('Success Message: {string} should be displayed', function (msg) {
  expect(securePage.getLoginSuccessMessage()).to.contain(msg);
});
