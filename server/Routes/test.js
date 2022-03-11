const app = require('express')
const router = app.Router()
const {db} = require("../Database/db");
const User = require("../Models/User")(db);

const testEmail = "testyMcTestperson";
const testPW = "1234567890";



// http://localhost:5000/test/routing
// Testing that requests route from /server.js to appropriate handlers
router.all('/routing', function(req, res) {
    res.send('/test/routing => success')
})

// http://localhost:5000/test/dbset
// Creates a test user in the database if none
router.all('/dbset', function(req, res) {
    User.findOne({where: {email: testEmail}})
        .then(user => {
            if (!user) {
                User.create({
                    email: testEmail,
                    password: testPW
                })
                    .then(user => {
                        res.send("Created the following test user:\n" +
                            "email: " + user.email + "\npassword: " + user.password + "\ncreated: " + user.createdAt)
                    })
            }
            else {
                res.send("test user already exists!")
            }
        })
        .catch(err => {
            res.send('/test/dbset => error querying test user');
        })
})

// http://localhost:5000/test/dbget
// Retrieves the test user from the database and displays it
router.all('/dbget', function(req, res) {
    // res.send('/test/dbget => success')

    User.findOne({where: {email: testEmail}})
        .then(user => {
            if (!user) {
                res.send("Must create the test user first! Try http://localhost:5000/test/dbset")
            }
            else {
                res.send("Email:\t" + user.email + "\tExpected:\t" + testEmail +
                    "\nPassword:\t" + user.password + "\tExpected:\t" + testPW)
            }
        })
        .catch(err => {
            res.send("/test/dbget => error querying test user")
        })
})

module.exports = router;
