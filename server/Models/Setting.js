const Sequelize = require('sequelize');

module.exports = (db) => {
    return db.define('Setting', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            font: {
                type: Sequelize.STRING
            },

            fontSize: {
                type: Sequelize.INTEGER
            },

            darkMode: {
                type: Sequelize.BOOLEAN
            }},

        //OPTIONS
        {
            db: db,
            timestamps: false
        });
};