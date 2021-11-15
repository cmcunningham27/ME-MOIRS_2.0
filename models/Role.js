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
    }
)