const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

class Role extends Model {};

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'role',
        underscored: true,
    }
);

module.exports = Role;