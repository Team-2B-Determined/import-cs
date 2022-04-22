const express = require('express');
const router = express.Router();

const settingController = require('../Controllers/Controller.Settings')


/// SETTING ROUTES ///
//Retrieves settings for user, returns error response if no settings
router.post('/retrieve', settingController.retrieveSetting)

//Update the font in the settings
router.post('/update/font', settingController.updateFont)

//Update the keyboard in the settings
router.post('/update/keyboard', settingController.updateKeyboard)

module.exports = router;

