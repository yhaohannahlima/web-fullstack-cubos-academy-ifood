/*----------------------MODIFICANDO AS VARIÁVEIS CSS PELO DOM------------------------*/
// const body = document.querySelector('body');
// const themeButton = document.querySelector('.light');

// body.style.setProperty('--cor-de-fundo', '#FFF');
// body.style.setProperty('--cor-de-texto', '#000');

// themeButton.addEventListener('click', function () {
//     themeButton.textContent = themeButton.textContent === '🌞' ? '🌛' : '🌞';
    
//     const novaCorDeFundo = body.style.getPropertyValue('--cor-de-fundo') === '#000' ? '#FFF' : '#000';
//     body.style.setProperty('--cor-de-fundo', novaCorDeFundo);
    
//     const novaCorDeTexto = body.style.getPropertyValue('--cor-de-texto') === '#000' ? '#FFF' : '#000';
//     body.style.setProperty('--cor-de-texto', novaCorDeTexto);
// });


/*----------------------------------LOCAL SOTORAGE-----------------------------------*/
// const body = document.querySelector('body');
// const themeButton = document.querySelector('.light');

// const temaInicial = localStorage.getItem('tema');

// themeButton.textContent = temaInicial === 'claro' ? '🌞' : '🌛';
// body.style.setProperty('--cor-de-fundo', temaInicial === 'claro' ? '#FFF' : '#000');
// body.style.setProperty('--cor-de-texto', temaInicial === 'claro' ? '#000' : '#FFF');

// themeButton.addEventListener('click', function () {
//     themeButton.textContent = themeButton.textContent === '🌞' ? '🌛' : '🌞';

//     localStorage.setItem('tema', temaInicial === 'claro' ? 'escuro' : 'claro');
    
//     const novaCorDeFundo = body.style.getPropertyValue('--cor-de-fundo') === '#000' ? '#FFF' : '#000';
//     body.style.setProperty('--cor-de-fundo', novaCorDeFundo);
    
//     const novaCorDeTexto = body.style.getPropertyValue('--cor-de-texto') === '#000' ? '#FFF' : '#000';
//     body.style.setProperty('--cor-de-texto', novaCorDeTexto);
// });

