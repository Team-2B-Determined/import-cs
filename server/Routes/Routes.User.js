const express = require('express');
const router = express.Router();

const userController = require('../Controllers/Controller.User')


/// USER ROUTES ///

//Creates a new user
router.post('/', userController.createUser)

//Retrieves user based on id
router.get('/:id', userController.retrieveUser)

//Updates user
router.put('/:id', userController.updateUser)

//Deletes user
router.delete('/:id', userController.deleteUser)

module.exports = router;