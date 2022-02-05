export {}
const {DataTypes} = require('sequelize');
const db = require('../../../db-sequelize');
const user = require('./User');


const Font = db.define('Font', {
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

Font.belongsTo(user);

module.exports.Font = Font;