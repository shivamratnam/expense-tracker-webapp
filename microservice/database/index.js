const mongoose = require('mongoose');

const init = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/EXPENSE_TRACKER')
    .then( () => {
        console.log('Database connected successfully');
    })
    .catch(err => {
        console.log('DB Connection Error: ', err);
    });
};

module.exports = {
    init: init
};