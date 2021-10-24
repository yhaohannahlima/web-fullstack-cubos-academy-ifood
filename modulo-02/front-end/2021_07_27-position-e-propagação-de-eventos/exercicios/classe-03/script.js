const imagens = document.querySelectorAll('.imagens img');
const modal = document.querySelector('.modal');
const modalImagem = document.querySelector('.modal img');
const modalLink = document.querySelector('.modal a');


function abrirModal(src) {
    modal.style.display = 'flex';
    modalImagem.src = src;
    modalLink.href = src;
}

imagens.forEach(imagem => {
    imagem.addEventListener('click', function(event) {
        abrirModal(event.target.src);
    })
});

modal.addEventListener('click', function() {
    modal.style.display = 'none';
});

modalLink.addEventListener('click', function(event) {
    event.stopPropagation();
})
