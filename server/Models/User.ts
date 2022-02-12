export {}
const {DataTypes} = require('sequelize');
const db = require('../dataAccess/db-sequelize');
const historyEntry = require('./HistoryEntry');
const font = require('./Font');
const keyboardMaps = require('./KeyboardMaps')


const User = db.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        accountCreated: {
            type: DataTypes.DATE,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        darkMode: {
            type: DataTypes.BOOLEAN
        }},

    {
        db,
        modelName: 'User',
        timestamps: true
    }
);


User.hasMany(historyEntry, {
    foreignKey: 'user_id'
});
User.hasOne(font, {
    foreignKey: 'user_id'
});
User.hasOne(keyboardMaps, {
    foreignKey: 'user_id'
});

export default User;