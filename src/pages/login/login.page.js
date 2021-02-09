import * as elements from './login.locators';

class LoginPage {
  constructor() {
    this.elements = elements;
    this.url = './login';
  }

  openLoginPage() {
    browser.url(this.url);
  }

  login(userName, password) {
    $(this.elements.INPUT_USERNAME).setValue(userName);
    $(this.elements.INPUT_PASSWORD).setValue(password);
    $(this.elements.BUTTON_SUBMIT).click();
  }

  getLoginErrorMessage() {
    return $(this.elements.TEXT_LOGIN_FAILURE).getText();
  }
}

export const loginPage = new LoginPage();
