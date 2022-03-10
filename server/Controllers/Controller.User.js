const {db} = require("../Database/db");
const User = require("../Models/User")(db);


//Standard Promise
/*
.then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
 */

//Implement CRUD for users
const controllerUser = {
    createUser: createUser,
    retrieveUser: retrieveUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}

    function createUser(req, res) {
        let newUser = new User(req.body);
        newUser.save()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    function retrieveUser(req, res) {
        User.findByPk(req.params.id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function updateUser(req, res) {
        let updatedUser = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        User.update(updatedUser, { where: { id: req.params.id }})
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function deleteUser(req, res) {
        User.destroy({ where: { id: req.params.id}})
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    module.exports = controllerUser;