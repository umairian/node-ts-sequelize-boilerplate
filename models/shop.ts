'use strict';

import moment from "moment";
import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";


module.exports = (sequelize: Sequelize) => {
  class Shop extends Model<InferAttributes<Shop>, InferCreationAttributes<Shop>> {
    
    static associate(models: any) {
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
      type: DataTypes.INTEGER
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
  }, {
    sequelize,
    modelName: 'shops',
  });


  Shop.beforeCreate((shop: any) => {
    shop.dataValues.createdAt = moment().unix();
    shop.dataValues.updatedAt = moment().unix();
  });

  Shop.beforeUpdate((shop: any) => {
    shop.dataValues.updatedAt = moment().unix();
  })

  return Shop;
};