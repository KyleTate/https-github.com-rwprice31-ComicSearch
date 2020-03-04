

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
//const logs = require('./routes/routes');
const mongoose = require('mongoose');
//used for setting evironment variables from .env file
require('dotenv').config();

const app = express();

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
})

//app.use('/routes/routes', logs);


app.use(middlewares.notfound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log('listening at http://localhost:1337');
});
