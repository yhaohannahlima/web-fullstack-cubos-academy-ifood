const { banco, contas, saques, depositos, transferencias } = require('../bancodedados');
const { validarConta, validarAtualizacaoDeConta, validarSenhaESaldo, validarSaldoEExtrato, identificarConta, error400, error404 } = require('./funcoes');

//listar contas bancárias
async function consultarConta(req, res) {
    const senhaExiste = req.query.senha_banco;

    if (req.url !== `/contas?senha_banco=${senhaExiste}`) {
        res.status(400);
        res.json({ mensagem: 'A senha do banco não foi informada.' });
        return;
    }

    if (senhaExiste !== banco.senha) {
        res.status(400);
        res.json({ mensagem: 'Senha incorreta.' });
        return;
    }

    res.status(200);
    res.json(contas);
}

//criar contas bancárias
let novoId = contas.length;

async function criarConta(req, res) {
    novoId = novoId + 1;

    const erro400 = await validarConta(req.body);
    if (erro400) { await error400(erro400, res); return; }

    const novaConta = {
        numero: `${novoId}`,
        saldo: 0,
        usuario: {
            nome: req.body.nome,
            cpf: req.body.cpf,
            data_nascimento: req.body.data_nascimento,
            telefone: `${req.body.telefone}`,
            email: req.body.email,
            senha: req.body.senha
        }
    }

    contas.push(novaConta);

    res.status(201);
    res.json(contas);
}

//atualizar contas bancárias
async function atualizarUsuarioConta(req, res) {
    const conta = contas.find(conta => Number(conta.numero) === Number(req.params.numeroConta));
    const erro404 = await identificarConta(req.params.numeroConta, conta);
    if (erro404) { await error404(erro404, res); return; }

    const erro400 = await validarAtualizacaoDeConta(req.body);
    if (erro400) { await error400(erro400, res); return; }

    if (req.body.telefone) {
        req.body.telefone = `${req.body.telefone}`;
    }

    conta.usuario.nome = req.body.nome ?? conta.usuario.nome;
    conta.usuario.cpf = req.body.cpf ?? conta.usuario.cpf;
    conta.usuario.data_nascimento = req.body.data_nascimento ?? conta.usuario.data_nascimento;
    conta.usuario.telefone = req.body.telefone ?? conta.usuario.telefone;
    conta.usuario.email = req.body.email ?? conta.usuario.email;
    conta.usuario.senha = req.body.senha ?? conta.usuario.senha;

    res.status(200);
    res.json({ mensagem: "Conta atualizada com sucesso!" });
}

//deletar contas bancárias
async function excluirConta(req, res) {
    const conta = contas.find(conta => Number(conta.numero) === Number(req.params.numeroConta));
    const erro404 = await identificarConta(req.params.numeroConta, conta);
    if (erro404) { await error404(erro404, res); return; }

    if (conta.saldo !== 0) {
        res.status(400);
        res.json(
            {
                mensagem: "A conta de número '" + req.params.numeroConta + "' não pode ser excluída, pois não possui saldo igual a zero."
            }
        );
        return;
    }

    const indice = contas.findIndex(item => item === conta);

    contas.splice(indice, 1);

    res.status(200);
    res.json(
        {
            mensagem: "Conta excluída com sucesso!"
        }
    )
}

//consultar saldo bancário
async function saldo(req, res) {
    const erro400 = await validarSaldoEExtrato(req.query.numero_conta, req.query.senha);
    if (erro400) { await error400(erro400, res); return; }

    const conta = contas.find(conta => Number(conta.numero) === Number(req.query.numero_conta));
    const erro404 = await identificarConta(req.query.numero_conta, conta);
    if (erro404) { await error404(erro404, res); return; }

    const erro400Senha = await validarSenhaESaldo(req.query.senha, conta.usuario.senha);
    if (erro400Senha) { await error400(erro400Senha, res); return; }

    res.status(200);
    res.json(
        {
            saldo: conta.saldo
        }
    );
}

//consultar extrato bancário 
async function extrato(req, res) {
    const erro400 = await validarSaldoEExtrato(req.query.numero_conta, req.query.senha);
    if (erro400) { await error400(erro400, res); return; }

    const conta = contas.find(conta => Number(conta.numero) === Number(req.query.numero_conta));
    const erro404 = await identificarConta(req.query.numero_conta, conta);
    if (erro404) { await error404(erro404, res); return; }

    const erro400Senha = await validarSenhaESaldo(req.query.senha, conta.usuario.senha);
    if (erro400Senha) { await error400(erro400Senha, res); return; }

    const depositosConta = depositos.filter(deposito => deposito.numero_conta === conta.numero);
    const saquesConta = saques.filter(saque => saque.numero_conta === conta.numero);
    const transferenciasEnviadasConta = transferencias.filter(transferencia => transferencia.numero_conta_origem === conta.numero);
    const transferenciasRecebidasConta = transferencias.filter(transferencia => transferencia.numero_conta_destino === conta.numero);

    res.status(200);
    res.json(
        {
            depositos: depositosConta,
            saques: saquesConta,
            transferenciasEnviadas: transferenciasEnviadasConta,
            transferenciasRecebidas: transferenciasRecebidasConta
        }
    );
}

module.exports = {
    consultarConta,
    criarConta,
    atualizarUsuarioConta,
    excluirConta,
    saldo,
    extrato
}