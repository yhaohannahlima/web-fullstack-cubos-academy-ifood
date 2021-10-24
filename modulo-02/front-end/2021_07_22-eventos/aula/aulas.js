/*---------------------------------IMPORTANDO SCRIPTS--------------------------------*/
// const h1 = document.querySelector('h1');
// console.log(h1.textContent);


/*---------------------------------EVENTO DE CLIQUE----------------------------------*/
// const alerta = document.querySelector('.alerta');

// function mostrarAlerta() {
//     alerta.classList.remove('escondida');
// }

// function esconderAlerta() {
//     alerta.classList.add('escondida');
// }


/*-------------------------EVENTO DE TECLA E OBJETO DE EVENTOS-----------------------*/
// const input = document.querySelector('input');
// const frutas = document.querySelectorAll('li');

// function buscarFruta(event) {
//     if (event.code === 'Enter') {
//         frutas.forEach(fruta => {
//             fruta.classList.remove('escondido');

//             if (input.value && fruta.textContent !== input.value) {
//                 fruta.classList.add('escondido');
//             }
//         });

//         input.value = '';
//     }
// }


/*-----------------------------TARGET E MÚLTIPLOS EVENTOS----------------------------*/
// const inputs = document.querySelectorAll('input');
// const frutas = document.querySelectorAll('li');

// inputs.forEach(input => {
//     input.addEventListener('keydown', function (event) {
//         if (!teclouEnter(event.code)) {
//             return;
//         }

//         filtrarLista(frutas, event.target.value);
//     });

//     input.addEventListener('keydown', function (event) {
//         if (!teclouEnter(event.code)) {
//             return;
//         }

//         limparInput(event.target);
//     });   
// });

// function teclouEnter(tecla) {
//     return tecla === 'Enter';
// }

// function filtrarLista(lista, filtro) {
//     lista.forEach(item => {
//         item.classList.remove('escondido');
    
//         if (filtro && item.textContent !== filtro) {
//             item.classList.add('escondido');
//         }
//     });
// }

// function limparInput(input) {
//     input.value = '';
// }

/*--------------------------------------------------------------------------------
// OUTRA FORMA DE FAZER
const frutas = document.querySelectorAll('li');

function buscarFruta(event) {
    if (!teclouEnter(event.code)) {
        return;
    }
    
    filtrarLista(frutas, event.target.value);
    
    limparInput(event.target);
}

function teclouEnter(tecla) {
    return tecla === 'Enter';
}

function filtrarLista(lista, filtro) {
    lista.forEach(item => {
        item.classList.remove('escondido');
    
        if (filtro && item.textContent !== filtro) {
            item.classList.add('escondido');
        }
    });
}

function limparInput(input) {
    input.value = '';
}


// OUTRA FORMA DE FAZER
const inputs = document.querySelectorAll('input');
const frutas = document.querySelectorAll('li');

inputs.forEach(input => {
    input.addEventListener('keydown', buscarFruta);
});

function buscarFruta(event) {
    if (!teclouEnter(event.code)) {
        return;
    }
    
    filtrarLista(frutas, event.target.value);
    
    limparInput(event.target);
}

function teclouEnter(tecla) {
    return tecla === 'Enter';
}

function filtrarLista(lista, filtro) {
    lista.forEach(item => {
        item.classList.remove('escondido');
    
        if (filtro && item.textContent !== filtro) {
            item.classList.add('escondido');
        }
    });
}

function limparInput(input) {
    input.value = '';
}
*/


/*-------------------------EVENTO DE CHANGE E DATA ATTRIBUTES------------------------*/
// const inputs = document.querySelectorAll('input');

// inputs.forEach(input => {
//     input.addEventListener('change', function (event) {
//         const inputModificado = event.target;

//         if (inputModificado.dataset.resposta === inputModificado.value) {
//             inputModificado.classList.add('acerto');
//         }
//     })
// });


/*-------------------------------REMOVENDO OUVINTES----------------------------------*/
// const botaoInscrever = document.querySelector('.btn');
// const botoesModal = document.querySelectorAll('.modal button');
// const botaoConfirmar = document.querySelector('.confirmar');
// const modal = document.querySelector('.modal');

// botaoInscrever.addEventListener('click', inscrever);

// botoesModal.forEach(botao => {
//     botao.addEventListener('click', function () {
//         modal.classList.add('escondido');
//     }) 
// });

// botaoConfirmar.addEventListener('click', function () {
//     botaoInscrever.textContent = 'INSCREVER-SE';
//     botaoInscrever.classList.remove('inscrito');

//     botaoInscrever.addEventListener('click', inscrever);
// });

// function inscrever(event) {
//     const botaoClicado = event.target;

//     botaoClicado.textContent = 'INSCRITO';
//     botaoClicado.classList.add('inscrito');

//     botaoClicado.removeEventListener('click', inscrever);

//     botaoClicado.addEventListener('click', function () {
//         modal.classList.remove('escondido');
//     });
// }