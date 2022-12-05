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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        employer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dates_worked: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skill_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skill_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skill_3: {
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