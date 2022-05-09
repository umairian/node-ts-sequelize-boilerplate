import fs from "fs";
import path from "path";
import sequelizeImport from "sequelize";
import config from "../config";
import { camelCase, upperFirst } from "lodash";
const basename = path.basename(__filename);
const db: any = {};

let sequelize = new sequelizeImport.Sequelize(
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
    logging: process.env.NODE_ENV === "test" ? false : true,
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
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = path.join(__dirname, file);
    let name: string = upperFirst(camelCase(model));
    db[name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = sequelizeImport;

module.exports = db;
