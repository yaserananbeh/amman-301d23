// frameworks are code that executes or runs your own code
// libraries are code that gets executed by your own code

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const weatherController = require('./controller/weather.controller');
const indexController = require('./controller/index.controller');
require('dotenv').config();
const PORT = process.env.PORT;

const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())

/*
-------------------------------
Our routes
-------------------------------
*/

// Our Index Route
app.get('/', indexController);
// Our Weather Route
app.get('/weather', weatherController);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
// kick start the express server to work
