const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('HistoryEntry', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                get() { return this.getDataValue('id')}
            },

            feature: {
                type: Sequelize.STRING,
                get() { return this.getDataValue('feature')},
                set(value) { this.setDataValue('feature', value)}
            },

            input: {
                type: Sequelize.STRING,
                get() { return this.getDataValue('input')},
                set(value) { this.setDataValue('input', value)},
            },

            link: {
                type: Sequelize.STRING,
                get() { return this.getDataValue('link')},
                set(value) { this.setDataValue('link', value)}
            }},
        //OPTIONS//
        {
            timestamps: true
        });
}