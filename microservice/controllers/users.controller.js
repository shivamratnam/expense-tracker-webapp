const utils = require('../utils');

exports.dashboardPage = (req, res, next) => {
    res.send('This is dashboard page');
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    console.log('Email', email);
    console.log("Password", password);
    
    res.send('This is login API');
};

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    res.send('This is signup API');

};