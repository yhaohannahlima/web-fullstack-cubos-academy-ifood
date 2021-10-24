/*------------------------------FETCH E ASSINCRONISMO--------------------------------*/
// const cepInput = document.querySelector('#cep');
// const ufInput = document.querySelector('#uf');
// const cidadeInput = document.querySelector('#cidade');
// const ruaInput = document.querySelector('#rua');


// cepInput.addEventListener('change', function () {

//     const promiseResposta = fetch('http://viacep.com.br/ws/' + cepInput.value + '/json/');

//     promiseResposta.then(function (resposta) {
//         const promiseBody = resposta.json();

//         promiseBody.then(function (body) {

//             ufInput.value = body.uf;
//             cidadeInput.value = body.localidade;
//             ruaInput.value = body.logradouro;
//         })
//     });
// });


/*--------------------------------LIDANDO COM ERROS----------------------------------*/
// const cepInput = document.querySelector('#cep');
// const ufInput = document.querySelector('#uf');
// const cidadeInput = document.querySelector('#cidade');
// const ruaInput = document.querySelector('#rua');


// cepInput.addEventListener('change', function () {
//     if (cepInput.value.length !== 8) {
//         console.log('ERRO');
//         return;
//     }

//     const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');

//     promiseResposta.then(function (resposta) {
//         // if (!resposta.ok) {
//         //     console.log('ERRO');
//         //     return;
//         // }

//         const promiseBody = resposta.json();

//         promiseBody.then(function (body) {
//             if (body.erro) {
//                 console.log('ERRO');
//                 return;
//             }

//             ufInput.value = body.uf;
//             cidadeInput.value = body.localidade;
//             ruaInput.value = body.logradouro;
//         })
//     });
// });