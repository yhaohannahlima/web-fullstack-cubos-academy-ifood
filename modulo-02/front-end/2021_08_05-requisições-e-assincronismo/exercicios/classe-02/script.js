const valorselect = document.querySelector('select');
const valorPreco = document.querySelector('#preco');
const valorOferta = document.querySelector('#oferta'); 
const valorQuantidade = document.querySelector('#qtd'); 

valorselect.addEventListener('click', function() {
    if(valorselect.value === 'SELECIONE') {
        console.log('Selecione uma opção valida');
        return;
    }

    const promiseResponse = fetch('https://www.mercadobitcoin.net/api/' + valorselect.value + '/ticker/');

    promiseResponse.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valorPreco.textContent = Number(body.ticker.high).toFixed(2); 
            valorOferta.textContent = Number(body.ticker.buy).toFixed(2);
            valorQuantidade.textContent = Number(body.ticker.vol).toFixed(2);
        });
    });
});