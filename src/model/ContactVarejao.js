const Sequelize = require('sequelize');
const database = require('../config/dbpost');


const Contacts = database.define('contacts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})


module.exports = Contacts;