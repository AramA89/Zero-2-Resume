const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Education extends Model {}

Education.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    School_Name: {
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
    Degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Graduation_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Currently_enrolled: {
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
    modelName: "Education",
  }
);

module.exports = Education;
