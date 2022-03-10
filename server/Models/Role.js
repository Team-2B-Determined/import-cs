const Sequelize = require('sequelize');


module.exports = (db) => {
    return db.define('Role', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                get() { return this.getDataValue('id')}
            },

            roleName: {
                type: Sequelize.STRING,
                allowNull: false,
                get() { return this.getDataValue('roleName')},
                set(value) { this.setDataValue('roleName', value)}
            }},

        //OPTIONS//
        {
            db: db,
            timestamps: true    //Establishes 'createdAt' & 'updatedAt' column
        });
};