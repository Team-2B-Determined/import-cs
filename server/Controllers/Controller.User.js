const User = require('../Models/User')

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

    }

    function updateUser(req, res) {

    }

    function deleteUser(req, res) {

    }

    module.exports = controllerUser;