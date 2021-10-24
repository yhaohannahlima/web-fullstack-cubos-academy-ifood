/*------------------------------------------------------------------------------------*/
// COMO CRIAR UM ARRAY
// const nomes = ["Jose", "Maria", "Pedro", "Joana", "Andre"];

// console.log(nomes);
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);
// console.log(nomes[4]);

//--------------------------------------------------------------------------------------
// COMO MODIFICAR ITENS DE UM ARRAY
// Ex. 01:
// nomes[0] = "Andreia";
// console.log(nomes);

// // Ex. 02:
// const x = 3;
// nomes[x] = "Andreia";
// console.log(nomes);

//--------------------------------------------------------------------------------------
// DESCOBRIR O TAMANHO DO ARRAY
// const nomes = ["Jose", "Maria", "Pedro", "Joana", "Andre"];

// let tamanho = nomes.length;
// nomes[tamanho] = "Joao"; 

// console.log(nomes);

//--------------------------------------------------------------------------------------
// INSERINDO E REMOVENDO ELEMENTOS AO FIM DE UM ARRAY
// nomes.push("Mais um nome");
// console.log(nomes);

// nomes.pop();
// console.log(nomes);

//--------------------------------------------------------------------------------------
// INSERINDO E REMOVENDO ELEMENTOS NO INÍCIO DE UM ARRAY
// nomes.unshift("Mais um nome");
// console.log(nomes);

// nomes.shift();
// console.log(nomes);

//--------------------------------------------------------------------------------------
// UTILIZANDO O FOR ... OF
// const nomes = ["Jose", "Maria", "Pedro", "Joana", "Andre"];

// for (let nome of nomes) {
//     console.log(nome);
//     console.log("Indo para o próximo passo do loop")
// }

//--------------------------------------------------------------------------------------
// UTILIZANDO O FOR ... OF
// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//--------------------------------------------------------------------------------------
// UTILIZANDO O FOR DE C
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//--------------------------------------------------------------------------------------
// VARRENDO STRINGS E BREAK
// const palavra = "Canada";

// let encontrado = false;
// for (let letra of palavra) {
//     if (letra === "h") {
//         encontrado = true;
//         console.log("Tem a letra h");
//         break;
//     }
// }

// if (!encontrado) {
//     console.log("Não tem a letra h");
// }
