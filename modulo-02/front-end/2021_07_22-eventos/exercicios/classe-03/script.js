const botaoInscricao = document.querySelector('.btn');
const botaoConfirmar = document.querySelector('.confirmar');
const modal = document.querySelector('.modal') 
const modalBotoes = document.querySelectorAll('.modal button');

function aoClicar (event) {
    const botaoAoClicar = event.target;

    botaoInscricao.classList.add('inscrito');
    botaoInscricao.textContent = 'INSCRITO';

    botaoInscricao.removeEventListener('click', aoClicar);
    botaoInscricao.addEventListener('click', () => {
        modal.classList.remove('escondido');
    });
}

botaoInscricao.addEventListener('click', aoClicar);

modalBotoes.forEach(botao => {
    botao.addEventListener('click', function () {
        modal.classList.add('escondido');
    });
});


botaoConfirmar.addEventListener('click', (event) => {
    const botaoAoClicar = event.target;

    botaoInscricao.classList.remove('inscrito');
    botaoInscricao.textContent = 'INSCREVER-SE';

    botaoInscricao.addEventListener('click', aoClicar);
});