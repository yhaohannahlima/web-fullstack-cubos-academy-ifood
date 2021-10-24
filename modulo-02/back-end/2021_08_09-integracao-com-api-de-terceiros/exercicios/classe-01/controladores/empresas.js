const fs = require('fs/promises');
const axios = require('axios');

async function obterEmpresa(req, res) {
    const dominioEmpresa = req.params.dominioEmpresa;

    const pedido = await axios.get(`https://companyenrichment.abstractapi.com/v1/?api_key=&domain=${dominioEmpresa}`);


    if (pedido.data && pedido.data.name) {
        const empresasArmazenadas = JSON.parse(await fs.readFile('./dados/empresas.json'));

        const empresa = empresasArmazenadas.find(item => item.domain === dominioEmpresa);

        if (empresa) {
            return res.json(pedido.data);
        }

        empresasArmazenadas.push(pedido.data);

        fs.writeFile('./dados/empresas.json', JSON.stringify(empresasArmazenadas, null, 2));

        res.json(pedido.data);
    } else {
        res.status(500);
        res.json(
            {
                mensagem: 'A requisição não pode ser completada.'
            });
    } 

}

module.exports = { obterEmpresa }


