require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const pool = require('./database');

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

var dc = ['Joker', 'Superman', 'Batman', 'Wonder Woman', 'The Flash', 'Aquaman', 'Bane', 'Green Arrow', 'Green Lantern', 'John Constantine']
var marvel = ['Spider-man', 'Hulk', 'Iron Man', 'Wolverine', 'Deadpool', 'Black Panther', 'Punisher', 'Captain America', 'Silver Surfer', 'Luke Cage']
// var character
var publisher = ['DC', 'Marvel']
var issues = []

// var alert = "problem";
//
// async function f() {
//     return 1;
// }
//
// f().then(alert); // 1

app.route('/dc')
    .get(function (req, res, next) {
        getDCIssues(dc,function (err, data, character) {
            if (err) {
                // error handling code goes here
                console.log("ERROR : ", err);
            } else {
                // code to execute on data retrieval
                // console.log("result from db is : ",data);
                console.log("character:" + character)

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    issues.push(row.id);
                    console.log(row.id);
                }
            }
        }).then(console.log(issues));
        //console.log(issues)
    });

app.get('/status', (req, res) => res.send('Working!'));


async function getDCIssues(characters, callback) {
    //console.log(characters)
    // for (var j = 0; j < 10; j++) {
    let publisher = 'DC'
    // var pointer = 0

    for (const character of characters) {
        // await new Promise(next => {
            //console.log(characters[j])
        // console.log(pointer + publisher)
        // if (pointer > 9) {
        //     const publisher = 'Marvel'
        // }
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
                        //throw error;
                    }
                    //console.log(res)
                    //res.json(results);
                    //res.json(results)
                    //console.log(results)

                    else {
                        console.log(character);
                        callback(null, results, character);
                        // console.log("character:" + dc[j])
                        //
                        // for (var i = 0; i < results.length; i++) {
                        //     var row = results[i];
                        //     issues.push(row.id);
                        //     console.log(row.id);
                        // }
                    }
                }
            )
            // next()
        // })
        // next()
        // pointer++
    }
}

app.route('/marvel')
    .get(function (req, res, next) {
        getMarvelIssues(marvel,function (err, data, character) {
            if (err) {
                // error handling code goes here
                console.log("ERROR : ", err);
            } else {
                // code to execute on data retrieval
                // console.log("result from db is : ",data);
                console.log("character:" + character)

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    issues.push(row.id);
                    console.log(row.id);
                }
            }
        }).then(console.log(issues));
        //console.log(issues)
    });

async function getMarvelIssues(characters, callback) {
    //console.log(characters)
    // for (var j = 0; j < 10; j++) {
    let publisher = 'Marvel'
    var pointer = 0

    for (const character of characters) {
        // await new Promise(next => {
        //console.log(characters[j])
        console.log(pointer + publisher)
        // if (pointer > 9) {
        //     const publisher = 'Marvel'
        // }
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
                    //throw error;
                }
                //console.log(res)
                //res.json(results);
                //res.json(results)
                //console.log(results)

                else {
                    console.log(character);
                    callback(null, results, character);
                    // console.log("character:" + dc[j])
                    //
                    // for (var i = 0; i < results.length; i++) {
                    //     var row = results[i];
                    //     issues.push(row.id);
                    //     console.log(row.id);
                    // }
                }
            }
        )
        // next()
        // })
        // next()
        pointer++
    }
}

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);