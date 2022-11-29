//DEPENDENCIES & IMPORTS//
const sequelize = require("../config/connection");
const User = require("../models/User");
const Resume = require("../models/Resume");
const userData = require("./userSeeds.json");
const resumeData = require("./resumeSeeds.json");

//CREATE TABLES & SEED FOR TESTING//
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });

    await Resume.bulkCreate(resumeData, {
    individualHooks: true,
    returning: true,
    });

    process.exit(0);
};

seedDatabase();