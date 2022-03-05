const Sequelize = require('sequelize');

module.exports = (db) => {
    return db.define('KeyboardMap', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                get() { return this.getDataValue('id')}
            },

            page: {
                type: Sequelize.STRING,
                get() { return this.getDataValue('page')},
                set(value) { this.setDataValue('page', value)}
            },

            key: {
                type: Sequelize.CHAR,
                get() { return this.getDataValue('key')},
                set(value) { this.setDataValue('key', value)}
            }},

        //OPTIONS//
        {
            db: db,
            timestamps: false
        });
};