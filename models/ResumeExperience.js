const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ResumeExperience extends Model {}

ResumeExperience.init(
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

    WorkExperience_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "WorkExperience",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "ResumeExperience",
  }
);

module.exports = ResumeExperience;
