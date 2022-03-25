const {db} = require("../Models/db");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Op = require('sequelize')

const secret = require('../Config/config.auth')



//Creates a new user and saves to database
signup = (req, res) => {
    console.log('SIGNUP CONTROLLER FUNCTION')
    db.users.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

//TODO Add roles from req.body.roles to User
        .then(() => {res.send({ message: "User was registered successfully!" })})
        .catch(err => { res.status(500).send({ message: err.message})})
};

signin = (req, res) => {
    db.users.findOne({
        where: {email: req.body.email} })

        //Checks the validity of login info, and returns the user information + jwt token
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "Email not found."});
            }

            //Compares hash of 'pw in request' and 'pw stored in database
            let validPassword = bcrypt.compareSync(req.body.password, user.password)
            if (!validPassword) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid password."
                });
            }
            let token = jwt.sign({ id: user.id }, secret.key, {
                expiresIn: 86400 //24 hours
            });

            let authorities = [];
            res.status(200).send({
                        id: user.id,
                        email: user.email,
                        roles: authorities,
                        accessToken: token
            })
            //TODO attach role information
                /*
            user.getRoles()
                .then(roles => {
                    console.log("Checkpoint 3")
                    for (let i = 0; i < roles.length; i++) {
                        authorities.push("ROLE_" + roles[i].roleName.toUpperCase());
                    }
                    res.status(200).send({
                        id: user.id,
                        email: user.email,
                        roles: authorities,
                        accessToken: token
                    });
                })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                })*/
        })};

const controllerAuth = {
    signup: signup,
    signin: signin
};

module.exports = controllerAuth;