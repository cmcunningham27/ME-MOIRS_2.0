const User = require('./User');
const Role = require('./Role');
const Image = require('./Image');

User.hasMany(Image, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Role.belongsToMany(User, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

User.belongsToMany(Role, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});

ROLES = ['user', 'admin', 'moderator'];

module.exports = { User, Role, ROLES, Image }