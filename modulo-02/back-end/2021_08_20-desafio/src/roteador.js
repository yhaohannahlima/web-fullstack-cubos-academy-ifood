const express = require('express');
const { consultarConta, criarConta, atualizarUsuarioConta, excluirConta, saldo, extrato} = require('./controladores/controladores_contas');
const { depositar, sacar, transferir } = require('./controladores/controladores_transacoes');

const roteador = express();

roteador.get("/contas", consultarConta);
roteador.post("/contas", criarConta);
roteador.put("/contas/:numeroConta/usuario", atualizarUsuarioConta);
roteador.delete("/contas/:numeroConta", excluirConta);
roteador.get("/contas/saldo", saldo);
roteador.get("/contas/extrato", extrato);
roteador.post("/transacoes/depositar", depositar);
roteador.post("/transacoes/sacar", sacar);
roteador.post("/transacoes/transferir", transferir);

module.exports = roteador;
