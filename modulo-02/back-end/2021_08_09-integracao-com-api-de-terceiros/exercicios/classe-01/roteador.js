const express = require('express');
const { obterEmpresa } = require('./controladores/empresas');

const roteador = express();

roteador.get('/empresas/:dominioEmpresa', obterEmpresa);

module.exports = roteador;

