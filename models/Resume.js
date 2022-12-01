//DEPENDENCY & IMPORT//
const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Resume extends Model {}

//RESUME MODEL//
Resume.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    contactInfo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    workExperience: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    education: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    skills: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    modelName: "resume",
});

module.exports = Resume;