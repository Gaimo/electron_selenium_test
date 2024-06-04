const { Builder, By } = require('selenium-webdriver');

document.getElementById('iniciar').addEventListener('click', async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com.br');
    let title = await driver.getTitle();
    document.getElementById('titulo').innerText = title;
  } finally {
    await driver.quit();
  }
});
