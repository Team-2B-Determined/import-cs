const {Client} = require('pg');
const { Sequelize } = require('sequelize');
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };


const devConfig = "postgres://mrvuwwyisjimno:e714cf015e8c52869c218cd902d152ae90d7b13f7d13302b852c26c4f87215b3@ec2-34-203-114-67.compute-1.amazonaws.com:5432/d2o4rot4olu8hs";
const proConfig = process.env.DATABASE_URL; //heroku addons


const db = new Sequelize(devConfig, {
  dialectOptions: { ssl: {rejectUnauthorized: false}},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


/*
const pool = new Client({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
  ssl: {
    rejectUnauthorized: false
  }
});
pool.connect();
module.exports.pool = pool;
console.log(process.env.NODE_ENV)
*/

module.exports.db = db;