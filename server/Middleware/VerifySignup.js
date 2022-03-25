const {db} = require("../Models/db");
const { Sequelize } = require('sequelize');

//Checks if there is a user with the same email already
//If so, returns an error message
checkDuplicateUser = (req, res, next) => {
    db.users.findOne({
        where: Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('email')),
            Sequelize.fn('lower', req.body.email))
    })
        //If the query returns a user, send an error status, otherwise call next()
        .then(user => {
            if(user) {
                res.status(400).send({
                    message: "Email already in use."
                });
                return; }
            next();
        })
}

//Checks if any roles in the HTTP request body do not exist.
checkRole = (req, res, next) => {
    console.log("CHECKING ROLE")
    if(req.body.role) {
        for (let i = 0; i < req.body.role.length; i++) {
            //If any roles of the request body do not exist, send an error, otherwise call next()
            if (!db.roles.includes(req.body.role[i])) {
                res.status(400).send({
                    message: "Role (" + req.body.role[i] + ") does not exist."
                });
                return
            }
        }
    }
    next();
}

const verifySignup = {
    checkDuplicateUser: checkDuplicateUser,
    checkRole: checkRole
}

module.exports = verifySignup;