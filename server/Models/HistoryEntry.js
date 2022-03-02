const Sequelize = require('sequelize');

module.exports = (db) => {
    return db.define('HistoryEntry', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            queue: {
                type: Sequelize.INTEGER
            },

            feature: {
                type: Sequelize.STRING,
                allowNull: false
            }},

        //OPTIONS//
        {
            db: db,
            timestamps: true
        });
}