export {}
const {DataTypes} = require('sequelize');
const {db} = require('../Database/db');
const user = require('./User');


const HistoryEntry = db.define('HistoryEntry', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    queue: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    feature: {
        type: DataTypes.STRING,
        allowNull: false
    }},

    {
        db,
        timestamps: true
    }
);


module.exports.HistoryEntry = HistoryEntry;