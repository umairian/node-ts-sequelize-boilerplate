import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize/types";
import moment from "moment";

export default (sequelize: Sequelize) => {
    const Shop = sequelize.define("shops", {
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

    Shop.beforeCreate((shop: any) => {
      shop.dataValues.createdAt = moment().unix();
      shop.dataValues.updatedAt = moment().unix();
    });
    
    Shop.beforeUpdate((shop: any) => {
      shop.dataValues.updatedAt = moment().unix();
    });

    return Shop;
};