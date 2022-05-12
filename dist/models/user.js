'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class User extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Shops, {
                as: "shops",
                foreignKey: "fk_user_id",
            });
        }
    }
    User.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM("Pending", "Approved", "Rejected"),
            allowNull: false,
            defaultValue: "Pending",
        },
        archived: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        createdAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        updatedAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'users',
    });
    User.beforeCreate((user) => {
        user.dataValues.createdAt = (0, moment_1.default)().unix();
        user.dataValues.updatedAt = (0, moment_1.default)().unix();
    });
    User.beforeUpdate((user) => {
        user.dataValues.updatedAt = (0, moment_1.default)().unix();
    });
    return User;
};
