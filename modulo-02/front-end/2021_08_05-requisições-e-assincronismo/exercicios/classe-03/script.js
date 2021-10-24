const valorInput = document.querySelector('input');
const nomePokemon = document.querySelector('h2');
const imagemPokemon = document.querySelector('img');
const habilidadePokemon = document.querySelector('h3');

valorInput.addEventListener('change', function() {
    if(valorInput.value === '') {
        console.log('Você deve inserir o nome ou id de um Pokemon.')
        return;
    }
    
    const promiseResponse = fetch('https://pokeapi.co/api/v2/pokemon/' + valorInput.value + '/');

    promiseResponse.then(function(resposta) {
        if(!resposta.ok) {
            console.log('ERRO');
        }

        const promiseBody = resposta.json();
        promiseBody.then(function(body) {

            nomePokemon.textContent = nomePokemon.textContent + body.name;
            habilidadePokemon.textContent = habilidadePokemon.textContent + body.abilities[0].ability.name;
            imagemPokemon.src = body.sprites.front_default;
        })
    })
});