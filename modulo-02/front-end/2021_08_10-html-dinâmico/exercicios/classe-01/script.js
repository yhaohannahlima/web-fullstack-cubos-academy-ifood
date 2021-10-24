const raiz = document.querySelector('body');
const valorInput = document.querySelector('input');
const paises = document.querySelector('.paises');

const divInput = document.createElement('div');
divInput.classList.add('selecionar');

const legendaInput = document.createElement('label');
legendaInput.textContent = 'Escolha um país:';

divInput.append(legendaInput, valorInput);

fetch('https://restcountries.eu/rest/v2/all').then(function (resposta) {
    const respostaBody = resposta.json();
    const respostaPreenchimento = respostaBody.then(function (body) {
        body.forEach(function (pais) {
            const divPais = document.createElement('div');
            divPais.classList.add('pais');

            const nomePais = document.createElement('h2');
            nomePais.textContent = pais.name;

            const regiaoPais = document.createElement('p');
            regiaoPais.textContent = 'Região: ' + pais.region;

            const capitalPais = document.createElement('p');
            capitalPais.textContent = 'Capital: ' + pais.capital;

            const populacaoPais = document.createElement('p');
            populacaoPais.textContent = 'População: ' + pais.population;

            const bandeiraPais = document.createElement('img');
            bandeiraPais.src = pais.flag;


            divPais.append(nomePais, regiaoPais, capitalPais, populacaoPais, bandeiraPais);

            paises.append(divPais);

        });
    });

    respostaPreenchimento.then(function () {
        const divPais = document.querySelectorAll('.pais');

        valorInput.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' || valorInput.value === '') return;

            divPais.forEach((pais, indice) => {  
                pais.classList.remove('escondido');

                const item = document.querySelectorAll('h2');
                if (item[indice].textContent !== valorInput.value) {
                    pais.classList.add('escondido');
                }
            });  
            
            valorInput.value = '';
        });
    });
})

raiz.insertBefore(divInput, paises);

