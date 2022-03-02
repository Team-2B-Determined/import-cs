const jwt = require("jsonwebtoken");
const {db} = require("../Database/db");
const User = require("../Models/User")(db);


const key = require('../Config/config.auth')


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]

    //If there is no token, return error
    if (!token) {
        return res.status(403).send({
            message: "No token provided in HTTP request."
        });
    }

    //Verify token using jwt library
    jwt.verify(token, key, (err, decoded) => {
        if(err) {
            return res.status(401).send({message: "Token is unauthenticated."});
        }
        req.userId = decoded.id;
        next();
    })
};

//Retrieves the user's list of roles, and checks if one of them is the 'admin' role
//Need to implement user.getRoles() to retrieve a list of their roles.
isAdmin = (req, res, next) => {
    User.findByPk(req.body.id)
        .then(user => {
            user.getRoles()
                .then(roles => {
                    for(let i = 0; i < roles.length; i++) {
                        if (roles[i].roleName === 'admin') {
                            next();
                            return;
                        }
                    }
                    res.status(403).send({
                        message: "User does not have an authorized role."
                    })
                })
        })
};

const tokenAuth = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};

module.exports = tokenAuth;