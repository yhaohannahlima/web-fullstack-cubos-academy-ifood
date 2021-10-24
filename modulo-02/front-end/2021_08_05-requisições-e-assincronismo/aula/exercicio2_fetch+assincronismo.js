const inputPokemon = document.querySelector('#pokemon');
const inputNome = document.querySelector('.nome');
const inputImagem = document.querySelector('img');

inputPokemon.addEventListener('change', function () {
    const promiseResponse = fetch('https://pokeapi.co/api/v2/pokemon/' + inputPokemon.value + '/');

    promiseResponse.then(function (resposta) {
        if (!resposta.ok) {
            console.log('ERRO');    
            return;
        }
        
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            inputNome.textContent = body.name;
            inputImagem.src = body.sprites.front_default;
        });
    });
});
