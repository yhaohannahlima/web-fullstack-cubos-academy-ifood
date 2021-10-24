/*------------------------------------INPUT RADIO------------------------------------*/
// const inputEhMaior = document.querySelector('input');

// inputEhMaior.addEventListener('change', function() {
//     console.log(inputEhMaior.checked);
// });


/*---------------------------------------SELECT--------------------------------------*/
// const select = document.querySelector('select');

// select.addEventListener('change', function() {
//     console.log(select.value);
// });


/*-------------------------------VALIDAÇÕES NÃO NATIVAS------------------------------*/
// const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
// const numeros = '0123456789'.split('');

// const inputDeSenha = document.querySelector('#senha');

// inputDeSenha.addEventListener('change', function() {
//     const senha = inputDeSenha.value;
//     let temLetra = false;
//     let temNumero = false;

//     for (let i = 0; i < senha.length; i++) {
//         if (letras.includes(senha[i])) {
//             temLetra = true;
//             continue;
//         }

//         if (numeros.includes(senha[i])) {
//             temNumero = true;
//             continue;
//         }
//     }

//     if (temLetra && temNumero) {
//         console.log('Senha válida');
//     }
// });


/*---------------------------------PREVENT DEFAUL------------------------------------*/
// const formulario = document.querySelector('form');
// const inputPesquisa = document.querySelector('#pesquisa');

// formulario.addEventListener('submit', function (event) {
//     if (!inputPesquisa.value) {
//         event.preventDefault();
//     }
// })