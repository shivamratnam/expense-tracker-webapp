const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main.route');
const userRoute = require('./routes/users.route');
const db = require('./database');
const dotEnv = require('dotenv');

const port = process.env.PORT || 8260;

// Config
dotEnv.config();

// Define Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Define routes
app.use('/', mainRoute);
app.use('/users', userRoute);

// Configure database
db.init();

// Start server
app.listen(port, () => {
    console.log(`Express server is up and running at ${process.env.PROTOCOL}://${process.env.HOST}:${port}`);
});