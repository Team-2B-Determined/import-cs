const Sequelize = require('sequelize');


module.exports = (db) => {
    return db.define('Role', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            roleName: {
                type: Sequelize.STRING,
                allowNull: false
            }},

        //OPTIONS//
        {
            db: db,
            timestamps: true    //Establishes 'createdAt' & 'updatedAt' column
        });
};