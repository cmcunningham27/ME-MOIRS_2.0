const sequelize = require('../config/db.config');
const { User, Role } = require('../models');

const userSeedData = require('./userSeedData.json');
const roleSeedData = require('./roleSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData);

    await Role.bulkCreate(roleSeedData);

    process.exit(0);
};

seedDatabase();