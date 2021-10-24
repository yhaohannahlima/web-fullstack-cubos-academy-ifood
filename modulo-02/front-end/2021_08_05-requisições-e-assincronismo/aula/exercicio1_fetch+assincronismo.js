const inputCripto = document.querySelector('#criptomoeda');
const inputValor = document.querySelector('#preco');
//const valor = document.querySelector('#preco');


inputCripto.addEventListener('change', function () {
    // if (!inputCripto.value) {
    //     return;
    // }

    const promiseResponse = fetch('https://www.mercadobitcoin.net/api/' + inputCripto.value + '/ticker/');

    promiseResponse.then(function (response) {
        const promiseBody = response.json();

        promiseBody.then(function (body) {
            inputValor.value = Number(body.ticker.high).toFixed(2);
            //valor.textContent = Number(body.ticker.high).toFixed(2);
        })
    });
});