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

connection.connect(function(err) {
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
    .get(function(req, res, next) {
        (connection.query(
            "SELECT * FROM `gcd_series` LIMIT 3",
            function(error, results, fields) {
                if (error) throw error;
                var json = res.json(results);
                res.send(json);
            }
        ))
    });

app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);
