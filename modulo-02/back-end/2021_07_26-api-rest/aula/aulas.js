/*--GET DA COLEÇÃO-------------------------------------------------------------------*/
// const express = require('express');

// const app = express();
// app.use(express.json()); 
// const listaDeInstrutores = [
//     {
//         id: 1, 
//         nome: 'Junior',
//         idade: 29,
//         areaDeAtuacao: 'Logica',
//     },
//     {
//         id: 2, 
//         nome: 'Dina',
//         idade: 19,
//         areaDeAtuacao: 'Back-end',
//     },
//     {
//         id: 3, 
//         nome: 'Guido Cerqueira',
//         idade: 30,
//         areaDeAtuacao: 'Full-stack',
//     },
//     {
//         id: 4, 
//         nome: 'Victor Magalhães',
//         idade: 28,
//         areaDeAtuacao: 'Front-end',
//     }
// ];

// app.get("/instrutores", (req, res) => {
//     res.json(listaDeInstrutores);
// });


/*--GET DE UM RECURSO----------------------------------------------------------------*/
// app.get("/instrutores/:idConsultado", (req, res) => {
//     console.log("Consulando o id", req.params.idConsultado);

//     const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));

//     res.json(instrutor);
// })


/*--POST PARA CRIAR UM RECURSO NA COLEÇÃO--------------------------------------------*/
// let proximoId = 5;

// app.post("/instrutores", (req, res) => {
//     const novoInstrutor = {
//         id: proximoId,
//         nome: req.body.nome,
//         idade: req.body.idade,
//         areaDeAtuacao: req.body.areaDeAtuacao,
//     };

//     listaDeInstrutores.push(novoInstrutor);

//     proximoId += 1;

//     res.json(novoInstrutor);
// });


/*--PATCH PARA ALTERAR UM ELEMENTO NA LISTA------------------------------------------*/
// app.patch("/instrutores/:idConsultado", (req, res) => {
//     const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));

//     if (req.body.nome !== undefined) {
//         instrutor.nome = req.body.nome;
//     }

//     if (req.body.idade !== undefined) {
//         instrutor.idade = req.body.idade;
//     }

//     if (req.body.areaDeAtuacao !== undefined) {
//         instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
//     }

//     res.json(instrutor);
// });

/*--PUT PARA SUBSTITUIR RECURSOS-----------------------------------------------------*/
// app.put("/instrutores/:idConsultado", (req, res) => {
//     const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));

//     if (instrutor) {
//         //substituir o existente
//         instrutor.nome = req.body.nome;
//         instrutor.idade = req.body.idade;
//         instrutor.areaDeAtuacao = req.body.areaDeAtuacao;

//         res.json(instrutor);
//     } else {
//         //inserir um novo
//         const novoInstrutor = req.body;
//         listaDeInstrutores.push(novoInstrutor);

//         res.json(novoInstrutor);
//     }
// });


/*--DELETE PARA EXCLUIR UM RECURSO--------------------------------------------------*/ 
// app.delete("/instrutores/:idConsultado", (req, res) => {
//     const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));
    
//     const indice = listaDeInstrutores.indexOf(instrutor);

//     listaDeInstrutores.splice(indice, 1);

//     res.json(instrutor);
// });

// app.listen(8000);

