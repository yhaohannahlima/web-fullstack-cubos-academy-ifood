const imagem = document.querySelector('.imagem');
const modal = document.querySelector('.modal');

imagem.addEventListener('click', function() {
    if (modal.classList.contains('escondido')) {
        modal.classList.remove('escondido'); 
    } else {
        modal.classList.add('escondido'); 
    }  
});