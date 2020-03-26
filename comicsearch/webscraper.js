const express = require('express')
const cheerio = require('cheerio')
const download = require('image-downloader')
const request = require('request')

const app = express()

app.get('/', (req, res) => {
    var url = "https://www.comics.org/issue/43808/cover/4/"

    //making a request

    request(url, (error, response, html) => {
        if (!error) {
            console.log(html)
        }
    })
})

app.listen(5000)
