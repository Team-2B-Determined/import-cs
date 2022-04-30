const { Sequelize } = require('sequelize');
require("dotenv").config();

const devConfig = require('../Config/config.db')
const proConfig = process.env.DATABASE_URL; //heroku addons
connectionString = process.env.NODE_ENV === "production" ? proConfig : devConfig

//Initialize sequelize connection to database
const sequelize = new Sequelize(connectionString, {
  dialectOptions: { ssl: {rejectUnauthorized: false}},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//Test connection
sequelize.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


/// CREATE DB MODULE ///
const db = {}

db.Sequelize = Sequelize //Sequelize library
db.sequelize = sequelize //Sequelize db connection

db.users = require('./User')(sequelize)
db.settings = require('./Setting')(sequelize)
db.history = require('./HistoryEntry')(sequelize)


/// ASSOCIATIONS ///
//Setting -> User
db.users.hasOne(db.settings);
db.settings.belongsTo(db.users);

//*History -> User
db.users.hasMany(db.history);
db.history.belongsTo(db.users);


//Synchronizes database to model definitions
db.sequelize.sync()
    .then(() => {console.log("Synchronization completed.")})
    .catch(err => {console.log(err)})

module.exports.db = db;