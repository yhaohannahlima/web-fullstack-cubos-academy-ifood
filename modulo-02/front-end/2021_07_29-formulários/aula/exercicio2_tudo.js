const formulario = document.querySelector('form');
const inputSenha = document.querySelector('#senha');
const inputRepitaSenha = document.querySelector('#repita-senha');


formulario.addEventListener('submit', function (event) {
    if (inputSenha.value !== inputRepitaSenha.value) {
        event.preventDefault();
    }
});

