const express = require('express');
const router = express.Router();

const controller = require('../Controllers/Controller.Auth')
const middleware = require('../Middleware/VerifySignup')


router.post('/signup', middleware.checkDuplicateUser, middleware.checkRole, controller.signup);
router.post('/signin', controller.signin);




module.exports = router;