const {db} = require('../Database/db')
const Setting = require('../Models/Setting')(db)

//Implement CRUD for settings
const controllerSettings = {
    retrieveSetting: retrieveSetting,
    updateFont: updateFont,
    updateKeyboard: updateKeyboard
}
    function retrieveSetting(req, res) {
        //Checks if user has settings.
            //True: Retrieve all settings. Check if user has Keyboard Maps
                //True: Retrieve them
                //False: leave fields empty
            //False: return empty fields (rather than error response)
    }

    function updateFont(req, res) {
        //Checks if user has settings.
            //True: Update them.
            //False: Create settings entry with the info in req.body
        //Check if user has keyboard map
            //True: update them
            //False: Create keyboard map entry with info in req.body


    }

    function updateKeyboard(req, res) {

    }

    module.exports = controllerSettings;