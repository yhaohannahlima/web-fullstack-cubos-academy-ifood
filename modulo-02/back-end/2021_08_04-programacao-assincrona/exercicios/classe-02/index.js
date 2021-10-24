const fs = require('fs/promises');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.get('/enderecos/:cep', async (req, res) => {
    const cep = req.params.cep;

    const enderecos = JSON.parse(await fs.readFile('enderecos.json'));

    const cepComTraco = `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;

    const enderecoCep = enderecos.find(item => item.cep === cepComTraco);

    if (enderecoCep) {
        return res.json(enderecoCep);
    }

    const { data: enderecoViaCep } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (enderecoViaCep) {
        if (!enderecoViaCep.erro) {
            enderecos.push(enderecoViaCep);

            await fs.writeFile('enderecos.json', JSON.stringify(enderecos, null, 2));
        }
    } else {
        return res.json(
            {
                mensagem: 'Cep não encontrado.'
            })
    }

    res.json(enderecoViaCep);
});

app.listen(8000);

