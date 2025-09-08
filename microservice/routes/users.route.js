const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller');

router.get('/dashboard', UsersController.dashboardPage);

router.post('/login', UsersController.login);
router.post('/signup', UsersController.signup);

module.exports = router;