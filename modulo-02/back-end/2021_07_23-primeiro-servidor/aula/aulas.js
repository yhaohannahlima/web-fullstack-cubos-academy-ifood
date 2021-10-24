/*--DESESTRUTURAÇÃO DE OBJETOS-------------------------------------------------------*/
// Destructuring
// const pessoa = {
//     nome: "João",
//     idade: 34,
//     cidade: "Salvador",
//     profissão: "Desenvolvedor",
// }

// const { nome, idade, ... outras } = pessoa;

/* OUTRA FORMA DE FAZER--------------------------------------------
const { nome: nome_da_pessoa, idade, ... outras } = pessoa;
console.log(nome_da_pessoa);
-----------------------------------------------------------------*/
// console.log(nome);
// console.log(idade);
// console.log(outras);
// console.log(pessoa); 


/*--INSTALANDO PACOTES NPM-----------------------------------------------------------*/
// const {shuffle, reverse} = require("lodash");

// const lista = [1, 2, 3, 4, 5, "aaaa"];

// console.log("oi!");
// console.log(shuffle(lista));
// console.log(reverse(lista));

/* OUTRA FORMA DE FAZER--------------------------------------------
const lodash = require("lodash");
console.log(lodash.reverse(lista));
-----------------------------------------------------------------*/


/*--PRIMEIRO SERVIDOR COM EXPRESS----------------------------------------------------*/
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     console.log("Recebi um GET /");
//     res.send("Olá!");
// });

// app.get("/academy", (req, res) => {
//     console.log("Recebi meu outro GET");
//     res.send("MEU PRIMEIRO SERVIDOR!!!")
// })

// app.listen(8000);


/*--PARÂMETROS NO EXPRESS------------------------------------------------------------*/
// const express = require("express");
// const app = express();

// app.get("/livros/:numero/capitulos/:cap", (req, res) => {
//     console.log(req.params);
//     if (req.params.numero === "1") {
//         res.send("Livro Um");
//     } else if (req.params.numero === "2") {
//         res.send("Livro Dois");
//     } else if (req.params.numero === "3") {
//         res.send("Livro Três");
//     } else {
//         res.status("404");
//         res.send("Livro " + req.params.numero + " não existe.");
//     }
// });

// app.listen(8000);


/*--QUERY NO EXPRESS-----------------------------------------------------------------*/
// const express = require("express");
// const app = express();

// app.get("/soma", (req, res) => {
//     console.log(req.query);
    
//     const primeiro = Number(req.query.primeirovalor);
//     const segundo = Number(req.query.segundovalor);

//     res.send(String(primeiro + segundo));
// });

// app.listen(8000);


/*--CRIANDO UM CONTADOR--------------------------------------------------------------*/
// const express = require("express");
// const app = express();

// let contador = 0;

// app.get("/contador", (req, res) => {
//     contador = contador + 1;

//     res.send("Você já abriu esta página " + contador + " vez(es).")
// });

// app.get("/zerar", (req, res) => {
//     contador = 0;

//     res.send("Zerei!")
// });

// app.listen(8000);


/*--CONTADOR 2.0---------------------------------------------------------------------*/

// app.get("/atribuir", (req, res) => {
//     console.log("Contador era " + contador);
//     const valor = req.query.valor;

//     if (valor === undefined) {
//         res.status(400);
//         res.send("Você precisa informar o valor!");
//     } else {
//         contador = Number(valor);
//         console.log("Contador agora é " + contador);
//         res.send("Atribuído com sucesso!");
//     }
// });

// app.listen(8000);





