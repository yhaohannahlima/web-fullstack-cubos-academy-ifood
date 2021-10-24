const imagem = document.querySelector('img');
const inputSenha = document.querySelector('#senha');

function alterarVisibilidade() {
    if (inputSenha.type === 'password') {
        imagem.src = './assets/olho-aberto.svg';
        imagem.alt = 'Imagem de um olho aberto, a senha está visível';
        
        inputSenha.type = 'text';
    } else {
        imagem.src = './assets/olho-fechado.svg';
        imagem.alt = 'Imagem de um olho fechado, a senha não está visível';
        
        inputSenha.type = 'password';
    }
}

imagem.addEventListener('click', function () {
    alterarVisibilidade();
});


