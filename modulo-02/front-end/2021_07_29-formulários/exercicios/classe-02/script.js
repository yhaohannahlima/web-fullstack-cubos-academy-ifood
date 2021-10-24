const formulario = document.querySelector('form');
const inputSenha = document.querySelector('#senha');
const inputConfirmeSenha = document.querySelector('#confirmar-senha');
const select = document.querySelector('select');

const arrayEstados = [

    'Acre - AC', 'Alagoas - AL', 'Amapá - AP', 'Amazonas - AM', 'Bahia - BA', 'Ceará - CE', 'Distrito Federal - DF', 'Espírito Santo - ES', 'Goiás - GO', 'Maranhão - MA',
    'Mato Grosso - MT', 'Mato Grosso do Sul - MS', 'Minas Gerais - MG', 'Pará - PA',
    'Paraíba - PB', 'Paraná - PR', 'Pernambuco - PE', 'Piauí - PI', 'Rio de Janeiro - RJ',
    'Rio Grande do Norte - RN', 'Rio Grande do Sul - RS', 'Rondônia - RO', 'Roraima - RR', 'Santa Catarina - SC', 'São Paulo - SP', 'Sergipe - SE', 'Tocantins - TO'
];

arrayEstados.forEach(item => {
    select.appendChild(new Option(item, item.toLowerCase()));
});

formulario.addEventListener('submit', function (event) {
    if (inputConfirmeSenha.value !== inputSenha.value || select.value === 'Estados') {
        event.preventDefault();
    }
});








