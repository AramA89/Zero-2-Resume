const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class WorkExperience extends Model {}

WorkExperience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Job_Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Start_Date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    End_Date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Currently_working: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "WorkExperience",
  }
);

module.exports = WorkExperience;
