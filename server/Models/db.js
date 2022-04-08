const { Sequelize } = require('sequelize');
require("dotenv").config();


//Once we are in production, change devConfig to connect to a different database
const devConfig = "postgres://mrvuwwyisjimno:e714cf015e8c52869c218cd902d152ae90d7b13f7d13302b852c26c4f87215b3@ec2-34-203-114-67.compute-1.amazonaws.com:5432/d2o4rot4olu8hs";
const proConfig = process.env.DATABASE_URL; //heroku addons

connectionString = process.env.NODE_ENV === "production" ? proConfig : devConfig


const sequelize = new Sequelize(connectionString, {
  dialectOptions: { ssl: {rejectUnauthorized: false}},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

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


db.sequelize.sync()
    .then(() => {console.log("Synchronization completed.")})
    .catch(err => {console.log(err)})

module.exports.db = db;