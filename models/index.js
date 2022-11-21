const User = require("./User");
const ContactInfo = require("./ContactInfo");
const Education = require("./Education");
const Skills = require("./Skills");
const Summary = require("./Summary");
const WorkExperience = require("./WorkExperience");

//create associations
User.hasMany(ContactInfo, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
User.hasMany(Education, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
User.hasMany(Skills, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
User.hasMany(Summary, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
User.hasMany(WorkExperience, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

ContactInfo.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Education.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
Skills.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
Summary.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
WorkExperience.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

module.exports = {
  User,
  ContactInfo,
  Education,
  Skills,
  Summary,
  WorkExperience,
};
