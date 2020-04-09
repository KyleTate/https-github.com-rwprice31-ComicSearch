# ComicSearch

The purpose of this website is to help introduce new readers to comics and to be an easy way to find series of different characters

Cover thumbnails are used for identification purposes only. All rights to cover images reserved by the respective copyright holders.

******* Web Scraping *******

Webscraping for this project was helped through an article published here: 

https://levelup.gitconnected.com/anonymous-web-scrapping-with-node-js-tor-apify-and-cheerio-3b36ec6a45dc

To perform the script within /webscraping, do these steps:

1) Download tor (There's different method depending on what OS you're using...)
 - For OSX: https://2019.www.torproject.org/docs/tor-doc-osx.html.en
 - Other methods for other OS's coming soon after further investigation...
 
2) Configure tor file after downloading it:
 - Open /etc/tor/torrc (Search torrc in Finder)
 - It might appear as torrc.sample
 - Add these lines to the end of the file:
    SocksPort 9050
    SocksPort 9052
    SocksPort 9053
    SocksPort 9054
 - Restart tor client to apply the changes:
    sudo /etc/init.d/tor restart
    OR if downloaded and ran through brew:
    brew services restart tor
    
3) Have tor running on your terminal as you run webscraper.js : node webscraper.js

4) Make sure you read comments to understanding what to add into webscraper.js in order to retrieve anything!

Happy Web-scraping!
    
 
 