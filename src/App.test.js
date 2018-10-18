import puppeteer from 'puppeteer';

jest.setTimeout(30000)

describe('App', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
  });

  afterAll(() => {
    browser.close();
  });

  it('should display "google" text on page', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML);
    expect(bodyHTML).toMatch('google');
  });
});
