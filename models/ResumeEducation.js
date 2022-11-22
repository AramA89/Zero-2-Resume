const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ResumeEducation extends Model {}

ResumeEducation.init(
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

    Education_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Education",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "ResumeEducation",
  }
);

module.exports = ResumeEducation;
