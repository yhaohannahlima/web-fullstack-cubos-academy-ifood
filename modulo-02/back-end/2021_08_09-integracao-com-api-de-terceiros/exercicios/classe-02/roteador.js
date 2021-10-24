const express = require('express');
const { verificarLocalizacao } = require('./controladores/votos');

const roteador = express();

roteador.post('/votacao/:pais/:ip', verificarLocalizacao);

module.exports = roteador;
