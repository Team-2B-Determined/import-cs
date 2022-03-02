const express = require('express');
const router = express.Router();

const settingController = require('../Controllers/Controller.Settings')


/// SETTING ROUTES ///

//Creates a new setting
router.post('/', settingController.createSetting)

//Retrieves setting based on id
router.get('/:id', settingController.retrieveSetting)

//Updates setting
router.put('/:id', settingController.updateSetting)

//Delete setting
router.delete('/:id', settingController.deleteSetting)

module.exports = router;