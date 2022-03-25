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
                    where: {userId: user.id}
                })
                    .then (setting => {
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
        User.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                //No user, return message
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                    })
                }
                Setting.findOne({where: {userId: user.id}})
                    .then(setting => {
                        //User has no custom settings, create new settings, update font
                        if(setting === null) {
                            Setting.create({
                                font: req.body.font,
                                userId: user.id
                            })
                                .then(() => {res.send({ message: "Settings retrieved successfully" })})
                                .catch(err => {res.status(500).send({message: err.message})})
                        }
                        //User already has settings, retrieve and update font
                        else {
                            setting.font = req.body.font
                        }
                    })
                    .catch(err => {res.status(500).send({message: err.message})})
            })
            .catch(err => {res.status(500).send({message: err.message})})
    }

    function updateKeyboard(req, res) {

    }

    module.exports = controllerSettings;