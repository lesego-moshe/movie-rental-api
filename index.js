require('express-async-errors');
require('winston-mongodb');
const winston = require('winston');
const error = require('./middleware/error');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');

winston.add(winston.transports.File, {filename: 'logfile.log'});
// winston.add(winston.transports.MongoDB, {
//     db: 'mongodb://localhost/movie-rental-api',
//     level: 'error'
// });

if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/movie-rental-api')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());//req.body
app.use('/api/genres', genres);
app.use('/api/customers', customers)
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));