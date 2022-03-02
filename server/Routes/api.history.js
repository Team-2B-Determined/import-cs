const express = require('express');
const router = express.Router();

const historyController = require('../Controllers/Controller.History')


/// SETTING ROUTES ///

//Creates new history
router.post('/', historyController.createHistory)

//Retrieves history based on id
router.get('/:id', historyController.retrieveHistory)

//Updates history
router.post('/:id', historyController.updateHistory)

//Delete history
router.post('/:id', historyController.deleteHistory)

module.exports = router;