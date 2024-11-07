import express from 'express';
import {buscar, buscarPorAno, buscarPorId} from './servicos/servico.js';

const app = express();

app.get('/historicoIPCA', (req, res) => {
    const anoIpca = req.query.busca;
    const resultado = anoIpca ? buscarPorAno(anoIpca) : buscar();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro": "Nenhuma IPCA encontrada!"});
    }
});

app.get('/historicoIPCA/:idipca', (req, res) => {
    const ipca = buscarPorId(req.params.idipca);

    if (ipca) {
        res.json(ipca);
    } else if (isNaN(parseInt(req.params.idipca))){
        res.status(404).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro": "IPCA não encontrada" });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});