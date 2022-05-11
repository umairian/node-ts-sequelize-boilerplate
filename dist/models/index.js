"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../config"));
const lodash_1 = require("lodash");
const sequelize_1 = require("sequelize");
const basename = path_1.default.basename(__filename);
const db = {};
let sequelize = new sequelize_1.Sequelize(config_1.default.get("db.name"), config_1.default.get("db.username"), config_1.default.get("db.password"), {
    host: config_1.default.get("db.host"),
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 120 * 1000,
    },
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
fs_1.default.readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js");
})
    .forEach((file) => {
    let model = require(path_1.default.join(__dirname, file));
    model = model(sequelize);
    let name = (0, lodash_1.upperFirst)((0, lodash_1.camelCase)(model.name));
    db[name] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
