export * from './home';
export * from './restaurants/restaurants.page ';

export const AcceptConsentIfVisible = () => {
  const ele = '//*[@aria-label="We use cookies and other techniques to improve and personalise your experience and ads together with third parties. "]';
  if ($(ele).isDisplayed()) {
    $(ele).click();
  }
};
