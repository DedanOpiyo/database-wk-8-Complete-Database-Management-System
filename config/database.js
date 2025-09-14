const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'clinic_booking',      // Database name
  process.env.DB_USER || 'root',                // Database user
  process.env.DB_PASSWORD || 'password1234',    // Database password
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,          // Port
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: console.log,                       // Enable logging
  }
);

module.exports = sequelize;
