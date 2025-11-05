// Carregar variáveis do .env
require('dotenv').config();

const express = require('express');
const app = express();

// Pegar a porta do .env ou usar 10000 como padrão
const PORT = process.env.PORT || 10000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor Imidio Mining rodando com sucesso! 🚀');
});

// Exemplo de rota para testar API_KEY
app.get('/api', (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    environment: process.env.NODE_ENV
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
