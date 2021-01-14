import * as elements from './home.locators';

class HomePage {
  constructor() {
    this.elements = elements;
    this.url = './';
  }

  openHomePage() {
    browser.url(this.url);
  }

  searchRestaurants(address) {
    $(this.elements.INPUT_ADDRESS).clearValue();
    $(this.elements.INPUT_ADDRESS).setValue(address);
    $(this.elements.LINK_SUGGESTION(address)).click();
  }
}

export const homePage = new HomePage();
