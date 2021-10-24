// É diferente do original, pois o like pode ser dado nas imagens fora do modal

// ABRIR MENU LATERAL
const header = document.querySelector('header');
const imagemMenu = document.querySelectorAll('.menu img');
const menuClosed = document.querySelector('.menu-closed');
const menuOpen = document.querySelector('.menu-open');
const spanHome = document.querySelector('.home span');


imagemMenu.forEach(imagem => {
    imagem.addEventListener('click', function () {
        if (header.classList.contains('hidden')) {
            header.classList.remove('hidden');

            menuOpen.classList.remove('escondido');
            menuClosed.classList.add('escondido');

            spanHome.style.color = 'white';
        } else {
            header.classList.add('hidden');

            menuOpen.classList.add('escondido');
            menuClosed.classList.remove('escondido');
        }
    });
});

// ABRIR MODAL
const imagensMain = document.querySelectorAll('.animal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const imagemModal = document.querySelector('.modal__img');
const proximaImagem = document.querySelector('.modal__next');
const imagemAnterior = document.querySelector('.modal__prev');
const imagemLikeModal = document.querySelector('.like-modal');

let datasetImagemAtual = 0;

/* Adicionar data-index a cada uma das imagens */
imagensMain.forEach((imagem, indice) => {
    imagem.setAttribute('data-index', indice);
});


function abrirModal(src) {
    modal.style.display = 'flex';
    imagemModal.src = src;
}

/* Remover o botão previous e next da primeira e última imagem */
function botoesModal() {
    proximaImagem.classList.remove('escondido');
    imagemAnterior.classList.remove('escondido');

    if (datasetImagemAtual === 0) {
        imagemAnterior.classList.add('escondido');
    }

    if (datasetImagemAtual === imagensMain.length - 1) {
        proximaImagem.classList.add('escondido');
    }
}

/* Adicionar cada imagem no modal e colocar o like quando necessário */
let timer;
imagensMain.forEach((item) => {
    item.addEventListener('click', function (event) {
        if (event.detail === 1) { //ajuste no evento para ouvir um click
            timer = setTimeout(() => {
                datasetImagemAtual = Number(event.target.dataset.index);

                const imagem = imagemLike[datasetImagemAtual];

                if (!imagem.classList.contains('escondido')) {
                    abrirModal(event.target.src);
                    botoesModal();

                    imagemLikeModal.classList.remove('escondido');
                }

                abrirModal(event.target.src);
                botoesModal();
            }, 300);
        }
    });
});

/* Passar para a próxima imagem e colocar o like quando necessário */
proximaImagem.addEventListener('click', function () {
    if (datasetImagemAtual === imagensMain.length - 1) {
        return;
    }

    const index = datasetImagemAtual + 1;
    imagemModal.src = imagensMain[index].src;
    datasetImagemAtual = index;

    botoesModal();

    imagemLikeModal.classList.add('escondido');

    const imagem = imagemLike[datasetImagemAtual];
    if (!imagem.classList.contains('escondido')) {
        imagemLikeModal.classList.remove('escondido');
        return;
    }
});

/* Voltar para a imagem anterior e colocar o like quando necessário */
imagemAnterior.addEventListener('click', function () {
    if (datasetImagemAtual === 0) {
        return;
    }

    const index = datasetImagemAtual - 1;
    imagemModal.src = imagensMain[index].src;
    datasetImagemAtual = index;

    botoesModal();

    imagemLikeModal.classList.add('escondido');

    const imagem = imagemLike[datasetImagemAtual];
    if (!imagem.classList.contains('escondido')) {
        imagemLikeModal.classList.remove('escondido');
        return;
    }
});

/* Ajustar onde o modal pode ser fechado e onde não pode */
modal.addEventListener('click', function () {
    modal.style.display = 'none';
});

imagemModal.addEventListener('click', function (event) {
    event.stopPropagation();
});
proximaImagem.addEventListener('click', function (event) {
    event.stopPropagation();
});
imagemAnterior.addEventListener('click', function (event) {
    event.stopPropagation();
});

/* Colocar o like quando a imagem receber dois cliques */
const imagemLike = document.querySelectorAll('.like');

imagensMain.forEach(item => {
    item.addEventListener('dblclick', function (event) {
        clearTimeout(timer); //ajuste no evento para ouvir dois clicks

        const indiceClicado = Number(event.target.dataset.index);
        imagemLike[indiceClicado].classList.remove('escondido');
    });
});



