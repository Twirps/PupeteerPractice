const puppeteer = require("puppeteer");
const clicks = 100;

async function start() {
    browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://cpstest.org/kohi-click-test.php");
    await page.click("#start")
}

start();
