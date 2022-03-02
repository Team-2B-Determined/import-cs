const {db} = require('../Database/db')
const Setting = require('../Models/Setting')(db)

//Implement CRUD for settings
const controllerSettings = {
    createSetting: createSetting,
    retrieveSetting: retrieveSetting,
    updateSetting: updateSetting,
    deleteSetting: deleteSetting
}

    function createSetting(req, res) {
        let newSetting = new Setting(req.body);
        newSetting.save()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function retrieveSetting(req, res) {
        Setting.findByPk(req.params.id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function updateSetting(req, res) {
        let updatedSetting = {
            font: req.body.font,
            fontSize: req.body.fontSize,
            darkMode: req.body.darkMode
        }
        Setting.update(updatedSetting, { where: { id: req.params.id }})
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function deleteSetting(req, res) {
        Setting.destroy({ where: { id: req.params.id}})
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    module.exports = controllerSettings;