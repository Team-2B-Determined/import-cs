const {db} = require("../Models/db");
const defaultSettings = require('../Config/config.defaultSettings')

const controllerSettings = {
    retrieveSetting: retrieveSetting,
    updateFont: updateFont,
    updateKeyboard: updateKeyboard
}

    function retrieveSetting(req, res) {
        //grabs the user
        db.users.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                    })
                }
                //grabs the users setting
                db.settings.findOne({
                    where: {UserId: user.id}
                })
                    .then (setting => {
                        //if there are no settings, send default
                        if (setting === null) {
                            return res.status(200).send({
                                darkMode: defaultSettings.darkMode,
                                font: defaultSettings.font,
                                keyboardMap: defaultSettings.keyboardMap
                            })
                        }
                        //send user's settings
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
        //grabs the user
        db.users.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                //No user, return message
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                })}
                //grabs the user's settings, or create new one
                db.settings.findOrCreate({
                    where: {UserId: user.id},
                    include: [{model: db.users}]
                })
                    //update font in database
                    .then(([setting, created]) => {
                        setting.update(({font: req.body.font}))
                            .then(res.status(200).send({ message: "Font updated" }))
                            .catch(err => {res.status(500).send({message: err.message})})
                    })

            })
            .catch(err => {res.status(500).send({message: err.message})})
    }




    function updateKeyboard(req, res) {
        //grabs the user
        db.users.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                //No user, return message
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                    })
                }
                //grabs the user's settings, or create new one
                db.settings.findOrCreate({
                    where: {UserId: user.id},
                    include: [{model: db.users}]
                })
                    //update keyboard in database
                    .then(([setting, created]) => {
                        setting.update(({keyboardMap: req.body.keyboard}))
                            .then(res.status(200).send({ message: "KeyboardMap updated" }))
                            .catch(err => {res.status(500).send({message: err.message})})
                    })
            })
            .catch(err => {res.status(500).send({message: err.message})})
    }

    module.exports = controllerSettings;