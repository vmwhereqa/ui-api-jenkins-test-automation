import * as elements from './tables.locators';

class TablesPage {
  constructor() {
    this.elements = elements;
    this.url = '/tables';
  }

  openTablesPage() {
    browser.url(this.url);
  }

  clickLastNameColumn() {
    $(this.elements.HEADER_LAST_NAME).click();
  }

  getLastNames() {
    const ele = $$(this.elements.CELL_LAST_NAME);
    const names = ele.map((element) => element.getText());
    return names;
  }
}

export const tablesPage = new TablesPage();
