'use strict';

import moment from "moment";
import { Sequelize, Model, DataTypes } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
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
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      allowNull: false,
      defaultValue: "Pending",
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'users',
  });


  User.beforeCreate((user: any) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });

  User.beforeUpdate((user: any) => {
    user.dataValues.updatedAt = moment().unix();
  })

  return User;
};