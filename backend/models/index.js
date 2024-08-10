const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize("demo", "postgres", "postgres", {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
  port: 5433,
});

async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Order = require("./Order")(sequelize, DataTypes);
db.Retailer = require("./Retailer")(sequelize, DataTypes);

db.sequelize.sync({ force: false, logging: false });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
