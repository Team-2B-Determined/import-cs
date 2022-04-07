const express = require('express');
const router = express.Router();

const historyController = require('../Controllers/Controller.History')


/// SETTING ROUTES ///
//Retrieves all history for user
router.get('/retrieve', historyController.retrieve)

//Update the font in the settings
router.post('/update', historyController.update)



module.exports = router;