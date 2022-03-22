const express = require('express');
const router = express.Router();

const settingController = require('../Controllers/Controller.Settings')


/// SETTING ROUTES ///
//Retrieves settings for user, returns error response if no settings
router.get('/retrieve', settingController.retrieveSetting)

//Update settings for user, creates new settings/keyboard maps if needed
router.post('/update', settingController.updateSetting)

module.exports = router;

