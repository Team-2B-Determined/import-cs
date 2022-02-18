export {}
const {DataTypes} = require('sequelize');
const {db} = require('../Database/db');
const user = require('./User');


const Setting = db.define('Setting', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        font: {
            type: DataTypes.STRING
        },

        fontSize: {
            type: DataTypes.INTEGER
        },

        darkMode: {
            type: DataTypes.BOOLEAN
        }},

    {
        db
    }
);

//Setting.belongsTo(user);

module.exports.Font = Font1;