/*------------------------------------------------------------------------------------*/
// MÉTODO DE ARRAYS: EVERY
// const numeros = [1, 2, 3, 4, 5];

// console.log(numeros.every(x => x < 10));

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: SOME
// const array = [1, 2, 3, 4, 5, 6];

// tem algum item maior que 5?
// const temMaiorQue5 = array.some(x => x > 5);
// console.log(temMaiorQue5); 

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: REDUCE
// const array = [1, 2, 3, 10, 4, 5];

// soma de todos os itens
// const somaTotal = array.reduce((acc, item) => acc + item);
// console.log(somaTotal);

// encontrar o maior item do array
// const maior = array.reduce((acc, item) => item > acc ? item : acc);
// console.log(maior);

//--------------------------------------------------------------------------------------
// MÉTODO DE ARRAYS: SORT
// const numeros = [1, 10, 2, 23, 5];

// ordenar em ordem crescente
// negativo: a vem primeiro (menor)
// positivo: b vem primeiro (maior)

// numeros.sort ((a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(numeros);

//--------------------------------------------------------------------------------------
// MÉTODO DE STRINGS: LOCALECOMPARE
// const nomes = ["pedro","amanda", "junior", "Ana", "Joao", "Álvaro"];

// nomes.sort ((a, b) => a.localeCompare(b));
// console.log(nomes);
