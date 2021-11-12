const Sequelize = require('sequelize');
const sequelize = new Sequelize('admin', 'admin', 'admin', {dialect: 'mysql', host: 'mysql'});

module.exports = sequelize;