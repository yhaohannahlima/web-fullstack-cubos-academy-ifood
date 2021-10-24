/*------------------------------------------------------------------------------------*/
// APLICAÇÃO DO MÉTODO INCLUDES PARA STRING
// const frase = "Eu já vou para casa";

// console.log(frase.includes("casa", 1));
// console.log(frase.includes("casa", 1));

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO INDEXOF PARA STRING
// const palavra = "paralelepipedo";

// console.log(palavra.indexOf("e"));
// console.log(palavra.indexOf("e", 6));

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO LASTINDEXOF PARA STRING
// console.log(palavra.lastIndexOf("e"));
// console.log(palavra.lastIndexOf("e", 10));

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO SLICE PARA STRING
// const localizacao = "salvador-ba";
// const localizacao = "salvador-ba";

// const endIndex = localizacao.indexOf("-");

// const cidade = localizacao.slice(0, endIndex);

// const estado = localizacao.slice(-2);

// console.log(cidade);
// console.log(estado);

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO TRIM PARA STRING
// const email = "   jose@cubos.academy ";

// console.log(`_${email}_`);
// console.log(`_${email.trim()}_`);

// // APLICAÇÃO DO MÉTODO PADSTART PARA STRING
// const ultimos4dig = "2345";

// const numCartao = ultimos4dig.padStart(19, "**** ");
// console.log(numCartao);

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO SPLIT PARA STRING
// const textao = "Eu gosto de praia. Eu vou pra praia. Pode parar tudo, eu vou pra praia";

// const frases = textao.split(".");

// console.log(frases);

// let novoArray = [];
// for (let frase of frases) {
//     novoArray.push(frase.trim());
// }

// console.log(novoArray);

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO REVERSE PARA ARRAY
// const original = [1, 2, 3, 4, 5];

// const resultado = original.reverse();

// console.log(resultado);
// console.log(original);

//--------------------------------------------------------------------------------------
// APLICAÇÃO DO MÉTODO SPLICE PARA ARRAY
// const array = ["a", "b", "c", "d", "e"];

// array.splice(1, 2, "f")
// console.log(array);
