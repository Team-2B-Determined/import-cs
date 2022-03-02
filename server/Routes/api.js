const app = require('express')
const router = app.Router()

//Receives all incoming HTTP requests with a starting path element of /api
//Sends the routes to the appropriate subrouter based on the second element of the path
//Reminder to verify functional difference between .all and .use
router.all('/path', require('./api.auth'));
router.all('/user', require('./api.user'));
router.all('/setting', require("./api.setting"));
router.all('/history', require("./api.history"));

module.exports = router;
