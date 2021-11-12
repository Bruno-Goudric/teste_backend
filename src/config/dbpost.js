const Sequelize = require('sequelize');
const sequelize = new Sequelize('admin', 'admin', 'admin', {
    dialect: 'postgres',
    host: "postgresql",
    port: 5432
  });

module.exports = sequelize;