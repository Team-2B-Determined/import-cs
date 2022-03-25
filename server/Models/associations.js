// to rebuild database:
// 1) Drop tables if need be
// 2) Run this file with the associations commented out to create the tables.
// 3) Run this file again with the associations to create them.

const {db} = require("./db");
const User = require('./User')(db);
const Setting = require('./Setting')(db);
const HistoryEntry = require('./HistoryEntry')(db);
const Role = require('./Role')(db);

/// ASSOCIATIONS ///
//Setting -> User
User.hasOne(Setting, {
    foreignKey: {
        allowNull: true
    }
});
Setting.belongsTo(User);

//*HistoryEntry -> User
User.hasMany(HistoryEntry, {
    foreignKey: {
        allowNull: false
    }
});
HistoryEntry.belongsTo(User)

//*User -> Role
Role.belongsToMany(User, {through: 'User_Profiles'})
User.belongsToMany(Role, {through: 'User_Profiles'})


/// SYNCHRONIZATION ///
User.sync({force: false, alter: true});
Setting.sync({force: false, alter: true});
HistoryEntry.sync({force: false, alter: true});
Role.sync({force: true, alter: true});



