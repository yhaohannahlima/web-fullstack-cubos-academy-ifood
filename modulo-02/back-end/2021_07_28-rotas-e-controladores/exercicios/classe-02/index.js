const express = require("express");
const travaDeSenha = require("./intermediarios");
const roteador = require("./roteador");

const app = express();

app.use(express.json());
app.use(travaDeSenha);
app.use(roteador);

app.listen(8000);