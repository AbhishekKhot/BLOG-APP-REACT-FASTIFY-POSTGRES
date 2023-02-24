const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
if (env === "development") require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  }
);

const db = {
  Blog: require("./Blog")(sequelize, Sequelize.DataTypes),
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
