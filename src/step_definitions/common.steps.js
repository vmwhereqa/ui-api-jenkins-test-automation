// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { homePage, restaurantsPage, AcceptConsentIfVisible } from '../pages';

Given('Lieferando home page is launched', () => {
  homePage.openHomePage();
});

Given('I search for restaurants near {string}', function (address) {
  homePage.openHomePage();
  AcceptConsentIfVisible();
  homePage.searchRestaurants(address);
});

When('I filter restaurants with {string} as {string}', function (
  filterType,
  option,
) {
  if (filterType === 'cuisine') {
    restaurantsPage.selectCuisine(option);
  } else {
    restaurantsPage.selectDeliveryCost(option);
  }
});

Then(
  'Displayed restaurants delivery costs should be {int} € or less',
  function (deliveryCost) {
    const costs = restaurantsPage.getDeliveryCost();

    const isPriceLessThanEqualToOne = (price) => {
      if (price < deliveryCost || price === deliveryCost) {
        return true;
      }
      return false;
    };

    costs.forEach((cost) => {
      if (cost.includes('€')) {
        const price = cost.split(' ')[0];
        const convertedPrice = parseFloat(price.replace(',', '.'));
        expect(isPriceLessThanEqualToOne(convertedPrice)).to.be.true;
      } else {
        expect('FREE').to.equal(cost);
      }
    });
  },
);

Then('Only restaurants with {word} cuisine should be displayed', function (
  cuisine,
) {
  const cuisinesText = restaurantsPage.getCuisineDetails();
  cuisinesText.forEach((cuisineText) => {
    expect(cuisineText).to.contain(cuisine);
  });
});
