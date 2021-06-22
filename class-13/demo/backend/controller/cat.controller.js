'use strict';

const { userModel } = require('../models/user.model');

// const createCat = (request, response) => {
//     // const { catName, userEmail } = request;
//     response.send(" We got the request and we are still working on functionality");
// }

const getCats = (request, response) => {

    const { email } = request.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

const createCat = (request, response) => {
    // we need to get the email of the person and the cat name to add to that person

    console.log(request.body)
    const { userEmail, catName } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            // here we are going to add the new cat
            userData.cats.push({ name: catName });
            userData.save();
            response.json(userData);
        }
    })
}

const updateCat = (request, response) => {
    console.log(request.params)
    const catIndex = request.params.cat_idx;
    const { userEmail, catName } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.cats.splice(catIndex, 1, { name: catName });
            userData.save();
            response.send(userData)
        }

    });
}

const deleteCat = (request, response) => {
    console.log(request.params)
    const catIndex = request.params.cat_idx;
    const { userEmail } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.cats.splice(catIndex, 1);
            userData.save();
            response.send(userData)
        }

    });
}

module.exports = {
    getCats,
    createCat,
    updateCat,
    deleteCat
};