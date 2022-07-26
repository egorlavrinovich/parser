import puppeter from "puppeteer";

export default async function getdata(url) {
  try {
    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const data = await page.content();
    browser.close();
    return data;
  } catch (error) {
    throw error;
  }
}
