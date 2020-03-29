const express = require('express')
const cheerio = require('cheerio')
const download = require('image-downloader')
const request = require('request')

const app = express()

// const options = {
//     url: 'https://files1.comics.org//img/gcd/covers_by_id/808/w400/808466.jpg?2292313437861341808',
//     // url: 'https://www.comics.org/issue/43808/cover/4/',
//     dest: '/Users/jcantillo/Desktop/Stuff for Spring 2020'
// }

// download.image(options)
//     .then(({filename, image}) => {
//         console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
//     })
//     .catch((err) => console.error(err))

// download.image(options)
//     .then(({ filename, image }) => {
//         console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
//     })
//     .catch((err) => console.error(err))
//


app.get('/', (req, res) => {
    var url = "https://www.comics.org/issue/43808/cover/4/"

    //making a request

    request(url, (error, response, html) => {
        if (!error) {
            var $ = cheerio.load(html)

            var imagesrc = $(".issue_covers img").attr('src')

            //download the image

            const options = {
                url: imagesrc,
                // url: 'https://www.comics.org/issue/43808/cover/4/',
                dest: '/Users/jcantillo/Desktop/Stuff for Spring 2020'
            }

            download.image(options)
                .then(({filename, image}) => {
                    console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
                })
                .catch((err) => console.error(err))

            // download({
            //     imgs: [
            //         {
            //             uri: imagesrc
            //         }
            //     ],
            // dest:'./downloads'
            // })
            //     .then((info) => {
            //         console.log("Download Complete")
            //         process.exit(1)
            //     })
        }
    })
})

app.listen(5000)
