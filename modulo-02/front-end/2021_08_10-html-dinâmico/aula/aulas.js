/*-------------------------------POPULANDO A PÁGINA----------------------------------*/
// const users = document.querySelectorAll('.user');

// fetch('http://jsonplaceholder.typicode.com/users').then(function (resposta) {
//     const promiseBody = resposta.json();

//     promiseBody.then(function (body) {
//         users.forEach(function (user, index) {
//             const name = user.querySelector('h1');
//             const username = user.querySelector('.username');
//             const email = user.querySelector('.email');

//             name.textContent = body[index].name;
//             username.textContent = body[index].username;
//             email.textContent = body[index].email;
//         })
//     })
// })


/*-------------------------CRIANDO E ADICIONANDO ELEMENTOS---------------------------*/
// const root = document.querySelector('body');

// fetch('http://jsonplaceholder.typicode.com/users').then(function (resposta) {
//     const promiseBody = resposta.json();

//     promiseBody.then(function (body) {
//         body.forEach(function (user) {
//             const div = document.createElement('div');
//             div.classList.add('user');

//             const name = document.createElement('h1');
//             name.textContent = user.name;

//             const username = document.createElement('p');
//             username.textContent = user.username;

//             const email = document.createElement('p');
//             email.textContent = user.email;

//             div.append(name, username, email);

//             root.append(div);
//         });
//     })
// })


/*------------------------------GERENCIADOR DE TAREFAS-------------------------------*/
// const input = document.querySelector('input');
// const tarefas = document.querySelector('ul');

// input.addEventListener('keydown', function (event) {
//     if (event.key !== 'Enter' || input.value === '') return;
    
//     const tarefa = document.createElement('li');
//     tarefa.textContent = input.value;

//     tarefas.append(tarefa);
    
//     input.value = '';
// }); 


/*--------------------------REMOVENDO ELEMENTOS DA PÁGINA----------------------------*/
// const input = document.querySelector('input');
// const tarefas = document.querySelector('ul');

// input.addEventListener('keydown', function (event) {
//     if (event.key !== 'Enter' || input.value === '') return;
    
//     const tarefa = document.createElement('li');
//     tarefa.textContent = input.value;

//     tarefa.addEventListener('click', function () {
//         tarefa.remove();
//     }); 

//     tarefas.append(tarefa);
    
//     input.value = '';
// }); 