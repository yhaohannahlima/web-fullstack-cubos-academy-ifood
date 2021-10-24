const root = document.querySelector('body');

fetch('http://jsonplaceholder.typicode.com/albums/1/photos').then(function (resposta) {
    const promisebody = resposta.json();

    promisebody.then(function (body) {
        body.forEach(function (id) {
            const div = document.createElement('div');
            div.classList.add('user');

            const img = document.createElement('img');
            img.src = id.url;

            const titulo = document.createElement('p');
            titulo.textContent = id.title;

            div.append(img, titulo);

            root.append(div);
        });
    });
});