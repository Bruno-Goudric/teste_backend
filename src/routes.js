const express = require('express')

const ClientMacapaController = require('./controllers/ClientMacapa');
const ClientVarejaoController = require('./controllers/ClientVarejao');


const routes = express.Router()

routes.post('/client_macapa', ClientMacapaController.createmacapa)
routes.post('/client_varejao', ClientVarejaoController.createvarejao)


module.exports = routes