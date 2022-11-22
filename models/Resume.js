const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Resume extends Model {}

Resume.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Contact_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ContactInfo",
        key: "id",
      },
    },

    Summary_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Summary",
        key: "id",
      },
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
    modelName: "Resume",
  }
);

module.exports = Resume;
