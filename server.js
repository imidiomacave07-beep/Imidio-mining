// server.js
const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal ("/")
app.get('/', (req, res) => {
  // Log para debug no Render
  console.log('Rota / acessada — servindo public/index.html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check simples (útil para plataformas que fazem probe)
app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

// Porta dinâmica (Render define via process.env.PORT)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
