const {db} = require("../Database/db");
const User = require("../Models/User")(db);
const Role = require("../Models/Role")(db);
const bcrypt = require('bcryptjs')
const Op = require('sequelize')


//Creates a new user and saves to database
signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

        // Finds all roles attached to the HTTP requests, and assigns them to the user
        .then(user => {
            if (req.body.roles) {
                Role.findAll({
                    where: {
                        roleName: { [Op.or]: req.body.roles }
                    }
                })
                    .then()(roles => {
                        user.setRoles(roles)
                            .then(() => { res.send({ message: "User was registered successfully!"}); })
                    })
            }
        })
        .catch(err => { res.status(500).send({ message: err.message}); });
};

signin = (req, res) => {
    User.findOne({
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

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 //24 hours
            });

            let authorities = [];
            user.getRoles()
                .then(roles => {
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
                })
        })
};

const controllerAuth = {
    signup: signup,
    signin: signin
};

module.exports = controllerAuth;