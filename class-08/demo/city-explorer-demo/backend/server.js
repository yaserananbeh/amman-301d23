// frameworks are code that executes or runs your own code
// libraries are code that gets executed by your own code

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const weatherData = require('./assets/data.json');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT;
const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;
const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())
// a server endpoint 
app.get('/', (req, res) => {
    res.send('Hello World')
});

// In today lecture we are going to learn how to request dynamic data from the weatherBitAPI
app.get('/weather', (req, res) => {

    // console.log(req.query.lat);
    // console.log(req.query.lon);
    const lat = req.query.lat;
    const lon = req.query.lon;
    // console.log(lat);
    // console.log(lon);
    if (lat && lon) {
        const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${lat}&lon=${lon}`;

        axios.get(weatherBitUrl).then(response => {
            const responseData = response.data.data.map(obj => new Weather(obj));
            res.json(responseData)
        }).catch(error => {
            res.send(error.message)
        });
    } else {
        res.send('please provide the proper lat and lon')
    }


});


// Modeling the data
class Weather {
    constructor(weatherData) {
        this.description = weatherData.weather.description;
        this.date = weatherData.valid_date;

    }
}

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
// kick start the express server to work
