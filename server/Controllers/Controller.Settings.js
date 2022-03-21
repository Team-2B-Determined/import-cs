const {db} = require('../Database/db')
const Setting = require('../Models/Setting')(db)

//Implement CRUD for settings
const controllerSettings = {
    retrieveSetting: retrieveSetting,
    updateSetting: updateSetting,
}
    function retrieveSetting(req, res) {
        //Checks if user has settings.
            //True: Retrieve all settings. Check if user has Keyboard Maps
                //True: Retrieve them
                //False: leave fields empty
            //False: return empty fields (rather than error response)
    }

    function updateSetting(req, res) {
        //Checks if user has settings.
            //True: Update them.
            //False: Create settings entry with the info in req.body
        //Check if user has keyboard map
            //True: update them
            //False: Create keyboard map entry with info in req.body


    }

    module.exports = controllerSettings;