const { contas, depositos, saques, transferencias } = require('../bancodedados');
const { validarTransacoes, validarSenhaESaldo, identificarConta, formatarData, error400, error404 } = require('./funcoes');

//depositos
async function depositar(req, res) {
    const erro400 = await  validarTransacoes(req.body.numero, req.body.valor);
    if (erro400) { await error400(erro400, res); return; }

    const conta = contas.find(conta => Number(conta.numero) === Number(req.body.numero));
    const erro404 = await identificarConta(req.body.numero, conta);
    if (erro404) { await error404(erro404, res); return; }

    conta.saldo = conta.saldo + req.body.valor;

    depositos.push(
        {
            data: await formatarData(),
            numero_conta: `${req.body.numero}`,
            valor: req.body.valor
        }
    );

    res.status(200);
    res.json(
        {
            mensagem: "Depósito realizado com sucesso!"
        }
    );
}

//saques
async function sacar(req, res) {
    const erro400 = await validarTransacoes(req.body.numero, req.body.valor);
    if (erro400) { await error400(erro400, res); return; }

    const conta = contas.find(conta => Number(conta.numero) === Number(req.body.numero));
    const erro404 = await identificarConta(req.body.numero, conta);
    if (erro404) { await error404(erro404, res); return; }

    const erro400Senha = await validarSenhaESaldo(req.body.senha, conta.usuario.senha, conta.saldo, req.body.valor);
    if (erro400Senha) { await error400(erro400Senha, res); return; }

    conta.saldo = conta.saldo - req.body.valor;

    saques.push(
        {
            data: await formatarData(),
            numero_conta: `${req.body.numero}`,
            valor: req.body.valor
        }
    );

    res.status(200);
    res.json(
        {
            mensagem: "Saque realizado com sucesso!"
        }
    );
}

//transferências
async function transferir(req, res) {
    let erro400 = await validarTransacoes(req.body.numero_conta_origem, req.body.valor);
    if (erro400 === "O campo 'numero' é obrigatório.") {
        erro400 = "O campo 'numero_conta_origem' é obrigatório.";
    }
    if (erro400) { await error400(erro400, res); return; }

    if (!req.body.numero_conta_destino) {
        res.status(400);
        res.json(
            {
                mensagem: "O campo 'numero_conta_destino' é obrigatório."
            }
        );
        return;
    }

    const contaOrigem = contas.find(conta => Number(conta.numero) === Number(req.body.numero_conta_origem));   
    const erro404contaOrigem = await identificarConta(req.body.numero_conta_origem, contaOrigem);
    if (erro404contaOrigem) { await error404(erro404contaOrigem, res); return; }

    const contaDestino = contas.find(conta => Number(conta.numero) === Number(req.body.numero_conta_destino));
    const erro404contaDestino = await identificarConta(req.body.numero_conta_destino, contaDestino);
    if (erro404contaDestino) { await error404(erro404contaDestino, res); return; }

    const erro400Senha = await validarSenhaESaldo(req.body.senha, contaOrigem.usuario.senha, contaOrigem.saldo, req.body.valor);
    if (erro400Senha) { await error400(erro400Senha, res); return; }

    contaOrigem.saldo = contaOrigem.saldo - req.body.valor;
    contaDestino.saldo = contaDestino.saldo + req.body.valor;

    transferencias.push(
        {
            data: await formatarData(),
            numero_conta_origem: `${req.body.numero_conta_origem}`,
            numero_conta_destino: `${req.body.numero_conta_destino}`,
            valor: req.body.valor
        }
    );

    res.status(200);
    res.json(
        {
            mensagem: "Transferência realizada com sucesso!"
        }
    );
}

module.exports = {
    depositar,
    sacar,
    transferir
}