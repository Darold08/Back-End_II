import express from 'express';
import { retornaCampeonatos, retornaCampeonatosID} from './servico/retornaCampeonatos_servico.js';
// import pool from './servico/conexao.js';

const app = express();

app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos();
    res.json(campeonatos);
})

app.listen(9000, () => {
    const data = new Date();
    console.log("Servidor node iniciado em: "+data);

    // const conexao = await pool.getConnection();

    // console.log(conexao.threadId);

    // conexao.release();
})

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonato = await retornaCampeonatosID(id);
    res.json(campeonato);
})


