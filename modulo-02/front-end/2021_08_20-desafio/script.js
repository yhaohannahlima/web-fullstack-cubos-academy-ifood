const movies = document.querySelector('div .movies');
let pages = [], movie = [], movieInfo = [], movieTitle = [], movieRating = [], imgStart = [];
let movieRatingNumber = [];

//popular
const newVar = ['movie', 'movieInfo', 'movieTitle', 'movieRating', 'imgStar'];
const elementType = ['div', 'div', 'span', 'span', 'img'];
const newClass = ['movie', 'movie__info', 'movie__title', 'movie__rating', 'img__star'];
const linkApiSemID = 'https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false';
acessarApiSemID(linkApiSemID);


//modal
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalAverage = document.querySelector('.modal__average');
const modalGenres = document.querySelector('.modal__genres');
const modalImage = document.querySelector('.modal__img');
const closeModal = document.querySelector('.modal img');
let modalGenre = [];


//pesquisar
const inputSearch = document.querySelector('.input');
inputSearch.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter') return;

    pages.forEach(item => item.remove());

    inputSearch.value !== '' ? acessarApiComID(event, inputSearch.value) : acessarApiSemID(linkApiSemID);

    inputSearch.value = '';

    pages.forEach(pagina => pagina.classList.add('hidden'));
    pages[0].classList.remove('hidden');
});


//trocar página
const setaVoltar = document.querySelector('.btn-prev');
const setaIr = document.querySelector('.btn-next');

setaVoltar.addEventListener('click', function () {
    paginaAnterior();
});

setaIr.addEventListener('click', function () {
    proximaPagina();
});


//highlight
const highLightMovie = document.querySelector('div .highlight__video');
const highLightTitle = document.querySelector('.highlight__title');
const highLightRating = document.querySelector('.highlight__rating');
const highLightGenres = document.querySelector('.highlight__genres');
const highLightData = document.querySelector('.highlight__launch');
const highLightDescription = document.querySelector('.highlight__description');
const highLightLinkVideo = document.querySelector('.highlight__video-link');
const linkApiSemIDHighLightGeral = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR';
const linkApiSemIDHighLightVideo = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR';

acessarApiSemIDHighLight(linkApiSemIDHighLightGeral, linkApiSemIDHighLightVideo);


//tema
const root = document.querySelector('body');
const temaButton = document.querySelector('.btn-theme');
const highLightInfo = document.querySelector('.highlight__info');
const highLightGenreLaunch = document.querySelector('.highlight__genre-launch');
const highLightSubtitle = document.querySelector('.subtitle');

temaInicial = localStorage.getItem('.btn-theme');
mudarTema();

//criar páginas e divs para popular com os filmes
function criarPaginas(moviesDiv, totalNumberMovies) {
    const allDivMovie = document.querySelectorAll('div .movie');

    let division;

    //Passo 1: remover todas as divs "movie" do HTML 
    if(totalNumberMovies > 0) {
        allDivMovie.forEach(item => item.remove());
    } else {
        return;
    }

    //Passo 2: criar páginas e divs para popular com os filmes
    if (totalNumberMovies > 20) {
        totalNumberMovies = 20;
    }

    if (totalNumberMovies >= 5) {
        division = Math.ceil(totalNumberMovies / 5);
    } else {
        division = totalNumberMovies;
    }

    for (let i = 0; i < division; i++) {
        const page = document.createElement('div');
        page.classList.add('page');

        if (i > 0) { page.classList.add('hidden'); }

        moviesDiv.append(page);
        pages = document.querySelectorAll('.page');
        page.setAttribute('data-index', i);
    }
}

