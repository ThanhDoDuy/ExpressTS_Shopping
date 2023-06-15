import path from "path";
import env from "dotenv";

const ENV_FILENAME = `${process.env.NODE_ENV}.env`;
const ROOT_PATH = path.join(__dirname, "/..");
const LOG_DIRECTORY = path.join("/var/log");
console.log(ENV_FILENAME, ROOT_PATH, LOG_DIRECTORY);

// This configuration allows loading environment variables
// from an environment file using the "path" option
env.config({path: `${ROOT_PATH}/${ENV_FILENAME}`});

// Define the configurations for DB
const DATABASE_CONFIG = Object.freeze({
    HOSTNAME: process.env.DB_HOSTNAME,
    PORT: process.env.DB_PORT,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    SSH_PORT: process.env.DB_SSH_PORT,
    DBMS: "mysql"
})

export {
    DATABASE_CONFIG
}