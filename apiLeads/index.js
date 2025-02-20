import cors from 'cors';
import express from 'express';
import { cadastraLead } from './servico/cadastro_servico.js';
import { validaEmail, validaNome, validaTelefone, validaUsuario } from './validacao/valida.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const { nome, telefone, email } = req.body;

    const usuarioValido = validaUsuario(nome, email);
    if (usuarioValido.status) {
        await cadastraUsuario(nome, email);
        res.status(204).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem});
    }

    if (!validaNome(nome)) {
        return res.status(400).send('Nome inválido! Deve ter pelo menos 2 caracteres.');
    } 
    if (!validaEmail(email)) {
        return res.status(400).send('E-mail inválido! Formato esperado: email@provedor.com');
    } 
    if (!validaTelefone(telefone)) {
        return res.status(400).send('Telefone inválido! Formato esperado: (XX) XXXXX-XXXX');
    } 

    try {
        const resultado = await cadastraLead(nome, email, telefone);
        if (resultado.affectedRows > 0) {
            return res.status(201).send('Registro criado com sucesso!');
        } 
        return res.status(400).send('Erro ao cadastrar usuário!');

    } catch (error) {
        console.error("Erro ao inserir no banco:", error);
        return res.status(500).send('Erro interno no servidor.');
    }
});


app.listen(9000, async () => {
    const data = new Date();
    console.log('Servidor node iniciado em: ' + data);
})