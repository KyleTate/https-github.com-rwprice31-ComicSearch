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

// // [START cloud_sql_mysql_mysql_create]
// let pool;
// const createPool = async () => {
//     pool = await mysql.createPool({
//         user: process.env.DB_USER, // e.g. 'my-db-user'
//         password: process.env.DB_PASS, // e.g. 'my-db-password'
//         database: process.env.DB_DATABASE, // e.g. 'my-database'
//         // If connecting via unix domain socket, specify the path
//         socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
//         // If connecting via TCP, enter the IP and port instead
//         // host: 'localhost',
//         // port: 3306,
//
//         //[START_EXCLUDE]
//
//         // [START cloud_sql_mysql_mysql_limit]
//         // 'connectionLimit' is the maximum number of connections the pool is allowed
//         // to keep at once.
//         connectionLimit: 5,
//         // [END cloud_sql_mysql_mysql_limit]
//
//         // [START cloud_sql_mysql_mysql_timeout]
//         // 'connectTimeout' is the maximum number of milliseconds before a timeout
//         // occurs during the initial connection to the database.
//         connectTimeout: 10000, // 10 seconds
//         // 'acquireTimeout' is the maximum number of milliseconds to wait when
//         // checking out a connection from the pool before a timeout error occurs.
//         acquireTimeout: 10000, // 10 seconds
//         // 'waitForConnections' determines the pool's action when no connections are
//         // free. If true, the request will queued and a connection will be presented
//         // when ready. If false, the pool will call back with an error.
//         waitForConnections: true, // Default: true
//         // 'queueLimit' is the maximum number of requests for connections the pool
//         // will queue at once before returning an error. If 0, there is no limit.
//         queueLimit: 0, // Default: 0
//         // [END cloud_sql_mysql_mysql_timeout]
//
//         // [START cloud_sql_mysql_mysql_backoff]
//         // The mysql module automatically uses exponential delays between failed
//         // connection attempts.
//         // [END cloud_sql_mysql_mysql_backoff]
//
//         //[END_EXCLUDE]
//     });
// };
// createPool();
// [END cloud_sql_mysql_mysql_create]

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
});

// module.exports = createPool();

// app.get('/test', async (req, res) => {
//         await pool.query(
//             "SELECT * FROM `gcd_series` LIMIT 3");
//     });

app.route('/test')
    .get(function (req, res, next) {
        (connection.query(
            "SELECT * FROM `gcd_series` LIMIT 3",
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
                // var json = res.json(results);
                // res.send(json);
            }
        ))
    });

app.get('/series/:publisher/:character', function (req, res, next) {
    const publisher = req.params.publisher;
    const character = req.params.character;

    (connection.query(
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
        "where name like '%" + publisher + "%' and country_id = 225)\n" +
        "and has_gallery = 1\n" +
        "group by series_id\n" +
        "having ((count(i.id)/s.issue_count) * 100) >= 100\n" +
        "limit 5;",
        function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            // var json = res.json(results);
            // res.send(json);
        }
    ))
});

app.get('/issues/:publisher/:character', function (req, res, next) {
    const publisher = req.params.publisher;
    const character = req.params.character;

    (connection.query(
        "select * from gcd_issue i \n" +
        "join ( \n" +
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
        "where name like '%" + publisher + "%' and country_id = 225)\n" +
        "and has_gallery = 1\n" +
        "group by series_id\n" +
        "having ((count(i.id)/s.issue_count) * 100) >= 100\n" +
        "limit 5) d\n" +
        "using (series_id)\n" +
        "where d.series_id is not null and i.variant_of_id is null;",
        function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            // var json = res.json(results);
            // res.send(json);
        }
    ))
});

app.get('/status', (req, res) => res.send('Working!'));


app.set('port', process.env.PORT || 3000);
app.listen(3000);