//preencher divs dos filmes
function insertMovies(newVar, elementType, newClass, numberMovies) {
    if (numberMovies === 0) {
        return;
    }

    if (numberMovies > 20) {
        numberMovies = 20;
    }

    if (newClass[0] !== 'modal__genre') {
        criarPaginas(movies, numberMovies);
    }

    //Passo 1: inserir um elemento por vez em cada 'div movie' criada
    newVar.forEach((item, index) => {

        //Passo 2: criar uma div para cada filme
        for (let i = 0; i < numberMovies; i++) {
            item = document.createElement(elementType[index]);
            item.classList.add(newClass[index]);

            if (item.classList.contains('modal__genre')) {
                modalGenres.append(item);                
                modalGenre = document.querySelectorAll('.modal__genre');
            } else {
                if (index === 0) {
                    movies.append(item);
                    movie = document.querySelectorAll('.movie');
                    movie[i].setAttribute('data-index', i);
                }

                if (index === 1) {
                    movie[i].append(item);
                    movieInfo = document.querySelectorAll('.movie__info');
                }

                if (index === 2) {
                    movieInfo[i].append(item);
                    movieTitle = document.querySelectorAll('.movie__title');
                }

                if (index === 3) {
                    movieInfo[i].append(item);
                    movieRating = document.querySelectorAll('.movie__rating');
                }

                if (index === 4) {
                    movieRating[i].append(item);
                    imgStar = document.querySelectorAll('.img__star');
                }


                if (newClass[index] === 'img__star') {
                    imgStar[i].src = './assets/estrela.svg';
                    imgStar[i].alt = 'Estrela';
                }


                //Passo 3: popular cada filme nas páginas específicas
                if (i && i < 5) { pages[0].appendChild(movie[i]); }
                if (i && i >= 5 && i < 10) { pages[1].appendChild(movie[i]); }
                if (i && i >= 10 && i < 15) { pages[2].appendChild(movie[i]); }
                if (i && i >= 15 && i < 20) { pages[3].appendChild(movie[i]); }
            }
        }
    });
}

//acessar API sem ID
function acessarApiSemID(link) {
    fetch(link).then(function (response) {
        if (!response.ok) {
            console.log('ERRO');
            return;
        }

        const promiseBody = response.json();

        
        promiseBody.then(function (body) {
            insertMovies(newVar, elementType, newClass, body.results.length);

            infoMovie(body);
        });

        promiseBody.then(function (body) {
            //abrir ou fechar modal
            movie.forEach(item => {
                item.addEventListener('click', function (event) {
                    modal.classList.remove('hidden');                    
                    root.style.overflow = 'hidden'
                    modal.style.overflowY = 'scroll';

                    acessarApiModal(linkApiSemID, event);
                });
            });

            modal.addEventListener('click', function (event) {
                fecharModal();
            });

            closeModal.addEventListener('click', function (event) {
                fecharModal();
            });
        });
    });
}

//preencher informações dos filmes
function infoMovie(body) {
    const results = body.results;

    results.forEach((element, index) => {
        if (index < 20) {
            //Passo 1: preencher imagem e Título
            movie[index].setAttribute('data-id', element.id);
            movie[index].style.backgroundImage = `url('${element.poster_path}')`;
            movieTitle[index].textContent = element.title;


            //Passo 2: preencher avaliação
            movieRatingNumber[index] = document.createElement('p');
            movieRatingNumber[index].classList.add('movie__rating-number');
            movieRating[index].append(movieRatingNumber[index]);

            movieRatingNumber[index].textContent = results[index].vote_average;
        }
    });

}

//acessar API modal
function acessarApiModal(link, event) {
    fetch(link).then(function (response) {
        if (!response.ok) {
            console.log('ERRO');
            return;
        }

        const promiseBody = response.json();

        promiseBody.then(function (body) {
            mostrarModal(event);
        });
    });
}

//mostrar modal
function mostrarModal(event) {
    let idClicado;

    event.target.classList.contains('movie') ? idClicado = event.target.dataset.id : idClicado = movie[0].dataset.id;

    acessarApiComID(event, idClicado);
}

//acessar API com ID
function acessarApiComID(event, id) {
    let linkId;

    
    if (!event.target.classList.contains('input')) {
        linkId = `https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}?language=pt-BR`;
    } else {
        linkId = `https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${id}`;
    }

    fetch(linkId).then(function (response) {
        if (!response.ok) {
            console.log('ERRO');
            return;
        }
        
        const promiseBody = response.json();

        promiseBody.then(function (body) {
            if (!event.target.classList.contains('input')) {
                if (event.target.classList.contains('movie')) {
                    preencherModal(body);
                    return;
                }

                fecharModal();

                return;
            }

            buscarFilme(body);            
        });

        promiseBody.then(function (body) {
            movie.forEach(item => {
                item.addEventListener('click', function (event) {
                    modal.classList.remove('hidden');
                    root.style.overflow = 'hidden';
                    modal.style.overflowY = 'scroll';

                    acessarApiModal(linkApiSemID, event);
                });
            });

            modal.addEventListener('click', function (event) {
                fecharModal();
            });

            closeModal.addEventListener('click', function (event) {
                fecharModal();
            });
        });

    });
}

