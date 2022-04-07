const app = require('express')
const router = app.Router()

//Receives all incoming HTTP requests with a starting path element of /api
//Sends the routes to the appropriate subrouter based on the second element of the path
//Reminder to verify functional difference between .all and .use
router.use('/auth', require('./api.auth'));
router.use('/setting', require("./api.setting"));
router.use('/history', require("./api.history"));


module.exports = router;
