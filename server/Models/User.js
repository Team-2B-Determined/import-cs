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
            allowNull: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: true
        }},

    {
        db: db,
        tableName: 'users',
        modelName: 'HistoryEntry',
        timestamps: true
        //timestamps: true => requires 'createdAt' & 'updatedAt' column

    }
);

/*
User.hasMany(historyEntry, {
    foreignKey: 'user_id'
});
User.hasOne(font, {
    foreignKey: 'user_id'
});
User.hasOne(keyboardMaps, {
    foreignKey: 'user_id'
});
*/
//const x = User.sync({force: true});
//const jane = User.create({ email: "Jane"});
//const fred = User.create({ email: "Fred"});

//sequelize define returns the model to User
console.log(User === db.models.User)

module.exports.user = User;
