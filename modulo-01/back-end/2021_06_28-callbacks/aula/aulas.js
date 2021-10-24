/*------------------------------------------------------------------------------------*/
// FUNÇÃO ARMAZENADA EM VARIÁVEL
// const imprimir = function () {
//     console.log('Oie');
// }

// imprimir ();

//--------------------------------------------------------------------------------------
// LENDO ARQUIVOS NO NODE DE FORMA SÍNCRONA
// const fs = require('fs');

// const buffer = fs.readFileSync('./texto.txt');

// console.log(buffer.toString());

//--------------------------------------------------------------------------------------
// LENDO ARQUIVOS NO NODE DE FORMA ASSÍNCRONA
// const fs1 = require('fs');

// console.log('Vou começar a ler o arquivo');

// fs1.readFile('./texto.txt', function (err, data) {
//     if (!err) {
//         console.log('Seu arquivo foi lido, segue abaixo:')
//         console.log(data.toString());
//     }
// });

// console.log('Opa! Vou fazendo outras coisas enquanto isso...');

//--------------------------------------------------------------------------------------
// FUNÇÃO SETTIMEOUT
// setTimeout (function () {
//     console.log('Aoba')
// }, 1000);

// console.log('Começou o programa');
// console.log('Processando algumas coisas...');

//--------------------------------------------------------------------------------------
// REFATORANDO SETTIMEOUT
// const imprimirMensagem = (mensagem) => {
//     console.log(mensagem);
// };

// setTimeout(imprimirMensagem, 3000, 'Olá');

// console.log('Começou o programa');
// console.log('Processando algumas coisas...');

//--------------------------------------------------------------------------------------
// FUNÇÃO SETINTERVAL
// setInterval (() => {
//     console.log('Passou um segundo')
// }, 1000);

// console.log('Tô processando coisas...');

//--------------------------------------------------------------------------------------
// ESCREVENDO ARQUIVOS NO NODE DE FORMA ASSÍNCRONA
// const fs = require('fs'); 

// const erro = 'Deu erro ao cadastrar';

// fs.writeFile('./novoarquivo.txt', erro, () => {
//     console.log('Arquivo foi escrito');
// });

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: FILTER
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// fiquem apenas os maiores que 5 com índice maior que 5

// const arrayFiltrado = array.filter((x, index) => { 
//     if (x > 5 && index > 5) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(arrayFiltrado);

//--------------------------------------------------------------------------------------
// REFATORANDO O MÉTODO DE ARRAY FILTER
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// fiquem apenas os maiores que 5

// const arrayFiltrado = array.filter(x => x > 5 );

// console.log(arrayFiltrado);

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: MAP
// const array = [1, 2, 3, 4, 5];

// elevar todos os itens do array ao quadrado

// const arrayModificado = array.map(x => x ** 2); 

// console.log(arrayModificado);

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: FOREACH
// const array = [1, 2, 3, 4, 5];

// array.forEach((x, i, a) => {
//     console.log(`O elemento ${x} está no índice ${i} do array ${a}`);
// });

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: FIND
// const array = ["Ola", "Aoba", "paralelepipedo"];

// const encontrado = array.find(x => x.length > 10);

// if (encontrado) {
//     console.log(`A palavra com mais de 10 caracteres é ${encontrado}.`);
// } else {
//     console.log(`Nenhum item tem mais de 10 caracteres.`);
// }

