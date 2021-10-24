const inputCep = document.querySelector('#cep');
const inputCidade = document.querySelector('#cidade');
const inputRua = document.querySelector('#rua');

inputCep.addEventListener('change', function () {
    if(inputCep.value.length !== 8) {
        console.log('Erro: o CEP inserido deve conter 8 caracteres.');
        return;
    }

    const promiseResponse = fetch('https://viacep.com.br/ws/' + inputCep.value + '/json/');

    promiseResponse.then((response) => {
        const promiseBody = response.json();

        promiseBody.then((body) => {
            if(body.erro) {
                console.log('Erro: o CEP inserido não existe.');
                return;
            }

            inputCidade.value = body.localidade;
            inputRua.value = body.logradouro;
        });
    });
});
