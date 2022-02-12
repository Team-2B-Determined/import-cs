const express = require('express');
const router = express.Router();

const userRoutes = require('./Routes.User')

//HTTP requests with /user are passed to userRoutes (Routes.User.js)
router.use('/user', userRoutes);

module.exports.router = router;
