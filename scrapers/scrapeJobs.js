const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.linkedin.com/jobs/search?keywords=Software%20Engineer&location=Denver%2C%20Colorado%2C%20United%20States&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0&f_E=2', { waitUntil: 'networkidle2' });
  const jobs = await page.$$eval('.result-card__full-card-link', jobs => {
    return jobs.map(job => job.href);
  });
  console.log(jobs);
  await browser.close();
})();