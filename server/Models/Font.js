export {}
const {DataTypes} = require('sequelize');
const {db} = require('../Database/db');
const user = require('./User');


const Font1 = db.define('Font', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }},

    {
        db,
        modelName: 'Font'
    }
);

Font1.belongsTo(user);

module.exports.Font = Font1;