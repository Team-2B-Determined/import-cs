const {db} = require('../Database/db')
const History = require('../Models/Setting')(db)

//Implement CRUD for settings
const controllerHistory = {
    createHistory: createHistory,
    retrieveHistory: retrieveHistory,
    updateHistory: updateHistory,
    deleteHistory: deleteHistory
}

function createHistory(req, res) {
    let newHistory = new History(req.body);
    newHistory.save()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function retrieveHistory(req, res) {
    History.findByPk(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error)
        })
}

function updateHistory(req, res) {
    let updatedHistory = {
        queue: req.body.queue,
        feature: req.body.feature
    }
    History.update(updatedHistory, { where: { id: req.params.id }})
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error)
        })
}

function deleteHistory(req, res) {
    History.destroy({ where: { id: req.params.id}})
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = controllerHistory;