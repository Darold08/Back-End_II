const express = require('express');
const colecaoNomesDeLivros = require('./dados/dados.js');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoNomesDeLivros.colecaoNomesDeLivros);
});

