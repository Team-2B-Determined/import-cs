export {}
const {DataTypes} = require('sequelize');
const db = require('../../../db-sequelize');
const user = require('./User');


const KeyboardMaps = db.define('KeyboardMaps', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    home: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    algorithms: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    computations: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    conversions: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    dataStructures: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    history: {
        type: DataTypes.CHAR,
        allowNull: true
    }},

    {
        db,
        modelName: 'KeyboardMaps',
    }
);

KeyboardMaps.belongsTo(user);

module.exports.KeyboardMaps = KeyboardMaps;