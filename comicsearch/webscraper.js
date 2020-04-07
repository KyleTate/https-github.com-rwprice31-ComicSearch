const express = require('express')
const cheerio = require('cheerio')
const download = require('image-downloader')
const request = require('request')
const puppeteer = require('puppeteer')

const issues = [
    // 22023,
//     22336,
//     64954,
//     35926,
//     38102,
//     76106,
//     16935,
//     17045,
//     17154,
//     17266,
//     17458,
//     17571,
//     29114,
//     30309,
//     34141,
//     34224,
//     34303,
//     34386,
//     34466,
//     34548,
//     34621,
//     34702,
//     34782,
//     34856,
//     34933,
//     35052,
//     35125,
//     35205,
//     35280,
//     35350,
//     35417,
//     35500,
//     35575,
//     35656,
//     35748,
//     35821,
//     35899,
//     36034,
//     36117,
//     35926,
//     23655,
//     24641,
//     29115,
//     44597,
//     48859,
//     55220,
//     36689,
//     36772,
//     36854,
//     36938,
//     39309,
//     39419,
//     39598,
//     39702,
//     39796,
//     39907,
//     85443,
//     76105,
//     43872,
//     43885,
//     45599,
//     45644,
//     53473,
//     53631,
//     53801,
//     53965,
//     55525,
//     55682,
//     55842,
//     56003,
//     59743,
//     62350,
//     61227,
//     30658,
//     30843,
//     31030,
//     31221,
//     31426,
//     31633,
//     31859,
//     32042,
//     32232,
//     32413,
//     32594,
//     32760,
//     33016,
//     33206,
//     33361,
//     44735,
//     44859,
//     44991,
//     45130,
//     48957,
//     48972,
//     48980,
//     48986,
//     224882,
//     224883,
//     224884,
//     244709,
//     244710,
// 244711,
// 244712,
// 244713,
// 244714,
// 244715,
// 244716,
// 244717,
// 272118,
// 272119,
// 272120,
// 272121,
// 272122,
// 300820,
// 300821,
// 311225,
// 311226,
// 329190,
// 329191,
// 338350,
// 338351,
// 348765,
// 348766,
// 361061,
// 367295,
// 371332,
// 382993,
// 393361,
// 396011,
// 419549,
// 419550,
// 529624,
// 529625,
// 535987,
// 537219,
// 541236,
// 542943,
// 300053,
// 41003,
// 41116,
// 41219,
// 41325,
// 41427,
// 43812,
// 45382,
// 212118,
// 48072,
// 28066,
// 47239,
// 50091,
// 50353,
// 50485,
// 50774,
// 210326,
// 210327,
// 210328,
// 51245,
// 36963,
// 45388,
// 45758,
// 52709,
// 52842,
// 52992,
// 53150,
// 59834,
// 64701,
// 28070,
// 315991,
// 576102,
// 669797,
// 669798,
// 781256,
// 781257,
// 745057,
// 755417,
// 765441,
// 28528,
// 28740,
// 28964,
// 29189,
// 29432,
// 29618,
// 29806,
// 29983,
// 30175,
// 43808,
// 50203,
// 50329,
// 50416,
// 50464,
// 251111,
// 52303,
// 20629,
// 71506,
// 34958,
// 36960,
// 35924,
// 34521,
// 34593,
// 34676,
// 71543,
// 39373,
// 40854,
// 40866,
// 40872,
// 40880,
// 40846,
// 36960,
// 50623,
// 59694,
// 59806,
// 63270,
// 17748,
// 215551,
// 229660,
// 238844,
// 297584,
// 297585,
// 41050,
// 41160,
// 41261,
// 41365,
// 45500,
// 46303,
// 46426,
// 46544,
// 46668,
// 46798,
// 47225,
// 54076,
// 54346,
// 54515,
// 54639,
// 95725,
// 95727,
// 95729,
// 95731,
// 95978,
// 124620,
// 256156,
// 256201,
// 37436,
// 37527,
// 37619,
// 37709,
// 43181,
// 43295,
// 43423,
// 50448,
// 50739,
// 50858,
// 50982,
// 51211,
// 51326,
// 50606,
// 52535,
// 52654,
// 52787,
// 52933,
// 35321,
// 35385,
// 35470,
// 37826,
// 37913,
// 38019,
// 38172,
// 38282,
// 38404,
// 38518,
// 42011,
// 42125,
// 42341,
// 42456,
// 42577,
// 42694,
// 42817,
// 42927,
// 43049,
// 43182,
// 43296,
// 43424,
// 43546,
// 43677,
// 43912,
// 44044,
// 44161,
// 44288,
// 44402,
// 43820,
// 45547,
// 70148,
// 70149,
// 70150,
// 70151,
// 70152,
// 70153,
// 52311,
// 61066,
// 61260,
// 244221,
// 266946,
//     355030
    ];

