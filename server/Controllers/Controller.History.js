const {db} = require("../Models/db");

//Implement CRUD for settings
const historyController = {
    retrieve: retrieve,
    update: update
}
function retrieve(req, res) {
    db.users.findOne({
        where: {email: req.body.email}
    })
        .then(user => {
            if (user === null) {
                return res.status(404).send({
                    message: "User not found"
                })
            }
            db.history.findAll({
                where: {UserId: user.id}
            })
                .then (history => {
                    if (history === null) {
                        return res.status(200).send({
                            history: []
                        })
                    }
                    res.status(200).send({
                        history: history
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

function update(req, res) {
    db.users.findOne({
        where: {email: req.body.email}
    })
        .then(user => {
            //No user, return message
            if (user === null) {
                return res.status(404).send({
                    message: "User not found"
                })}

            db.history.create({
                feature: req.body.feature,
                input: req.body.input,
                link: req.body.historyLink,
                UserId: user.id
            })
        })
        .catch(err => {res.status(500).send({message: err.message})})
}

module.exports = historyController;