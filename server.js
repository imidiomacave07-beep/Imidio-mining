const express = require('express');
const app = express();

// Porta que o Render define
const PORT = process.env.PORT || 3000;

// Rota raiz
app.get('/', (req, res) => {
  res.send('Olá, mundo! Seu app está rodando no Render 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
