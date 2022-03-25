const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return User =  sequelize.define('User', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                get() { return this.getDataValue('id')}
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                get() { return this.getDataValue('email')},
                set(value) { this.setDataValue('email', value)}
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false,
                get() { return this.getDataValue('password')},
                set(value) { this.setDataValue('password', value)}
            }},
        //OPTIONS//
        {
            timestamps: true    //Establishes 'createdAt' & 'updatedAt' column
        });
};