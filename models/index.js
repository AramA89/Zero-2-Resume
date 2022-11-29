// IMPORT//
const User = require("./User");
const Resume = require("./Resume");


Resume.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Resume, {
foreignKey: "user_id",
onDelete: "CASCADE",
});

module.exports = { User, Resume };
