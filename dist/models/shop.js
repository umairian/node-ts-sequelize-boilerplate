'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Shop extends sequelize_1.Model {
        static associate(models) {
            Shop.belongsTo(models.Users, {
                as: "user",
                foreignKey: "fk_user_id",
                targetKey: "id"
            });
        }
    }
    Shop.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        fk_user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
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
        modelName: 'shops',
    });
    Shop.beforeCreate((shop) => {
        shop.dataValues.createdAt = (0, moment_1.default)().unix();
        shop.dataValues.updatedAt = (0, moment_1.default)().unix();
    });
    Shop.beforeUpdate((shop) => {
        shop.dataValues.updatedAt = (0, moment_1.default)().unix();
    });
    return Shop;
};
