const User = require('./User');
const Role = require('./Role');

// Role.belongsToMany(User, {
//     through: 'user_roles',
//     foreignKey: 'roleId',
//     otherKey: 'userId'
// });

// User.belongsToMany(Role, {
//     through: 'user_roles',
//     foreignKey: 'userId',
//     otherKey: 'roleId'
// });

// User.hasMany(Image, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Image.belongsTo(User), {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// };

// ROLES = ['user', 'admin', 'moderator'];
// ROLES, Role,
module.exports = { User, Image }