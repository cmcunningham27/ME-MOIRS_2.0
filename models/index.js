const User = require('./User');
const Role = require('./Role');

Role.belongsToMany(User, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});