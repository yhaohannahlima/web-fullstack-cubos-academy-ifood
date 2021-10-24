/*--SÍNCRONO-------------------------------------------------------------------------*/
// let soma = 0;
// console.log("antes da soma");

// for(let i = 1; i <= 10; i++) {
//     soma += 1;
// }

// console.log("depois da soma");
// console.group(soma);


/*--ASSÍNCRONO-----------------------------------------------------------------------*/
// console.log("antes");

// setTimeout(() => {
//     console.log("no meio");
// }, 1000);

// console.log("depois");


/*--ASSINCRONICIDADE EXEMPLO 1-------------------------------------------------------*/
// const fs = require("fs");

// console.log("antes de ler");
// console.log(fs.readFileSync("a.txt").toString());
// console.log(fs.readFileSync("b.txt").toString());
// console.log(fs.readFileSync("c.txt").toString());
// console.log("depois de ler");

// console.log("antes de ler");
// fs.readFile("a.txt", (err, data) => {
//     if(err) {
//         console.log("Deu erro", err);
//     } else {
//         console.log(data.toString());
//     }
// });

// fs.readFile("b.txt", (err, data) => {
//     if(err) {
//         console.log("Deu erro", err);
//     } else {
//         console.log(data.toString());
//     }
// });

// fs.readFile("c.txt", (err, data) => {
//     if(err) {
//         console.log("Deu erro", err);
//     } else {
//         console.log(data.toString());
//     }
// });
// console.log("depois de ler");



/*--ASSINCRONICIDADE EXEMPLO 2-------------------------------------------------------*/
// const fs = require("fs");

// const conteudo = fs.readFileSync("texto.txt");
// fs.writeFileSync("novoTexto.txt", conteudo);

// fs.readFile("texto.txt", (err, data) => {
//     if(err) {
//         console.log("Erro:", err);
//     } else {
//         console.log("Leu com sucesso");
//         fs.writeFile("novoTexto1.txt", data, (err) => {
//             if(err) {
//                 console.log("Erro na escrita:", err);
//             } else {
//                 console.log("Escreveu com sucesso 1");
//             }
//         });
//         fs.writeFile("novoTexto2.txt", data, (err) => {
//             if(err) {
//                 console.log("Erro na escrita:", err);
//             } else {
//                 console.log("Escreveu com sucesso 2");
//             }
//         });
//     }
// })


/*--PROMISE---------------------------------------------------------------------------*/
// const fs = require("fs/promises");

// const leituraDoArquivoEConsole = fs
//     .readFile("texto.txt")
//     .then((data) => {
//         console.log("Terminei de ler:", data.toString());
//     })
//     .catch((err) => {
//         console.log("Erro:", err);
//     });

// leituraDoArquivoEConsole.then(() => console.log("Terminou"));

// console.log(leituraDoArquivoEConsole);


// fs.readFile("texto.txt")
//     .then((data) => fs.writeFile("novotexto.txt", data))
//     .then(() => {
//         console.log("Escrita completa");
//     })
//     .catch((err) => {
//         console.log("Erro:", err);
//     });


/*--EXEMPLO DE PROMISE COM AXIOS-----------------------------------------------------*/
// const fs = require("fs/promises");

// const leituraDoArquivoEConsole = fs
//     .readFile("texto.txt")
//     .then((data) => {
//         console.log("Terminei de ler:", data.toString());
//     })
//     .catch((err) => {
//         console.log("Erro:", err);
//     });

// leituraDoArquivoEConsole.then(() => console.log("Terminou"));

// console.log(leituraDoArquivoEConsole);


// fs.readFile("texto.txt")
//     .then((data) => fs.writeFile("novotexto.txt", data))
//     .then(() => {
//         console.log("Escrita completa");
//     })
//     .catch((err) => {
//         console.log("Erro:", err);
//     });

