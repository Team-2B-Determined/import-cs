const {db} = require("../Database/db");
const User = require("../Models/User")(db);
const Setting = require('../Models/Setting')(db)

//Implement CRUD for settings
const controllerSettings = {
    retrieveSetting: retrieveSetting,
    updateFont: updateFont,
    updateKeyboard: updateKeyboard
}
    function retrieveSetting(req, res) {
        User.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                    })
                }
                Setting.findOne({
                    where: {user: user}
                })
                    .then ( (setting) => {
                        if (setting === null) {
                            return res.status(200).send({
                                darkMode: false,
                                font: JSON.stringify(null),
                                keyboardMap: JSON.stringify(null)
                            })
                        }
                        res.status(200).send({
                            darkMode: setting.darkMode,
                            font: setting.font,
                            keyboardMap: setting.keyboardMap
                        })
                    })
                    .catch(err => {
                        res.status(500).send({message: err.message})
                    })
            })
            .catch(err => {
                res.status(500).send({message: err.message})
            })
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