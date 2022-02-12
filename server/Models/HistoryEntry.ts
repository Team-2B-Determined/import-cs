export {}
const {DataTypes} = require('sequelize');
const db = require('../dataAccess/db-sequelize');
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
        modelName: 'HistoryEntry',
        timestamps: true
    }
);

HistoryEntry.belongsTo(user);

module.exports.HistoryEntry = HistoryEntry;