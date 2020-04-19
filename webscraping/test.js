/**
 * This is a test for you to run to see if a default script for webscraping will
 * work on your machine. Please refer to the README.md for more info on how to
 * web-scrape for this project!
 * @type {exports|*}
 */
const puppeteer = require('puppeteer');

/**
 * Require the cheerio library.
 */
const cheerio = require('cheerio');

async function main() {
    const browser = await puppeteer.launch({
        /**
         * Use the default headless mode (don't show the browser).
         */
        headless: true,
        args: ['--proxy-server=socks5://127.0.0.1:9050']
    });

    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com/');

    /**
     * Get page content as HTML.
     */
    const content = await page.content();

    /**
     * Load content in cheerio.
     */
    const $ = cheerio.load(content);


    /**
     * Create an array to save the article titles.
     */
    const titles = [];

    /**
     * Access `storylink` class. slice() is used to access
     * only he first 5 HTML elements that have `storylink` class.
     * We iterate each of those 5 elements using each() method.
     */
    $('.storylink').slice(0, 5).each((idx, elem) => {
        /**
         * Get the inner HTML which corresponds to the title in text format.
         */
        const title = $(elem).text();

        /**
         * Push the title in titles array.
         */
        titles.push(title);
    })

    browser.close();

    /**
     * Log the array of titles.
     */
    console.log(titles);
}

main();