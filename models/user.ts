import { DataTypes, Sequelize } from "sequelize";
import moment from "moment";

export default (sequelize: Sequelize) => {
    const User = sequelize.define("users", {
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
    });

    User.beforeCreate((user: any) => {
        user.dataValues.createdAt = moment().unix();
        user.dataValues.updatedAt = moment().unix();
      });
    
      User.beforeUpdate((user: any) => {
        user.dataValues.updatedAt = moment().unix();
      });

    return User;
};