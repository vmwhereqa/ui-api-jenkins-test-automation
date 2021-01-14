import * as elements from './restaurants.locators';

class RestaurantsPage {
  constructor() {
    this.elements = elements;
  }

  selectDeliveryCost(option) {
    $(this.elements.OPTION_DELIVERY_COST(option)).click();
  }

  getDeliveryCost() {
    return $$(this.elements.TEXT_RESTAURANTS_DELIVERY_COST).map((element) => element.getText());
  }

  selectCuisine(cuisine) {
    $(this.elements.LINK_CUISINE(cuisine)).click();
  }

  getCuisineDetails() {
    return $$(this.elements.TEXT_CUISINE).map((element) => element.getText());
  }
}

export const restaurantsPage = new RestaurantsPage();
