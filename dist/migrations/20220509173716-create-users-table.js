'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const table = "users";
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.createTable(table, {
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
            });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.dropTable(table);
        });
    }
};
