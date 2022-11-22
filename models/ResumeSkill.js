const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ResumeSkill extends Model {}

ResumeSkill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Resume_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Resume",
        key: "id",
      },
    },

    Skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Skills",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "ResumeSkill",
  }
);

module.exports = ResumeSkill;
