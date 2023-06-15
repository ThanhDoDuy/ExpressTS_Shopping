import fs from "fs";
import path from "path";
import {Sequelize, DataType, DataTypes} from "sequelize";
import dotenv from "dotenv";
import {DATABASE_CONFIG} from "../utils/constants";

dotenv.config();

const basename: string = path.basename(__filename);
const db: any = {};
let sequelize: Sequelize;

sequelize = new Sequelize(
    DATABASE_CONFIG.HOSTNAME as string,
    DATABASE_CONFIG.USERNAME as string,
    DATABASE_CONFIG.PASSWORD as string,
    {
        host: DATABASE_CONFIG.SSH_PORT as string,
        dialect: DATABASE_CONFIG.DBMS
    }
);

// read all db models
fs.readdirSync(__dirname)
.filter(file => {
    return (
        file.indexOf(".") !== 0 &&
        file !== basename &&
        file.slice(-3) === ".ts" &&
        file.indexOf(".test.ts") === -1
    );
})
.forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
})