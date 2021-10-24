/*--EXEMPLO DE PROMISE COM AXIOS-----------------------------------------------------*/
// const axios = require("axios");
// const cepPromise = axios.get("https://viacep.com.br/ws/40140650/json/");

// cepPromise.then((response) => {
//     console.log(response.data);
// });

// console.log(cepPromise);


/*--FUNÇÕES QUE RETORNAM PROMISE-----------------------------------------------------*/
// const axios = require("axios");

// function obterLogradouro(cep) {
//     const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//     const logradouroPromise = responsePromise.then((response) => response.data.logradouro);
//     return logradouroPromise;
// }

// obterLogradouro("40140650").then((logradouro) => console.log(logradouro));
// obterLogradouro("01001000").then((logradouro) => console.log(logradouro));


/*--FUNÇÕES ASYNC COM AWAIT----------------------------------------------------------*/
// const axios = require("axios");

// async function obterLogradouro2(cep) {
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//     return response.data.logradouro;

    /* OUTRA FORMA DE FAZER--------------------------------------------
    const response = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const response = await responsePromise;
    return response.data.logradouro;
    -----------------------------------------------------------------*/
// }

// obterLogradouro2("40140650").then((logradouro) => console.log(logradouro));
// obterLogradouro2("01001000").then((logradouro) => console.log(logradouro));

// async function exibirLogradouros(ceps) {
//     for (const cep of ceps) {
//         console.log(cep, "=>", await obterLogradouro2(cep));
//     }
// }

// exibirLogradouros(["40140650", "01001000"]);



/*--FOREACH, MAP E PROMISE.ALL-------------------------------------------------------*/
// const axios = require("axios");

// async function exibirLogradouros(ceps) {
//     await Promise.all(
//         ceps.map(async (cep) => {
//             console.log(cep, "=>", await obterLogradouro(cep));
//         })
//     );
// }

// exibirLogradouros([
//     "40140650", "01001000",
//     "40140650", "01001000",
//     "40140650", "01001000",
//     "40140650", "01001000",
//     "40140650", "01001000"
// ]).then(() => console.log("FIM"));

