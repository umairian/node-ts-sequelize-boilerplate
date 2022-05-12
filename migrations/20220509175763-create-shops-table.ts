'use strict';

import { DataTypes } from "sequelize";
import { QueryInterface } from "sequelize/types";

const table: string = "shops";

module.exports = {
  async up (queryInterface: QueryInterface) {
    return queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fk_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
  },

  async down (queryInterface: QueryInterface) {
    return queryInterface.dropTable(table);
  }
};
