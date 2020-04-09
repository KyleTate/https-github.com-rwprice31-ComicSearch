require('dotenv').config()

const express = require('express');
const app = express();
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
});

/**
 * List the characters that are going to be placed in the template SQL queries in their respective publisher array
 * @type {*[]}
 */
var dc = []
var marvel = []
var issues = []

/**
 * I am not sure how to optimize how the array of issues ought to be displayed. I cannot successfully send the 'issues'
 * array into res.send() without it being sent prematurely before the main function in the routes finishes.
 * For now, they will be printed within the terminal console.
 *
 * After you go to the localhost route for the publisher, wait at most 30 seconds for
 * all 10 character's issue id's to be printed.
 *
 * The way to create a list is to manually place the issues in the array used in 'webscraper.js';
 * Copy-paste the finished terminal logs into the array in webscraper.js.
 *
 * You will need to do this sequentially because you would need to copy-paste the results of /marvel or /dc first and then the other to
 * proceed collecting the images from each publishers' characters.
 *
 */

app.route('/dc')
    .get(function (req, res, next) {
        getDCIssues(dc, function (err, data) {
            if (err) {
                console.log("ERROR : ", err);
            } else {

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    issues.push(row.id);
                    console.log(row.id + ",");
                }
            }
        })
    });

async function getDCIssues(characters, callback) {

    for (const character of characters) {
        connection.query(
            "select series_id, id, number from gcd_issue i\n" +
            "join (\n" +
            "select distinct i.series_id, s.name, s.publishing_format, s.year_began, s.year_ended, \n" +
            "count(i.id) as '# issues that have character in all comic stories', s.issue_count as 'all issues in series',\n" +
            "((count(i.id)/s.issue_count) * 100) \n" +
            "as 'average percent of when character appears in all issues' from gcd_issue i\n" +
            "join gcd_series s on i.series_id = s.id\n" +
            "where i.id in (\n" +
            "select issue_id from (\n" +
            "select s.issue_id, sum(case when s.characters like '%" + character + "%' and type_id = 19 then 1 else 0 end) as 'stories w/ character in it',\n" +
            "sum(case when type_id = 19 then 1 else 0 end) as 'All comic story types', (sum(case when s.characters like '%" + character + "%' and type_id = 19 \n" +
            "then 1 else 0 end) /\n" +
            "sum(case when type_id = 19 then 1 else 0 end)) as 'true percentage', count(s.id) as 'total stories',\n" +
            "(sum(case when s.characters like '%" + character + "%' then 1 else 0 end)/ count(s.id)) as 'percentage of stories of when character appears within issue'\n" +
            "from gcd_issue i\n" +
            "join gcd_story s on i.id = s.issue_id\n" +
            "where i.id in (\n" +
            "select issue_id from gcd_story\n" +
            "where feature like '%" + character + "%' or title like '%" + character + "%' or synopsis like '%" + character + "%' and page_count > 5 and type_id = 19)\n" +
            "group by i.id\n" +
            "having (sum(case when s.characters like '%" + character + "%' and type_id = 19 then 1 else 0 end) /\n" +
            "sum(case when type_id = 19 then 1 else 0 end)) >= 1) child)\n" +
            "and s.publisher_id in (\n" +
            "select id from gcd_publisher\n" +
            "where name like '%DC%' and country_id = 225)\n" +
            "and has_gallery = 1\n" +
            "group by series_id\n" +
            "having ((count(i.id)/s.issue_count) * 100) >= 100\n" +
            "limit 5) d\n" +
            "using (series_id)\n" +
            "where d.series_id is not null and i.variant_of_id is null;", character,
            function (error, results, fields) {
                if (error) {
                    callback(error, null, null);
                } else {
                    callback(null, results, character);
                }
            }
        )
    }
}

app.route('/marvel')
    .get(async function (req, res) {
        await getMarvelIssues(marvel, function (err, data) {
            if (err) {
                console.log("ERROR : ", err);
            } else {
                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    issues.push(row.id);
                    console.log(row.id + ",");
                }
            }
        })
        res.send(issues)
    });

async function getMarvelIssues(characters, callback) {

    for (const character of characters) {

        connection.query(
            "select series_id, id, number from gcd_issue i\n" +
            "join (\n" +
            "select distinct i.series_id, s.name, s.publishing_format, s.year_began, s.year_ended, \n" +
            "count(i.id) as '# issues that have character in all comic stories', s.issue_count as 'all issues in series',\n" +
            "((count(i.id)/s.issue_count) * 100) \n" +
            "as 'average percent of when character appears in all issues' from gcd_issue i\n" +
            "join gcd_series s on i.series_id = s.id\n" +
            "where i.id in (\n" +
            "select issue_id from (\n" +
            "select s.issue_id, sum(case when s.characters like '%" + character + "%' and type_id = 19 then 1 else 0 end) as 'stories w/ character in it',\n" +
            "sum(case when type_id = 19 then 1 else 0 end) as 'All comic story types', (sum(case when s.characters like '%" + character + "%' and type_id = 19 \n" +
            "then 1 else 0 end) /\n" +
            "sum(case when type_id = 19 then 1 else 0 end)) as 'true percentage', count(s.id) as 'total stories',\n" +
            "(sum(case when s.characters like '%" + character + "%' then 1 else 0 end)/ count(s.id)) as 'percentage of stories of when character appears within issue'\n" +
            "from gcd_issue i\n" +
            "join gcd_story s on i.id = s.issue_id\n" +
            "where i.id in (\n" +
            "select issue_id from gcd_story\n" +
            "where feature like '%" + character + "%' or title like '%" + character + "%' or synopsis like '%" + character + "%' and page_count > 5 and type_id = 19)\n" +
            "group by i.id\n" +
            "having (sum(case when s.characters like '%" + character + "%' and type_id = 19 then 1 else 0 end) /\n" +
            "sum(case when type_id = 19 then 1 else 0 end)) >= 1) child)\n" +
            "and s.publisher_id in (\n" +
            "select id from gcd_publisher\n" +
            "where name like '%Marvel%' and country_id = 225)\n" +
            "and has_gallery = 1\n" +
            "group by series_id\n" +
            "having ((count(i.id)/s.issue_count) * 100) >= 100\n" +
            "limit 5) d\n" +
            "using (series_id)\n" +
            "where d.series_id is not null and i.variant_of_id is null;", character,
            function (error, results, fields) {
                if (error) {
                    callback(error, null, null);
                } else {
                    callback(null, results);
                }
            }
        )
    }
}

app.set('port', process.env.PORT || 3000);
app.listen(3000);