"use strict";

import fs from "fs";
import path from "path";
import config from "../config";
import { camelCase, upperFirst } from "lodash";
import { Sequelize, DataTypes } from "sequelize";
const basename = path.basename(__filename);
const db: any = {};

let sequelize: Sequelize = new Sequelize(
  config.get("db.name"),
  config.get("db.username"),
  config.get("db.password"),
  {
    host: config.get("db.host"),
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 120 * 1000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file: string) => {
    let model = require(path.join(__dirname, file));
    model = model(sequelize);
    let name = upperFirst(camelCase(model.name));
    db[name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
