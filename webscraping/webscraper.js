const cheerio = require('cheerio')
const download = require('image-downloader')
const puppeteer = require('puppeteer')

/**
 * Insert the array of issue id's to be web scrapped here:
 * @type {Array}
 */
const issues = [];

/**
 * Inside the main function we'll place all the required code
 * that will be used in the scraping process.
 * The reason why we create an async function is to use
 * the power of async programming  that comes with puppeteer.
 */
async function main() {

    for (let i = 0; i < issues.length; i++) {

        const browser = await puppeteer.launch({
            headless: true,

            args: ['--proxy-server=socks5://127.0.0.1:9050']
        });

        /**
         * Creates a new page.
         */
        const page = await browser.newPage();

        await console.log(issues[i] + " " + i)

        await page.goto('https://www.comics.org/issue/' + issues[i] + '/cover/4/', {waitUntil: 'domcontentloaded'});

        /**
         * Get page content as HTML.
         */
        const content = await page.content();

        /**
         * Load content in cheerio.
         */
        const $ = cheerio.load(content);

        var src = $('div.issue_covers img').attr('src');


        /**
         * For dest: This is your destination for where your images will be downloaded to.
         * You have to hard-code the specific path where /issue_cover is located in within
         * the machine that you will run this script on.
         *
         * Ensure that the path is template like this:
         *  /Users/.../issue_covers/' + issues[i] + '.jpg
         *
         * Making your pathname like so will make it so that the cover get stored by their issue id;
         * the default download name for the images are not consistent to their issue id!!
         *
         */
        const options = {
            url: src,
            dest: '',
        }

        await download.image(options)
            .then(({filename, image}) => {
                console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
            })
            .catch((err) => console.error(err))

        await console.log(src);

        /**
         * Wait 3 seconds and then close the browser instance.
         */
        await setTimeout(() => {
            browser.close();
        }, 3000);
    }
}

/**
 * Start the script by calling main().
 */
main();
