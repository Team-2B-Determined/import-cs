const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres://mrvuwwyisjimno:e714cf015e8c52869c218cd902d152ae90d7b13f7d13302b852c26c4f87215b3@ec2-34-203-114-67.compute-1.amazonaws.com:5432/d2o4rot4olu8hs', {
    host: '185.245.87.24',
    port: '5432',
    dialect: 'postgres',
    dialectOptions: { ssl: {rejectUnauthorized: false}}
});