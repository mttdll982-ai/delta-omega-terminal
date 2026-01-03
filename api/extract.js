const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');

export default async function handler(req, res) {
  const { targetUrls } = req.body ? JSON.parse(req.body) : { targetUrls: [] };
  const results = [];

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    for (let url of targetUrls) {
      await page.goto(url, { waitUntil: 'networkidle2' });
      // Cerca i tasti "Mostra" o "Chiama"
      const btn = await page.$('.contact-button, .show-number, [data-testid="show-phone"]');
      if (btn) {
        await btn.click();
        await new Promise(r => setTimeout(r, 1000));
      }
      const num = await page.evaluate(() => document.querySelector('.phone-number, .contact-phone, b')?.innerText || 'Nascosto');
      results.push({ url, phone: num });
    }
    await browser.close();
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
