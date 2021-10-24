/*------------------------------------------------------------------------------------*/
// ACESSANDO PROPRIEDADES DE UM OBJETO COM A NOTAÇÃO DE PONTOS
// const pessoa = {
//     nome: "José",
//     idade: 30,
//     altura: 1.73,
//     temCNH: true,
//     apelidos: ["Jr", "Juninho"]
// };

// console.log(`Bem-vindo, ${pessoa.nome}. Você tem ${pessoa.idade} anos.`);

//--------------------------------------------------------------------------------------
// ACESSANDO PROPRIEDADES DE UM OBJETO COM A NOTAÇÃO DE COLCHETES
// Ex. 1:
// console.log(`Bem-vindo, ${pessoa["apelidos"][0]}. Você tem ${pessoa["idade"]} anos.`);

// // Ex. 2:
// const propriedade = "nome";
// console.log(`Bem-vindo, ${pessoa[propriedade]}. Você tem ${pessoa["idade"]} anos.`);

//--------------------------------------------------------------------------------------
// MANIPULANDO OBJETOS
// const pessoa = {
//     nome: "José",
//     idade: 30,
//     altura: 1.73,
//     temCNH: true,
//     apelidos: ["Jr", "Juninho"]
// };

// pessoa.nome = "João";
// pessoa.apelidos[0] = "Joãozinho";
// pessoa.peso = 70;

// console.log(pessoa);

//--------------------------------------------------------------------------------------
// COLOCANDO OBJETOS DENTRO DE OBJETOS
// const carro = {
//     marca: "Toyota",
//     modelo: "Etios",
//     ano: 2017,
//     potencia: 80
// };

//--------------------------------------------------------------------------------------
// PRIMEIRA FORMA DE CHAMAR O OBJETO CARRO
// const pessoa = {
//     nome: "José",
//     idade: 30,
//     altura: 1.73,
//     temCNH: true,
//     apelidos: ["Jr", "Juninho"],
//     carro: carro
// };

//--------------------------------------------------------------------------------------
// SEGUNDA FORMA DE CHAMAR O OBJETO CARRO
// const pessoa = {
//     nome: "José",
//     idade: 30,
//     altura: 1.73,
//     temCNH: true,
//     apelidos: ["Jr", "Juninho"],
//     carro: {
//         marca: "Toyota",
//         modelo: "Etios",
//         ano: 2017,
//         potencia: 80
//     }
// };

//--------------------------------------------------------------------------------------
// TERCEIRA FORMA DE CHAMAR O OBJETO CARRO
// const pessoa = {
//     nome: "José",
//     idade: 30,
//     altura: 1.73,
//     temCNH: true,
//     apelidos: ["Jr", "Juninho"],
//     carro // shorthand
// };

//--------------------------------------------------------------------------------------
// CRIANDO UMA FUNÇÃO SEM ARGUMENTOS
// function imprimirOla () {
//     console.log("Olá");
// }

// imprimirOla();

//--------------------------------------------------------------------------------------
// CRIANDO UMA FUNÇÃO COM ARGUMENTOS
// function dizerOlaPara (pessoa) {
//     console.log(`Olá, ${pessoa}!`)
// }

// dizerOlaPara("João");

//--------------------------------------------------------------------------------------
// CRIANDO UMA FUNÇÃO QUE RETORNEM VALORES
// function verificarMaioridade (nome, idade) {
//     if (idade >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let nome2 = "José";
// let idade2 = 19;

// let ehMaiorDeIdade = verificarMaioridade(nome2, idade2);

// console.log(ehMaiorDeIdade);

//--------------------------------------------------------------------------------------
// REFATORANDO A FUNÇÃO APRESENTAÇÃO
// function apresentar(pessoa) {
//     if (pessoa.idade < 20) {
//         console.log(`Olá! Sou ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
//     } else if (pessoa.idade < 60) {
//         console.log(`Olá! Sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
//     } else {
//         console.log(`Olá! Sou ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
//     }
// }

// let jose = {
//     nome: "José",
//     idade: 72,
//     profissao: "professor",
//     altura: 1.73
// };

// apresentar(jose);

// let joao = {
//     nome: "João",
//     idade: 12,
//     profissao: "estudante",
//     altura: 1.40
// };

// apresentar(joao);

// let pedro = {
//     nome: "Pedro",
//     idade: 30,
//     profissao: "médico",
//     altura: 1.90
// };

// apresentar(pedro);

//--------------------------------------------------------------------------------------
// CRIANDO MÉTODOS
// let jose = {
//     nome: "José",
//     idade: 72,
//     profissao: "professor",
//     altura: 1.73,
//     apresentar: function () {
//         const faixaEtaria = this.obterFaixaEtaria(this.idade);
//         console.log(`Olá! Sou ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}`);
//     },
//     obterFaixaEtaria: function ()  {
//         if (this.idade <= 25) {
//             return "jovem"
//         } else if (this.idade <= 65) {
//             return "adulto"
//         } else {
//             return "idoso"
//         }
//     }
// };

// jose.apresentar();
// console.log(jose.obterFaixaEtaria());
