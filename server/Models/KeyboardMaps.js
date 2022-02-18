export {}
const {DataTypes} = require('sequelize');
const {db} = require('../Database/db');
const setting = require('./Setting');


const KeyboardMap = db.define('KeyboardMap', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    page: {
        type: DataTypes.CHAR,
        primaryKey: true
    },

    key: {
        type: DataTypes.CHAR
    }},

    {
        db
    }
);


module.exports.KeyboardMaps = KeyboardMaps;