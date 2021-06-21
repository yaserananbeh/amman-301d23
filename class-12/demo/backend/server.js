
// frameworks are code that executes or runs your own code
// libraries are code that gets executed by your own code

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const mongoose = require('mongoose');
const getCats = require('./controller/cat.controller');

require('dotenv').config();
const PORT = process.env.PORT;
const seedUserData = require('./models/user.model')
const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())

// connect to mongo db using mongoose
mongoose.connect('mongodb://localhost:27017/myFavoriteCats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);


//we seed/ populating or filling our database with starter data
// the seed function is responsible for populating our database with data
// invoke/ call once
// seedUserData();

/*
-------------------------------
Our routes
-------------------------------
*/

// Our Cat Routes
app.get('/cats', getCats)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
// kick start the express server to work
