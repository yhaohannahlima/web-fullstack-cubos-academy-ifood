const formulario = document.querySelector('form');
const inputMusica = document.querySelector('input');
const select = document.querySelector('select');

const musicaPop = 'Happy';
const musicaMpb = 'Trem das Onze';
const musicaRap = 'Capricorniana';

select.addEventListener('change', function() {
    if(select.value === 'pop') {
        inputMusica.value = musicaPop;
    } else if (select.value === 'mpb') {
        inputMusica.value = musicaMpb;
    } else if (select.value === 'rap') {
        inputMusica.value = musicaRap;
    } else {
        inputMusica.value = '';
    }
});

formulario.addEventListener('submit', function(event) {
    if(select.value === 'Gênero Musical') {        
        event.preventDefault();
    }
});