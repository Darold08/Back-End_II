const express = require('express');
const colecaoLivros = require('./dados/dados.js');


const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoLivros.colecaoLivros);
});

