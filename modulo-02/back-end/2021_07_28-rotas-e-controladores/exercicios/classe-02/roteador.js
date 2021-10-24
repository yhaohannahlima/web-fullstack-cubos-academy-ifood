const express = require("express");
const { consultarAlunos, consultarUmAluno, criarAluno, editarAluno, substituirAluno, excluirAluno } = require("./controladores/alunos");

const roteador = express();

roteador.get("/alunos", consultarAlunos);
roteador.get("/alunos/:idConsultado", consultarUmAluno);
roteador.post("/alunos", criarAluno);
roteador.patch("/alunos/:idConsultado", editarAluno);
roteador.put("/alunos/:idConsultado", substituirAluno)
roteador.delete("/alunos/:idConsultado", excluirAluno);

module.exports = roteador;