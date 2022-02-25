const db = require('../Models');
const User = db.user;
const Role = db.role;

const verifySignup = {
    checkDuplicateUser: checkDuplicateUser,
    checkRole: checkRole
}

//Checks if there is a user with the same email already
//If so, returns an error message
checkDuplicateUser = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email }
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
    if(req.body.role) {
        for (let i = 0; i < req.body.role.length; i++) {
            //If any roles of the request body do not exist, send an error, otherwise call next()
            if (!Role.includes(req.body.role[i])) {
                res.status(400).send({
                    message: "Role (" + req.body.role[i] + ") does not exist."
                });
                return
            }
        }
    }
    next();
}

module.exports = verifySignup;