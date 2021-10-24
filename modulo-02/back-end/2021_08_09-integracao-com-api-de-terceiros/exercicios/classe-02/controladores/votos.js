const fs = require('fs/promises');
const axios = require('axios');

async function verificarLocalizacao(req, res) {
    const ipDoUsuario = req.params.ip;
    const votoDoUsuario = req.body.voto;
    let paisDoUsuario = req.params.pais;
    let pedido;

    if (votoDoUsuario || typeof votoDoUsuario !== 'boolean') {
        res.status(400);
        res.json(
            {
                error: `Um valor válido deve ser informado na propriedade 'voto', no corpo da requisição. Como valor válido considere 'true' ou 'false'.`
            });
    }

    try {
        pedido = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=31d8101e9dba4dff8f30459e0c80d04e&ip_address=${ipDoUsuario}`);

    } catch (error) {
        res.status(400).json({ mensagem: "Deve ser informado um endereço IP válido no parâmetro 'ip'." });
        return;
    }

    if (pedido.data) {
        const pais = await pedido.data.country;

        if (paisDoUsuario.includes('_')) {
            paisDoUsuario = paisDoUsuario.split('_').join(' ');
        }

        if (pais !== paisDoUsuario) {
            res.status(400);
            res.json({
                error: 'O endereço de IP enviado não coincide com o país da votação.'
            });
            return;
        }

        const voto = JSON.parse(await fs.readFile('./dados/votos.json'));
        voto.push({
            ip: ipDoUsuario,
            voto: votoDoUsuario,
        });

        await fs.writeFile('./dados/votos.json', JSON.stringify(voto, null, 2));

        res.status(200);
        res.json(voto);
    }
}

module.exports = {
    verificarLocalizacao
}

