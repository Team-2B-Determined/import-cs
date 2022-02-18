const {DataTypes} = require('sequelize');
const {db} = require('../Database/db');
/*
const historyEntry = require('./HistoryEntry');
const font = require('./Font');
const keyboardMaps = require('./KeyboardMaps')
*/

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

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false
        }},

    {
        db: db,
        timestamps: true    //Establishes requires 'createdAt' & 'updatedAt' column

    }
);

/*
User.hasMany(historyEntry, {
    foreignKey: 'user_id'
});
User.hasOne(font, {
    foreignKey: 'user_id'
});
*/

const x = User.sync({force: false, alter: true});   //This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.



module.exports.user = User;