//preencher as informações do modal
function preencherModal(body) {
    body.title ? modalTitle.textContent = body.title : modalTitle.textContent = 'Título não registrado';    
    body.overview ? modalDescription.textContent = body.overview : modalDescription.textContent = 'O filme ainda não possui descrição!';
    body.vote_average ? modalAverage.textContent = body.vote_average : modalAverage.textContent = '-';
    body.backdrop_path ? modalImage.src = body.backdrop_path : modalImage.src.url = './assets/bloqueado.svg';

    if (body.genres[0].name) {

        if(modalGenre.length !== 0) {
            modalGenre.length = 0;
        }

        insertMovies(['modalGenre'], ['span'], ['modal__genre'], body.genres.length);
        modalGenre.forEach((item, index) => {
            if(index < body.genres.length) {
                item.textContent = body.genres[index].name
            }
        });

        modalGenre.forEach(item => {
           if(!item.textContent) {
               item.remove();
           } 
        });
    }
}

//fechar modal
function fecharModal() {
    modal.classList.add('hidden');
    root.style.overflow = 'auto';
    closeModal.classList.add('closeModal');

    const arrayModalGenre = document.querySelectorAll('.modal__genre');
    

    modalTitle.textContent = '';
    modalImage.src = '';
    modalDescription.textContent = '';
    modalAverage.textContent = '';
    
    arrayModalGenre.forEach(span => span.remove());

}

//procurar filmes
function buscarFilme(body) {
    insertMovies(newVar, elementType, newClass, body.results.length);
    infoMovie(body);
}

//mudar de página
function paginaAnterior() {
    let i = 0
    while (i < 4) {
        const singlePage = pages[i];

        if (!pages[i].classList.contains('hidden')) {
            singlePage.classList.add('hidden');

            i === 0 ? pages[pages.length - 1].classList.remove('hidden') : pages[i - 1].classList.remove('hidden');

            return;
        }

        i++;
    }
}

function proximaPagina() {
    let i = 0
    while (i < 4) {
        const singlePage = pages[i];

        if (!pages[i].classList.contains('hidden')) {
            singlePage.classList.add('hidden');

            i === pages.length - 1 ? pages[0].classList.remove('hidden') : pages[i + 1].classList.remove('hidden');

            return;
        }
        i++;
    }
}

//acessar API sem ID do HighLight
function acessarApiSemIDHighLight(linkGeral, linkVideo) {
    fetch(linkGeral).then(function (response) {
        if (!response.ok) {
            console.log('ERRO');
            return;
        }

        const promiseBody = response.json();

        promiseBody.then(function (body) {
            popularHighLightGeral(body);
        });
    });

    fetch(linkVideo).then(function (response) {
        if (!response.ok) {
            console.log('ERRO');
            return;
        }

        const promiseBody = response.json();

        promiseBody.then(function (body) {
            popularHighLightVideo(body);
        });
    });
}

//popular highlight geral
function popularHighLightGeral(body) {
    highLightMovie.style.background = `linear-gradient(rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%), url('${body.backdrop_path}')center/cover`;

    highLightTitle.textContent = body.title;
    highLightTitle.style.color = '#E183C8';

    highLightRating.textContent = body.vote_average;
    highLightRating.style.color = '#A785ED';

    highLightDescription.textContent = body.overview;


    const generosName = [];
    body.genres.map(genero => generosName.push(genero.name));
    highLightGenres.textContent = generosName.join(', ');
    highLightData.textContent = (`${body.release_date}`);


    const meses = ['janeiro', 'fevereiro', 'março',
        'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro',
        'outubro', 'novembro', 'dezembro'];

    const dataManipulada = (highLightData.textContent);
    const arrayData = dataManipulada.split('-').reverse();
    arrayData.splice(1, 0, 'de');
    arrayData.splice(3, 0, 'de');

    const arrayMes = Number(arrayData[2]);
    arrayData.splice(2, 1, meses[arrayMes - 1]);
    highLightData.textContent = arrayData.join(' ');
}

//popular highlight video
function popularHighLightVideo(body) {
    const linkYouTube = "https://www.youtube.com/watch?v=";
    const keyValue = body.results[0].key;

    highLightLinkVideo.href = linkYouTube + keyValue;
}

