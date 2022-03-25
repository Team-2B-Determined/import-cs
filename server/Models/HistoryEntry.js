const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('HistoryEntry', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                get() { return this.getDataValue('id')}
            },

            queue: {
                type: Sequelize.INTEGER,
                get() { return this.getDataValue('queue')},
                set(value) { this.setDataValue('queue', value)}
            },

            feature: {
                type: Sequelize.STRING,
                allowNull: false,
                get() { return this.getDataValue('feature')},
                set(value) { this.setDataValue('feature', value)}
            }},
        //OPTIONS//
        {
            timestamps: true
        });
}