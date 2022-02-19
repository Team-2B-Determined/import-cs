const Sequelize = require('sequelize');

module.exports = (db) => {
    const KeyboardMap = db.define('KeyboardMap', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            page: {
                type: Sequelize.STRING
            },

            key: {
                type: Sequelize.CHAR
            }},

        //OPTIONS//
        {
            db: db,
            timestamps: false
        });

    return KeyboardMap
};