//mudar o tema
function mudarTema() {
    !temaInicial || temaInicial === 'claro' ? temaButton.src = './assets/light-mode.svg' : temaButton.src = './assets/dark-mode.svg';

    !temaInicial || temaInicial === 'claro' ? setaVoltar.src = './assets/seta-esquerda-preta.svg' : setaVoltar.src = './assets/seta-esquerda-branca.svg';

    !temaInicial || temaInicial === 'claro' ? setaIr.src = './assets/seta-direita-preta.svg' : setaIr.src = './assets/seta-direita-branca.svg';

    !temaInicial || temaInicial === 'claro' ? root.style.setProperty('--cor-de-fundo', '#FDFDFD') : root.style.setProperty('--cor-de-fundo', '#000');

    !temaInicial || temaInicial === 'claro' ? highLightInfo.style.setProperty('--cor-de-fundo-highlight', '#FFFFFF') : highLightInfo.style.setProperty('--cor-de-fundo-highlight', '#454545');

    !temaInicial || temaInicial === 'claro' ? highLightInfo.style.setProperty('--cor-de-borda-highlight', 'rgba(0, 0, 0, 0.15)') : highLightInfo.style.setProperty('--cor-de-borda-highlight', 'rgba(255, 255, 255, 0.15)');

    !temaInicial || temaInicial === 'claro' ? inputSearch.style.setProperty('--cor-de-borda-highlight', '#979797') : inputSearch.style.setProperty('--cor-de-borda-highlight', '#FFFFFF');

    !temaInicial || temaInicial === 'claro' ? movie.forEach(item => item.style.setProperty('--cor-de-borda-highlight', '#979797')) : movie.forEach(item => item.style.setProperty('--cor-de-borda-highlight', '#FFFFFF'));

    !temaInicial || temaInicial === 'claro' ? highLightSubtitle.style.setProperty('--cor-de-texto', '#000') : highLightSubtitle.style.setProperty('--cor-de-texto', '#FFFFFF');

    !temaInicial || temaInicial === 'claro' ? highLightGenreLaunch.style.setProperty('--cor-de-texto', '#000') : highLightGenreLaunch.style.setProperty('--cor-de-texto', '#FFFFFF');

    !temaInicial || temaInicial === 'claro' ? highLightDescription.style.setProperty('--cor-de-texto', '#000') : highLightDescription.style.setProperty('--cor-de-texto', '#FFFFFF');


    temaButton.addEventListener('click', function () {
        temaButton.src.includes('light') ? temaButton.src = './assets/dark-mode.svg' : temaButton.src = './assets/light-mode.svg';


        temaButton.src.includes('dark') ? setaVoltar.src = './assets/seta-esquerda-branca.svg' : setaVoltar.src = './assets/seta-esquerda-preta.svg';

        temaButton.src.includes('dark') ? setaIr.src = './assets/seta-direita-branca.svg' : setaIr.src = './assets/seta-direita-preta.svg';

        temaButton.src.includes('dark') ? localStorage.setItem('.btn-theme', 'escuro') : localStorage.setItem('.btn-theme', 'claro');

        temaButton.src.includes('dark') ? root.style.setProperty('--cor-de-fundo', '#000') : root.style.setProperty('--cor-de-fundo', '#FDFDFD');

        temaButton.src.includes('dark') ? highLightInfo.style.setProperty('--cor-de-fundo-highlight', '#454545') : highLightInfo.style.setProperty('--cor-de-fundo-highlight', '#FFFFFF');

        temaButton.src.includes('dark') ? highLightInfo.style.setProperty('--cor-de-borda-highlight', 'rgba(255, 255, 255, 0.15)') : highLightInfo.style.setProperty('--cor-de-borda-highlight', 'rgba(0, 0, 0, 0.15)');

        temaButton.src.includes('dark') ? inputSearch.style.setProperty('--cor-de-borda-highlight', '#FFFFFF') : inputSearch.style.setProperty('--cor-de-borda-highlight', '#979797');

        temaButton.src.includes('dark') ? movie.forEach(item => item.style.setProperty('--cor-de-borda-highlight', '#FFFFFF')) : movie.forEach(item => item.style.setProperty('--cor-de-borda-highlight', '#FFFFFF'));

        temaButton.src.includes('dark') ? highLightSubtitle.style.setProperty('--cor-de-texto', '#FFFFFF') : highLightSubtitle.style.setProperty('--cor-de-texto', '#000');

        temaButton.src.includes('dark') ? highLightGenreLaunch.style.setProperty('--cor-de-texto', '#FFFFFF') : highLightGenreLaunch.style.setProperty('--cor-de-texto', '#000');

        temaButton.src.includes('dark') ? highLightDescription.style.setProperty('--cor-de-texto', '#FFFFFF') : highLightDescription.style.setProperty('--cor-de-texto', '#000');
    });
}