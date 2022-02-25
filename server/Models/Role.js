const Sequelize = require('sequelize');


module.exports = (db) => {
    const Role = db.define('User', {
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

    return Role
};