const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Setting', {
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

            keyboardMap: {
                type: Sequelize.STRING,
                get() { return this.getDataValue('keyboardMap')},
                set(value) { this.setDataValue('keyboardMap', value)}
            },

            darkMode: {
                type: Sequelize.BOOLEAN,
                get() { return this.getDataValue('darkMode')},
                set(value) { this.setDataValue('darkMode', value)}
            }},
        //OPTIONS/
        {
            timestamps: false
        });
};