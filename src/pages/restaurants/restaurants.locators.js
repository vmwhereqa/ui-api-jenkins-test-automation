export const OPTION_DELIVERY_COST = (option) => `//*[contains(text(),'${option}')]`;

export const TEXT_RESTAURANTS_DELIVERY_COST = "//*[@class='restaurant js-restaurant']//*[@class='delivery-cost js-delivery-cost notranslate']";

export const LINK_CUISINE = (cuisine) => `//a[@data-type='Cuisine']/span[text()='${cuisine}']`;

export const TEXT_CUISINE = "//*[@class='restaurant js-restaurant' and not(contains(@id, 'SingleRestaurantTemplateIdentifier'))]//*[@class='kitchens']/span";