// const app = express()
//
// // const options = {
// //     url: 'https://files1.comics.org//img/gcd/covers_by_id/808/w400/808466.jpg?2292313437861341808',
// //     // url: 'https://www.comics.org/issue/43808/cover/4/',
// //     dest: '/Users/jcantillo/Desktop/Stuff for Spring 2020'
// // }
//
// // download.image(options)
// //     .then(({filename, image}) => {
// //         console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
// //     })
// //     .catch((err) => console.error(err))
//
// // download.image(options)
// //     .then(({ filename, image }) => {
// //         console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
// //     })
// //     .catch((err) => console.error(err))
// //
//
//
// app.get('/', (req, res) => {
//     var url = "https://www.comics.org/issue/43808/cover/4/"
//
//     //making a request
//
//     request(url, (error, response, html) => {
//         if (!error) {
//             var $ = cheerio.load(html)
//
//             var imagesrc = $(".issue_covers img").attr('src')
//
//             //download the image
//
//             const options = {
//                 url: url,
//                 // url: 'https://www.comics.org/issue/43808/cover/4/',
//                 dest: '/Users/jcantillo/Desktop/Stuff for Spring 2020'
//             }
//
//             download.image(options)
//                 .then(({filename, image}) => {
//                     console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
//                 })
//                 .catch((err) => console.error(err))
//
//             // download({
//             //     imgs: [
//             //         {
//             //             uri: imagesrc
//             //         }
//             //     ],
//             // dest:'./downloads'
//             // })
//             //     .then((info) => {
//             //         console.log("Download Complete")
//             //         process.exit(1)
//             //     })
//         }
//     })
// })

/**
 * Inside the main function we'll place all the required code
 * that will be used in the scraping process.
 * The reason why we create an async function is to use
 * the power of async programming  that comes with puppeteer.
 */
async function main() {
    //console.log("hola")
    for (let i = 0; i < issues.length; i++) {
        //     console.log("here")
        const browser = await puppeteer.launch({
            headless: true,

            // Add the following line.
            args: ['--proxy-server=socks5://127.0.0.1:9050']
        });
        // console.log("aqui")

        /**
         * Create a new page.
         */
        const page = await browser.newPage();

        /**
         * Using the newly created page, navigate to https://api.ipify.org
         *  'https://www.comics.org/issue/{}/cover/4/'
         */
        //await page.goto('https://www.comics.org/');
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

        /**
         * Access `storylink` class. slice() is used to access
         * only he first 5 HTML elements that have `storylink` class.
         * We iterate each of those 5 elements using each() method.
         */
        //$('.storylink').slice(0, 5).each((idx, elem) => {
        /**
         * Get the inner HTML which corresponds to the title in text format.
         */
        //const title = $(elem).text();

        /**
         * Push the title in titles array.
         */
            //titles.push(title);
            //})

            //var src = $('div.milestone img').attr('src');
        var src = $('div.issue_covers img').attr('src');

        const options = {
            url: src,
            dest: '/Users/jcantillo/Desktop/ComicSearch/issue_covers/' + issues[i] + '.jpg',
            //extractFilename: false
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

//app.listen(5000)
