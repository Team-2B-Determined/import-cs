const Sequelize = require('sequelize');

module.exports = (db) => {
    return db.define('Setting', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                get() { return this.getDataValue('id')}
            },

            font: {
                type: Sequelize.STRING,
                get() { return this.getDataValue('font')},
                set(value) { this.setDataValue('font', value)}
            },

            fontSize: {
                type: Sequelize.INTEGER,
                get() { return this.getDataValue('fontSize')},
                set(value) { this.setDataValue('fontSize', value)}
            },

            darkMode: {
                type: Sequelize.BOOLEAN,
                get() { return this.getDataValue('darkMode')},
                set(value) { this.setDataValue('darkMode', value)}
            }},

        //OPTIONS
        {
            db: db,
            timestamps: false
        });
};