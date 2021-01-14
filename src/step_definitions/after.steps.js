// eslint-disable-next-line import/no-extraneous-dependencies
import { After } from 'cucumber';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

After(function () {
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
});
