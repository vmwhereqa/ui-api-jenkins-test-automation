import * as elements from './secure.locators';

class SecurePage {
  constructor() {
    this.elements = elements;
  }

  getLoginSuccessMessage() {
    return $(this.elements.TEXT_LOGIN_SUCCESS).getText();
  }
}

export const securePage = new SecurePage();
