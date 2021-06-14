// frameworks are code that executes or runs your own code
// libraries are code that gets executed by your own code

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const data = require('./assets/data.json');
require('dotenv').config();

const PORT = process.env.PORT;
const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())
// a server endpoint 
app.get('/', // our endpoint name
    function (req, res) { // callback function of what we should do with our request
        res.send('Hello World') // our endpoint function response
    }
);

app.get('/about-me', (request, response) => {
    response.send('My name is tamim!');

});

app.get('/weather-data', (req, res) => {
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
// kick start the express server to work
