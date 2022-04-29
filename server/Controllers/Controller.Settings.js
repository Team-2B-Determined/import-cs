const {db} = require("../Models/db");

//Implement CRUD for settings
const controllerSettings = {
    retrieveSetting: retrieveSetting,
    updateFont: updateFont,
    updateKeyboard: updateKeyboard
}
    function retrieveSetting(req, res) {
        db.users.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                    })
                }
                db.settings.findOne({
                    where: {UserId: user.id}
                })
                    .then (setting => {
                        if (setting === null) {
                            return res.status(200).send({
                                darkMode: false,
                                font: JSON.stringify({
                                    family: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                                    fSize: "1.0rem"
                                }),
                                keyboardMap: JSON.stringify({KeyBindString: "alt+1,alt+2,alt+3,alt+4,alt+8,alt+9,alt+0",
                                    KeyBindDict: {
                                        algorithms: "alt+1",
                                        computations: "alt+2",
                                        datastructures: "alt+3",
                                        conversions: "alt+4",
                                        account: "alt+8",
                                        history: "alt+9",
                                        home: "alt+0"}})
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
        db.users.findOne({
            where: {email: req.body.email}
        })
            .then(user => {
                //No user, return message
                if (user === null) {
                    return res.status(404).send({
                        message: "User not found"
                })}

                db.settings.findOrCreate({
                    where: {UserId: user.id},
                    include: [{model: db.users}]
                })
                    .then(([setting, created]) => {
                        setting.update(({font: req.body.font}))
                            .then(res.status(200).send({ message: "KeyboardMap updated" }))
                            .catch(err => {res.status(500).send({message: err.message})})
                    })

            })
            .catch(err => {res.status(500).send({message: err.message})})
    }




    function updateKeyboard(req, res) {
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
                db.settings.findOrCreate({
                    where: {UserId: user.id},
                    include: [{model: db.users}]
                })
                    .then(([setting, created]) => {
                        setting.update(({keyboardMap: req.body.keyboard}))
                            .then(res.status(200).send({ message: "KeyboardMap updated" }))
                            .catch(err => {res.status(500).send({message: err.message})})
                    })
            })
            .catch(err => {res.status(500).send({message: err.message})})
    }

    module.exports = controllerSettings;